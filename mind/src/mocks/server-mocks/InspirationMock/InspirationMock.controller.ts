import {
  RestRequest,
  DefaultRequestBody,
  RequestParams,
  ResponseComposition,
  RestContext,
} from 'msw';
import { createFakeInspirationList } from '../../inspiration-mocks';
import FakeInspirationService from './InspirationMock.service';

import type { InspirationType } from '../../../constants/types';

class FakeInspirationController {
  private inspirationService = new FakeInspirationService();
  private inspirations: InspirationType[] = createFakeInspirationList(14);

  public handleGetInspirations = (
    req: RestRequest<DefaultRequestBody, RequestParams>,
    res: ResponseComposition<any>,
    ctx: RestContext,
  ) => {
    const paginatedInspirations = this.inspirationService.getPaginatedInspirations(
      {
        page: parseInt(req.url.searchParams.get('_page') ?? '1', 10),
        limit: parseInt(req.url.searchParams.get('_limit') ?? '12', 10),
        inspirations: this.inspirations,
      },
    );

    return res(
      ctx.set('x-total-count', this.inspirations.length.toString()),
      ctx.json(paginatedInspirations),
    );
  };

  public handleDeleteInspirationById = (
    req: RestRequest<DefaultRequestBody, RequestParams>,
    res: ResponseComposition<any>,
    ctx: RestContext,
  ) => {
    this.inspirations = this.inspirationService.removeInspirationById({
      id: req.params.id,
      inspirations: this.inspirations,
    });

    return res(ctx.status(200), ctx.json({}));
  };
}

export default FakeInspirationController;
