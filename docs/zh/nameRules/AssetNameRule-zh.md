# 资源资产命名规范

> **矢量上行工作室** 资产规范准则V1

---

## 通用命名模式

核心命名模式：`[资产类型前缀]_[资产名称]_[描述符]_[可选变体]`

- **资产类型前缀**：必选
- **资产名称**：必选，描述核心内容
- **描述符**：描述资产用法或特性，可选
- **可选变体**：区分多个版本或变体，可选

---

## 类型前缀总览

### 通用资源

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| 贴图 / 精灵 | `T_` | `T_Player_Idle`、`T_Slime_Damage` |
| 材质 | `M_` | `M_Character_Base`、`M_FX_Fire` |
| 材质实例 | `MI_` | `MI_PaperSprite_Transparent`、`MI_Weapon_Metal` |
| 材质函数 | `MF_` | `MF_GradientNoise`、`MF_Lerp` |
| 材质参数集合 | `MPC_` | `MPC_Character`、`MPC_Environment` |
| 物理资产 | `PHYS_` | `PHYS_Player`、`PHYS_Weapon` |
| 物理材质 | `PM_` | `PM_Ice`、`PM_Wood` |
| 后期处理材质 | `PPM_` | `PPM_CelShading`、`PPM_ColorGrade` |
| 骨骼网格体 | `SKM_` | `SKM_Player_Male`、`SKM_Enemy_Boss` |
| 静态网格体 | `SM_` | `SM_Prop_Chest`、`SM_Environment_Tree` |
| 渲染目标 | `RT_` | `RT_ShadowMap`、`RT_GBuffer` |
| 曲线（浮点/矢量/颜色） | `Curve_` | `Curve_Float_Damage`、`Curve_Vector_RGB` |
| HDR 环境图 | `HDR_` | `HDR_Sky_Sunny`、`HDR_Interior` |

### 贴图细分前缀

| 贴图类型 | 前缀 | 示例 |
|----------|------|------|
| 基础色 / 漫反射 | `T_D_` | `T_D_Player_Skin`、`T_D_Wall_Brick` |
| 法线贴图 | `T_N_` | `T_N_Stone`、`T_N_Ground` |
| 金属度 | `T_M_` | `T_M_Metal`、`T_M_Gold` |
| 粗糙度 | `T_R_` | `T_R_Plastic`、`T_R_Leather` |
| 环境光遮蔽 | `T_AO_` | `T_AO_Interior`、`T_AO_Forest` |
| 自发光 | `T_E_` | `T_E_Fire`、`T_E_UI_Glow` |
| 高光 / 镜面 | `T_S_` | `T_S_Water`、`T_S_Glass` |
| 不透明度 / 镂空 | `T_OP_` | `T_OP_Leaves`、`T_OP_ChainLink` |
| 次表面散射 | `T_SSS_` | `T_SSS_Skin`、`T_SSS_Wax` |
| 厚度贴图 | `T_TH_` | `T_TH_Leaf`、`T_TH_Cloth` |
| 曲率贴图 | `T_CR_` | `T_CR_Edge`、`T_CR_Dent` |
| 污渍遮罩 | `T_Dirt_` | `T_Dirt_Ground`、`T_Dirt_Armor` |
| 锈迹贴图 | `T_Rust_` | `T_Rust_Metal`、`T_Rust_Pipe` |
| 磨损贴图 | `T_Wear_` | `T_Wear_Paint`、`T_Wear_Floor` |
| 清漆层贴图 | `T_Varnish_` | `T_Varnish_Table`、`T_Varnish_Car` |
| 高度图 | `T_H_` | `T_H_Terrain`、`T_H_Brick` |
| 细节纹理 | `T_Det_` | `T_Det_Concrete`、`T_Det_Sand` |
| 混合遮罩 | `T_Mask_` | `T_Mask_Splatter`、`T_Mask_Paint` |
| 草地贴图 | `T_Grass_` | `T_Grass_Green`、`T_Grass_Dry` |
| 路面贴图 | `T_Road_` | `T_Road_Asphalt`、`T_Road_Cobble` |
| 烘焙光照贴图 | `T_LM_` | `T_LM_Interior`、`T_LM_Building` |
| 阴影贴图 | `T_Shadow_` | `T_Shadow_Character`、`T_Shadow_Object` |
| 粒子主贴图 | `T_FX_` | `T_FX_Smoke`、`T_FX_Spark` |
| 噪波贴图 | `T_Noi_` | `T_Noi_Cloud`、`T_Noi_Water` |
| 扭曲贴图 | `T_Dist_` | `T_Dist_Heat`、`T_Dist_Water` |
| 流光渐变 | `T_Glow_` | `T_Glow_Neon`、`T_Glow_Magic` |
| 光斑贴图 | `T_Lens_` | `T_Lens_Flare`、`T_Lens_Dirt` |
| 火焰烟雾 | `T_Fire_` | `T_Fire_Flame`、`T_Fire_Smoke` |
| UI 底图 | `T_UI_` | `T_UI_Background`、`T_UI_Panel` |
| 图标贴图 | `T_Icon_` | `T_Icon_Skill_Fire`、`T_Icon_Item_Potion` |
| 边框装饰 | `T_Frame_` | `T_Frame_Window`、`T_Frame_Button` |
| 渐变贴图 | `T_Grad_` | `T_Grad_Radial`、`T_Grad_Linear` |
| 蒙版贴图 | `T_Msk_` | `T_Msk_Stencil`、`T_Msk_Stencil_Outline` |
| 点阵高光 | `T_Pixel_` | `T_Pixel_Dither`、`T_Pixel_Highlight` |
| 动画序列帧 | `T_Spr_` | `T_Spr_Explosion`、`T_Spr_MuzzleFlash` |
| 贴图阵列 | `T_Arr_` | `T_Arr_Character`、`T_Arr_Terrain` |
| 置换贴图 | `T_Disp_` | `T_Disp_Rock`、`T_Disp_Cloth` |

