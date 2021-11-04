import { rest } from 'msw';
import { API_URL } from '../../../constants/client-constants';
import FakeInspirationController from './InspirationMock.controller';

class FakeInspirationRouter {
  private inspirationController = new FakeInspirationController();

  private DEFAULT_BASE_URL = API_URL;

  public createGetInspirationsRoute = () => {
    const url = `${this.DEFAULT_BASE_URL}/inspirations`;

    return rest.get(url, this.inspirationController.handleGetInspirations);
  };

  public createDeleteInspirationByIdRoute = () => {
    const url = `${this.DEFAULT_BASE_URL}/inspirations/:id`;

    return rest.delete(
      url,
      this.inspirationController.handleDeleteInspirationById,
    );
  };
}

export default FakeInspirationRouter;
