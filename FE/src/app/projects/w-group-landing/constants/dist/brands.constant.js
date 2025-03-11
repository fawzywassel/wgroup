"use strict";
exports.__esModule = true;
exports.WGroupBrandsList = void 0;
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var routes_constant_1 = require("src/app/shared/constants/routes.constant");
exports.WGroupBrandsList = [
    {
        link: routes_constant_1.W_ROUTES.W_ARCHITECT,
        logo: image_paths_constant_1.IMAGES.lightLogos.wArchitect,
        bg: '../../../../assets/images/w-architect-bg.jpg',
        addDarkLayer: false,
        alignEnd: false
    },
    {
        // link: W_ROUTES.W_REAL_ESTATE,
        link: '',
        logo: image_paths_constant_1.IMAGES.lightLogos.wRealEstate,
        bg: '../../../../assets/images/w-real-estate-bg.jpg',
        addDarkLayer: false,
        alignEnd: true,
        disabled: true,
        label: 'قريباََ | <span>soon</span>'
    },
    {
        link: routes_constant_1.W_ROUTES.W_PROPERTY,
        logo: image_paths_constant_1.IMAGES.lightLogos.wProperty,
        bg: '../../../../assets/images/w-property-bg.jpeg',
        addDarkLayer: false,
        alignEnd: false
    },
];
