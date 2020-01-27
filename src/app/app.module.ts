import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {NgModel,NgForm, FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
import { OrderComponent } from './order/order.component';
import { AuthserviceService } from './authservice.service';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AdminrecordlistComponent } from './adminrecordlist/adminrecordlist.component';
import { ProfitlossComponent } from './profitloss/profitloss.component';
import { RegistervendorComponent } from './registervendor/registervendor.component';
import { AddvendorproductComponent } from './addvendorproduct/addvendorproduct.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { PaymentComponent } from './payment/payment.component';
import { VendorproductsComponent } from './vendorproducts/vendorproducts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent,
    CartComponent,
    ProfileComponent,
    
    PersonalInfoComponent,
    ManageAddressComponent,
    AddNewAddressComponent,
    OrderComponent,
    AdminComponent,
    VendorComponent,
    VendorlistComponent,
    CustomerlistComponent,
    ProductlistComponent,
    AdminrecordlistComponent,
    ProfitlossComponent,
    RegistervendorComponent,
    AddvendorproductComponent,
    ProductdescriptionComponent,
    PlaceorderComponent,
    PaymentComponent,
    VendorproductsComponent,
    AboutusComponent,
    ContactusComponent,
    RemoveproductComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "login",component: LoginComponent  },
      { path: "register",component: RegisterComponent},
      { path: "home",component: HomeComponent},
      { path: "personal-info",component: PersonalInfoComponent,canActivate:[AuthserviceService]},
      { path: "manage-address",component: ManageAddressComponent,canActivate:[AuthserviceService]},
      { path: "add-new-address",component: AddNewAddressComponent,canActivate:[AuthserviceService]},
      { path: "productdescription/:productId",component: ProductdescriptionComponent,canActivate:[AuthserviceService]},
      { path: "placeorder/:productId",component: PlaceorderComponent,canActivate:[AuthserviceService]},
      { path: "payment",component: PaymentComponent,canActivate:[AuthserviceService]},
      { path: "removeproduct/:productId",component: RemoveproductComponent,canActivate:[AuthserviceService]},



      { path: "order",component: OrderComponent,canActivate:[AuthserviceService]},


      { path: "cart",component: CartComponent,canActivate:[AuthserviceService]},
      { path: "profile",component: ProfileComponent,canActivate:[AuthserviceService]},
      { path: "",component: HomeComponent},

      { path: "admin",component: AdminComponent,canActivate:[AuthserviceService]},
      { path: "vendorlist",component: VendorlistComponent,canActivate:[AuthserviceService]},
      { path: "customerlist",component: CustomerlistComponent,canActivate:[AuthserviceService]},
      { path: "productlist",component: ProductlistComponent,canActivate:[AuthserviceService]},
      { path: "adminrecordlist",component: AdminrecordlistComponent,canActivate:[AuthserviceService]},
      { path: "profitloss",component: ProfitlossComponent,canActivate:[AuthserviceService]},

      { path: "aboutus",component: AboutusComponent},
      { path: "contactus",component: ContactusComponent},

      { path: "vendor",component: VendorComponent},
      { path: "registervendor",component: RegistervendorComponent},
      { path: "addvendorproduct",component: AddvendorproductComponent,canActivate:[AuthserviceService]},
      { path: "vendorproducts",component: VendorproductsComponent,canActivate:[AuthserviceService]},






      { path: "logout",component: LogoutComponent,canActivate:[AuthserviceService]} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
