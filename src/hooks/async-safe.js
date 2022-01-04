import { useCallback, useReducer, useState } from 'react';

import useMountedState from './use-mounted-state';

const useAsyncSafeState = (...args) => {
  const isMounted = useMountedState();
  const [value, setValue] = useState(...args);
  const asyncSafeSetValue = useCallback((newValue) => {
    if (isMounted.current) {
      return setValue(newValue);
    }
  }, []);

  return [value, asyncSafeSetValue];
};

const useAsyncSafeReducer = (...args) => {
  const isMounted = useMountedState();
  const [state, dispatch] = useReducer(...args);
  const asyncSafeDispatch = useCallback((action) => {
    if (isMounted.current) {
      return dispatch(action);
    }
  }, []);

  return [state, asyncSafeDispatch];
};

export {
  useAsyncSafeReducer,
  useAsyncSafeState,
};
