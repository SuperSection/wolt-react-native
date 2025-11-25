import { createMMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

const storage = createMMKV();

const zustandStorage: StateStorage = {
    setItem: (key, value) => storage.set(key, value),
    getItem: (key) => storage.getString(key) ?? null,
    removeItem: (key) => storage.remove(key),
};

export default zustandStorage;
