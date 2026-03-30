---
title: UE 引擎统一命名规范
description: 适用于 UE4.27 / UE5，覆盖 C++、蓝图、资源与 Paper2D 2D 项目的统一命名约定。
---

# UE 引擎统一命名规范

面向虚幻引擎的 **C++、蓝图、资源、组件、数据表与宏枚举** 的统一约定；语义直观、贴合引擎习惯、便于协作。若项目为 **Paper2D / 2D 精灵与帧动画**，文中专项条目需一并遵守。

## 概述

| 项目 | 说明 |
|------|------|
| **引擎版本** | UE 4.27 / UE 5 通用 |
| **适用范围** | C++、蓝图、资产命名、组件、数据表、宏与枚举 |
| **核心原则** | 禁用中文与拼音；统一大小写；文件名用下划线 `_` 分隔、禁止空格；命名体现「功能 + 语义」，避免歧义与冗余 |
| **行业缩写** | 允许通用缩写如 HP、MP、ATK、DEF；其它缩写需在团队内达成共识 |

---

## 通用总则

以下规则在所有场景中 **强制执行**：

- 禁止使用 **中文、拼音**，以及 **无业务语境的首字母缩写**（上表所列行业缩写除外）。
- 禁止 **无意义占位名**，例如：`Temp1`、`AAA`、`TestObj`、`Data1`。
- **文件名 / 资产名** 中禁止空格；单词之间统一使用 **下划线 `_`**。
- 代码中区分三种风格：**大驼峰（PascalCase）**、**小驼峰（camelCase）**、**全大写下划线（UPPER_SNAKE_CASE）**。
- 所有标识符优先表达 **「做什么 + 所属语义」**，避免重复前缀与模糊指代。

---

## C++ 代码规范

### 类（Class）

- **UObject 派生类**（含 Actor、Paper2D 纸片角色 / 精灵相关类）：类型名使用 **`U` 前缀 + PascalCase**。
- 名称应描述职责，而非实现细节。

**推荐**

`UPlayerPaperCharacter`、`UEnemySlimeActor`、`UItemPickupComponent`

**避免**

`player`、`Slime_Enemy`、`UtestSprite`（大小写与语义不规范）

### 结构体（Struct）

- 非 UObject 的 **普通结构体**：**`F` 前缀 + PascalCase**。
- 纯数据 / 配置向结构体：在 `F` 后接 **业务语义**。

**示例**

`FItemBaseData`、`FPaperSpriteAnimInfo`、`FPlayerAttribute`

### 枚举（Enum）

- **枚举类型名**：**`E` 前缀 + PascalCase**。
- **枚举值**：`枚举类型名_具体值`，段与段之间仍用 PascalCase 衔接（与 UE 常见写法一致）。

```cpp
enum class EItemType : uint8
{
    EItemType_Weapon,
    EItemType_Consumable,
    EItemType_Material,
};
```

其它类型名示例：`EAnimState`、`EPaperFlipbookDir`。

### 变量

| 类别 | 前缀 / 规则 | 大小写 | 示例 |
|------|-------------|--------|------|
| 类内私有成员 | `m_` | camelCase | `m_CurrentHP`、`m_SpriteFlipbook` |
| 静态全局 / 静态成员 | `s_` | camelCase | `s_GlobalGameConfig` |
| 局部与临时 | 无前缀 | camelCase | `tempDamage`、`spriteWidget` |
| 常量 / 宏常量 | 无前缀 | UPPER_SNAKE_CASE | `MAX_PLAYER_HP`、`DEFAULT_MOVE_SPEED` |
| 指针 | 不强制 `P` 前缀 | 随上表规则 | `m_TargetEnemyActor` |

### 函数（方法）

- 统一 **PascalCase**，**动词开头**。
- 常见前缀：**Get** / **Set**（读写）、**Is** / **Check**（判断）、**Play** / **Spawn** / **Update**（行为）。

**示例**

`GetPlayerHP()`、`SetSpriteFlipbook()`、`IsDeadState()`、`Update2DAnim()`

### 宏、define 与命名空间

- **宏**：`UPPER_SNAKE_CASE`，例如：`LOG_2D_SPRITE`。
- **命名空间**：可使用 **项目缩写小写**，例如：`namespace Game2D { ... }`。
- **委托 / 事件相关类型**：沿用结构体 **`F` 前缀**，如 `FOnXXXEvent`。

---

## 蓝图规范

### 蓝图类

- 继承自 C++ 基类的蓝图：在语义一致的前提下，类名可加 **`BP_` 前缀**；与 C++ 的 `U/A` 体系区分。

**示例**

