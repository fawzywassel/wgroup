"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var w_property_about_us_section_component_1 = require("./w-property-about-us-section.component");
describe('WPropertyAboutUsSectionComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [w_property_about_us_section_component_1.WPropertyAboutUsSectionComponent]
        });
        fixture = testing_1.TestBed.createComponent(w_property_about_us_section_component_1.WPropertyAboutUsSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
