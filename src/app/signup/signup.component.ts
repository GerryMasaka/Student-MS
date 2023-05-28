import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup
  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router:Router){
  }

  ngOnInit(): void{
    this.signupform = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required],
    })
  }

  //creation
  signup() {
    this.http.post("http://localhost:3000/signup", this.signupform.value).subscribe(
      (res: any) => {
        alert("Student registered successfully");
        this.signupform.reset();
        this.router.navigate(['login']);
      },
      (err: any) => {
        alert("Something went wrong");
      }
    );
  }
  
}
