"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var w_property_submit_request_component_1 = require("./w-property-submit-request.component");
describe('WPropertySubmitRequestComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [w_property_submit_request_component_1.WPropertySubmitRequestComponent]
        });
        fixture = testing_1.TestBed.createComponent(w_property_submit_request_component_1.WPropertySubmitRequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
