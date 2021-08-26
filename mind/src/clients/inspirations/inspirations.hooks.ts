import { useMutation, useQuery } from 'react-query';
import { InspirationType } from '../../constants/types';
import InspirationClient from './inspirations.client';

export const useInspirationById = (id: number, baseURL?: string) => {
  return useQuery(['/inspirations/', id, baseURL], () =>
    InspirationClient.getInspirationById(id, baseURL),
  );
};

export const useInspirations = (baseURL?: string) => {
  return useQuery(['/inspirations/', baseURL], () =>
    InspirationClient.getInspirations({ baseURL }),
  );
};

export const usePaginatedInspirations = (page: number, baseURL?: string) => {
  return useQuery(
    ['/inspirations/', page, baseURL],
    () => InspirationClient.getInspirations({ page, baseURL }),
    { keepPreviousData: true },
  );
};

export const useAddInspiration = () => {
  return useMutation((inspiration: InspirationType) =>
    InspirationClient.addInspiration(inspiration),
  );
};
