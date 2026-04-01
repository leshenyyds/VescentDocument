# C++ Code Conventions

Applicable to UE 4.27 / UE 5 C++ code naming conventions, covering types, variables, functions, macros and components.

---

## Type Naming

### Classes

| Type | Rule | Example |
|------|------|---------|
| UObject-derived classes | `U` prefix + PascalCase | `UPlayerSettings`, `UItemManager` |
| Actor-derived classes | `A` prefix + PascalCase | `APlayerCharacter`, `AEnemySlime` |
| Interface classes | `I` prefix + PascalCase | `IDamageable`, `IInteractable` |
| Slate UI widgets | `S` prefix + PascalCase | `SCustomButton`, `SMainMenu` |
| Utility classes | PascalCase + `Utilities` suffix | `MathUtilities` |
| Manager classes | PascalCase + `Manager` suffix | `GameStateManager` |
| Factory classes | PascalCase + `Factory` suffix | `ActorFactory` |
| Template classes | `T` prefix + PascalCase | `TArray<AActor*>`, `TSharedPtr` |

Names should describe **responsibility**, not implementation details.

**Recommended**: `UPlayerPaperCharacter`, `UEnemySlimeActor`, `UItemPickupComponent`

**Avoid**: `player`, `Slime_Enemy`, `UtestSprite` (inconsistent casing / poor semantics)

### Enums

- **POD enums**: `E` prefix + PascalCase, e.g. `ECombatState`.
- **Non-POD enums**: PascalCase only.
- **Enum values**: `EnumTypeName_Value`, each segment PascalCase.

```cpp
enum class EItemType : uint8
{
    EItemType_Weapon,
    EItemType_Consumable,
    EItemType_Material,
};
```

### Structs

- **POD (reflected)**:
  - Pure data structs: `F` + entity name (PascalCase) + `Info`, e.g. `FEnemyInfo`
  - Config structs: `F` + PascalCase + `Config`, e.g. `FCharacterConfig`
- **Non-POD (not reflected)**: PascalCase only, e.g. `FVector3D`

---

## Variable Naming

### Global Variables

| Category | Rule | Example |
|----------|------|---------|
| Normal global variables | `g` + PascalCase | `gGameTime`, `gPlayerCount` |
| Constant global variables | `k` + PascalCase **or** UPPER_SNAKE_CASE | `kMaxHealth`, `MAX_PATH_LENGTH` |

> Note: UPPER_SNAKE_CASE is only for universal constants (e.g. `INDEX_NONE = -1`) or macro constants (`#define MAX_PATH_LENGTH 260`).

### Static Variables

| Category | Rule | Example |
|----------|------|---------|
| Static global (file scope) | `s` + PascalCase | `sGlobalGameConfig` |
| Static local (function scope) | `fs` + PascalCase | `fsCacheData` |

### Local Variables & Function Parameters

| Category | Rule | Example |
|----------|------|---------|
| Input parameters | `in` + PascalCase | `inTargetActor`, `inDamageValue` |
| Output parameters | `out` + PascalCase | `outResult`, `outFinalPosition` |
| Local variables | camelCase, convey purpose | `tempDamage`, `spriteWidget` |

### Class Member Variables

- Rule: **camelCase** (no `m_` prefix).

> **Examples**: `currentHP`, `spriteFlipbook`, `targetEnemyActor`

### Special Type Variables

| Type | Rule | Example |
|------|------|---------|
| Raw pointers | `p` + PascalCase | `pPlayerRef`, `pItemData` |
| Shared pointers | camelCase + `SPtr` | `weakRefSPtr`, `enemyPtrSPtr` |
| Weak pointers | camelCase + `WPtr` | `cacheWPtr` |
| Boolean variables | `b` + state word (`bIs`, `bHas`, `bShould`, `bCan`) | `bIsAlive`, `bHasTarget`, `bCanAttack` |
| Timer variables | camelCase + `Timer` | `attackTimer`, `cooldownTimer` |
| Async task variables | camelCase + `AsyncTask` | `loadAssetAsyncTask` |
| Coroutine handles | camelCase + `Coroutine` | `fadeCoroutine` |
| Delegate variables | `On` + PascalCase + `Delegate` | `OnHealthChangedDelegate` |
| Log categories | `LOG_` + PascalCase | `LOG_Combat`, `LOG_UI` |
| Debug flags | `bDebug` + PascalCase | `bDebugDrawCollision` |
| Lambda capture variables | Follow local variable rules (camelCase), no meaningless single characters | `auto OnLoaded = [this, targetActor]() { ... };` |

---

## Function Naming

- Rule: **camelCase**
- Function name composition: **Qualifier** + **FunctionName** + **Suffix**
- Static member functions follow the same rules as regular member functions.

**Qualifiers (network execution context):**

| Qualifier | Meaning |
|-----------|---------|
| **(none)** | No networking; executes on all sides |
| **server** | Executes on the server |
| **client** | Executes on the client |
| **multicast** | Broadcasts to server and all clients |

