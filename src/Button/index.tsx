/*
 * @Author: wangzhisen
 * @Date: 2022-09-01 16:28:18
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-09-02 14:30:02
 *
 * 按钮组件
 */
import './index.less';
import React from 'react';
import type { ButtonProps } from './typing';
import { joinClassNamesByProps } from '../utils/className';

const COMPONENT_PREFIX = 'toy-btn';

const defaultProps: Partial<ButtonProps> = {
  size: 'md',
  theme: 'default',
  shape: 'default',
  block: false,
  disabled: false,
  loading: false,
  classNames: '',
};

export default function Button(props: ButtonProps) {
  const assignProps = {
    ...defaultProps,
    ...props,
  };

  const {
    children,
    style,
    classNames,
    theme,
    size,
    block,
    disabled,
    loading,
    onClick,
    shape,
    className,
    ...restProps
  } = assignProps;

  const componentClassNames = joinClassNamesByProps(
    {
      theme,
      size,
      block,
      disabled,
      loading,
      shape,
    },
    { prefix: COMPONENT_PREFIX, extraClassName: className },
  );

  return (
    <button className={componentClassNames} style={style} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
}
