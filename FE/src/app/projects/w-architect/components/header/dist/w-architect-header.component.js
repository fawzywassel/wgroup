"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WArchitectHeaderComponent = void 0;
var core_1 = require("@angular/core");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var WArchitectHeaderComponent = /** @class */ (function () {
    function WArchitectHeaderComponent() {
        this.wImage = image_paths_constant_1.IMAGES.coloredLogos.wArchitect;
    }
    WArchitectHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-w-architect-header',
            templateUrl: './w-architect-header.component.html',
            styleUrls: ['./w-architect-header.component.scss']
        })
    ], WArchitectHeaderComponent);
    return WArchitectHeaderComponent;
}());
exports.WArchitectHeaderComponent = WArchitectHeaderComponent;
