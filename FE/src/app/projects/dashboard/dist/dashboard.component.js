"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var rxjs_1 = require("rxjs");
var request_form_labels_constant_1 = require("../w-property/constants/request-form-labels.constant");
var routes_constant_1 = require("src/app/shared/constants/routes.constant");
var request_from_unit_status_enum_1 = require("../w-property/enums/request-from-unit-status.enum");
var request_from_unit_type_enum_1 = require("../w-property/enums/request-from-unit-type.enum");
var fileSaver = require("file-saver");
var XLSX = require("xlsx");
var request_from_yes_no_enum_1 = require("../w-property/enums/request-from-yes-no.enum");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, router) {
        this.http = http;
        this.router = router;
        this.requests = [];
        this.labels = request_form_labels_constant_1.RequestFormLabels;
        this.showLoader = false;
        this.cols = [
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
        this.images = image_paths_constant_1.IMAGES;
        this.checkLogin();
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.checkLogin = function () {
        var lastLoggedIn = localStorage.getItem('lastLoggedIn');
        var lastLoggedInDate = new Date(lastLoggedIn || '');
        var today = new Date();
        var diff = (today.getTime() - lastLoggedInDate.getTime()) / (1000 * 60 * 60 * 24);
        if (lastLoggedIn && diff > 0 && diff < 1) {
            this.getDetails();
        }
        else {
            localStorage.clear();
            this.router.navigateByUrl(routes_constant_1.W_ROUTES.LOGIN);
        }
    };
    DashboardComponent.prototype.getDetails = function () {
        var _this = this;
        this.showLoader = true;
        this.http
            .get('https://w-group.somee.com/getUsers')
            .pipe(rxjs_1.map(function (response) {
            return response.map(function (item) { return ({
                data: _this.mapResponse(item)
            }); });
        }), rxjs_1.catchError(function (error) {
            console.error('An error occurred:', error);
            return '';
        }))
            .subscribe(function (requests) {
            _this.requests = requests;
            setTimeout(function () {
                _this.showLoader = false;
            }, 1000);
        });
    };
    DashboardComponent.prototype.mapResponse = function (data) {
        var _a;
        var EUnitStatus = request_from_unit_status_enum_1.ERequestFormUnitStatus;
        var EYesNo = request_from_yes_no_enum_1.ERequestFormYesNo;
        var EUnitTypes = request_from_unit_type_enum_1.ERequestFormUnitType;
        var unitTypes = (_a = data.userUnits) === null || _a === void 0 ? void 0 : _a.replace(/,/g, '<br/>');
        for (var key in EUnitTypes) {
            if (unitTypes === null || unitTypes === void 0 ? void 0 : unitTypes.includes(key)) {
                var regex = new RegExp(key, 'g');
                unitTypes = unitTypes.replace(regex, EUnitTypes === null || EUnitTypes === void 0 ? void 0 : EUnitTypes[key]);
            }
        }
        return __assign(__assign({}, data), { name: data.firstName + ' ' + data.lastName, unitStatus: EUnitStatus[data.unitStatus] || '-', callAgreement: EYesNo[data.callAgreement] || '-', userUnits: unitTypes });
    };
    DashboardComponent.prototype.mapItem = function (request) {
        var mappedRequest = {};
        for (var key in request) {
            var arKey = this.labels[key];
            if (arKey) {
                mappedRequest[arKey] = request[key];
            }
        }
        return mappedRequest;
    };
    DashboardComponent.prototype.deleteRow = function (row) {
        var _this = this;
        console.log(this.requests);
        this.showLoader = true;
        this.http["delete"]("https://w-group.somee.com/" + row.id)
            .subscribe(function (response) {
            _this.requests = _this.requests.filter(function (item) {
                _this.showLoader = false;
                return item.data.id !== row.id;
            });
        });
    };
    /* ------------------------ */
    /* ----- Export Data ------ */
    /* ------------------------ */
    DashboardComponent.prototype.exportData = function () {
        var _this = this;
        var mappedRequests = this.requests.map(function (item) {
            return _this.mapItem(item === null || item === void 0 ? void 0 : item.data);
        });
        var worksheet = XLSX.utils.json_to_sheet(mappedRequests);
        var workbook = {
            Sheets: { data: worksheet },
            SheetNames: ['data']
        };
        var excelBuffer = XLSX.write(workbook, {
            bookType: 'xlsx',
            type: 'array'
        });
        this.saveAsExcelFile(excelBuffer);
    };
    DashboardComponent.prototype.saveAsExcelFile = function (buffer) {
        var type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        var data = new Blob([buffer], { type: type });
        fileSaver.saveAs(data, 'requests_' + new Date().getTime() + '.xlsx');
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
