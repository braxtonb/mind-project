import { rest } from 'msw';
import { createFakeInspirationList } from '../mocks/inspiration-mocks';
import { API_URL } from '../constants/client-constants';

import type { InspirationType } from '../constants/types';

export class FakeInspirationRequest {
  private static DEFAULT_BASE_URL = API_URL;
  private static inspirations: InspirationType[] = createFakeInspirationList(
    14,
  );

  public static fakeGetInspirationsRequest() {
    const url = `${FakeInspirationRequest.DEFAULT_BASE_URL}/inspirations`;

    return rest.get(url, (req, res, ctx) => {
      // parse query parameters
      const page = parseInt(req.url.searchParams.get('_page') ?? '1', 10);
      const limit = parseInt(req.url.searchParams.get('_limit') ?? '12', 10);
      // number of total inspirations, used to set a total count custom header
      const { length } = FakeInspirationRequest.inspirations;

      return res(
        ctx.set('x-total-count', length.toString()),
        ctx.json(FakeInspirationRequest.getPaginatedInspirations(page, limit)),
      );
    });
  }

  /**
   * Helper leveraging page and limit to derive list of inspirations on current page
   */
  private static getPaginatedInspirations(
    page: number,
    limit: number,
  ): InspirationType[] {
    const inspirationsPaginated = FakeInspirationRequest.inspirations.slice(
      (page - 1) * limit,
      page * limit,
    );

    return inspirationsPaginated;
  }

  public static fakeRemoveInspirationByIdRequest() {
    const url = `${FakeInspirationRequest.DEFAULT_BASE_URL}/inspirations/:id`;

    return rest.delete(url, (req, res, ctx) => {
      // remove the inspiration by id
      FakeInspirationRequest.removeInspirationById(parseInt(req.params.id, 10));

      return res(ctx.status(200), ctx.json({}));
    });
  }

  /**
   * Helper to remove inspiration by id
   */
  private static removeInspirationById(id: number): void {
    const { inspirations } = FakeInspirationRequest;
    const filteredInspirations = inspirations.filter((insp) => insp.id !== id);

    FakeInspirationRequest.inspirations = filteredInspirations;
  }
}