import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const components = [
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule
];



@NgModule({
  declarations: [],
  imports: [...components],
  exports: [...components]
})
export class MaterialModule { }
