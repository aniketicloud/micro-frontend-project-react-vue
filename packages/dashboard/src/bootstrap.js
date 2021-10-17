import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// !! Not used nested routing in Dashboard
// !! But if used then be careful about Roouting in microfrontend
// !? currently I used BrowserHistory in Host, MemoryHistory in Remotes

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
