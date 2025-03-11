"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WPropertyAboutUsComponent = void 0;
var core_1 = require("@angular/core");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var WPropertyAboutUsComponent = /** @class */ (function () {
    function WPropertyAboutUsComponent() {
        this.image = image_paths_constant_1.IMAGES.pagesHeaders.wProperty.aboutUs;
        this.title = 'من نحن';
        this.subtitle = 'تعرف علينا اكثر الآن';
        this.visionImage = image_paths_constant_1.IMAGES.slider[3];
        this.whyKsaImages = image_paths_constant_1.IMAGES.whyKsa;
        this.rentPath = '../../../../../assets/images/icons/rent-icons/';
        this.ownersRentPath = '../../../../../assets/images/icons/owner-rent-icons/';
        this.servicesPath = '../../../../../assets/images/icons/services/';
        this.stepsPath = '../../../../../assets/images/icons/steps/';
        this.rent = [
            'خدمات و وسائل راحة متنوعة',
            'تنوع المواقع المتاحة',
            'مساحات أكبر',
            'تكلفة معقولة',
            'إتاحة دائمة',
            'مثالي للعائلات والمجموعات',
            'مزيد من الخصوصية',
            'مرونة في إجراءات الوصول والمغادرة',
        ];
        this.services = [
            'تصميم داخلي أنيق وجذاب',
            'دخول المرن للنزلاء',
            'حلول تسعير ديناميكي',
            'إدارة كاملة للوحدة السكنية',
            'خدمة النزلاء على مدار الساعة',
            'تصوير احترافي للشقق',
            'تنظيف محترف و صيانة دورية',
        ];
        this.ownersRent = [
            'زيادة الدخل',
            'صيانة للمنزل على مدار السنة',
            'لا عناء مع المستأجرين',
            'استخدم منزلك في أي وقت',
        ];
        this.steps = {
            step1: [
                'التسجيل عبر الموقع',
                'زيارة الشقة من قبل الفريق',
                'الملاحظات الأولية',
                'تقديم دراسة جدوى',
            ],
            step2: [
                'التأثيث أو التحسين من قبل فريقنا',
                'تصوير محترف',
                'إنشاء حسابات على منصات التأجير',
                'الأرباح المتواصلة',
            ]
        };
        this.basicData = {
            labels: ['قصير الاجل', 'ايجار سنوي'],
            datasets: [
                {
                    type: 'bar',
                    label: 'خارج الموسم',
                    backgroundColor: ['#af553b', 'lightblue'],
                    data: [50, 0],
                    barThickness: 100
                },
                {
                    type: 'bar',
                    label: 'في الموسم',
                    backgroundColor: ['#c69a79', 'lightblue'],
                    data: [151, 80],
                    barThickness: 100
                },
            ]
        };
        this.basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.9,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: ['#af553b', 'lightblue']
                    },
                    grid: {
                        color: '#f5f5f5',
                        drawBorder: false
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: '#f5f5f5'
                    },
                    grid: {
                        color: '#bbb',
                        drawBorder: false
                    }
                }
            }
        };
    }
    WPropertyAboutUsComponent = __decorate([
        core_1.Component({
            selector: 'app-w-property-about-us-section',
            templateUrl: './w-property-about-us.component.html',
            styleUrls: ['./w-property-about-us.component.scss']
        })
    ], WPropertyAboutUsComponent);
    return WPropertyAboutUsComponent;
}());
exports.WPropertyAboutUsComponent = WPropertyAboutUsComponent;
