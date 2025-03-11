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
exports.WPropertySharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var w_property_navbar_component_1 = require("./navbar/w-property-navbar.component");
var w_property_header_component_1 = require("./header/w-property-header.component");
var forms_1 = require("@angular/forms");
var w_property_sections_header_component_1 = require("./sections-header/w-property-sections-header.component");
var w_property_request_form_component_1 = require("./request-form/w-property-request-form.component");
var w_property_video_component_1 = require("./video/w-property-video.component");
var global_shared_module_1 = require("src/app/shared/global-shared.module");
var inputtext_1 = require("primeng/inputtext");
var inputtextarea_1 = require("primeng/inputtextarea");
var checkbox_1 = require("primeng/checkbox");
var radiobutton_1 = require("primeng/radiobutton");
var dialog_1 = require("primeng/dialog");
var rating_1 = require("primeng/rating");
var image_1 = require("primeng/image");
var galleria_1 = require("primeng/galleria");
var w_property_feedback_card_component_1 = require("./feedback-card/w-property-feedback-card.component");
var w_property_project_card_component_1 = require("./project-card/w-property-project-card.component");
var http_1 = require("@angular/common/http");
var toast_1 = require("primeng/toast");
var chart_1 = require("primeng/chart");
var w_property_about_us_section_component_1 = require("./about-us-section/w-property-about-us-section.component");
var COMPONENTS = [
    w_property_navbar_component_1.WPropertyNavbarComponent,
    w_property_header_component_1.WPropertyHeaderComponent,
    w_property_sections_header_component_1.WPropertySectionsHeaderComponent,
    w_property_request_form_component_1.WPropertyRequestFormComponent,
    w_property_video_component_1.WPropertyVideoComponent,
    w_property_feedback_card_component_1.WPropertyFeedbackCardComponent,
    w_property_project_card_component_1.WPropertyProjectCardComponent,
    w_property_about_us_section_component_1.WPropertyAboutUsSectionComponent,
];
var WPropertySharedModule = /** @class */ (function () {
    function WPropertySharedModule() {
    }
    WPropertySharedModule = __decorate([
        core_1.NgModule({
            declarations: __spreadArrays(COMPONENTS),
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                inputtext_1.InputTextModule,
                inputtextarea_1.InputTextareaModule,
                checkbox_1.CheckboxModule,
                radiobutton_1.RadioButtonModule,
                dialog_1.DialogModule,
                rating_1.RatingModule,
                image_1.ImageModule,
                toast_1.ToastModule,
                chart_1.ChartModule,
                galleria_1.GalleriaModule,
                http_1.HttpClientModule,
                global_shared_module_1.GlobalSharedModule,
            ],
            exports: __spreadArrays(COMPONENTS)
        })
    ], WPropertySharedModule);
    return WPropertySharedModule;
}());
exports.WPropertySharedModule = WPropertySharedModule;
