/*
 * @Author: wangzhisen
 * @Date: 2022-09-01 16:23:58
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-09-02 12:07:21
 *
 * Button组件的类型定义
 */
import type { CSSProperties, ReactNode, SyntheticEvent, ButtonHTMLAttributes } from 'react';

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * ButtonSizeType: 按钮组件的尺寸类型
 *
 * 默认为md
 * xl:特大
 * lg:大
 * md:中
 * sm:小
 */
export type ButtonSizeType = 'xl' | 'lg' | 'md' | 'sm';

/**
 * ButtonShareType:按钮的形状 默认为default
 * radius:边缘带圆角矩形
 * default:常规，不带圆角矩形
 */
export type ButtonShareType = 'radius' | 'default';

/**
 * ButtonThemeType: 按钮组件
 *
 * 默认为default
 * default:常规按钮
 * primary:主要用于加重展示效果
 * info:主要用于展示信息
 * danger：主要用于展示危险信息
 * warning：主要用于展示警告信息
 */
export type ButtonThemeType = 'primary' | 'info' | 'danger' | 'warning' | 'default';

export type ButtonProps = NativeButtonProps & {
  /**子元素 */
  children?: ReactNode;
  /**按钮尺寸*/
  size?: ButtonSizeType;
  /**按钮主题色 */
  theme?: ButtonThemeType;
  /**布局,默认为false，行内布局，block为true时使用块状布局*/
  block?: false;
  /**是否禁用按钮，默认为false,不禁用按钮 */
  disabled?: boolean;
  /**是否显示加载效果,加载效果无法触发按钮点击事件 */
  loading?: boolean;
  /**形状 */
  shape?: ButtonShareType;
  /**样式效果 */
  style?: CSSProperties;
  /**额外的css类型 */
  classNames?: string;
  /**点击的回调函数 */
  onClick?: (event?: SyntheticEvent<HTMLButtonElement>) => void;
};
