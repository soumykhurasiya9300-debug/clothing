export interface ProductItem {
  id: string;
  title: string;
  category: 'sarees' | 'lehengas' | 'sherwanis' | 'kurtas' | 'salwar-suits' | 'wedding';
  subtitle: string;
  image: string;
  tags: string[];
  fabric: string;
  craftsmanship: string;
  description: string;
  priceRange: string;
  occasion: string;
  isBestseller?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  hindiName?: string;
  icon: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  review: string;
  rating: number;
  meta: string;
  highlight?: string;
  city?: string;
}

export interface ShowroomInfo {
  name: string;
  hindiName: string;
  tagline: string;
  address: string;
  landmark: string;
  city: string;
  pinCode: string;
  phone: string;
  displayPhone: string;
  hours: string;
  googleMapsCode: string;
  googleMapsUrl: string;
  rating: number;
  totalReviews: number;
}
