import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})


export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  images = IMAGES;
  showLoader = false


  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit() { }

  checkLogin() {
    const credentials = this.form.value
    this.showLoader = true;
    if (credentials?.id === '123456' && credentials?.password === '123456') {
      this.messageService.add({ severity: 'success', summary: 'تم تسجيل الدخول بنجاح', life: 1000 });
      localStorage.setItem('lastLoggedIn', new Date().toISOString())
      setTimeout(() => {
        this.router.navigateByUrl(W_ROUTES.DASHBOARD)
      }, 1000);
      setTimeout(() => {
        this.showLoader = false;
      }, 1200);
    } else {
      this.messageService.add({ severity: 'error', summary: 'لما يتم تسجيل الدخول', detail: 'الرجاء إدخال بيانات صحيحة', life: 2000 });

    }
  }

}
