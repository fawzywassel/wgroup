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
var routes_constant_1 = require("src/app/shared/constants/routes.constant");
var percentage_constant_1 = require("../../constants/percentage.constant");
var WPropertyAboutUsComponent = /** @class */ (function () {
    function WPropertyAboutUsComponent(router) {
        this.router = router;
        this.image = image_paths_constant_1.IMAGES.pagesHeaders.wProperty.aboutUs;
        this.aboutImage = image_paths_constant_1.IMAGES.pagesHeaders.wProperty.aboutUsSec;
        this.title = 'من نحن';
        this.subtitle = 'تعرف علينا اكثر الآن';
        this.percentage = percentage_constant_1.WPropertyPercentageList;
    }
    WPropertyAboutUsComponent.prototype.goToRequest = function () {
        this.router.navigateByUrl(routes_constant_1.W_ROUTES.W_PROPERTY + '/' + routes_constant_1.W_ROUTES.SUBMIT_REQUEST);
    };
    WPropertyAboutUsComponent = __decorate([
        core_1.Component({
            selector: 'app-w-property-about-us',
            templateUrl: './w-property-about-us.component.html',
            styleUrls: ['./w-property-about-us.component.scss']
        })
    ], WPropertyAboutUsComponent);
    return WPropertyAboutUsComponent;
}());
exports.WPropertyAboutUsComponent = WPropertyAboutUsComponent;
