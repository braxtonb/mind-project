import { useReducer } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { LOADING__ALERT } from './AlertContext.types';
import alertReducer from './AlertContext.reducer';
import { createFakeAlert } from '../../mocks/alert-mocks';

describe('AlertContext.reducer', () => {
  it('should initialize alert reducer state', () => {
    const alert = createFakeAlert();
    const initialAlertState = {
      alert,
    };

    act(() => {
      const { result } = renderHook(() =>
        useReducer(alertReducer, initialAlertState),
      );
      const [state] = result.current;

      expect(state).toEqual({ alert });
    });
  });
  it('should dispatch alert action and update state', async () => {
    const initialAlertState = {
      alert: createFakeAlert(),
    };
    const alert = createFakeAlert({
      message: 'Loading...',
      severity: 'loading',
    });

    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useReducer(alertReducer, initialAlertState),
      );
      const [_, dispatch] = result.current;

      dispatch({ type: LOADING__ALERT, payload: alert });
      await waitForNextUpdate();

      // state is not up to date if array destructured
      expect(result.current[0]).toEqual({ alert });
    });
  });
});
