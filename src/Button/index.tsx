/*
 * @Author: wangzhisen
 * @Date: 2022-09-01 16:28:18
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-09-01 16:32:25
 *
 * 按钮组件
 */
import './index.less';
import React from 'react';
import type { ButtonProps } from './typing';
import classNames from 'classnames';

const COMPONENT_PREFIX = 'toy-btn';

function joinClassNames(props: Record<string, any>, prefix?: string) {
  const properties = prefix
    ? Object.keys(props).reduce(
        (total, key: string) => {
          const propValue = props[key];
          const propKey =
            typeof propValue === 'string'
              ? prefix
                ? `${prefix}-${key}-${propValue}`
                : key
              : prefix
              ? `${prefix}-${key}`
              : key;
          return {
            ...total,
            [propKey]: props[key],
          };
        },
        { [prefix]: true },
      )
    : props;

  return classNames(properties);
}

const defaultProps: Partial<ButtonProps> = {
  size: 'md',
  theme: 'default',
  shape: 'default',
  block: false,
  disabled: false,
  loading: false,
};

export default function Button(props: ButtonProps) {
  const assignProps = {
    ...defaultProps,
    ...props,
  };

  const { children, style, ...restProps } = assignProps;

  const componentClassNames = joinClassNames(restProps, COMPONENT_PREFIX);

  return (
    <button className={componentClassNames} style={style}>
      {children}
    </button>
  );
}
