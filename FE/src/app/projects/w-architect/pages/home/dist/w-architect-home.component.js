"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WArchitectHomeComponent = void 0;
var core_1 = require("@angular/core");
var projects_constant_1 = require("../../constants/projects.constant");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var routes_constant_1 = require("src/app/shared/constants/routes.constant");
var WArchitectHomeComponent = /** @class */ (function () {
    function WArchitectHomeComponent(router) {
        this.router = router;
        this.projects = projects_constant_1.WArchitectProjectsList;
        this.images = projects_constant_1.WArchitectProjectsList.map(function (item) {
            var _a;
            return {
                itemImageSrc: (_a = item === null || item === void 0 ? void 0 : item.mainImage) === null || _a === void 0 ? void 0 : _a.replace('main', 'slider'),
                label: item.name,
                id: item.id,
                alt: 'image'
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
        this.categories = [
            {
                id: 'res',
                name: 'سكني',
                nameEn: 'Residential',
                image: image_paths_constant_1.IMAGES.projectCategories + 'res.jpg'
            },
            {
                id: 'admin',
                name: 'مكتبي',
                nameEn: 'Administration',
                image: image_paths_constant_1.IMAGES.projectCategories + 'admin.jpg'
            },
            {
                id: 'com',
                name: 'تجاري',
                nameEn: 'Commercial',
                image: image_paths_constant_1.IMAGES.projectCategories + 'com.jpg'
            },
        ];
    }
    WArchitectHomeComponent.prototype.routeToPage = function (route) {
        this.router.navigateByUrl(route);
    };
    WArchitectHomeComponent.prototype.navigateToCategory = function (id) {
        this.router.navigateByUrl(routes_constant_1.W_ROUTES.W_ARCHITECT + "/" + routes_constant_1.W_ROUTES.PROJECTS + "/" + id);
    };
    WArchitectHomeComponent.prototype.navigateToProject = function (id) {
        this.router.navigateByUrl(routes_constant_1.W_ROUTES.W_ARCHITECT + "/" + routes_constant_1.W_ROUTES.DETAILS + "/" + id);
    };
    WArchitectHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-w-architect-home',
            templateUrl: './w-architect-home.component.html',
            styleUrls: ['./w-architect-home.component.scss']
        })
    ], WArchitectHomeComponent);
    return WArchitectHomeComponent;
}());
exports.WArchitectHomeComponent = WArchitectHomeComponent;
