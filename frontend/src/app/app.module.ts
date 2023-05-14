import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { UploadComponent } from './components/partials/upload/upload.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagsComponent } from './components/partials/tags/tags.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    UploadComponent,
    TagsComponent,
    ProductPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    RegisterPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi :true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
