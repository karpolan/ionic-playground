import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule  } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { SharedModule } from '../shared/shared.module';
import { ContactPage } from './contact.page';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    EmailComposer
  ],
  declarations: [
    FormComponent,
    ContactPage
  ]
})
export class ContactPageModule {}
