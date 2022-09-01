## Button

> 用于触发交互事件（点击）

### 尺寸

使用`size`属性去控制按钮的尺寸大小:

```tsx
import React from 'react';
import { Button } from 'toy-ui';

const btnStyle = { margin: '4px 4px' };

export default () => (
  <>
    <Button size="sm" theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button size="md" theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button size="lg" theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button size="xl" theme="primary" style={btnStyle}>
      Hello World
    </Button>
  </>
);
```

---

### 主题

使用`theme`属性去控制按钮的主题配色

```tsx
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

### 形状

使用`shape`属性去控制按钮的形状:

```tsx
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

### 布局

使用`block`属性可以改变布局的方式

```tsx
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

### 行为

使用`disabled`属性可以控制按钮是否能触发事件

```tsx
import React from 'react';
import { Button } from 'toy-ui';

const btnStyle = { margin: '4px 4px' };

export default () => (
  <>
    <Button disabled theme="primary" style={btnStyle}>
      Hello World
    </Button>
    <Button theme="primary" style={btnStyle}>
      Hello World
    </Button>
  </>
);
```

---

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
