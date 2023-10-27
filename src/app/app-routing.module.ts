import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentsInfoPageComponent } from './components-info-page/components-info-page.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'components-info-page', component: ComponentsInfoPageComponent },
  { path: 'posts', component: PostListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
