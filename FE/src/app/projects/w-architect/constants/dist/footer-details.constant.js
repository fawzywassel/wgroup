"use strict";
exports.__esModule = true;
exports.WArchitectFooterDetails = void 0;
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
exports.WArchitectFooterDetails = {
    logo: image_paths_constant_1.IMAGES.lightLogos.wArchitect,
    description: '<span>W</span> للتصميم المعماري و الداخلي',
    details: [
        {
            text: 'حي اليرموك - الرياض - المملكة العربية السعودية',
            icon: 'pi pi-map-marker',
            diffFont: false
        },
        {
            text: 'من 9 صباحا ل 2 مساء من 6مساء ل 9 مساء',
            icon: 'pi pi-clock',
            diffFont: false
        },
        {
            text: '0536666049',
            icon: 'pi pi-phone'
        },
    ],
    socialMedia: [
        {
            link: 'arch@wgroupksa.com',
            icon: 'pi pi-envelope'
        },
        {
            link: 'https://www.linkedin.com/company/warchitecture6/about/?viewAsMember=true',
            icon: 'pi pi-linkedin'
        },
        {
            link: 'https://x.com/warchitecture6',
            icon: 'pi pi-twitter'
        },
        {
            link: 'https://www.instagram.com/warchitecture6',
            icon: 'pi pi-instagram'
        },
        {
            link: 'https://www.tiktok.com/@warchitecture6?lang=en',
            image: '../../../../assets/images/icons/tiktok-dark.svg'
        },
        {
            link: '',
            icon: 'pi pi-home'
        },
    ],
    whatsApp: {
        link: 'https://api.whatsapp.com/send?phone=966536666049',
        icon: 'pi pi-whatsapp'
    }
};
