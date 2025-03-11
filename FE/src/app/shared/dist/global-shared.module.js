"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.GlobalSharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var numbers_only_directive_1 = require("./directives/numbers-only.directive");
var youtube_video_dialog_component_1 = require("./components/youtube-video-dialog/youtube-video-dialog.component");
var dialog_1 = require("primeng/dialog");
var footer_component_1 = require("./components/footer/footer.component");
var COMPONENTS = [
    numbers_only_directive_1.NumberDirective,
    youtube_video_dialog_component_1.YoutubeVideoDialogComponent,
    footer_component_1.FooterComponent,
];
var GlobalSharedModule = /** @class */ (function () {
    function GlobalSharedModule() {
    }
    GlobalSharedModule = __decorate([
        core_1.NgModule({
            declarations: __spreadArrays(COMPONENTS),
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, dialog_1.DialogModule],
            exports: __spreadArrays(COMPONENTS)
        })
    ], GlobalSharedModule);
    return GlobalSharedModule;
}());
exports.GlobalSharedModule = GlobalSharedModule;
