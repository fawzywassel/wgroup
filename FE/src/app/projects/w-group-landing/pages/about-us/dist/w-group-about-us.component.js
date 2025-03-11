"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WGroupAboutUsComponent = void 0;
var core_1 = require("@angular/core");
var about_us_constant_1 = require("../../constants/about-us.constant");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var WGroupAboutUsComponent = /** @class */ (function () {
    function WGroupAboutUsComponent() {
        this.image = image_paths_constant_1.IMAGES.pagesHeaders.wGroup.aboutUs;
        this.title = 'من نحن';
        this.subtitle = 'تعرف علينا اكثر الآن';
        this.aboutUsList = about_us_constant_1.WGroupAboutUsList;
    }
    WGroupAboutUsComponent = __decorate([
        core_1.Component({
            selector: 'app-w-group-about-us',
            templateUrl: './w-group-about-us.component.html',
            styleUrls: ['./w-group-about-us.component.scss']
        })
    ], WGroupAboutUsComponent);
    return WGroupAboutUsComponent;
}());
exports.WGroupAboutUsComponent = WGroupAboutUsComponent;
