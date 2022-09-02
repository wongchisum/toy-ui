/*
 * @Author: wangzhisen
 * @Date: 2022-09-02 15:15:54
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-09-02 16:24:22
 *
 * 遮罩层
 */
import React from 'react';
import type { SyntheticEvent } from 'react';
import './index.less';
import { joinClassNamesByProps } from '../utils/className';
import type { OverlayProps } from './types';

const COMPONENT_PREFIX = 'toy-overlay';

const defaultProps: Partial<OverlayProps> = {
  visible: false,
  direction: 'right',
  maskCloseable: true,
};

function Overlay(props: OverlayProps) {
  const assignProps = { ...defaultProps, ...props };
  const { visible, maskCloseable, direction, children } = assignProps;

  const componentProps = joinClassNamesByProps(
    { visible, maskCloseable, direction },
    { prefix: COMPONENT_PREFIX },
  );

  /**遮罩点击事件 */
  function handleCloseOverlay(event: SyntheticEvent<HTMLDivElement>) {
    const { onClose } = assignProps;
    typeof onClose === 'function' && onClose(event);
  }

  return (
    <div className={componentProps} onClick={handleCloseOverlay}>
      {children}
    </div>
  );
}

export default Overlay;
