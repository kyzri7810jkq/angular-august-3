import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { HomeComponent } from './components/home/home.component';
import { PhotosDetailComponent } from './components/photos-detail/photos-detail.component';


const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent },
  { path: 'photos', component: PhotosComponent},
  { path: 'photo/:id', component: PhotosDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [PhotosComponent, HomeComponent, PhotosDetailComponent]
