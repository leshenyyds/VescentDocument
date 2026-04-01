# 蓝图规范

> **矢量上行工作室** 蓝图代码规范准则V1

---

## 蓝图类

### 通用前缀规则

| 前缀 | 含义 | 来源 | 示例 |
|------|------|------|------|
| `BP_` | 普通蓝图类 | Blueprint 缩写 | `BP_PlayerCharacter`、`BP_EnemySlime` |
| `GM_` | 游戏模式 | GameMode | `GM_DeathMatch`、`GM_Coop` |
| `GS_` | 游戏状态 | GameState | `GS_MainGame`、`GS_Lobby` |
| `PS_` | 玩家状态 | PlayerState | `PS_PlayerOne`、`PS_PlayerTwo` |
| `PC_` | 玩家控制器 | PlayerController | `PC_Desktop`、`PC_Spectator` |
| `AIC_` | AI 控制器 | AI Controller | `AIC_Grunt`、`AIC_Boss` |
| `GI_` | 游戏实例 | GameInstance | `GI_Main`、`GI_Dev` |
| `PDA_` | 资产数据类 | Primary Data Asset | `PDA_Weapon`、`PDA_Consumable` |
| `DA_` | 资产数据实例 | Data Asset | `DA_IronOre`、`DA_HealthPotion` |
| `WBP_` | 控件蓝图 | Widget Blueprint | `WBP_MainHUD`、`WBP_InventorySlot` |
| `LB_` | 关卡蓝图 | Level Blueprint | `LB_Start`、`LB_Dungeon01` |
| `BI_` | 蓝图接口 | Blueprint Interface | `BI_Interactable`、`BI_Damageable` |

> **名称应描述职责，而非实现细节。** 例如 `BP_Enemy_Slime` 而非 `BP_Slime`，`BP_Player_PaperCharacter` 而非 `BP_Player`。命名应反映继承关系，父类描述职责，子类在其后追加特征。

---

## 变量

### 普通变量

- 规则：**小驼峰**，用名词或形容词 + 名词描述语义。

> 示例：`currentHP`、`spriteFlipbook`、`targetEnemyActor`、`moveSpeed`

### 布尔变量

| 前缀 | 含义 | 示例 |
|------|------|------|
| `bIs` | 状态是否为真 | `bIsAlive`、`bIsMoving`、`bIsGrounded` |
| `bHas` | 是否拥有某物 | `bHasTarget`、`bHasWeapon` |
| `bCan` | 是否具备某种能力 | `bCanAttack`、`bCanJump` |
| `bShould` | 是否应该做某事 | `bShouldRespawn`、`bShouldShowUI` |

### 特殊类型变量

| 类型 | 规则 | 示例 |
|------|------|------|
| 组件引用 | 所有者（小驼峰）+ 组件类名（小驼峰） | `heroWeaponComp`、`enemySlimeHealthComp` |
| 定时器句柄 | 小驼峰 + `Timer` | `attackTimer`、`cooldownTimer` |
| 委托变量 | `On` + 大驼峰 + `Delegate` | `OnHealthChangedDelegate` |
| 接口引用 | 小驼峰 + `Interface` | `damageableInterface` |
| 对象引用 | 小驼峰 + 实体名 | `targetEnemyRef`、`attachedWeaponRef` |
| 资产引用 | 小驼峰 + 资产类型 | `hitEffect`、`deathSound` |

### Category 分组

- 规则：**大驼峰**，多层级用 `|` 分隔。

> 示例：`Category="AI | Logic"`、`Category="Combat | Skill"`、`Category="UI | Inventory"`

---

## 函数

- 规则：**小驼峰**，动词开头，体现操作意图。
- 函数命名组成：**冠缀** + **函数名**。

**冠缀（联机运行位置）：**

| 冠缀 | 含义 |
|------|------|
| **无** | 无联机模式，在所有端执行 |
| **server** | 在服务器上运行 |
| **client** | 在客户端上运行 |
| **multicast** | 广播到服务器与所有客户端 |

> 蓝图函数在普遍情况下，无需后缀<br>若想要表示此函数废弃，额可以打开函数细节面板勾选**已废弃**

