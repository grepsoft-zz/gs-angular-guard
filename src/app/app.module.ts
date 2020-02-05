import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LinkAComponent } from './link-a/link-a.component';
import { LinkBComponent } from './link-b/link-b.component';
import { MyguardGuard } from './myguard.guard';
import { MessageService } from './message/message.service';

const routes : Routes = [
  {
    path: 'link-a',
    component: LinkAComponent,
    canDeactivate: [MyguardGuard]
  },
  {
    path: 'link-b',
    component: LinkBComponent
  }
]
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
 ],
  declarations: [ AppComponent, HelloComponent, LinkAComponent, LinkBComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessageService]
})
export class AppModule { }
