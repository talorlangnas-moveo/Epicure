export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): [(...args: Parameters<T>) => void, () => void] {
  let timer: ReturnType<typeof setTimeout>;
  
  const debouncedFn = (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };

  const clear = () => {
    clearTimeout(timer);
  };

  return [debouncedFn, clear];
}
  