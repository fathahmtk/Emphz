import { useSyncExternalStore } from 'react';
import { subscribe, getSnapshot } from '../api';

/**
 * A hook that provides a reactive, up-to-date snapshot of the entire product catalog.
 * It subscribes to the central data store and re-renders the component when data changes.
 */
export const useProductCatalog = () => {
  const catalog = useSyncExternalStore(subscribe, getSnapshot);
  return catalog;
};
