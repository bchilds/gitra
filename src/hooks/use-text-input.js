const useTextInput = (setStateFn) => (e) => {
  const newValue = e?.target?.value ?? '';
  setStateFn(newValue);
};

export default useTextInput;
