import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
const materialcompnents=[
  MatSlideToggleModule,
  MatButtonModule,
  MatTableModule
];

@NgModule({
  imports: [materialcompnents],
  exports: [materialcompnents],
})
export class MaterialModule { }
