/*
 * @Author: wangzhisen
 * @Date: 2022-09-02 14:13:28
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-09-02 14:28:35
 */
import classNames from 'classNames';

/**
 * 根据组件的属性生成类名
 * 解析规则：传入的键值对，读取键的值为string或为true，生成对应的类名
 * joinClassNamesByProps({disabled:false,theme:"warning"}) -> ''
 * @param props:组件的props
 * @returns string
 *
 */

type JoinOptions = { prefix?: string; extraClassName?: string };

export function joinClassNamesByProps(props: Record<string, any>, options?: JoinOptions) {
  const { prefix = '', extraClassName = '' } = options ?? {};
  const properties = Object.keys(props ?? {}).reduce(
    (total, key: string) => {
      const propValue = props[key]; // 获取值

      let propKey = '';
      if (typeof propValue === 'string') {
        propKey = prefix ? `${prefix}-${key}-${propValue}` : propValue;
      } else {
        propKey = prefix ? `${prefix}-${key}` : key;
      }

      return {
        ...total,
        [propKey]: props[key],
      };
    },
    { [prefix]: true },
  );

  return classNames(properties, extraClassName);
}
