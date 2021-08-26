import { InspirationType } from '../../constants/types';
import { API_URL } from '../../constants/client-constants';
import { INSPIRATION_LIST_PAGE_SIZE } from '../../constants/inspiration-contants';

interface GetInspirationsArgs {
  page?: number;
  baseURL?: string;
}

interface GetInspirationsResponse {
  count: number;
  inspirations: InspirationType[];
}

class InspirationClient {
  private static DEFAULT_BASE_URL = API_URL;

  private static processGetInspirationRes = async (res: Response) => {
    const { headers } = res;
    const count = headers.has('x-total-count')
      ? headers.get('x-total-count')
      : 0;
    // Note: if json() is used instead of res.json() the following error
    // will be thrown:
    // TypeError: Failed to execute 'json' on 'Response': Illegal invocation
    const inspirations = (await res.json()) as unknown as InspirationType[];

    return {
      count: count === null ? 0 : +count,
      inspirations,
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
      const response = fetch(URL).then(
        InspirationClient.processGetInspirationRes,
      );

      return response;
    } catch (error) {
      console.error(`[getInspirations] ${error.message}`);
      throw error;
    }
  };

  public static getInspirationById = async (
    id: number,
    baseURL = InspirationClient.DEFAULT_BASE_URL,
  ) => {
    try {
      const URL = `${baseURL}/inspirations/${id}`;
      const response = fetch(URL).then((res) => res.json());

      return response;
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
      if (!inspiration) {
        throw new Error('[addInspiration] missing inspiration argument');
      }

      const URL = `${baseURL}/inspirations/`;
      const body = JSON.stringify({ ...inspiration });
      const fetchConfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      };
      const response = fetch(URL, fetchConfig).then((res) => res.json());

      return response;
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
      const response = fetch(URL, fetchConfig).then((res) => res.json());

      return response;
    } catch (error) {
      console.error(`[updateInspirationById] ${error.message}`);
      throw error;
    }
  };

  public static removeInspirationById = async (
    inspirationId: number,
    baseURL = InspirationClient.DEFAULT_BASE_URL,
  ) => {
    try {
      if (!inspirationId) {
        throw new Error('[removeInspirationById] missing inspiration ID');
      }

      const URL = `${baseURL}/inspirations/${inspirationId}`;
      const fetchConfig = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = fetch(URL, fetchConfig).then((res) => res.json());

      return response;
    } catch (error) {
      console.error(`[removeInspirationById] ${error.message}`);
      throw error;
    }
  };
}

export default InspirationClient;
