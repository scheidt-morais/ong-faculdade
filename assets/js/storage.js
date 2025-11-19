
const STORAGE_KEY = 'ongesperanca_data_v1';

export const Storage = {
  saveForm: (obj) => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    data.push({ ...obj, createdAt: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },
  getAll: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  clearAll: () => localStorage.removeItem(STORAGE_KEY)
};
