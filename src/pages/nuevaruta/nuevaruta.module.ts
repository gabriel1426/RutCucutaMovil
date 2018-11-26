import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevarutaPage } from './nuevaruta';

@NgModule({
  declarations: [
    NuevarutaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevarutaPage),
  ],
})
export class NuevarutaPageModule {}
