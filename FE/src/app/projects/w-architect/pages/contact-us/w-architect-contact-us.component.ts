import { Component } from '@angular/core';

@Component({
  selector: 'app-w-architect-contact-us',
  templateUrl: './w-architect-contact-us.component.html',
  styleUrls: ['./w-architect-contact-us.component.scss']
})
export class WArchitectContactUsComponent {
  image = "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=600";
  title = "تواصل معنا";
  subtitle = "تواصل معنا الآن"
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14529.41586992271!2d46.67724146790947!3d24.69721497361335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03aa5e66b3bb%3A0xca970a85b921b65e!2sAl%20Faisaliah%20Tower!5e0!3m2!1sen!2seg!4v1714133943965!5m2!1sen!2seg"

  details = [
    {
      text: "حي اليرموك - الرياض - المملكة العربية السعودية",
      icon: "pi pi-map-marker"
    },
    {
      text: "0536666049",
      icon: "pi pi-phone"
    },
    {
      text: "من 12 مساءاَ حتى 8 مساءاَ",
      icon: "pi pi-clock"
    },
  ]
}