`BP_PlayerPaperCharacter`、`BP_EnemySlime`、`BP_ItemCoin`

### 变量与引脚

- 对 C++ 暴露或需在编辑器中维护的变量：建议与 C++ 的 **`m_` 成员** 逻辑一致，保证 **蓝图 ↔ C++** 可读性统一。
- 引脚命名：**短而明确**，名词 / 动词清晰。
- **布尔引脚**：使用 UE 习惯的 **`b` 前缀**，例如：`bIsMoving`；其它引脚用清晰名词，如 `CurrentAnimSpeed`。

### 函数与图表

- 函数命名与 C++ 一致：**动词开头 + PascalCase**。
- **函数图表** 建议按模块分组，例如：`2D 动画`、`角色属性`、`碰撞检测`、`道具逻辑`，便于检索与评审。

---

## 资源资产（含 Paper2D）

### 类型前缀

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| 贴图 / 精灵 | `T_` | `T_Player_Idle`、`T_Slime_Damage` |
| 材质 / 材质实例 | `M_` / `MI_` | `MI_PaperSprite_Transparent` |
| Paper2D 翻页动画（Flipbook） | `FB_` | `FB_Player_Walk_Left` |
| 粒子 | `P_` | `P_Coin_Pickup` |
| 音效 | `S_` | `S_Hit_Light` |
| 关卡 | `Map_` | `Map_StartScene`、`Map_Level01` |

### Paper2D 专项

- **精灵贴图**：`T_角色或物体_动作_方向`。
- **Flipbook**：`FB_角色_动作_朝向`。
- **纸片骨骼 / 绑定**：`SK_Paper_XXX`（`XXX` 为语义片段）。

**示例**

`FB_Player_Walk_Down`、`T_Item_Heart_Full`

### Content 目录归类（2D 项目示例）

建议在工程中保持路径稳定，便于版本管理与协作：

```text
Content/
├── 2DResources/
│   ├── Sprites/
│   ├── Flipbooks/
│   └── Materials/
└── Blueprints/
    └── Characters/
```

可按实际规模增加子目录，但 **同一类资源勿混放在无语义文件夹名**（如 `NewFolder1`）下。

---

## 组件命名

### 引擎与自定义挂载

- 自定义挂载的 **纸片精灵** 相关：可用 `SpriteComponent` + 语义后缀。
- **碰撞体**：`CollisionBox` + 语义。
- **2D 移动**：与引擎一致，如 `PaperMovementComponent`。
- **成员变量**：`m_` + 缩写与语义，例如：`m_PaperSpriteComp`、`m_CollisionOverlapBox`。

### 自定义 C++ 组件

- 类名：**`U` + PascalCase**，如 `UItemCollisionCheckComponent`。
- 在 Actor 上的引用变量：**`m_` + camelCase**，如 `m_ItemCheckComp`。

---

## 数据表与配置

- **CSV / DataTable 资产**：`DT_` + 业务名（DataTable）。
- **示例**：`DT_PlayerAttributeConfig`、`DT_ItemDropRate`。
- **表内字段**：**camelCase**，并与 C++ / 蓝图侧结构体字段 **完全一致**，避免运行时映射错误。

---

## 注释规范

- **类 / 结构体** 文件顶部：简述用途、所属模块、重要依赖（可选：创建或重大变更日期）。
- **关键函数**：说明意图、重要参数与返回值、非显而易见的副作用。
- **2D 动画与帧资源**：注明帧率、朝向、触发条件等，便于策划与美术对齐。
- 避免 **无意义注释**；优先通过 **清晰的命名** 表达意图。

---

## 禁用与避坑

- 禁止 **拼音命名**、**中文标识符**、**随意大小写混用**。
- 禁止 **私自取消** UE 约定的类型前缀（如该用 `U` / `F` / `E` 却省略），导致与反射、生成代码或团队规范冲突。
- Paper2D 相关资源 **禁止** 随意命名；**动作、朝向、角色** 应在名称中可区分。
- **常量** 禁止使用 camelCase；**枚举值** 禁止语义模糊（如 `Type1`、`StateA` 无注释且无约定）。

---

## 附录：速查

| 符号 | 含义 |
|------|------|
| `U` | UObject / 常见 C++ 类 |
| `F` | 结构体 |
| `E` | 枚举 |
| `m_` | 成员变量 |
| `s_` | 静态变量 |
| `b` | 布尔（蓝图引脚等） |
| `T_` | 贴图 / 精灵 |
| `FB_` | 2D Flipbook |
| `DT_` | 数据表 |
| `BP_` | 蓝图类 |

**风格小结**：常量 → 全大写 + 下划线；函数 → PascalCase；局部变量 → camelCase。