**常见函数命名前缀：**

| 前缀 | 含义 | 示例 |
|------|------|------|
| **get** / **set** | 读取 / 写入 | `getMaxHealth()`、`setMaxHealth(float inNewMax)` |
| **is** / **has** / **check** | 状态判断 | `isAlive()`、`hasTarget()`、`checkAlive()` |
| **can** / **should** | 能力 / 意愿判断 | `canAttack()`、`shouldMove()` |
| **play** / **spawn** / **update** / **apply** | 行为动作 | `playHitEffect()`、`spawnBullet()`、`applyDamage()` |

> 示例：`getMaxHealth`、`setMoveSpeed`、`isTargetInRange`、`hasActiveBuff`、`canInteract`、`spawnEnemy`


## RPC 函数（远程过程调用）

| 运行位置 | 规则 | 示例 |
|----------|------|------|
| 服务器执行 | `server` + 小驼峰 | `serverStartAttack`、`serverDropItem`、`serverEquipWeapon` |
| 客户端执行 | `client` + 小驼峰 | `clientPlayHitEffect`、`clientUpdateUI`、`clientShowDamageNumber` |
| 多播广播 | `multicast` + 小驼峰 | `multicastPlayDeathAnim`、`multicastExplode`、`multicastSyncPosition` |

> RPC 函数必须使用正确前缀标记，引擎不会自动检查。遗漏前缀会导致远程调用失效或逻辑错误。

---

## 蓝图图表 / 分组

- 规则：`G-` + 大驼峰，语义化描述所属功能模块。

| 图表类型 | 命名 | 说明 |
|----------|------|------|
| 逻辑分组 | `G-CombatLogic` | 战斗相关逻辑 |
| 动画分组 | `G-2DAnimation` | 2D 骨骼动画状态机 |
| UI 分组 | `G-UINavigation` | 界面导航与响应 |
| 移动分组 | `G-Movement` | 移动与碰撞响应 |
| 物品分组 | `G-Inventory` | 背包与物品管理 |

---

## 骨骼插槽

- 规则：大驼峰 + `Socket` 后缀，命名应指向挂载位置。

> 示例：`HandSocket`（手部）、`WeaponSocket`（武器挂点）、`BackSocket`（背部）、`HeadSocket`（头部）
>
> 插槽名应描述**挂载位置**而非插槽所属骨骼，如 `HandSocket` 而非 `RightHand1`。

---

## 控件蓝图内命名

- 规则：小驼峰 + 对应的控件类型后缀。

| 控件类型 | 后缀建议 | 示例 |
|----------|----------|------|
| 文字 / 标签 | `Text` | `tipsText`、`scoreLabel`、`titleText` |
| 图片 / 图像 | `Image` / `Img` | `heroImage`、`iconImg`、`backgroundImg` |
| 按钮 | `Button` | `confirmButton`、`cancelButton`、`closeButton` |
| 进度条 | `ProgressBar` | `healthProgressBar`、`xpProgressBar` |
| 容器 / 列表 | `Panel` / `Container` | `itemContainer`、`inventoryPanel` |
| 输入框 | `Input` | `nameInput`、`searchInput` |

---

## 蓝图资源变体命名

- 规则：同功能不同版本，在基础命名后加版本或细分标识。

| 后缀 | 含义 | 示例 |
|------|------|------|
| `_V1` / `_V2` | 版本号 | `BP_PlayerCharacter_V2` |
| `_Lite` | 轻量版 | `BP_EnemySlime_Lite` |
| `_Pro` | 高级版 | `BP_WeaponSword_Pro` |
| `_Debug` | 调试版 | `BP_AIController_Debug` |

---

## 禁用规则

- **禁止拼音、中文** 命名蓝图类或变量。
- **禁止无意义占位名**（如 `NewBlueprint_1`）带入正式工程。
- 蓝图函数与事件若存在 RPC：**必须使用** `server` / `client` / `multicast` 前缀标记。
- **避免冗余前缀**：蓝图类已带 `BP_` 前缀，变量名中无需再重复加 `bp` 前缀。
