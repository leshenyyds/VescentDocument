# C++ 代码规范

> **矢量上行工作室** C++代码规范准则V1

---

## 类型命名

### 类（Class）

| 类型 | 规则 | 示例 |
|------|------|------|
| UObject 派生类 | `U` 前缀 + 大驼峰 | `UPlayerSettings`、`UItemManager` |
| Actor 派生类 | `A` 前缀 + 大驼峰 | `APlayerCharacter`、`AEnemySlime` |
| 接口类 | `I` 前缀 + 大驼峰 | `IDamageable`、`IInteractable` |
| Slate UI 控件 | `S` 前缀 + 大驼峰 | `SCustomButton`、`SMainMenu` |
| 工具类 | 大驼峰 + `Utilities` 后缀 | `MathUtilities` |
| 管理类 | 大驼峰 + `Manager` 后缀 | `GameStateManager` |
| 工厂类 | 大驼峰 + `Factory` 后缀 | `ActorFactory` |
| 模板类 | `T` 前缀 + 大驼峰 | `TArray<AActor*>` |

- **名称应描述职责，而非实现细节。**

> 推荐：`UPlayerPaperCharacter`、`UEnemySlimeActor`、`UItemPickupComponent`
>
> 避免：`player`、`Slime_Enemy`、`UtestSprite`（大小写与语义不规范）

### 枚举（Enum）

- **POD 枚举**：`E` 前缀 + 大驼峰，如 `ECombatState`。
- **非 POD 枚举**：大驼峰即可。
- **枚举值**：`枚举类型名_具体值`，段与段之间仍用大驼峰。

```cpp
enum class EItemType : uint8
{
    EItemType_Weapon,
    EItemType_Consumable,
    EItemType_Material,
};
```

### 结构体（Struct）

- **POD（接受反射）**：
  - 纯数据结构：`F` + 实体名（大驼峰）+ `Info`，如 `FEnemyInfo`
  - 配置参数结构：`F` + 大驼峰 + `Config`，如 `FCharacterConfig`
- **非 POD（不接受反射）**：大驼峰即可，如 `InnerShapeInfo`

---

## 变量命名

### 全局变量

| 类别 | 规则 | 示例 |
|------|------|------|
| 普通全局变量 | `g` + 大驼峰 | `gGameTime`、`gPlayerCount` |
| 常量全局变量 | `k` + 大驼峰 **或** 全大写 + `_` | `kMaxHealth`、`MAX_PATH_LENGTH` |

> 注意：全大写下划线仅用于通用常量（如 `INDEX_NONE = -1`）或宏常量（`#define MAX_PATH_LENGTH 260`）。

### 静态变量

| 类别 | 规则 | 示例 |
|------|------|------|
| 静态全局变量（文件作用域） | `s` + 大驼峰 | `sGlobalGameConfig` |
| 静态局部变量（函数作用域） | `fs` + 大驼峰 | `fsCacheData` |

### 局部变量与函数参数

| 类别 | 规则 | 示例 |
|------|------|------|
| 函数输入参数 | `in` + 大驼峰 | `inTargetActor`、`inDamageValue` |
| 函数输出参数 | `out` + 大驼峰 | `outResult`、`outFinalPosition` |
| 函数内局部变量 | 小驼峰 | `tempDamage`、`spriteWidget` |

### 普通类成员变量

- 规则：**小驼峰**。

> 示例：`currentHP`、`spriteFlipbook`、`targetEnemyActor`

### 特殊类型变量

| 类型 | 规则 | 示例 |
|------|------|------|
| 传统指针 | `p` + 大驼峰 | `pPlayerRef`、`pItemData` |
| 智能指针（共享） | 小驼峰 + `SPtr` | `heroSPtr`、`enemySPtr` |
| 弱引用指针 | 小驼峰 + `WPtr` | `cacheWPtr` |
| 布尔变量 | `b` + 状态词（`bIs`、`bHas`、`bShould`、`bCan`） | `bIsAlive`、`bHasTarget`、`bCanAttack` |
| 定时器变量 | 小驼峰 + `Timer` | `attackTimer`、`cooldownTimer` |
| 异步任务变量 | 小驼峰 + `AsyncTask` | `loadAssetAsyncTask` |
| 协程句柄 | 小驼峰 + `Coroutine` | `fadeCoroutine` |
| 委托变量 | `On` + 大驼峰 + `Delegate` | `OnHealthChangedDelegate` |
| 日志分类 | `LOG_` + 大驼峰 | `LOG_Combat`、`LOG_UI` |
| 调试标记 | 前缀（可选） + `Debug` + 大驼峰 | `bDebugDrawCollision`、`EDebugLevel`、`DebugTipText` |
| Lambda 捕获变量 | 遵循局部变量规则，小驼峰 | `auto OnLoaded = [this, targetActor]() { ... };` |

---

## 函数命名

- 规则：**小驼峰**
- 函数命名组成：**冠缀** + **函数名** + **后缀**
- 静态成员函数与普通成员函数命名一致。

**冠缀：**

| 冠缀 | 含义 |
|------|------|
| **无** | 无联机模式，在所有端执行 |
| **server** | 在服务器上运行 |
| **client** | 在客户端上运行 |
| **multicast** | 广播到服务器与所有客户端 |

