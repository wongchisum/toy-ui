## Button

> 用于触发交互事件（点击）

### 尺寸 <Badge>size</Badge>

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Button } from 'toy-ui';

const btnStyle = { margin: '4px 4px' };

export default () => (
  <>
    <Button size="sm" theme="default" style={btnStyle}>
      Hello World
    </Button>
    <Button size="md" theme="info" style={btnStyle}>
      Hello World
    </Button>
    <Button size="lg" theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button size="xl" theme="warning" style={btnStyle}>
      Hello World
    </Button>
  </>
);
```

---

### 主题 <Badge>theme</Badge>

使用`theme`属性去控制按钮的主题配色

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Button } from 'toy-ui';

const btnStyle = { margin: '4px 4px' };

export default () => (
  <>
    <Button theme style={btnStyle}>
      Hello World
    </Button>
    <Button theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button theme="info" style={btnStyle}>
      Hello World
    </Button>
    <Button theme="danger" style={btnStyle}>
      Hello World
    </Button>
    <Button theme="warning" style={btnStyle}>
      Hello World
    </Button>
  </>
);
```

---

### 形状 <Badge>shape</Badge>

使用`shape`属性去控制按钮的形状:

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Button } from 'toy-ui';

const btnStyle = { margin: '4px 4px' };

export default () => (
  <>
    <Button shape theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button shape="radius" theme="primary" style={btnStyle}>
      Hello World
    </Button>
  </>
);
```

---

### 布局 <Badge>block</Badge>

使用`block`属性可以改变布局的方式

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Button } from 'toy-ui';

const btnStyle = { margin: '4px 4px' };

export default () => (
  <>
    <Button theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button block theme="primary" style={btnStyle}>
      Hello World
    </Button>
  </>
);
```

---

### 行为 <Badge>disabled</Badge>

使用`disabled`属性可以控制按钮是否能触发事件

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Button } from 'toy-ui';

const btnStyle = { margin: '4px 4px' };

export default () => (
  <>
    <Button disabled style={btnStyle}>
      Hello World
    </Button>
    <Button style={btnStyle}>Hello World</Button>
    <Button disabled theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button disabled theme="info" style={btnStyle}>
      Hello World
    </Button>
    <Button theme="info" style={btnStyle}>
      Hello World
    </Button>
    <Button disabled theme="danger" style={btnStyle}>
      Hello World
    </Button>
    <Button theme="danger" style={btnStyle}>
      Hello World
    </Button>
    <Button disabled theme="warning" style={btnStyle}>
      Hello World
    </Button>
    <Button theme="warning" style={btnStyle}>
      Hello World
    </Button>
  </>
);
```

---

### 加载状态 <Badge>loading</Badge>

使用`loading`属性可以是否展示加载中的动画交互效果

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Button } from 'toy-ui';

const btnStyle = { margin: '4px 4px' };

export default () => (
  <>
    <Button loading style={btnStyle}>
      Hello World
    </Button>
    <Button loading theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button loading theme="info" style={btnStyle}>
      Hello World
    </Button>
    <Button loading theme="danger" style={btnStyle}>
      Hello World
    </Button>
    <Button loading theme="warning" style={btnStyle}>
      Hello World
    </Button>
  </>
);
```
