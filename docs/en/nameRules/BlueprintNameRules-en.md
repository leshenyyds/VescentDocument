# Blueprint Conventions

Applicable to UE 4.27 / UE 5 Blueprint visual scripting conventions, covering Blueprint classes, variables, pins, function graphs and RPC.

---

## Blueprint Classes

### General Prefix Rules

| Prefix | Meaning | Source | Example |
|--------|---------|--------|---------|
| `BP_` | Regular Blueprint class | Blueprint abbreviation | `BP_PlayerCharacter`, `BP_EnemySlime` |
| `GM_` | Game Mode | GameMode | `GM_DeathMatch`, `GM_Coop` |
| `GS_` | Game State | GameState | `GS_MainGame`, `GS_Lobby` |
| `PS_` | Player State | PlayerState | `PS_PlayerOne`, `PS_PlayerTwo` |
| `PC_` | Player Controller | PlayerController | `PC_Desktop`, `PC_Spectator` |
| `AIC_` | AI Controller | AI Controller | `AIC_Grunt`, `AIC_Boss` |
| `GI_` | Game Instance | GameInstance | `GI_Main`, `GI_Dev` |
| `PDA_` | Primary Data Asset class | Primary Data Asset | `PDA_Weapon`, `PDA_Consumable` |
| `DA_` | Data Asset instance | Data Asset | `DA_IronOre`, `DA_HealthPotion` |
| `WBP_` | Widget Blueprint | Widget Blueprint | `WBP_MainHUD`, `WBP_InventorySlot` |
| `LB_` | Level Blueprint | Level Blueprint | `LB_Start`, `LB_Dungeon01` |
| `BI_` | Blueprint Interface | Blueprint Interface | `BI_Interactable`, `BI_Damageable` |

> **Names should describe responsibility, not implementation details.** For example, use `BP_Enemy_Slime` instead of `BP_Slime`, and `BP_Player_PaperCharacter` instead of `BP_Player`. Naming should reflect inheritance hierarchy — parent classes describe responsibility, child classes append distinguishing characteristics.

---

## Variables

### Normal Variables

- Rule: **camelCase**, describe semantics with noun or adjective + noun.

> **Examples**: `currentHP`, `spriteFlipbook`, `targetEnemyActor`, `moveSpeed`

### Boolean Variables

| Prefix | Meaning | Examples |
|--------|---------|----------|
| `bIs` | Whether a state is true | `bIsAlive`, `bIsMoving`, `bIsGrounded` |
| `bHas` | Whether something is owned | `bHasTarget`, `bHasWeapon` |
| `bCan` | Whether a capability exists | `bCanAttack`, `bCanJump` |
| `bShould` | Whether something should happen | `bShouldRespawn`, `bShouldShowUI` |

### Special Type Variables

| Type | Rule | Examples |
|------|------|----------|
| Component reference | Owner (camelCase) + component class name (camelCase) | `heroWeaponComp`, `enemySlimeHealthComp` |
| Timer handle | camelCase + `Timer` | `attackTimer`, `cooldownTimer` |
| Delegate variable | `On` + PascalCase + `Delegate` | `OnHealthChangedDelegate` |
| Interface reference | camelCase + `Interface` | `damageableInterface` |
| Object reference | camelCase + entity name | `targetEnemyRef`, `attachedWeaponRef` |
| Asset reference | camelCase + asset type | `hitEffect`, `deathSound` |

### Category Grouping

- Rule: **PascalCase**, multiple levels separated by `|`.

> **Examples**: `Category="AI | Logic"`, `Category="Combat | Skill"`, `Category="UI | Inventory"`

---

## Functions

- Rule: **camelCase**, verb prefix, convey operation intent.
- Function name composition: **Qualifier** + **Function Name**.

**Qualifiers (network execution context):**

| Qualifier | Meaning |
|-----------|---------|
| **(none)** | No networking; executes on all sides |
| **server** | Executes on the server |
| **client** | Executes on the client |
| **multicast** | Broadcasts to server and all clients |

