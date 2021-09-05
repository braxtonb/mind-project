class ResponseTransformer {
  public static addStatusToResponseJson = async (res: Response) => {
    const data = await res.json();

    return {
      statusCode: res.status,
      data,
    };
  };
}

export default ResponseTransformer;
