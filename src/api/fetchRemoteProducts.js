// Remote fetch helper for the mockapi provided by the user
const DEFAULT_BASE = 'https://69171cada7a34288a27f9293.mockapi.io/apis/bmw';

// Use Vite env variable when available: import.meta.env.VITE_BASE_URL
const getBase = () => {
  try {
    const envUrl = import.meta?.env?.VITE_BASE_URL;
    return envUrl || DEFAULT_BASE;
  } catch {
    return DEFAULT_BASE;
  }
};

export const fetchRemoteProducts = async () => {
  const BASE = getBase();
  try {
    const res = await fetch(BASE, { cache: 'no-store' });
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    // Ensure items have expected shape; map remote fields if necessary
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.warn('fetchRemoteProducts failed', err);
    return [];
  }
};

export default fetchRemoteProducts;
