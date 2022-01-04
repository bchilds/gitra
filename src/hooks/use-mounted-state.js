import { useEffect, useRef } from 'react';

const useMountedState = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export default useMountedState;

