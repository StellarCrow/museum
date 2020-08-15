import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

const components = [
  MatDialogModule
];



@NgModule({
  declarations: [],
  imports: [...components],
  exports: [...components]
})
export class MaterialModule { }
