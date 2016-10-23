// Import Angular dependencies
import {bootstrap, provide} from 'angular2/angular2';

// Import Component Router dependencies
import {
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';

// Import application component
import {App} from './app/app.component';

// Bootstrap the application
bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => console.error(err));