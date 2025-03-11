"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FooterComponent = void 0;
var core_1 = require("@angular/core");
var image_paths_constant_1 = require("../../constants/image-paths.constant");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(route) {
        this.route = route;
        this.wImage = image_paths_constant_1.IMAGES.coloredLogos.justW;
    }
    FooterComponent.prototype.routeToPage = function (route) {
        this.route.navigateByUrl(route);
    };
    FooterComponent.prototype.onClickSocialIcon = function (link) {
        if (link.includes('@gmail.com')) {
            // window.open("mailto:" + link + '?cc=' + emailCC + '&subject=' + emailSub + '&body=' + emailBody);
            window.open("mailto: " + link, '_blank');
        }
        else {
            if (link === '' || link === '/login') {
                this.routeToPage(link);
            }
            else {
                window.open(link, '_blank');
            }
        }
    };
    __decorate([
        core_1.Input()
    ], FooterComponent.prototype, "data");
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
