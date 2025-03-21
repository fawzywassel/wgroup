"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WPropertyProjectCardComponent = void 0;
var core_1 = require("@angular/core");
var WPropertyProjectCardComponent = /** @class */ (function () {
    function WPropertyProjectCardComponent() {
        this.isVisible = false;
        this.responsiveOptions = [
            {
                breakpoint: '1500px',
                numVisible: 5
            },
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1
            },
        ];
    }
    WPropertyProjectCardComponent.prototype.showGallery = function () {
        this.isVisible = true;
    };
    __decorate([
        core_1.Input()
    ], WPropertyProjectCardComponent.prototype, "details");
    WPropertyProjectCardComponent = __decorate([
        core_1.Component({
            selector: 'app-w-property-project-card',
            templateUrl: './w-property-project-card.component.html',
            styleUrls: ['./w-property-project-card.component.scss']
        })
    ], WPropertyProjectCardComponent);
    return WPropertyProjectCardComponent;
}());
exports.WPropertyProjectCardComponent = WPropertyProjectCardComponent;
