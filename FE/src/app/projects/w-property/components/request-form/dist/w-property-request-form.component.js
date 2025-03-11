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
exports.WPropertyRequestFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var request_form_controls_enum_1 = require("../../enums/request-form-controls.enum");
var request_form_labels_constant_1 = require("../../constants/request-form-labels.constant");
var rxjs_1 = require("rxjs");
var request_from_unit_status_enum_1 = require("../../enums/request-from-unit-status.enum");
var request_from_user_relation_enum_1 = require("../../enums/request-from-user-relation.enum");
var request_from_yes_no_enum_1 = require("../../enums/request-from-yes-no.enum");
var api_1 = require("primeng/api");
var request_from_unit_type_enum_1 = require("../../enums/request-from-unit-type.enum");
var request_from_rent_types_enum_1 = require("../../enums/request-from-rent-types.enum");
var WPropertyRequestFormComponent = /** @class */ (function () {
    function WPropertyRequestFormComponent(http, messageService) {
        var _a;
        this.http = http;
        this.messageService = messageService;
        this.controls = request_form_controls_enum_1.ERequestFormControls;
        this.unitStatus = request_from_unit_status_enum_1.ERequestFormUnitStatus;
        this.rentTypes = request_from_rent_types_enum_1.ERequestFormRentTypes;
        this.userRelation = request_from_user_relation_enum_1.ERequestFormUserRelation;
        this.unitType = request_from_unit_type_enum_1.ERequestFormUnitType;
        this.yesNo = request_from_yes_no_enum_1.ERequestFormYesNo;
        this.labels = request_form_labels_constant_1.RequestFormLabels;
        this.checkboxValue = [];
        this.disableSubmit = false;
        this.form = new forms_1.FormGroup((_a = {},
            _a[this.controls.firstName] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.lastName] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.email] = new forms_1.FormControl('', [
                forms_1.Validators.email,
                forms_1.Validators.required,
            ]),
            _a[this.controls.phoneNumber] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.userCountry] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.userCity] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.userInfo] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.userUnits] = new forms_1.FormControl([''], forms_1.Validators.required),
            _a[this.controls.unitStatus] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.rentType] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.promoCode] = new forms_1.FormControl(''),
            _a[this.controls.userRelation] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.isInvestBefore] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.callAgreement] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.unitCountry] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.unitCity] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.unitDistrict] = new forms_1.FormControl('', forms_1.Validators.required),
            _a[this.controls.unitInfo] = new forms_1.FormControl('', forms_1.Validators.required),
            _a));
    }
    WPropertyRequestFormComponent.prototype.submitRequest = function () {
        var _a;
        var _this = this;
        var _b, _c;
        var payload = __assign(__assign({}, this.form.value), (_a = {}, _a[this.controls.userUnits] = (_c = (_b = this.form.value) === null || _b === void 0 ? void 0 : _b[this.controls.userUnits]) === null || _c === void 0 ? void 0 : _c.join(','), _a));
        this.disableSubmit = true;
        console.log(payload);
        this.http
            .post('https://w-group.somee.com/postUsers', payload)
            .pipe(rxjs_1.map(function (response) {
            _this.disableSubmit = false;
            _this.form.reset();
            _this.showSuccess();
        }), rxjs_1.catchError(function (error) {
            _this.disableSubmit = false;
            _this.showFail();
            console.error('An error occurred:', error);
            return error;
        }))
            .subscribe();
    };
    WPropertyRequestFormComponent.prototype.onChangeCheckbox = function (value) {
        var _a, _b, _c, _d;
        if ((_a = this.checkboxValue) === null || _a === void 0 ? void 0 : _a.includes(value)) {
            var i = this.checkboxValue.indexOf(value);
            (_b = this.checkboxValue) === null || _b === void 0 ? void 0 : _b.splice(i, 1);
        }
        else {
            (_c = this.checkboxValue) === null || _c === void 0 ? void 0 : _c.push(value);
        }
        (_d = this.form.get(this.controls.userUnits)) === null || _d === void 0 ? void 0 : _d.setValue(this.checkboxValue);
    };
    WPropertyRequestFormComponent.prototype.showSuccess = function () {
        this.messageService.add({
            severity: 'success',
            summary: 'تم تسجيل طلبك بنجاح',
            detail: 'سيتم التواصل معك في افرب فرصة',
            life: 2000
        });
    };
    WPropertyRequestFormComponent.prototype.showFail = function () {
        this.messageService.add({
            severity: 'error',
            summary: 'حدث خطأ ما',
            detail: 'الرجاء المحاولة لاحقا',
            life: 2000
        });
    };
    WPropertyRequestFormComponent = __decorate([
        core_1.Component({
            selector: 'app-w-property-request-form',
            templateUrl: './w-property-request-form.component.html',
            styleUrls: ['./w-property-request-form.component.scss'],
            providers: [api_1.MessageService]
        })
    ], WPropertyRequestFormComponent);
    return WPropertyRequestFormComponent;
}());
exports.WPropertyRequestFormComponent = WPropertyRequestFormComponent;
