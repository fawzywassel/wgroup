import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { IWPropertyRequest } from '../w-property/interfaces/request.interface';
import { catchError, map } from 'rxjs';
import { RequestFormLabels } from '../w-property/constants/request-form-labels.constant';
import { Router } from '@angular/router';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';
import { ERequestFormUnitStatus } from '../w-property/enums/request-from-unit-status.enum';
import { ERequestFormRentTypes } from '../w-property/enums/request-from-rent-types.enum';
import { ERequestFormUnitType } from '../w-property/enums/request-from-unit-type.enum';
import * as fileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ERequestFormYesNo } from '../w-property/enums/request-from-yes-no.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  requests: TreeNode[] = [];
  labels: any = RequestFormLabels;
  showLoader = false;
  cols: any[] = [
    { field: 'name', header: 'الاسم' },
    { field: 'email', header: 'البريد الالكتروني' },
    { field: 'phoneNumber', header: 'رقم الجوال' },
    { field: 'unitCountry', header: 'الدولة' },
    { field: 'unitCity', header: 'المدينة' },
    { field: 'unitStatus', header: 'حالة العقار' },
    // { field: 'userUnits', header: 'الوحدات المدرجة' },
    { field: 'callAgreement', header: 'الموافقة على التواصل' },
    { field: 'delete', header: 'حذف' },
  ];

  images = IMAGES;

  constructor(private http: HttpClient, private router: Router) {
    this.checkLogin();
  }

  ngOnInit() {}

  private checkLogin() {
    const lastLoggedIn = localStorage.getItem('lastLoggedIn');
    const lastLoggedInDate = new Date(lastLoggedIn || '');
    const today = new Date();
    const diff =
      (today.getTime() - lastLoggedInDate.getTime()) / (1000 * 60 * 60 * 24);
    if (lastLoggedIn && diff > 0 && diff < 1) {
      this.getDetails();
    } else {
      localStorage.clear();
      this.router.navigateByUrl(W_ROUTES.LOGIN);
    }
  }

  private getDetails() {
    this.showLoader = true;
    this.http
      .get('https://w-group.somee.com/getUsers')
      .pipe(
        map((response: any) => {
          return response.map((item: any) => ({
            data: this.mapResponse(item),
          }));
        }),
        catchError((error) => {
          console.error('An error occurred:', error);
          return '';
        })
      )
      .subscribe((requests) => {
        this.requests = requests;
        setTimeout(() => {
          this.showLoader = false;
        }, 1000);
      });
  }

  private mapResponse(data: IWPropertyRequest): IWPropertyRequest {
    const EUnitStatus: any = ERequestFormUnitStatus;
    const EYesNo: any = ERequestFormYesNo;
    const EUnitTypes: any = ERequestFormUnitType;
    let unitTypes: any = data.userUnits?.replace(/,/g, '<br/>');

    for (const key in EUnitTypes) {
      if (unitTypes?.includes(key)) {
        const regex = new RegExp(key, 'g');
        unitTypes = unitTypes.replace(regex, EUnitTypes?.[key]);
      }
    }
    return {
      ...data,
      name: data.firstName + ' ' + data.lastName,
      unitStatus: EUnitStatus[data.unitStatus] || '-',
      callAgreement: EYesNo[data.callAgreement] || '-',
      userUnits: unitTypes,
    };
  }

  private mapItem(request: any) {
    const mappedRequest: any = {};
    for (const key in request) {
      const arKey = this.labels[key];
      if (arKey) {
        mappedRequest[arKey] = request[key];
      }
    }
    return mappedRequest;
  }

  public deleteRow(row: any) {
    console.log(this.requests);
    this.showLoader = true;
    this.http
      .delete(`https://w-group.somee.com/${row.id}`)
      .subscribe((response: any) => {
        this.requests = this.requests.filter((item) => {
          this.showLoader = false;
          return item.data.id !== row.id;
        });
      });
  }

  /* ------------------------ */
  /* ----- Export Data ------ */
  /* ------------------------ */

  public exportData() {
    const mappedRequests = this.requests.map((item) => {
      return this.mapItem(item?.data);
    });
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mappedRequests);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer);
  }

  private saveAsExcelFile(buffer: any): void {
    const type =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const data: Blob = new Blob([buffer], { type });
    fileSaver.saveAs(data, 'requests_' + new Date().getTime() + '.xlsx');
  }
}
