/*
 * @Author: wangzhisen
 * @Date: 2022-09-02 14:39:36
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-09-02 15:37:04
 *
 * DrawerProps:Drawer组件的类型定义
 */

import type { ReactNode } from 'react';

type DrawerDirectionType = 'top' | 'right' | 'bottom' | 'left';

export type DrawerProps = {
  /**是否显示抽屉 */
  visible?: boolean;
  /**弹出的位置 */
  direction?: DrawerDirectionType;
  /**点击遮罩层是否可以关闭抽屉 */
  maskCloseable?: boolean;
  /**子元素 */
  children?: ReactNode;
  /**关闭弹窗组件 */
  onClose?: () => void;
};
