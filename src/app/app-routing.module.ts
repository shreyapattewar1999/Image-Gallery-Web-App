import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

const routes: Routes = [
  {path:'imageDetail/:id', component:ImageDetailComponent, pathMatch: 'full', runGuardsAndResolvers: 'always'},
  {path:'gallery/:category', component: GalleryComponent, pathMatch: 'full', runGuardsAndResolvers: 'always'},
  {path:'', redirectTo:'gallery/all', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
