import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IniciosesionService } from '../service/iniciosesion.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{

  public myForm!:FormGroup;
  userId?: number;
  user?: User;

  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private userService : IniciosesionService
  ){}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
    this.initializeUser();
  }

  createMyForm(): FormGroup{
    return this.fb.group({
      user:['',[Validators.required, Validators.minLength(4)]],
      name:['',Validators.required],
      lastName:['',Validators.required],
      phone:['',[Validators.required, Validators.pattern(/^\d{9}$/)]],
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required],
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control =>{
        control.markAllAsTouched();
      });
      return;
    }

    console.log(this.myForm.value);
  }

  public get fail():any{
    return this.myForm.controls;
  }

  public saveUser():void{
    this.registerUser();
  }

  private registerUser():void{
    this.userService.register(this.user!).subscribe({
      next: (userRegisted) => {
        console.log("Usuario insertado");
        console.log(userRegisted);
      },
      error: (err) => {
        this.handleError(err);
      }
    })
  }


  private initializeUser(): void {
    if (!this.user) {
      this.user = new User(undefined, "", "", "","", 0,"");
    }
  }

  handleError(err: any):void {
    //TODO
  }


}
