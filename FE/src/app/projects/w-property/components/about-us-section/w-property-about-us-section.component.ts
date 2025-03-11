import { Component } from '@angular/core';
import { IMAGES } from 'src/app/shared/constants/image-paths.constant';

@Component({
  selector: 'app-w-property-about-us-section',
  templateUrl: './w-property-about-us-section.component.html',
  styleUrls: ['./w-property-about-us-section.component.scss'],
})
export class WPropertyAboutUsSectionComponent {
  image = IMAGES.pagesHeaders.wProperty.aboutUs;
  title = 'من نحن';
  subtitle = 'تعرف علينا اكثر الآن';

  visionImage = IMAGES.slider[3];

  whyKsaImages = IMAGES.whyKsa;

  rentPath = '../../../../../assets/images/icons/rent-icons/';
  ownersRentPath = '../../../../../assets/images/icons/owner-rent-icons/';
  servicesPath = '../../../../../assets/images/icons/services/';
  stepsPath = '../../../../../assets/images/icons/steps/';

  rent = [
    'خدمات و وسائل راحة متنوعة',
    'تنوع المواقع المتاحة',
    'مساحات أكبر',
    'تكلفة معقولة',
    'إتاحة دائمة',
    'مثالي للعائلات والمجموعات',
    'مزيد من الخصوصية',
    'مرونة في إجراءات الوصول والمغادرة',
  ];

  services = [
    'تصميم داخلي أنيق وجذاب',
    'دخول المرن للنزلاء',
    'حلول تسعير ديناميكي',
    'إدارة كاملة للوحدة السكنية',
    'خدمة النزلاء على مدار الساعة',
    'تصوير احترافي للشقق',
    'تنظيف محترف و صيانة دورية',
  ];

  ownersRent = [
    'زيادة الدخل',
    'لا عناء مع المستأجرين',
    'صيانة للمنزل على مدار السنة',
    'استخدم منزلك في أي وقت',
  ];

  steps = {
    step1: [
      'التسجيل عبر الموقع',
      'زيارة الشقة من قبل الفريق',
      'الملاحظات الأولية',
      'تقديم دراسة جدوى',
    ],
    step2: [
      'التأثيث أو التحسين من قبل فريقنا',
      'تصوير محترف',
      'إنشاء حسابات على منصات التأجير',
      'الأرباح المتواصلة',
    ],
  };

  basicData = {
    labels: ['قصير الاجل', 'ايجار سنوي'],
    datasets: [
      {
        type: 'bar',
        label: 'خارج الموسم',
        backgroundColor: ['#af553b', '#af553b'],
        data: [50, 0],
        barThickness: 100,
      },
      {
        type: 'bar',
        label: 'في الموسم',
        backgroundColor: ['#c69a79', '#af553b'],
        data: [151, 80],
        barThickness: 100,
      },
    ],
  };

  basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.9,
    plugins: {
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: ['#af553b', '#af553b'],
        },
        grid: {
          color: '#f5f5f5',
          drawBorder: false,
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: '#f5f5f5',
        },
        grid: {
          color: '#bbb',
          drawBorder: false,
        },
      },
    },
  };
}
