import { AppState } from '@@store/types';
import { Middleware } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { Action } from 'redux-actions';

type SubscribeCallback = (payload: any) => void;

interface SubscribeAction {
  type: string;
  callback: SubscribeCallback;
}

interface SubscribeStore {
  subscribeActions: SubscribeAction[];
  addSubscribeAction: (type: string, callback: SubscribeCallback) => () => void;
}

const subscribeStore: SubscribeStore = {
  subscribeActions: [],
  addSubscribeAction(type, callback) {
    const action = {
      type,
      callback,
    };

    this.subscribeActions.push(action);

    return () => {
      const index = this.subscribeActions.findIndex(({ type }) => type === action.type);
      this.subscribeActions.splice(index, 1);
    };
  },
};

export const actionMiddleware: Middleware = () => (next) => (action) => {
  next(action);

  const { type } = action as Action<any>;

  subscribeStore.subscribeActions.forEach((item) => {
    if (item.type === type) {
      item.callback(action);
    }
  });
};

export const useActionSubscribe = <T>({ type, callback }: { type: string; callback: (payload: T) => void }) => {
  useEffect(() => {
    const unsubscribe = subscribeStore.addSubscribeAction(type, callback);

    return unsubscribe;
  }, [type, callback]);
};
