export const sizeValueGenerator = (value: number | string) => (typeof value === 'string' ? value : `${value}px`);
