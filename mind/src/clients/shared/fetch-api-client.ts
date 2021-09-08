import ResponseTransformer from './response-transformer';

class FetchApiClient {
  /**
   * Adds status to the response json and throws an error
   * for any non 200 level statuc code
   */
  public static request = async (URL: string, init?: RequestInit) => {
    const response = await fetch(URL, init).then(
      ResponseTransformer.addStatusToResponseJson,
    );
    FetchApiClient.validateResponse(response.statusCode);

    return response;
  };

  /**
   * for simplicity sake, consider any non 200 level status code to be an error
   * if there was no json-server integration, the message passed to the Error
   * would come from the API
   */
  public static validateResponse = (statusCode: number) => {
    // if you want you could do response.statusCode >= 200 && response.statusCode < 300
    if (Math.floor(statusCode / 100) !== 2) {
      throw new Error('Unable to complete request');
    }
  };
}

export default FetchApiClient;
