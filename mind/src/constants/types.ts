import {
  SUCCESS__ALERT,
  ERROR__ALERT,
  LOADING__ALERT,
} from '../contexts/AlertContext/AlertContext.types';
import { INSPIRATION_MEDIA_TYPE } from './inspiration-contants';

/**
 * Inspiration
 */

// shared
export interface InspirationType {
  id?: string;
  name: string;
  creatorName: string;
  url: string;
  mediaType: INSPIRATION_MEDIA_TYPE;
  mediaURL: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Alert
 */

// shared
export interface Alert {
  id: number;
  message: string;
  severity: string;
}

// Actions
interface ReducerActionSuccessInspiration {
  type: typeof SUCCESS__ALERT;
  payload: Alert;
}

interface ReducerActionLoadingInspiration {
  type: typeof LOADING__ALERT;
  payload: Alert;
}

interface ReducerActionErrorInspiration {
  type: typeof ERROR__ALERT;
  payload: Alert;
}

export type AlertAction =
  | ReducerActionSuccessInspiration
  | ReducerActionLoadingInspiration
  | ReducerActionErrorInspiration;

// State
export interface AlertState {
  alert: Alert;
}

// Context
export interface AlertContextType {
  alertState: AlertState;
  alertDispatch: React.Dispatch<AlertAction>;
}
