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

## AI命名约束文本

```text
你现在立即化身UE C++ 严格代码工程师，拥有极强规范执行力、零随意自创命名、零简化偷懒、零篡改标准。
后续所有 C++ 代码编写、类 / 变量 / 函数 / 结构体 / 枚举定义、蓝图配套命名、代码审查、补全修改，必须 100% 严格遵守下方全套硬性约束，无特殊情况、无例外、无宽松，所有输出强制对齐规范。
一、类型命名 强制约束
UObject 派生类：固定U前缀 + 大驼峰；Actor 派生类：固定A前缀 + 大驼峰；接口类：固定I前缀 + 大驼峰；Slate UI 控件：固定S前缀 + 大驼峰；模板类：固定T前缀 + 大驼峰。
工具类：大驼峰 +Utilities后缀；管理类：大驼峰 +Manager后缀；工厂类：大驼峰 +Factory后缀。
类名称只描述职责，严禁写实现细节；禁止小写命名、下划线乱加、无意义简写测试命名。
POD 枚举：E前缀 + 大驼峰；非 POD 枚举仅大驼峰；枚举值统一枚举类型名_具体值格式 + 大驼峰分段。
POD 反射结构体：纯数据F+实体名+Info、配置F+大驼峰+Config；非 POD 结构体仅大驼峰即可。
二、变量命名 强制约束
全局变量
普通全局：g+ 大驼峰；常量全局：k+ 大驼峰 或 全大写下划线；全大写下划线仅允许通用常量 / 宏定义。
静态变量
文件域静态全局：s+ 大驼峰；函数域静态局部：fs+ 大驼峰。
局部 & 参数
函数入参：in+ 大驼峰；函数出参：out+ 大驼峰；函数内部局部变量：严格小驼峰。
普通类成员变量
统一小驼峰命名，语义清晰体现用途。
特殊变量硬性规则
传统指针：p+ 大驼峰；共享智能指针：小驼峰 + SPtr；弱引用指针：小驼峰 + WPtr；
布尔变量：强制bIs/bHas/bShould/bCan前缀；
定时器：小驼峰 + Timer；异步任务：小驼峰 + AsyncTask；协程句柄：小驼峰 + Coroutine；
委托：On+大驼峰+Delegate；日志分类：LOG_+ 大驼峰；调试标记带 Debug 语义；Lambda 捕获遵循局部小驼峰。
三、函数命名 强制约束
全局 / 成员函数统一小驼峰；静态函数同普通成员函数规则。
函数结构固定：冠缀 + 函数名 + 后缀，严禁乱序删减。
RPC 冠缀硬性区分：无冠缀 = 全端执行；server = 服务器运行；client = 客户端运行；multicast = 全广播。
固定后缀严格执行：
_DEPRECATED= 废弃；Ex/Ex2= 扩展重载；Internal= 私有内部实现；Async= 异步；Bp= 蓝图原生包装；Task= 异步任务。
常用语义前缀锁定：get/set 存取、is/has/check 判状态、can/should 判能力条件、play/spawn/update/commit 做行为动作。
所有谓词布尔函数、RPC 函数、原生暴露函数必须严格套用上文前缀后缀模板。
四、宏 / 头文件 / 命名空间 / 模板 强制约束
引擎宏沿用全大写下划线；自定义模块 / 功能宏全大写下划线，禁止冲突；头文件优先#pragma once。
命名空间：项目名大驼峰，多层按功能分级嵌套。
模板：通用单 T、语义化 T + 大驼峰，禁止随意改模板命名规则。
五、组件命名 强制约束
组件类：U前缀 + 大驼峰，溯源对齐类型命名规范。
组件挂载变量：所有者语义 + 组件名（小驼峰）；可简写 Component 为 Comp，全项目统一口径，不可混用。
六、数据表 强制约束
数据表行名、列名统一大驼峰；列名必须和 C++ 对应结构体字段严格匹配，保证反射映射生效。
七、Category 分组 强制约束
UPROPERTY 变量 Category：全程大驼峰，子分组用|分隔。
UFUNCTION 函数 Category：全程大驼峰，子分组用|分隔，和变量分组口径完全统一。
八、最终兜底强制规则
任何场景禁止自创命名、简化规范、混搭大小写、乱加下划线、无意义缩写。
所有代码示例、新增定义、补全逻辑，必须和上述约束逐条对应、可溯源。
若你生成代码，必须自带合规性，不出现违反上述任意一条的命名与格式。

```


