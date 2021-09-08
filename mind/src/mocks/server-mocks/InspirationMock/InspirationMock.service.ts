import type { InspirationType } from '../../../constants/types';

interface GetPaginatedInspirationsArgs {
  page: number;
  limit: number;
  inspirations: InspirationType[];
}

interface RemoveInspirationByIdArgs {
  id: number;
  inspirations: InspirationType[];
}

class FakeInspirationService {
  /**
   * Helper leveraging page and limit to derive list of inspirations on current page
   */
  public getPaginatedInspirations = ({
    page,
    limit,
    inspirations,
  }: GetPaginatedInspirationsArgs): InspirationType[] => {
    const inspirationsPaginated = inspirations.slice(
      (page - 1) * limit,
      page * limit,
    );

    return inspirationsPaginated;
  };

  /**
   * Helper to remove inspiration by id
   */
  public removeInspirationById = ({
    id,
    inspirations,
  }: RemoveInspirationByIdArgs): InspirationType[] => {
    const filteredInspirations = inspirations.filter((insp) => insp.id !== id);

    return filteredInspirations;
  };
}

export default FakeInspirationService;
