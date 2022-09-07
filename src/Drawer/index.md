## Drawer

> 在当前页面打开一个新的空间

### 显隐 <Badge>visible</Badge>

```tsx
/**
 * background: '#f6f7f9'
 */
import React, { useState, useCallback } from 'react';
import { Button, Drawer } from 'toy-ui';

export default () => {
  const [visible, setVisible] = useState(false);
  const handleToggle = useCallback(() => {
    setVisible((prevState: boolean) => !prevState);
  }, []);
  return (
    <>
      <Button size="sm" theme="primary" onClick={handleToggle}>
        Open
      </Button>
      <Drawer visible={visible} onClose={handleToggle}>
        <div>内容</div>
      </Drawer>
    </>
  );
};
```

---

### 方向 <Badge>direction</Badge>

```tsx
/**
 * background: '#f6f7f9'
 */
import React, { useState, useCallback } from 'react';
import { Button, Drawer } from 'toy-ui';

const btnStyle = { margin: '8px 8px' };

type DirectionType = 'top' | 'right' | 'bottom' | 'left';

export default () => {
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<DirectionType>('right');
  const handleToggle = useCallback(() => {
    setVisible((prevState: boolean) => !prevState);
  }, []);

  const handleOpen = (value: DirectionType) => {
    setDirection(value);
    handleToggle();
  };
  return (
    <>
      <Button size="sm" theme="primary" style={btnStyle} onClick={() => handleOpen('top')}>
        Top
      </Button>
      <Button size="sm" theme="primary" style={btnStyle} onClick={() => handleOpen('right')}>
        Right
      </Button>
      <Button size="sm" theme="primary" style={btnStyle} onClick={() => handleOpen('bottom')}>
        Bottom
      </Button>
      <Button size="sm" theme="primary" style={btnStyle} onClick={() => handleOpen('left')}>
        Left
      </Button>
      <Drawer visible={visible} direction={direction} onClose={handleToggle}>
        <div>内容</div>
      </Drawer>
    </>
  );
};
```

---

### 尺寸 <Badge>width</Badge> <Badge>height</Badge>

通过`width`以及`height`配置可以调整抽屉容器的尺寸

```tsx
/**
 * background: '#f6f7f9'
 */
import React, { useState, useCallback } from 'react';
import { Button, Drawer } from 'toy-ui';

const btnStyle = { margin: '8px 8px' };

export default () => {
  const [visible, setVisible] = useState(false);
  const handleToggle = useCallback(() => {
    setVisible((prevState: boolean) => !prevState);
  }, []);

  return (
    <>
      <Button size="sm" theme="primary" style={btnStyle} onClick={handleToggle}>
        Left
      </Button>
      <Drawer visible={visible} direction="left" width="50%" onClose={handleToggle}>
        <div>内容</div>
      </Drawer>
    </>
  );
};
```
