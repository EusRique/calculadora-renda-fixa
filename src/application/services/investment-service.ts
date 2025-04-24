import { getSelicRate } from '@/domain/usecases/get-selic-rate';
import { fecthSelic } from '@/infrastructure/api/selic-api';
import {
  getCachedSelic,
  setCachedSelic,
} from '@/infrastructure/cache/selic-cache';

export const loadSelicRate = async (): Promise<number> => {
  const cached = getCachedSelic();
  if (cached !== null) return cached;

  const selic = await getSelicRate(fecthSelic);
  setCachedSelic(selic);
  return selic;
};
