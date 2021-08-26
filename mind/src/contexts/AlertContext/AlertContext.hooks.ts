import { useCallback, useContext, useMemo } from 'react';
import AlertContext from './AlertContext.context';
import {
  AlertDispatcher,
  AlertInspirationDispatcher,
} from './AlertContext.dispatchers';

/**
 * Dispatchers are memoized (useCallback)
 * Classes are memoized (useMemo)
 * This is to ensure if a dispatcher is used
 * inside of a useEffect's dependencies list
 * it will have the same reference for each render
 * to reduce the number of rerenders
 */

const _useAlertBaseContext = () => {
  const { alertState, alertDispatch } = useContext(AlertContext);
  const memoAlertDispatch = useCallback(alertDispatch, [alertDispatch]);

  return {
    alertState,
    alertDispatch: memoAlertDispatch,
  };
};

// generic alert dispatcher
export const useAlertContext = () => {
  const { alertState, alertDispatch } = _useAlertBaseContext();
  const dispatcher = useMemo(
    () => new AlertDispatcher(alertDispatch),
    [alertDispatch],
  );

  return {
    alertState,
    alertDispatch: dispatcher,
  };
};

// Inspiration specific alert dispatcher
export const useAlertInspirationContext = () => {
  const { alertState, alertDispatch } = _useAlertBaseContext();
  const dispatcher = useMemo(
    () => new AlertInspirationDispatcher(alertDispatch),
    [alertDispatch],
  );

  return {
    alertState,
    alertDispatch: dispatcher,
  };
};
