/*
 * @Author: wangzhisen
 * @Date: 2022-09-02 15:18:15
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-09-02 16:24:18
 *
 * Overlay组件的属性定义
 */

import type { ReactNode, SyntheticEvent } from 'react';

type OverlayDirectionType = 'top' | 'right' | 'bottom' | 'left';

export type OverlayProps = {
  /**遮罩是否可见 */
  visible?: boolean;
  /**遮罩是否支持点击关闭 */
  maskCloseable?: boolean;
  /**子元素显示的位置,默认显示右侧 */
  direction?: OverlayDirectionType;
  /**子元素 */
  children?: ReactNode;
  /**点击遮罩层触发的回调事件 */
  onClose?: (event: SyntheticEvent<HTMLDivElement>) => void;
};
