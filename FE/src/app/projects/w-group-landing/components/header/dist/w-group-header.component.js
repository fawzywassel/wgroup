"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WGroupHeaderComponent = void 0;
var core_1 = require("@angular/core");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var WGroupHeaderComponent = /** @class */ (function () {
    function WGroupHeaderComponent() {
        var _this = this;
        this.TEXT = ['نستلهم من الماضي', 'لنرسم المستقبل', ''];
        this.images = image_paths_constant_1.IMAGES.slider.map(function (item, i) {
            return {
                itemImageSrc: item,
                alt: 'image',
                text: _this.TEXT[i]
            };
        });
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            },
        ];
    }
    WGroupHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-w-group-header',
            templateUrl: './w-group-header.component.html',
            styleUrls: ['./w-group-header.component.scss']
        })
    ], WGroupHeaderComponent);
    return WGroupHeaderComponent;
}());
exports.WGroupHeaderComponent = WGroupHeaderComponent;