**Common function name prefixes:**

| Prefix | Meaning | Examples |
|--------|---------|----------|
| **get** / **set** | Read / write | `getMaxHealth()`, `setMaxHealth(float inNewMax)` |
| **is** / **has** / **check** | State check | `isAlive()`, `hasTarget()`, `checkAlive()` |
| **can** / **should** | Capability / intent check | `canAttack()`, `shouldMove()` |
| **play** / **spawn** / **update** / **apply** | Action | `playHitEffect()`, `spawnBullet()`, `applyDamage()` |

> **Examples**: `getMaxHealth`, `setMoveSpeed`, `isTargetInRange`, `hasActiveBuff`, `canInteract`, `spawnEnemy`


## RPC Functions (Remote Procedure Call)

| Execution Location | Rule | Examples |
|--------------------|------|---------|
| Server execution | `server` + camelCase | `serverStartAttack`, `serverDropItem`, `serverEquipWeapon` |
| Client execution | `client` + camelCase | `clientPlayHitEffect`, `clientUpdateUI`, `clientShowDamageNumber` |
| Multicast broadcast | `multicast` + camelCase | `multicastPlayDeathAnim`, `multicastExplode`, `multicastSyncPosition` |

> RPC functions must use correct prefixes; the engine does not automatically check for them. Missing prefixes will cause remote calls to fail or produce logic errors.

---

## Blueprint Graphs / Groups

- Rule: `G-` + PascalCase, semantically descriptive, grouped by functional module.

| Graph Type | Naming | Description |
|-----------|--------|-------------|
| Logic group | `G-CombatLogic` | Combat-related logic |
| Animation group | `G-2DAnimation` | 2D skeletal animation state machine |
| UI group | `G-UINavigation` | Interface navigation and responses |
| Movement group | `G-Movement` | Movement and collision response |
| Inventory group | `G-Inventory` | Inventory and item management |

---

## Bone Sockets

- Rule: PascalCase + `Socket` suffix, naming should point to the mount location.

> **Examples**: `HandSocket` (hand), `WeaponSocket` (weapon mount), `BackSocket` (back), `HeadSocket` (head)
>
> Socket names should describe the **mount location**, not the bone the socket belongs to, e.g., `HandSocket` instead of `RightHand1`.

---

## Widget Blueprint Internal Naming

- Rule: camelCase + corresponding widget type suffix.

| Widget Type | Suffix Suggestion | Examples |
|------------|-------------------|----------|
| Text / Label | `Text` | `tipsText`, `scoreLabel`, `titleText` |
| Image | `Image` / `Img` | `heroImage`, `iconImg`, `backgroundImg` |
| Button | `Button` | `confirmButton`, `cancelButton`, `closeButton` |
| Progress Bar | `ProgressBar` | `healthProgressBar`, `xpProgressBar` |
| Container / List | `Panel` / `Container` | `itemContainer`, `inventoryPanel` |
| Input Box | `Input` | `nameInput`, `searchInput` |

---

## Blueprint Asset Variant Naming

- Rule: Same function, different versions — append version or variant identifier to base name.

| Suffix | Meaning | Examples |
|--------|---------|----------|
| `_V1` / `_V2` | Version number | `BP_PlayerCharacter_V2` |
| `_Lite` | Lightweight version | `BP_EnemySlime_Lite` |
| `_Pro` | Pro / advanced version | `BP_WeaponSword_Pro` |
| `_Debug` | Debug version | `BP_AIController_Debug` |

---

## Prohibitions

- **No pinyin or Chinese** for Blueprint class or variable names.
- **No meaningless placeholder names** (like `NewBlueprint_1`) in production projects.
- Blueprint functions and events with RPC: **must use** `server` / `client` / `multicast` prefix.
- **Avoid redundant prefixes**: Blueprint classes already carry `BP_` prefix; variable names should not redundantly repeat `bp` prefix.
