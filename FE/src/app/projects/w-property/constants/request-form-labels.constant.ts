import { ERequestFormControls } from '../enums/request-form-controls.enum';

export const RequestFormLabels = {
  [ERequestFormControls.firstName]: 'الاسم الاول',
  [ERequestFormControls.lastName]: 'الاسم الاخير',
  [ERequestFormControls.phoneNumber]: 'رقم الجوال (يفضل به واتس اب)',
  [ERequestFormControls.email]: 'البريد الالكتروني',
  [ERequestFormControls.userCountry]: 'الدولة',
  [ERequestFormControls.userCity]: 'المدينة',
  [ERequestFormControls.userInfo]:
    'معلومات موجزة عنك (شاركنا خبراتك ومهاراتك لكي نتعرف عليك أكثر)',
  [ERequestFormControls.userUnits]: 'ارغب بإدراج: (يمكنك اختيار اكثر من شيء)',
  [ERequestFormControls.unitStatus]: 'حالة العقار',
  [ERequestFormControls.rentType]: 'مدة الايجار المفضلة لديك',
  [ERequestFormControls.unitCountry]: 'الدولة',
  [ERequestFormControls.unitCity]: 'المدينة',
  [ERequestFormControls.unitDistrict]: 'الحي',
  [ERequestFormControls.unitInfo]:
    'اذا كان لديك ماتضيفه عن عقارك تفضل وسجله في هذه المساحه علما بأن دقة بياناتك المدخله ستسهم في تفضيل وقبول طلبك من قبلنا:    ',
  [ERequestFormControls.userRelation]: 'صفتك لما عرضته بالاعلى:',
  [ERequestFormControls.isInvestBefore]:
    'هل قمت بالاستثمار في مجال الضيافة والسياحة سابقاً؟',
  [ERequestFormControls.callAgreement]:
    'باختيارك نعم تكون موافق على ان نتصل بك لمتابعة طلبك:',
  [ERequestFormControls.promoCode]:
    'اذا كان لديك رقم مرجع / كود ترويجي ادخله هنا',
  [ERequestFormControls.extraInfo]: 'اذا كان لديك ما تضيفه فأكتبه هنا',
};
