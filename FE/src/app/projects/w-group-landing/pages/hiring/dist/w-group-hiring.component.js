"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WGroupHiringComponent = void 0;
var core_1 = require("@angular/core");
var jobs_constant_1 = require("../../constants/jobs.constant");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var WGroupHiringComponent = /** @class */ (function () {
    function WGroupHiringComponent() {
        this.image = image_paths_constant_1.IMAGES.pagesHeaders.wGroup.hiring;
        this.title = 'التوظيف';
        this.subtitle = 'إنضم إلي مجموعة W الآن';
        this.jobs = jobs_constant_1.WGroupJobsList;
    }
    WGroupHiringComponent.prototype.showDetails = function (details) {
        this.selectedJob = details;
    };
    WGroupHiringComponent.prototype.applyForJob = function () {
        var link = 'hr@wgroupksa.com';
        window.open("mailto: " + link, '_blank');
    };
    WGroupHiringComponent = __decorate([
        core_1.Component({
            selector: 'app-w-group-hiring',
            templateUrl: './w-group-hiring.component.html',
            styleUrls: ['./w-group-hiring.component.scss']
        })
    ], WGroupHiringComponent);
    return WGroupHiringComponent;
}());
exports.WGroupHiringComponent = WGroupHiringComponent;
