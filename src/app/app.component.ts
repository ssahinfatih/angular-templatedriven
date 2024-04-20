import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template:`
   <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
    <input type="text" name="name" placeholder="Name" ngModel><br>
    <input type="text" name="surname" placeholder="Surname" ngModel><br>
    <input type="email" name="email" placeholder="Email" ngModel><br>
    <input type="tel" name="tel" placeholder="Tel" ngModel><br>
    <div ngModelGroup="address">
      <input type="text" name="country" placeholder="Country" ngModel><br>
      <input type="text" name="city" placeholder="City" ngModel><br>
      <input type="text" name="address" placeholder="Address" ngModel><br>
    </div>
    <button> Send </button>
   </form>
  
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild("frm",{static:true}) frm:NgForm;// formu component classında referans etmek için viewchild ile yandaki gibi temsil etmek yeterlidir.
  
  onSubmit(data){

    console.log(`Value : ${this.frm.value}`);//form grup içierisinde her formcontrol nesnesinin değerini döndürür
    console.log(`Valid : ${this.frm.valid}`);// form geçerli ise true değilse false değeri döndürür
    console.log(`Touched : ${this.frm.touched}`);// kullanıcı form üzerinde en az bir alana değer girdiyse true döndürür
    console.log(`Submitted : ${this.frm.submitted}`);// form submit edildiği taktirde true değerini döndürür.
    

    console.log(data);
    
  }
}
