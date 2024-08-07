import axios from "axios";
import localforage from "localforage";
import { PageData } from "../models/types";
// Configurer l'instance axios
const api = axios.create({
  baseURL:
    "http://192.168.1.140/wordpress-6.5.3/wordpress/wp-json/vividmind/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 heure en millisecondes

interface CachedData<T> {
  timestamp: number;
  data: T;
}

// Fonction pour récupérer les données avec cache
const fetchWithCache = async <T>(key: string, url: string): Promise<T> => {
  const cachedData = await localforage.getItem<CachedData<T>>(key);
  const now = Date.now();

  if (cachedData && now - cachedData.timestamp < CACHE_EXPIRATION_TIME) {
    return cachedData.data;
  }

  const response = await api.get(url);
  const data: T = response.data;
  await localforage.setItem(key, { timestamp: now, data });
  return data;
};

// Fonction pour effacer le cache
const clearCache = async () => {
  await localforage.clear();
};

// Fonctions pour récupérer les différentes entités
const getPagesWithTeams = async (): Promise<PageData[]> => {
  return await fetchWithCache<PageData[]>("pages-with-teams", "/pages-teams");
};

const getPagesWithServices = async (): Promise<PageData[]> => {
  return await fetchWithCache<PageData[]>(
    "pages-with-services",
    "/pages-services"
  );
};

const getPagesWithArticles = async (): Promise<PageData[]> => {
  return await fetchWithCache<PageData[]>(
    "pages-with-articles",
    "/pages-with-articles"
  );
};

const getPagesWithJobPositions = async (): Promise<PageData[]> => {
  return await fetchWithCache<PageData[]>(
    "pages-with-job-positions",
    "/pages-with-job-positions"
  );
};

const getPagesWithFAQs = async (): Promise<PageData[]> => {
  return await fetchWithCache<PageData[]>(
    "pages-with-faqs",
    "/pages-with-faqs"
  );
};

export {
  getPagesWithTeams,
  getPagesWithServices,
  getPagesWithArticles,
  getPagesWithJobPositions,
  getPagesWithFAQs,
  clearCache,
};
