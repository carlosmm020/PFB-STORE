import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IniciosesionService } from '../service/iniciosesion.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-autentificarse',
  templateUrl: './autentificarse.component.html',
  styleUrls: ['./autentificarse.component.scss']
})
export class AutentificarseComponent implements OnInit {
  
  public myForm!:FormGroup;
  user?: User;

  constructor(
    private fb:FormBuilder,
    private iniciosesionService: IniciosesionService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.myForm = this.createMyForm();
      this.initializeAuth();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      nick:['',Validators.required],
      password:['',Validators.required]
    });

  }

  public login(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control =>{
        control.markAllAsTouched();
      });
      return;
    }

    const nick = this.myForm.value.nick;
    const password = this.myForm.value.password;

    this.iniciosesionService.login(nick!, password!).subscribe({
      next: (loginUser: User) => {
        console.log("Inicio de sesión con exito");
        localStorage.setItem('username', this.myForm.value.nick);
        localStorage.setItem('password', this.myForm.value.password);
        this.handleSuccessfulLogin(loginUser);
      },
      error: (err: any) =>{
        this.handleError(err);
        alert("Usuario o Contraseña incorrecto")
      }
     });
    
  }

  private handleSuccessfulLogin(user: User,){
    this.router.navigate(['/']);
  }

  public get fail():any{
    return this.myForm.controls;
  }

  private initializeAuth(): void {
    if (!this.user) {
      this.user = new User(undefined, "", "", "","", 0,"");
    }
  }

  private handleError(err: any):void {
    console.error('Error en el inicio  de sesión', err);
  }

}
