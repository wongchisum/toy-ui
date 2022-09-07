/*
 * @Author: wangzhisen
 * @Date: 2022-09-02 15:15:54
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-09-02 16:24:22
 *
 * 遮罩层
 */
import React, { useLayoutEffect } from 'react';
import type { SyntheticEvent } from 'react';
import './index.less';
import { joinClassNamesByProps } from '../utils/className';
import type { OverlayProps } from './types';
import { createPortal } from 'react-dom';

const COMPONENT_PREFIX = 'toy-overlay';

const defaultProps: Partial<OverlayProps> = {
  visible: false,
  direction: 'right',
  maskCloseable: true,
};

const scrollHandler = (event: Event) => {
  event.stopPropagation();
};

function Overlay(props: OverlayProps) {
  const assignProps = { ...defaultProps, ...props };
  const { visible, maskCloseable, direction, children } = assignProps;

  const componentProps = joinClassNamesByProps(
    { visible, maskCloseable, direction },
    { prefix: COMPONENT_PREFIX },
  );

  /**锁定滚动 */
  function handleLockScroll() {
    window.document.body.addEventListener('scroll', scrollHandler);
    return () => window.document.body.removeEventListener('scroll', scrollHandler);
  }

  useLayoutEffect(() => {
    const removeHandler = handleLockScroll();

    return () => {
      removeHandler?.();
    };
  }, []);

  /**遮罩点击事件 */
  function handleCloseOverlay(event: SyntheticEvent<HTMLDivElement>) {
    const { onClose } = assignProps;
    typeof onClose === 'function' && onClose(event);
  }

  return createPortal(
    <div className={componentProps} onClick={handleCloseOverlay}>
      {children}
    </div>,
    document.body,
  );
}

export default Overlay;
