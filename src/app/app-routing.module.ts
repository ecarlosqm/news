import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { LoginComponent } from './components/login/login.component';
import { NewsAppComponent } from './components/news-app/news-app.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { MyNewsPageComponent } from './components/my-news-page/my-news-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'newsapp', component: NewsAppComponent, canActivate: [AuthenticatedGuard], children: [
      { path: 'search', component: SearchPageComponent },
      { path: 'newsPage', component: NewsPageComponent },
      { path: 'myNews', component:  MyNewsPageComponent},
      { path: '**', redirectTo: 'newsPage' },

    ]
  },
  { path: '**', redirectTo: 'newsapp' },
  { path: '**', redirectTo: 'newsapp' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