**后缀：**

| 后缀 | 含义 | 示例 |
|------|------|------|
| **无** | 普通函数，无特殊后缀 | `getMaxHealth()` |
| `_DEPRECATED` | 废弃或已过时 | `getMaxHealth_DEPRECATED()` |
| `Ex` / `Ex2` | 同名函数的扩展 / 重载版本 | `getHealthEx()`、`setStateEx2()` |
| `Internal` | 内部实现，私有辅助函数 | `loadAssetInternal()`、`applyBuffInternal()` |
| `Async` | 异步操作，对应同步版本 | `loadTextureAsync()`、`spawnActorAsync()` |
| `Bp` | Blueprint 可调用的 Native 实现（Native 版本的包装） | `startGameBp()`（内部调用 `startGame()`） |
| `Task` | 异步任务处理函数 | `onLoadTask()`、`networkSyncTask()` |



**常见函数命名前缀：**

| 前缀 | 含义 | 示例 |
|------|------|------|
| **get** / **set** | 读取 / 写入 | `getMaxHealth()`、`setMaxHealth(float inNewMax)` |
| **is** / **has** / **check** | 状态判断 | `isAlive()`、`hasTarget()`、`checkAlive()` |
| **can** / **should** | 能力 / 意愿判断 | `canAttack()`、`shouldMove()` |
| **play** / **spawn** / **update** / **commit** | 行为动作 | `playEffect()`、`spawnBullet()`、`commitDamage()` |

**示例：**

```cpp
// 访问器
void getMaxHealth();
void setMaxHealth(float inNewMax);

// 谓词
bool isConnected() const;
bool hasPendingData() const;
bool canSend() const;
bool shouldReconnect() const;

// 动作
void commitTransaction(Transaction& inTrans);
void spawnEnemyActor();

// 全局 / 命名空间函数
float calculateDamage(float inBaseDamage, float inMultiplier);
```

---

## 宏与头文件保护

| 类别 | 规则 | 示例 |
|------|------|------|
| UE 引擎内置宏 | 全大写 + `_`（遵循引擎规范） | `UCLASS`、`UE_LOG` |
| 自定义模块宏 | 模块缩写 + 全大写 + `_` | `MYGAME_API`、`GAME_SETTINGS_MAX_LEVEL` |
| 自定义功能宏 | 全大写 + `_`，避免与引擎冲突 | `CHECK_NULL_RETURN(ptr)` |
| 头文件保护 | `#pragma once` 优先；传统：`项目名_模块名_文件名_H` | `#pragma once` |

---

## 命名空间

- 规则：**项目名** + 大驼峰；按功能分层。

> 示例：
>
> ```cpp
> namespace MyGame { ... }
> namespace MyGame::UI { ... }
> namespace MyGame::Combat { ... }
> ```

---

## 模板参数 / 泛型

| 类型 | 规则 | 示例 |
|------|------|------|
| 通用模板 | `typename T` | `template<typename T>` |
| 语义化模板 | `T` + 大驼峰 | `template<typename TDataType>`、`<TEnumType>` |

---

## 组件命名

### 组件类名

- 规则：`U` 前缀 + 大驼峰，如 `UWeaponComponent`。

> `U` 前缀来源详见[类型命名](#类型命名)。

### 组件挂载变量名

- 规则：将组件类名拼在所有者对象名（小驼峰）后面，形成完整语义。

| 组件类 | 所有者 | 变量名 |
|--------|--------|--------|
| `WeaponComponent` | `Hero` | `heroWeaponComponent` |
| `WeaponComponent` | `PlayerCharacter` | `playerCharacterWeaponComp` |
| `HealthComponent` | `EnemySlime` | `enemySlimeHealthComp` |

> 缩写规则：完整类名或去掉 `Component` 后缀均可，如 `WeaponComponent` / `WeaponComp`，同一项目内保持一致即可。

---

## 数据表字段

| 维度 | 规则   | 示例 |
|------|------|------|
| 行名 | 大驼峰  | `RedPotion`、`HeroSword`、`EnemySlime` |
| 列名 | 大驼峰  | `ItemName`、`MaxHealth`、`AttackDamage` |

> 行名反映资产标识；列名需与 C++ 中对应结构体的字段名保持一致，否则数据表无法正确映射到代码。

---

## 分组命名

- **变量**：`UPROPERTY` 的 `Category` 属性使用 **大驼峰** 命名。
- **函数**：`UFUNCTION` 的 `Category` 属性使用 **大驼峰** 命名。

> 示例：
>
> ```cpp
> // 变量分组
> UPROPERTY(EditAnywhere, Category = "CharacterBase")
> float maxHealth;
>
> UPROPERTY(EditAnywhere, Category = "UI|Display")
> bool bShowHealthBar;
>
> // 函数分组
> UFUNCTION(BlueprintCallable, Category = "Combat")
> void attackEnemy();
>
> UFUNCTION(BlueprintCallable, Category = "Combat|Skill")
> void castUltimateSkill();
> ```

---

## 下载 AI 提示词

将此规范全文下载为 **纯文本**，供 AI 代码助手使用：

[:material-download: 下载 C++NameRules.txt](blob:https://github.com/7d540324-3f4d-4bc0-bfe3-ea298893914f){download="C++NameRules.txt"}
