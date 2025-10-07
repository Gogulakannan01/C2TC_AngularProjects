import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
studentName:string="Vishva V";
location:string="Puducherry";
college:string="MVIT";
Attendence:boolean=true;
batchno:number=67;
}