**Suffixes:**

| Suffix | Meaning | Examples |
|--------|---------|----------|
| **(none)** | Normal function, no special suffix | `getMaxHealth()` |
| `_Ex` / `_Ex2` | Extended / overloaded version of the same-named function | `getHealthEx()`, `setStateEx2()` |
| `_Internal` | Internal implementation, private helper function | `loadAssetInternal()`, `applyBuffInternal()` |
| `_Async` | Async operation, counterpart to sync version | `loadTextureAsync()`, `spawnActorAsync()` |
| `_Bp` | Blueprint-callable Native implementation wrapper | `startGameBp()` (internally calls `startGame()`) |
| `_Task` | Async task handler function | `onLoadTask()`, `networkSyncTask()` |
| `_DEPRECATED` | Deprecated or obsolete function | `getMaxHealth_DEPRECATED()` |

**Common function name prefixes:**

| Prefix | Meaning | Examples |
|--------|---------|----------|
| **get** / **set** | Read / write | `getMaxHealth()`, `setMaxHealth(float inNewMax)` |
| **is** / **has** / **check** | State check | `isAlive()`, `hasTarget()`, `checkAlive()` |
| **can** / **should** | Capability / intent check | `canAttack()`, `shouldMove()` |
| **play** / **spawn** / **update** / **commit** | Action | `playEffect()`, `spawnBullet()`, `commitDamage()` |

**Examples:**

```cpp
// Accessors
void getMaxHealth();
void setMaxHealth(float inNewMax);

// Predicates
bool isConnected() const;
bool hasPendingData() const;
bool canSend() const;
bool shouldReconnect() const;

// Actions
void commitTransaction(Transaction& inTrans);
void spawnEnemyActor();

// Global / namespace functions
float calculateDamage(float inBaseDamage, float inMultiplier);
```

---

## Macros & Include Guards

| Category | Rule | Example |
|----------|------|---------|
| UE engine built-in macros | UPPER_SNAKE_CASE (follow engine conventions) | `UCLASS`, `UE_LOG` |
| Custom module macros | Module abbreviation + UPPER_SNAKE_CASE | `MYGAME_API`, `GAME_SETTINGS_MAX_LEVEL` |
| Custom feature macros | UPPER_SNAKE_CASE, avoid conflicts with engine | `CHECK_NULL_RETURN(ptr)` |
| Include guards | Prefer `#pragma once`; traditional: `ProjectName_ModuleName_FileName_H` | `#pragma once` |

---

## Namespaces

Rule: Project name + PascalCase; organized by feature layer.

```cpp
namespace MyGame { ... }
namespace MyGame::UI { ... }
namespace MyGame::Combat { ... }
```

---

## Template Parameters / Generics

| Type | Rule | Example |
|------|------|---------|
| Generic template | `typename T` | `template<typename T>` |
| Semantic template | `T` + PascalCase | `template<typename TDataType>`, `<TEnumType>` |

---

## Component Naming

### Engine & Custom Attachments

| Component | Rule | Example |
|-----------|------|---------|
| Paper sprite component | `SpriteComponent` + semantic suffix | `SpriteComponent_Run` |
| Colliders | `CollisionBox` + semantic | `CollisionBox_Interact` |
| 2D movement | Consistent with engine | `PaperMovementComponent` |
| Member variable references | Owner (camelCase) + component class (camelCase) | `heroSpriteComponent`, `enemyCollisionBox` |

### Custom C++ Components

- Class name: `U` + PascalCase, e.g. `UWeaponComponent`.
- Reference on Actor: **camelCase**, e.g. `heroWeaponComponent`.

---

## Data Table Fields

- **Row names**: **PascalCase**.
- **Column names**: **PascalCase**, **must exactly match** C++ struct field names, to avoid runtime mapping errors.

> Row names reflect asset identity; column names must match the field names in the corresponding C++ struct, otherwise the data table cannot correctly map to code.

---

## Grouping Conventions

- **Variables**: `UPROPERTY` `Category` attribute uses **PascalCase**.
- **Functions**: `UFUNCTION` `Category` attribute uses **PascalCase**.

> **Examples**:
>
> ```cpp
> // Variable grouping
> UPROPERTY(EditAnywhere, Category = "CharacterBase")
> float maxHealth;
>
> UPROPERTY(EditAnywhere, Category = "UI|Display")
> bool bShowHealthBar;
>
> // Function grouping
> UFUNCTION(BlueprintCallable, Category = "Combat")
> void attackEnemy();
>
> UFUNCTION(BlueprintCallable, Category = "Combat|Skill")
> void castUltimateSkill();
> ```

---

## Download AI Prompt

Download this entire naming convention as a **text prompt** for AI code assistants:

[:material-download: Download C++NameRules.txt](https://cdn.jsdelivr.net/gh/Vescent-Studio/VescentDocument@master/docs/rescourse/AIPrompts/C++NameRules.txt){download="C++NameRules.txt"}
