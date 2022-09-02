/*
 * @Author: wangzhisen
 * @Date: 2022-09-02 14:38:54
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-09-02 16:34:27
 *
 * 抽屉组件
 */
import './index.less';
import React, { SyntheticEvent, useRef } from 'react';
import type { DrawerProps } from './typing';
import { joinClassNamesByProps } from '../utils/className';
import Overlay from '../Overlay';

const COMPONENT_PREFIX = 'toy-drawer';

const defaultProps: Partial<DrawerProps> = {
  visible: false,
  direction: 'right',
};

export default function Drawer(props: DrawerProps) {
  const assignProps = { ...defaultProps, ...props };
  const { visible, direction, children, onClose } = assignProps;

  console.log('assignProps.direction', assignProps.direction);
  const componentClass = joinClassNamesByProps(
    { visible, direction },
    { prefix: COMPONENT_PREFIX },
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // 如果点击的区域不在遮罩内，不触发onClose
  function handleClose(event: SyntheticEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement;
    if (target && containerRef.current && containerRef.current.contains(target)) {
      return;
    }
    onClose?.();
  }

  return (
    <Overlay
      visible={assignProps.visible}
      maskCloseable={assignProps.maskCloseable}
      direction={assignProps.direction}
      onClose={handleClose}
    >
      <div className={componentClass} ref={containerRef}>
        {children}
      </div>
    </Overlay>
  );
}
