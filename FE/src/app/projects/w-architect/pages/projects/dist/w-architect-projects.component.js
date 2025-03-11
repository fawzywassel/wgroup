"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WArchitectProjectsComponent = void 0;
var core_1 = require("@angular/core");
var projects_constant_1 = require("../../constants/projects.constant");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var WArchitectProjectsComponent = /** @class */ (function () {
    function WArchitectProjectsComponent(activeRoute) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.image = image_paths_constant_1.IMAGES.pagesHeaders.wProperty.contactUs;
        this.titles = {
            res: 'المشاريع السكنية',
            com: 'المشاريع التجارية',
            admin: 'المشاريع المكتبية '
        };
        this.subtitle = '';
        this.projects = [];
        if (this.id) {
            this.projects = projects_constant_1.WArchitectProjectsList === null || projects_constant_1.WArchitectProjectsList === void 0 ? void 0 : projects_constant_1.WArchitectProjectsList.filter(function (project) {
                return project.category === _this.id;
            });
        }
    }
    Object.defineProperty(WArchitectProjectsComponent.prototype, "id", {
        get: function () {
            var _a;
            return ((_a = this.activeRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a['id']) || '';
        },
        enumerable: false,
        configurable: true
    });
    WArchitectProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-w-architect-projects',
            templateUrl: './w-architect-projects.component.html',
            styleUrls: ['./w-architect-projects.component.scss']
        })
    ], WArchitectProjectsComponent);
    return WArchitectProjectsComponent;
}());
exports.WArchitectProjectsComponent = WArchitectProjectsComponent;
