export type Category =
  | 'KOREAN'
  | 'CHINESE'
  | 'JAPANESE'
  | 'WESTERN'
  | 'CAFE'
  | 'ETC';

export interface MenuDTO {
  id: number;
  storeId: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

export interface StoreAnnouncementDTO {
  id: number;
  storeId: number;
  feedbackId: number;
  feedbackContent: string;
  content: string;
}

export interface StoreDetailDTO {
  id: number;
  userId: number;
  name: string;
  canonicalName: string;
  address: string;
  latitude: number;
  longitude: number;
  description?: string;
  category?: Category;
  imageUrl?: string;
  openingTime?: string;
  menus: MenuDTO[];
  storeAnnouncements: StoreAnnouncementDTO[];
}
