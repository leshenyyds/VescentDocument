# Asset Naming Conventions

Applicable to all asset types in UE 4.27 / UE 5, with dedicated coverage for Paper2D 2D projects.

---

## General Naming Pattern

Core naming pattern: `[AssetTypePrefix]_[AssetName]_[Descriptor]_[OptionalVariant]`

- **Asset Type Prefix**: Required
- **Asset Name**: Required, describes core content
- **Descriptor**: Describes asset usage or characteristics (optional)
- **Optional Variant**: Distinguishes multiple versions or variants (optional)

---

## Type Prefix Overview

### General Assets

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Texture / Sprite | `T_` | `T_Player_Idle`, `T_Slime_Damage` |
| Material | `M_` | `M_Character_Base`, `M_FX_Fire` |
| Material Instance | `MI_` | `MI_PaperSprite_Transparent`, `MI_Weapon_Metal` |
| Material Function | `MF_` | `MF_GradientNoise`, `MF_Lerp` |
| Material Parameter Collection | `MPC_` | `MPC_Character`, `MPC_Environment` |
| Physics Asset | `PHYS_` | `PHYS_Player`, `PHYS_Weapon` |
| Physical Material | `PM_` | `PM_Ice`, `PM_Wood` |
| Post-process Material | `PPM_` | `PPM_CelShading`, `PPM_ColorGrade` |
| Skeletal Mesh | `SKM_` | `SKM_Player_Male`, `SKM_Enemy_Boss` |
| Static Mesh | `SM_` | `SM_Prop_Chest`, `SM_Environment_Tree` |
| Render Target | `RT_` | `RT_ShadowMap`, `RT_GBuffer` |
| Curve (float/vector/color) | `Curve_` | `Curve_Float_Damage`, `Curve_Vector_RGB` |
| HDR Environment Map | `HDR_` | `HDR_Sky_Sunny`, `HDR_Interior` |

### Texture Sub-Prefixes

| Texture Type | Prefix | Example |
|--------------|--------|---------|
| Diffuse / Albedo | `T_D_` | `T_D_Player_Skin`, `T_D_Wall_Brick` |
| Normal | `T_N_` | `T_N_Stone`, `T_N_Ground` |
| Metallic | `T_M_` | `T_M_Metal`, `T_M_Gold` |
| Roughness | `T_R_` | `T_R_Plastic`, `T_R_Leather` |
| Ambient Occlusion | `T_AO_` | `T_AO_Interior`, `T_AO_Forest` |
| Emissive | `T_E_` | `T_E_Fire`, `T_E_UI_Glow` |
| Specular | `T_S_` | `T_S_Water`, `T_S_Glass` |
| Opacity / Cutout | `T_OP_` | `T_OP_Leaves`, `T_OP_ChainLink` |
| Subsurface Scattering | `T_SSS_` | `T_SSS_Skin`, `T_SSS_Wax` |
| Thickness | `T_TH_` | `T_TH_Leaf`, `T_TH_Cloth` |
| Curvature | `T_CR_` | `T_CR_Edge`, `T_CR_Dent` |
| Dirt Mask | `T_Dirt_` | `T_Dirt_Ground`, `T_Dirt_Armor` |
| Rust Mask | `T_Rust_` | `T_Rust_Metal`, `T_Rust_Pipe` |
| Wear Mask | `T_Wear_` | `T_Wear_Paint`, `T_Wear_Floor` |
| Varnish | `T_Varnish_` | `T_Varnish_Table`, `T_Varnish_Car` |
| Height | `T_H_` | `T_H_Terrain`, `T_H_Brick` |
| Detail Texture | `T_Det_` | `T_Det_Concrete`, `T_Det_Sand` |
| Blend Mask | `T_Mask_` | `T_Mask_Splatter`, `T_Mask_Paint` |
| Grass | `T_Grass_` | `T_Grass_Green`, `T_Grass_Dry` |
| Road | `T_Road_` | `T_Road_Asphalt`, `T_Road_Cobble` |
| Baked Lightmap | `T_LM_` | `T_LM_Interior`, `T_LM_Building` |
| Shadow Map | `T_Shadow_` | `T_Shadow_Character`, `T_Shadow_Object` |
| Particle Main Texture | `T_FX_` | `T_FX_Smoke`, `T_FX_Spark` |
| Noise Texture | `T_Noi_` | `T_Noi_Cloud`, `T_Noi_Water` |
| Distortion | `T_Dist_` | `T_Dist_Heat`, `T_Dist_Water` |
| Glow Gradient | `T_Glow_` | `T_Glow_Neon`, `T_Glow_Magic` |
| Lens Flare | `T_Lens_` | `T_Lens_Flare`, `T_Lens_Dirt` |
| Fire / Smoke | `T_Fire_` | `T_Fire_Flame`, `T_Fire_Smoke` |
| UI Background | `T_UI_` | `T_UI_Background`, `T_UI_Panel` |
| Icon Texture | `T_Icon_` | `T_Icon_Skill_Fire`, `T_Icon_Item_Potion` |
| Border / Frame | `T_Frame_` | `T_Frame_Window`, `T_Frame_Button` |
| Gradient Texture | `T_Grad_` | `T_Grad_Radial`, `T_Grad_Linear` |
| Mask Texture | `T_Msk_` | `T_Msk_Stencil`, `T_Msk_Stencil_Outline` |
| Pixel Dither | `T_Pixel_` | `T_Pixel_Dither`, `T_Pixel_Highlight` |
| Sprite Sheet Frame | `T_Spr_` | `T_Spr_Explosion`, `T_Spr_MuzzleFlash` |
| Texture Array | `T_Arr_` | `T_Arr_Character`, `T_Arr_Terrain` |
| Displacement | `T_Disp_` | `T_Disp_Rock`, `T_Disp_Cloth` |

