import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ERequestFormControls } from '../../enums/request-form-controls.enum';
import { RequestFormLabels } from '../../constants/request-form-labels.constant';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { ERequestFormUnitStatus } from '../../enums/request-from-unit-status.enum';
import { ERequestFormUserRelation } from '../../enums/request-from-user-relation.enum';
import { ERequestFormYesNo } from '../../enums/request-from-yes-no.enum';
import { MessageService } from 'primeng/api';
import { ERequestFormUnitType } from '../../enums/request-from-unit-type.enum';
import { ERequestFormRentTypes } from '../../enums/request-from-rent-types.enum';

@Component({
  selector: 'app-w-property-request-form',
  templateUrl: './w-property-request-form.component.html',
  styleUrls: ['./w-property-request-form.component.scss'],
  providers: [MessageService],
})
export class WPropertyRequestFormComponent {
  controls = ERequestFormControls;
  unitStatus = ERequestFormUnitStatus;
  rentTypes = ERequestFormRentTypes;
  userRelation = ERequestFormUserRelation;
  unitType = ERequestFormUnitType;
  yesNo = ERequestFormYesNo;
  labels: any = RequestFormLabels;
  checkboxValue: string[] = [];
  disableSubmit = false;

  form = new FormGroup({
    [this.controls.firstName]: new FormControl('', Validators.required),
    [this.controls.lastName]: new FormControl('', Validators.required),
    [this.controls.email]: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    [this.controls.phoneNumber]: new FormControl('', Validators.required),
    [this.controls.userCountry]: new FormControl('', Validators.required),
    [this.controls.userCity]: new FormControl('', Validators.required),
    [this.controls.userInfo]: new FormControl('', Validators.required),
    [this.controls.userUnits]: new FormControl([''], Validators.required),
    [this.controls.unitStatus]: new FormControl('', Validators.required),
    [this.controls.rentType]: new FormControl('', Validators.required),
    [this.controls.promoCode]: new FormControl(''),
    [this.controls.userRelation]: new FormControl('', Validators.required),
    [this.controls.isInvestBefore]: new FormControl('', Validators.required),
    [this.controls.callAgreement]: new FormControl('', Validators.required),
    [this.controls.unitCountry]: new FormControl('', Validators.required),
    [this.controls.unitCity]: new FormControl('', Validators.required),
    [this.controls.unitDistrict]: new FormControl('', Validators.required),
    [this.controls.unitInfo]: new FormControl('', Validators.required),
  });

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  submitRequest() {
    const payload = {
      ...this.form.value,
      [this.controls.userUnits]:
        this.form.value?.[this.controls.userUnits]?.join(','),
    };

    this.disableSubmit = true;

    console.log(payload);

    this.http
      .post('https://w-group.somee.com/postUsers', payload)
      .pipe(
        map((response: any) => {
          this.disableSubmit = false;
          this.form.reset();
          this.showSuccess();
        }),
        catchError((error: any) => {
          this.disableSubmit = false;
          this.showFail();
          console.error('An error occurred:', error);
          return error;
        })
      )
      .subscribe();
  }

  onChangeCheckbox(value: string) {
    if (this.checkboxValue?.includes(value)) {
      const i = this.checkboxValue.indexOf(value);
      this.checkboxValue?.splice(i, 1);
    } else {
      this.checkboxValue?.push(value);
    }
    this.form.get(this.controls.userUnits)?.setValue(this.checkboxValue);
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'تم تسجيل طلبك بنجاح',
      detail: 'سيتم التواصل معك في افرب فرصة',
      life: 2000,
    });
  }

  showFail() {
    this.messageService.add({
      severity: 'error',
      summary: 'حدث خطأ ما',
      detail: 'الرجاء المحاولة لاحقا',
      life: 2000,
    });
  }
}
