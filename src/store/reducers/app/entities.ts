export interface AppState {
  status: 'idle' | 'loading' | 'failed';
  error?: unknown;
}
