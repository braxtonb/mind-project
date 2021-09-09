import { InspirationType } from '../../constants/types';
import { API_URL } from '../../constants/client-constants';
import { INSPIRATION_LIST_PAGE_SIZE } from '../../constants/inspiration-contants';
import FetchApiClient from '../shared/fetch-api-client';

export interface GetInspirationsArgs {
  page?: number;
  baseURL?: string;
}

interface GetInspirationsResponse {
  count: number;
  inspirations: InspirationType[];
}

class InspirationClient {
  private static DEFAULT_BASE_URL = API_URL;

  private static processGetInspirationsRes = async (res: Response) => {
    FetchApiClient.validateResponse(res.status);

    const { headers } = res;
    const count = headers.has('x-total-count')
      ? headers.get('x-total-count')
      : 0;
    // Note: if json() is used instead of res.json() the following error
    // will be thrown:
    // TypeError: Failed to execute 'json' on 'Response': Illegal invocation
    const inspirations = await res.json();

    return {
      count: count === null ? 0 : +count,
      inspirations: inspirations?.data ?? inspirations as InspirationType[],
    };
  };

  public static getInspirations = async ({
    page = 1,
    baseURL = InspirationClient.DEFAULT_BASE_URL,
  }: GetInspirationsArgs): Promise<GetInspirationsResponse> => {
    try {
      const queryParams = {
        _page: `${page}`,
        _limit: `${INSPIRATION_LIST_PAGE_SIZE}`,
      };
      const search = new URLSearchParams(queryParams);
      const URL = `${baseURL}/inspirations?${search.toString()}`;
      const response = await fetch(URL).then(
        InspirationClient.processGetInspirationsRes,
      );

      return response;
    } catch (error) {
      console.error(`[getInspirations] ${error.message}`);
      throw error;
    }
  };

  public static getInspirationById = async (
    id: string,
    baseURL = InspirationClient.DEFAULT_BASE_URL,
  ) => {
    try {
      const URL = `${baseURL}/inspirations/${id}`;
      const { data } = await FetchApiClient.request(URL);

      return data;
    } catch (error) {
      console.error(`[getInspirationById] ${error.message}`);
      throw error;
    }
  };

  public static addInspiration = async (
    inspiration: InspirationType,
    baseURL = InspirationClient.DEFAULT_BASE_URL,
  ) => {
    try {
      const URL = `${baseURL}/inspirations`;
      const body = JSON.stringify({ ...inspiration });
      const fetchConfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      };
      const { data } = await FetchApiClient.request(URL, fetchConfig);

      return data;
    } catch (error) {
      console.error(`[addInspiration] ${error.message}`);
      throw error;
    }
  };

  public static updateInspirationById = async (
    inspiration: InspirationType,
    baseURL = InspirationClient.DEFAULT_BASE_URL,
  ) => {
    try {
      if (!inspiration?.id) {
        throw new Error('[updateInspirationById] missing inspiration ID');
      }

      const URL = `${baseURL}/inspirations/${inspiration.id}`;
      const body = JSON.stringify({ ...inspiration });
      const fetchConfig = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      };
      const { data } = await FetchApiClient.request(URL, fetchConfig);

      return data;
    } catch (error) {
      console.error(`[updateInspirationById] ${error.message}`);
      throw error;
    }
  };

  public static removeInspirationById = async (
    id: string,
    baseURL = InspirationClient.DEFAULT_BASE_URL,
  ) => {
    try {
      if (!id) {
        throw new Error('[removeInspirationById] missing inspiration ID');
      }

      const URL = `${baseURL}/inspirations/${id}`;
      const fetchConfig = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await FetchApiClient.request(URL, fetchConfig);

      return data;
    } catch (error) {
      console.error(`[removeInspirationById] ${error.message}`);
      throw error;
    }
  };
}

export default InspirationClient;
