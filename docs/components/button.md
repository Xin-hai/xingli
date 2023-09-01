---
title: Button - 按钮
---

# Button

## 预览
&nbsp;
<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

## 使用方法

```vue
<xin-button>默认按钮</xin-button>
<xin-button icon="support">设置按钮</xin-button>
<xin-button icon="settings">设置按钮</xin-button>
<xin-button :loading="true">loading按钮</xin-button>
<xin-button :disabled="true">disabled按钮</xin-button>
<xin-button icon="settings" icon-position="right">右侧按钮</xin-button>

<xin-button-group>
<xin-button>按钮组</xin-button>
<xin-button>按钮组</xin-button>
<xin-button>按钮组</xin-button>
</xin-button-group>
```

## 选项<Badge text="支持选项" />


|         选项          |                               取值                               |           类型           |      作用       |
|:-------------------:|:--------------------------------------------------------------:|:----------------------:|:-------------:|
|        icon         | settings、info、download、error、<br/> left、right、download、support |         String         |    设置内嵌图标     |
|       loading       |                           true、false                           | Boolean  |  设置loading状态  |
|      disabled       |                           true、false                           | Boolean  | 设置disabled按钮  |
|    icon-position    |                           left、right                           |         String         |    设置图标位置     |

