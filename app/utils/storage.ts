import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (
  key: string,
  value: string,
  options?: {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
  }
) => {
  try {
    await AsyncStorage.setItem(key, value);
    options?.onSuccess?.();
    return true;
  } catch (e) {
    console.log(e);
    options?.onError?.(e as Error);
    return false;
  }
};

export const getItem = async (
  key: string,
  options?: {
    onSuccess?: (value: string | null) => void;
    onError?: (error: Error) => void;
  }
) => {
  try {
    const value = await AsyncStorage.getItem(key);
    options?.onSuccess?.(value);
    return value;
  } catch (e) {
    options?.onError?.(e as Error);
    return null;
  }
};
