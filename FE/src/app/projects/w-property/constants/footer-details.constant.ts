import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { IFooterDetails } from 'src/app/shared/interfaces/footer-details.interface';

export const WPropertyFooterDetails: IFooterDetails = {
  logo: IMAGES.lightLogos.wProperty,
  description: '<span>W-Property</span> لـ إدارة الأملاك',
  details: [
    {
      text: 'حي اليرموك - الرياض - المملكة العربية السعودية',
      icon: 'pi pi-map-marker',
      diffFont: false,
    },
    {
      text: 'من 9 صباحا ل 2 مساء من 6مساء ل 9 مساء',
      icon: 'pi pi-clock',
      diffFont: false,
    },
    {
      text: '0536666049',
      icon: 'pi pi-phone',
    },
  ],
  socialMedia: [
    {
      link: 'property@wgroupksa.com',
      icon: 'pi pi-envelope',
    },
    {
      link: 'https://www.linkedin.com/company/w-property-sa/',
      icon: 'pi pi-linkedin',
    },
    {
      link: 'https://x.com/wpropertywgroup',
      icon: 'pi pi-twitter',
    },
    {
      link: 'https://www.instagram.com/wproperty99/',
      icon: 'pi pi-instagram',
    },
    {
      link: 'https://www.tiktok.com/@wproperty99?lang=en',
      image: '../../../../assets/images/icons/tiktok-colored.svg',
    },
    {
      link: '',
      icon: 'pi pi-home',
    },
  ],
  whatsApp: {
    link: 'https://api.whatsapp.com/send?phone=966536666049',
    icon: 'pi pi-whatsapp',
  },
};
