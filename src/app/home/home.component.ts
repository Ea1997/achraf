import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ADU:any=0;
ASRLT:any=0;
LT_Adjust:any=0;
Var_Adjust:any=0;
MOQ:any=0;
Batch:any=0;  
status:boolean=false;
message:string="";
zone_verte:any=0;
zone_jaune:any=0;
zone_rouge:any=0;
zone_rouge_base:any=0;
zone_rouge_securite:any=0;
  constructor() { }

  ngOnInit(): void {
    

  }
  changed(){
   
   if(this.ADU && this.ASRLT && this.Batch && this.LT_Adjust && this.MOQ && this.Var_Adjust){
     this.zone_verte=Math.max(this.MOQ, this.ASRLT*this.ADU*this.LT_Adjust, this.ADU*this.Batch);
     this.zone_jaune=this.ADU*this.ASRLT;
this.zone_rouge_base=this.ASRLT*this.ADU*this.LT_Adjust;
this.zone_rouge_securite=this.zone_rouge_base*this.Var_Adjust;
this.zone_rouge=this.zone_rouge_base+this.zone_rouge_securite;
var myChart = new Chart('myChart', {
  type: 'bar',
  data: {
      labels: ['Vert', 'Jaune', 'Rouge Base', 'Rouge sécurisé'],
      datasets: [{
          label: '',
          data: [this.zone_verte, this.zone_jaune, this.zone_rouge_base, this.zone_rouge_securite],
          backgroundColor: [
              'rgba(0, 128, 0, 1)',
              'rgba(255, 255 , 0, 1)',
              'rgba(220, 20, 30, 1)',
              'rgba(178,34,34, 1)',
           
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
         
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
this.status=true;

   }else{
     this.message="Veuillez remplir tous les champs";
      }
  }

}
