"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WArchitectProjectDetailsComponent = void 0;
var core_1 = require("@angular/core");
var projects_constant_1 = require("../../constants/projects.constant");
var WArchitectProjectDetailsComponent = /** @class */ (function () {
    function WArchitectProjectDetailsComponent(activeRoute) {
        this.activeRoute = activeRoute;
        this.projects = projects_constant_1.WArchitectProjectsList;
        this.activeImage = '';
        this.isImageDialogVisible = false;
        this.isVideoDialogVisible = false;
    }
    WArchitectProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedProject = projects_constant_1.WArchitectProjectsList === null || projects_constant_1.WArchitectProjectsList === void 0 ? void 0 : projects_constant_1.WArchitectProjectsList.find(function (item) {
            return item.id === _this.id;
        });
        if (selectedProject) {
            this.projectDetails = selectedProject;
        }
    };
    Object.defineProperty(WArchitectProjectDetailsComponent.prototype, "id", {
        get: function () {
            var _a;
            return ((_a = this.activeRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a['id']) || '';
        },
        enumerable: false,
        configurable: true
    });
    WArchitectProjectDetailsComponent.prototype.openImageDialog = function (src) {
        this.activeImage = src;
        this.isImageDialogVisible = true;
    };
    WArchitectProjectDetailsComponent.prototype.openVideoDialog = function () {
        this.isVideoDialogVisible = true;
    };
    WArchitectProjectDetailsComponent.prototype.hideVideoDialog = function () {
        this.isVideoDialogVisible = false;
    };
    WArchitectProjectDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-w-architect-project-details',
            templateUrl: './w-architect-project-details.component.html',
            styleUrls: ['./w-architect-project-details.component.scss']
        })
    ], WArchitectProjectDetailsComponent);
    return WArchitectProjectDetailsComponent;
}());
exports.WArchitectProjectDetailsComponent = WArchitectProjectDetailsComponent;
