export interface IWArchitectProject {
  id: string;
  name: string;
  nameEn: string;
  videoURL: string;
  videoImage: string;
  mainImage: string;
  wImage?: string;
  category: 'res' | 'com' | 'admin';
  images: string[];
  smallerFont?: boolean;
}
