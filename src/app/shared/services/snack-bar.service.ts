import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar:MatSnackBar) { }

  showSuccessMsg(msg:string){
    this.snackBar.open(msg,'Close',{
      horizontalPosition:"center",
      verticalPosition:"bottom",
      duration:1500,
      panelClass:['success-snackBar']
    })
  }

  showError(err:any){
    this.snackBar.open(err,'Close',{
      horizontalPosition:"center",
      verticalPosition:"bottom",
      duration:1500,
      panelClass:['success-snackBar']
    })
  }
}
