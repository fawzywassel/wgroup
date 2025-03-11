import { IMAGES } from 'src/app/shared/constants/image-paths.constant';
import { W_ROUTES } from 'src/app/shared/constants/routes.constant';

export const WGroupBrandsList = [
  {
    link: W_ROUTES.W_ARCHITECT,
    logo: IMAGES.lightLogos.wArchitect,
    bg: '../../../../assets/images/w-architect-bg.jpg',
    addDarkLayer: false,
    alignEnd: false,
  },
  {
    // link: W_ROUTES.W_REAL_ESTATE,
    link: '',
    logo: IMAGES.lightLogos.wRealEstate,
    bg: '../../../../assets/images/w-real-estate-bg.jpg',
    addDarkLayer: false,
    alignEnd: true,
    disabled: true,
    label: 'قريباََ | <span>soon</span>',
  },
  {
    link: W_ROUTES.W_PROPERTY,
    logo: IMAGES.lightLogos.wProperty,
    bg: '../../../../assets/images/w-property-bg.jpeg',
    addDarkLayer: false,
    alignEnd: false,
  },
];
