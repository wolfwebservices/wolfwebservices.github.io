import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
/* Here are declared the components */
import {InicioComponent} from '../inicio/inicio.component';
import {AcercaComponent} from '../acerca/acerca.component';
import {ContactanosComponent} from '../contactanos/contactanos.component';
import {PlanesComponent} from '../planes/planes.component';
import {PortafolioComponent} from '../portafolio/portafolio.component';



@RouteConfig([
  {path: '/', component: InicioComponent, as: 'Inicio'},
  {path: '/acerca', component: AcercaComponent, as: 'Acerca'}
  {path: '/contactanos', component: ContactanosComponent, as: 'Contactanos'}
  {path: '/planes', component: PlanesComponent, as: 'Planes'}
{path: '/portafolio', component: PortafolioComponent, as: 'Portafolio'}



])
@Component({
  selector: 'app',
  templateUrl: 'src/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
export class App {

}
