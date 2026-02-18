import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

let matArr = [ MatIconModule,MatButtonModule, MatSnackBarModule,MatDialogModule,CommonModule,MatProgressSpinnerModule,MatCardModule,MatDividerModule]

@NgModule({
  declarations: [],
  imports: [...matArr],
  exports:[...matArr]
})
export class MaterialModule { }
