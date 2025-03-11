"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WPropertyHomeComponent = void 0;
var core_1 = require("@angular/core");
var feedbacks_constant_1 = require("../../constants/feedbacks.constant");
var projects_constant_1 = require("../../constants/projects.constant");
var partners_constant_1 = require("../../constants/partners.constant");
var WPropertyHomeComponent = /** @class */ (function () {
    function WPropertyHomeComponent(route) {
        this.route = route;
        this.feedbacks = feedbacks_constant_1.WPropertyFeedbacksList;
        this.partners = partners_constant_1.WPropertyPartnersList;
        this.projects = projects_constant_1.WPropertyProjectsList;
    }
    WPropertyHomeComponent.prototype.routeToPage = function (route) {
        this.route.navigateByUrl(route);
    };
    WPropertyHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-w-property-home',
            templateUrl: './w-property-home.component.html',
            styleUrls: ['./w-property-home.component.scss']
        })
    ], WPropertyHomeComponent);
    return WPropertyHomeComponent;
}());
exports.WPropertyHomeComponent = WPropertyHomeComponent;
