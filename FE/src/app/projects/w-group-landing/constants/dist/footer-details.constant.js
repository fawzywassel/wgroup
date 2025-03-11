"use strict";
exports.__esModule = true;
exports.WGroupFooterDetails = void 0;
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
exports.WGroupFooterDetails = {
    logo: image_paths_constant_1.IMAGES.lightLogos.wGroup,
    description: 'العقار هو رؤيتنا  والعمارة هي شغفنا',
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
            link: 'sales@wgroupksa.com',
            icon: 'pi pi-envelope'
        },
        {
            link: 'https://www.linkedin.com/company/w-group-sa/',
            icon: 'pi pi-linkedin'
        },
        {
            link: 'https://x.com/w_group_sa',
            icon: 'pi pi-twitter'
        },
        {
            link: 'https://www.youtube.com/channel/UCCLxeyDcAqJD7njnqQYuW8A',
            icon: 'pi pi-youtube'
        },
        {
            link: '',
            icon: 'pi pi-home'
        },
        {
            link: '/login',
            icon: 'pi pi-cog'
        },
    ],
    whatsApp: {
        link: 'https://api.whatsapp.com/send?phone=966536666049',
        icon: 'pi pi-whatsapp'
    }
};
