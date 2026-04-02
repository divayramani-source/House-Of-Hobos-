import { createClient } from '@base44/sdk';
const appId = import.meta.env.VITE_BASE44_APP_ID;
const token = import.meta.env.VITE_BASE44_APP_KEY; 
const appBaseUrl = import.meta.env.VITE_BASE44_APP_BASE_URL;
export const base44 = createClient({
  appId,
  token,
  serverUrl: "",
  requiresAuth: false,
  appBaseUrl,
});
