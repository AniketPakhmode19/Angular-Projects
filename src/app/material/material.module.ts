import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';


const material=[MatButtonModule,
                          MatButtonToggleModule,
                          MatCardModule,
                          MatCheckboxModule,
                          MatRadioModule,
                          MatFormFieldModule,
                          MatInputModule,
                          MatListModule,
                          MatDividerModule,
                          MatIconModule,
                          MatStepperModule,
                          MatMenuModule,
                          MatSlideToggleModule,
                          MatToolbarModule];

@NgModule({
  imports : [material],
  exports : [material],
})
export class MaterialModule { }