### Blueprints & Data

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Actor Component | `AC_` | `AC_Weapon`, `AC_Buff` |
| Animation Blueprint | `ABP_` | `ABP_Player`, `ABP_Enemy_Slime` |
| Blueprint Interface | `BI_` | `BI_Interactable`, `BI_Damageable` |
| Blueprint Class | `BP_` | `BP_PlayerCharacter`, `BP_UI_HealthBar` |
| Curve Table | `CT_` | `CT_DamageCurve`, `CT_XPTable` |
| Data Table | `DT_` | `DT_PlayerAttributeConfig`, `DT_ItemDropRate` |
| Enum | `E_` | `E_ItemQuality`, `E_BuffType` |
| Struct | `F_` | `F_ItemData`, `F_CharacterStats` |
| Widget Blueprint | `WBP_` | `WBP_MainHUD`, `WBP_InventorySlot` |

### Particle Effects

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Niagara Emitter | `FXE_` | `FXE_Fire`, `FXE_IceShard` |
| Niagara System | `FXS_` | `FXS_Explosion_Large`, `FXS_Heal_Party` |
| Niagara Function | `FXF_` | `FXF_Spark`, `FXF_SmokePuff` |

### Skeletal Mesh Animation

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Rigging | `Rig_` | `Rig_Player`, `Rig_Enemy` |
| Montage | `AM_` | `AM_Attack_Heavy`, `AM_Dodge_Roll` |
| Animation Sequence | `AS_` | `AS_Idle`, `AS_Run_Forward` |
| Blend Space | `BS_` | `BS_Locomotion`, `BS_2D_Blend` |

### Animation & Levels

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Level Sequence | `LS_` | `LS_Cutscene_Intro`, `LS_Dialogue_01` |
| Sequencer Edit | `SEdit_` | `SEdit_Cutscene_01`, `SEdit_CamPath_01` |
| Level / Map | `L_` | `L_StartScene`, `L_Level01`, `LSub_Dungeon_A` |
| Landscape | `Landscape_` | `Landscape_Forest`, `Landscape_Mountain` |
| Foliage / Grass | `Foliage_` | `Foliage_Grass`, `Foliage_Tree_Pine` |
| Nav Area | `NavArea_` | `NavArea_Default`, `NavArea_Jump` |
| Nav Link | `NavLink_` | `NavLink_Ladder`, `NavLink_Teleport` |
| Collision Preset | `Collision_` | `Collision_Pawn`, `Collision_StaticObject` |
| Object Channel | `ObjectChannel_` | `ObjectChannel_Projectile`, `ObjectChannel_Item` |

### Media

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Media Source | `MS_` | `MS_Video_Intro`, `MS_Video_Tutorial` |
| Media Output | `MO_` | `MO_VideoOutput`, `MO_TextureOutput` |
| Media Player | `MP_` | `MP_VideoPlayer`, `MP_AudioStream` |
| Media Profile | `MPR_` | `MPR_Projector`, `MPR_Broadcast` |

