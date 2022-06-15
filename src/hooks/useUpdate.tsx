import {useEffect, useRef} from 'react';


export const useUpdate = (fn: () => void, dependency: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
    // eslint-disable-next-line
  }, [fn,dependency]); // 不可变数据
  //让标签和记账数据变成响应式
};