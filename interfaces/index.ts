export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id: number;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  description: string;
}

export interface ReviewProps {
  name: string;
  rating: number;
  comment: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  onAction?: () => void;
}