### Audio

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Audio Wave (single SFX) | `SW_` | `SW_Hit_Light`, `SW_Item_Pickup` |
| Sound Class | `SC_` | `SC_Explosion`, `SC_Weapon_Fire` |
| Audio Mix | `AudioMix_` | `AudioMix_Master`, `AudioMix_SFX` |
| Sound Cue (composite SFX) | `SCue_` | `SCue_Weapon_Fire`, `SCue_UI_Click` |
| Voice Audio | `VO_` | `VO_Player_Hurt`, `VO_NPC_Greeting` |
| Ambient Sound | `Amb_` | `Amb_Forest`, `Amb_Dungeon_Echo` |

### Paper2D Specific

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Paper Flipbook | `PF_` | `PF_Player_Walk_Down`, `PF_Slime_Idle` |
| Paper Sprite | `S_` | `S_Player_Idle`, `S_Chest_Closed` |
| Sprite Atlas | `SA_` | `SA_Items`, `SA_UI_Icons` |
| Sprite Component | `SC_` | `SC_GroundTile`, `SC_Decal` |
| Paper Skeleton / Rigging | `Rig_` or `SK_Paper_` | `SK_Paper_Player`, `SK_Paper_Slime` |

### Fonts & UI

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Font | `UIFont_` | `UIFont_Title`, `UIFont_Body_CN` |
| UI Style | `UIStyle_` | `UIStyle_Button_Default`, `UIStyle_Button_Hover` |
| UI Theme | `UITheme_` | `UITheme_Dark`, `UITheme_Light` |

### Misc

| Asset Type | Prefix | Example |
|------------|--------|---------|
| Save Game | `BP_SG_` | `BP_SG_AutoSave`, `BP_SG_QuickSave` |
| Curve (float/vector/color) | `Curve_` | `Curve_Float_Damage`, `Curve_Color_Rainbow` |


## Content Directory Organization

Recommended to keep paths stable in the project for version control and collaboration:

```text
Content/
├── Core/                  ← Core framework blueprints
│   ├── Blueprints/       ← GM_ / GS_ / PC_ / GI_ framework blueprints
│   ├── UI/               ← WBP_ widget blueprints, UIFont_ fonts, UIStyle_ styles
│   └── DataTables/       ← DT_ data tables, CT_ curve tables
│
├── Material/              ← Material assets
│   ├── Master/           ← M_ materials
│   ├── Instance/         ← MI_ material instances
│   ├── Collection/       ← MPC_ material parameter collections
│   └── Function/         ← MF_ material functions
│
├── Resource/              ← Procedural / hand-crafted 2D assets
│   ├── Texture/
│   │   ├── FX/           ← T_FX_ particle textures
│   │   ├── Environment/  ← T_ environment textures
│   │   └── Common/       ← T_ textures (albedo, normal, roughness, etc.)
│   ├── Paper/            ← Sprite sheets
│   ├── Mesh/             ← Models
│   ├── Flipbooks/        ← PF_ / FB_ flipbook animations
│   ├── Sprites/          ← S_ paper sprites, SA_ sprite atlases
│   └── Audio/
│       ├── SFX/          ← SW_ single SFX, SCue_ composite SFX
│       └── Voice/        ← VO_ voice audio, Amb_ ambient sounds
│
├── Content/               ← Level assets
│   └── Levels/           ← L_ levels, Landscape_ terrain
│
├── FX/                    ← Visual effects
│   └── Particles/        ← FXS_ Niagara systems, FXE_ emitters
│
└── Shared/                ← Cross-module shared assets
    ├── Physics/          ← PHYS_ physics assets, PM_ physical materials
    ├── Curves/           ← Curve_ curves
    └── Media/            ← MS_ / MO_ / MP_ media assets
```

**Principle**: Do not mix resources of the same type into meaningless folders (like `NewFolder1`); organize subdirectories by semantics, not numeric sequence.

---

## Prohibitions

- **No pinyin or Chinese** for asset names.
- **No arbitrary naming** of Paper2D assets; **action, direction, and character** should be distinguishable in the name.
- **No meaningless placeholder names** (like `NewSprite`, `NewFlipbook_1`) in production projects.
