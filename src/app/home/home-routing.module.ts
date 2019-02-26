import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [  
  {path: 'home', component: HomeComponent},
  {path: 'home/:query', component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class HomeRoutingModule { }
