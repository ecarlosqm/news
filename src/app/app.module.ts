import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from './context/auth/domain/auth_service';
import { FirebaseAuthService } from './context/auth/services/firebase-auth-service.service';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { NewsAppComponent } from './components/news-app/news-app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsSourcesGridComponent } from './components/news-sources-grid/news-sources-grid.component';
import { MyNewsListComponent } from './components/my-news-list/my-news-list.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NewsSourceCardComponent } from './components/news-source-card/news-source-card.component';
import { NewsSourceService } from './context/news_source/domain/news_service';
import { NewsSourceNewsApiService } from './context/news_source/services/news-source-news-api.service';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { MyNewsPageComponent } from './components/my-news-page/my-news-page.component';
import { MyNewsService } from './context/my-news/domain/my-news.service';
import { MyNewsFirestoreService } from './context/my-news/services/my-news-firestore.service';
import { MyNewCardComponent } from './components/my-new-card/my-new-card.component';
import { UserButtonComponent } from './components/user-button/user-button.component';
import { TryAgainComponent } from './components/try-again/try-again.component';
import { LoadingObserbablePipe } from './pipes/loading/loading-obserbable.pipe';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';

import mxLocal from '@angular/common/locales/es-MX'
import { registerLocaleData } from '@angular/common';


registerLocaleData(mxLocal, 'es');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    NewsAppComponent,
    NavbarComponent,
    NewsSourcesGridComponent,
    MyNewsListComponent,
    TopbarComponent,
    NewsSourceCardComponent,
    NewsPageComponent,
    SearchPageComponent,
    SearchPanelComponent,
    MyNewsPageComponent,
    MyNewCardComponent,
    UserButtonComponent,
    TryAgainComponent,
    LoadingObserbablePipe,
    LoadingComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [
    {
      provide: AuthService,
      useClass: FirebaseAuthService
    },
    {
      provide: NewsSourceService,
      useClass: NewsSourceNewsApiService
    },
    {
      provide: MyNewsService,
      useClass: MyNewsFirestoreService
    },
    { provide: LOCALE_ID, useValue: 'es' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