### 蓝图与数据

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| Actor 组件 | `AC_` | `AC_Weapon`、`AC_Buff` |
| 动画蓝图 | `ABP_` | `ABP_Player`、`ABP_Enemy_Slime` |
| 蓝图接口 | `BI_` | `BI_Interactable`、`BI_Damageable` |
| 蓝图类 | `BP_` | `BP_PlayerCharacter`、`BP_UI_HealthBar` |
| 曲线表 | `CT_` | `CT_DamageCurve`、`CT_XPTable` |
| 数据表 | `DT_` | `DT_PlayerAttributeConfig`、`DT_ItemDropRate` |
| 枚举 | `E_` | `E_ItemQuality`、`E_BuffType` |
| 结构 | `F_` | `F_ItemData`、`F_CharacterStats` |
| 控件蓝图 | `WBP_` | `WBP_MainHUD`、`WBP_InventorySlot` |

### 粒子效果

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| Niagara 发射器 | `FXE_` | `FXE_Fire`、`FXE_IceShard` |
| Niagara 系统 | `FXS_` | `FXS_Explosion_Large`、`FXS_Heal_Party` |
| Niagara 函数 | `FXF_` | `FXF_Spark`、`FXF_SmokePuff` |

### 骨骼网格体动画

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| 绑定 | `Rig_` | `Rig_Player`、`Rig_Enemy` |
| 蒙太奇 | `AM_` | `AM_Attack_Heavy`、`AM_Dodge_Roll` |
| 动画序列 | `AS_` | `AS_Idle`、`AS_Run_Forward` |
| 混合空间 | `BS_` | `BS_Locomotion`、`BS_2D_Blend` |

### 动画与关卡

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| 关卡序列 | `LS_` | `LS_Cutscene_Intro`、`LS_Dialogue_01` |
| Sequencer 编辑 | `SEdit_` | `SEdit_Cutscene_01`、`SEdit_CamPath_01` |
| 关卡 / 地图 | `L_` | `L_StartScene`、`L_Level01`、`LSub_Dungeon_A` |
| 地形 | `Landscape_` | `Landscape_Forest`、`Landscape_Mountain` |
| 植被 / 草地 | `Foliage_` | `Foliage_Grass`、`Foliage_Tree_Pine` |
| 导航区域 | `NavArea_` | `NavArea_Default`、`NavArea_Jump` |
| 导航链接 | `NavLink_` | `NavLink_Ladder`、`NavLink_Teleport` |
| 碰撞预设 | `Collision_` | `Collision_Pawn`、`Collision_StaticObject` |
| 对象通道 | `ObjectChannel_` | `ObjectChannel_Projectile`、`ObjectChannel_Item` |

