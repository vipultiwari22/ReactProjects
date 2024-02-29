function useDebounce(cb, dealy = 500) {
  let timerId;
  return (...args) => {
    clearInterval(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, dealy);
  };
}

export default useDebounce;
