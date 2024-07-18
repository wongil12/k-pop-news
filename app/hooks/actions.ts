import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { useState } from 'react';

export const useActionFlag = (type: string) => {
  const [flag, setFlag] = useState<boolean>(false);

  const actionKey = type.replace(/(.+)Request$/, '$1');

  useActionSubscribe({
    type,
    callback: () => {
      setFlag(true);
    },
  });

  useActionSubscribe({
    type: `${actionKey}Failure`,
    callback: () => {
      setFlag(false);
    },
  });

  useActionSubscribe({
    type: `${actionKey}Success`,
    callback: () => {
      setFlag(false);
    },
  });

  return flag;
};
