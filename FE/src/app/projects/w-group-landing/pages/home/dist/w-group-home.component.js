"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WGroupHomeComponent = void 0;
var core_1 = require("@angular/core");
var brands_constant_1 = require("../../constants/brands.constant");
var statistics_constant_1 = require("../../constants/statistics.constant");
var news_constant_1 = require("../../constants/news.constant");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var WGroupHomeComponent = /** @class */ (function () {
    function WGroupHomeComponent(route) {
        var _this = this;
        this.route = route;
        this.images = image_paths_constant_1.IMAGES;
        this.statistics = statistics_constant_1.WGroupStatisticsList;
        this.brands = brands_constant_1.WGroupBrandsList;
        this.uniqueStatuses = [];
        this.seenStatuses = new Set();
        this.news = news_constant_1.WGroupNewsList.filter(function (item) {
            if (!_this.seenStatuses.has(item.categoryId)) {
                _this.seenStatuses.add(item.categoryId);
                return true;
            }
            return false;
        });
    }
    WGroupHomeComponent.prototype.routeToPage = function (route) {
        this.route.navigateByUrl(route);
    };
    WGroupHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-w-group-home',
            templateUrl: './w-group-home.component.html',
            styleUrls: ['./w-group-home.component.scss']
        })
    ], WGroupHomeComponent);
    return WGroupHomeComponent;
}());
exports.WGroupHomeComponent = WGroupHomeComponent;