### 媒体

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| 媒体源 | `MS_` | `MS_Video_Intro`、`MS_Video_Tutorial` |
| 媒体输出 | `MO_` | `MO_VideoOutput`、`MO_TextureOutput` |
| 媒体播放器 | `MP_` | `MP_VideoPlayer`、`MP_AudioStream` |
| 媒体配置文件 | `MPR_` | `MPR_Projector、`MPR_Broadcast` |

### 音频

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| 音频波形（单音效） | `SW_` | `SW_Hit_Light`、`SW_Item_Pickup` |
| 音效类 | `SC_` | `SC_Explosion`、`SC_Weapon_Fire` |
| 音频混合 | `AudioMix_` | `AudioMix_Master`、`AudioMix_SFX` |
| 音效提示（组合音效） | `SCue_` | `SCue_Weapon_Fire`、`SCue_UI_Click` |
| 语音音频 | `VO_` | `VO_Player_Hurt`、`VO_NPC_Greeting` |
| 环境音效 | `Amb_` | `Amb_Forest`、`Amb_Dungeon_Echo` |

### Paper2D 专项

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| Paper Flipbook | `PF_` | `PF_Player_Walk_Down`、`PF_Slime_Idle` |
| Paper Sprite | `S_` | `S_Player_Idle`、`S_Chest_Closed` |
| Sprite 图集 | `SA_` | `SA_Items、`SA_UI_Icons` |
| Sprite 组件 | `SC_` | `SC_GroundTile`、`SC_Decal` |

### 字体与 UI

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| 字体 | `UIFont_` | `UIFont_Title`、`UIFont_Body_CN` |
| UI 样式 | `UIStyle_` | `UIStyle_Button_Default、`UIStyle_Button_Hover` |
| UI 主题 | `UITheme_` | `UITheme_Dark`、`UITheme_Light` |

### 其它

| 资源类型 | 前缀 | 示例 |
|----------|------|------|
| 保存游戏 | `BP_SG_` | `BP_SG_AutoSave`、`BP_SG_QuickSave` |
| 曲线（浮点/矢量/颜色） | `Curve_` | `Curve_Float_Damage`、`Curve_Color_Rainbow` |


## Content 目录归类

建议在工程中保持路径稳定，便于版本管理与协作：

```text
Content/
├── Core/                  ← 核心代码蓝图
│   ├── Blueprints/        ← GM_ / GS_ / PC_ / GI_ 等框架蓝图
│   ├── UI/                ← WBP_ 控件蓝图、UIFont_ 字体、UIStyle_ 样式
│   └── DataTables/        ← DT_ 数据表、CT_ 曲线表
│
├── Material/              ← 材质资源
│   ├── Master/            ← M_ 材质
│   ├── Instance/          ← MI_ 材质实例
│   ├── Collection/        ← MPC_ 材质参数集合
│   └── Function/          ← MF_ 材质函数
│
├── Resource/              ← 程序化/手工 2D 资产
│   ├── Texture/
│   │   ├── FX/           ← T_FX_ 粒子主贴图
│   │   ├── Environment/  ← T_ 环境贴图
│   │   └── Common/       ← T_ 贴图（基础色、法线、粗糙度等）
│   ├── Paper/            ← 精灵图
│   ├── Mesh/              ← 模型
│   ├── Flipbooks/         ← PF_ / FB_ 翻页动画
│   ├── Sprites/           ← S_ Paper Sprite、SA_ Sprite 图集
│   └── Audio/
│       ├── SFX/           ← SW_ 单音效、SCue_ 组合音效
│       └── Voice/         ← VO_ 语音、Amb_ 环境音
│
├── Content/               ← 关卡资产
│   └── Levels/            ← L_ 关卡、Landscape_ 地形
│
├── FX/                    ← 视觉效果
│   └── Particles/         ← FXS_ Niagara 系统、FXE_ 发射器
│
└── Shared/                ← 跨模块共用资产
    ├── Physics/           ← PHYS_ 物理资产、PM_ 物理材质
    ├── Curves/            ← Curve_ 曲线
    └── Media/             ← MS_ / MO_ / MP_ 媒体资源
```

**原则**：同一类资源勿混放在无语义文件夹（如 `NewFolder1`）下；按语义而非数字序号组织子目录。

---

## 禁用规则

- 禁止 **拼音、中文** 命名资源。
- 禁止 **无意义占位名**（如 `NewSprite`、`NewFlipbook_1`）带入正式工程。
