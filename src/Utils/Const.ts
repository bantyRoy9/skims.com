import { JSX } from "react";
import { IProduct } from "../Redux/type";
export const FORMTOASTERRID = 'formtoastid';
export const OTP_COUNT=60;
export const OTP_COUNTER = 1;
/********DRAWER*********/

export type DrawerPosition = "top" | "right" | "bottom" | "left";
export type DrawerProps = {
    position: DrawerPosition;
    isOpen: boolean;
    onClose: () => void;
    children: any
    headerName:string
};
export interface IProductCard {
  product: IProduct,
  width?:number,
  addProduct?:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,item:-1|1,product:IProduct)=>void,
  addtocard?: any,
  activecard?:number|null
  className?:string
  isproduct:string
}

export interface modalPropsTypes {
    headerTitle: String;
    modalSize: 'lgx' | 'lg' | 'md' | 'sm' | 'sm-x' | 'small';
    btnTitle: string;
    secBtnTitle?: string;
    onClick: (isSecBtn?: boolean) => void;
    onSubmit:(e:React.FormEvent) => void;
    children: JSX.Element;
    fontWeight?: string;
    closeModal: (name?: string) => void;
    name?: string;
    subHeaderTitle?: string;
    className?: string;
    overflow?:boolean
    btnVisible?:boolean
};

export interface DropModalTy{
  ModalTitle:string;
  child:JSX.Element;
  top:number;
  right:number;
}
interface Product {
  id: string;
  title: string;
  price: string;
  color: string;
  imageUrl: string;
  badge?: string;
  sizes?: string[]
}


// Example Usage
export const products: Product[] = [
  {
    "title": "Fleece Lounge Mens Classic Straight Leg Pant",
    "price": "₹8,200",
    "color": "Washed Onyx",
    "sizes": ["Select Size", "XS", "S", "M"],
    "imageUrl": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-5417M-OBS.jpg?v=1710447010&auto=format&ixlib=react-9.10.0&h=205&dpr=1&q=75",
    "badge": "Styled With",
    "id": "1"
  },
  {
    "id": "1",
    "title": "Fleece Lounge Mens Relaxed Short",
    "price": "₹5,950",
    "color": "Washed Onyx",
    "sizes": ["Select Size", "XS", "S", "M"],
    "imageUrl": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-5417M-OBS.jpg?v=1710447010&auto=format&ixlib=react-9.10.0&h=205&dpr=1&q=75  ",

  },
  {
    "id": "1",
    "title": "Skims Stretch Mens 5\" Boxer Brief 3-Pack",
    "price": "₹4,850",
    "color": "Obsidian",
    "sizes": ["Select Size", "XS", "S", "M"],
    "imageUrl": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-5417M-OBS.jpg?v=1710447010&auto=format&ixlib=react-9.10.0&h=205&dpr=1&q=75  ",

  },
  {
    "id": "1",
    "title": "Mens Day Sock 3-Pack",
    "price": "₹2,650",
    "color": "Gunmetal Navy Multi",
    "sizes": ["Select Size"],
    "imageUrl": "https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-TP-ZUP-5417M-OBS.jpg?v=1710447010&auto=format&ixlib=react-9.10.0&h=205&dpr=1&q=75  ",

  }
]
// Add more products here
export const projectSection = [
  {
    "title": "Similar Styles",
    "products": [
      {
        "name": "Mens Classic Hoodie",
        "category": "Fleece Lounge",
        "price": "₹7,850"
      },
      {
        "name": "Mens Classic Hoodie",
        "category": "Outdoor Jersey",
        "price": "₹8,200"
      },
      {
        "name": "Mens Hoodie",
        "category": "Jersey Lounge",
        "price": "₹6,800"
      },
      {
        "name": "Mens Zip Up Hoodie",
        "category": "Jersey Lounge",
        "price": "₹7,250"
      },
      {
        "name": "Mens Relaxed Zip Up Hoodie",
        "category": "Fleece Lounge",
        "price": "₹8,750"
      },
      {
        "name": "Mens Classic Crewneck",
        "category": "Terry",
        "original_price": "₹3,200",
        "discounted_price": "₹2,800"
      }
    ]
  },
  {
    "title": "More in This Color",
    "products": [
      {
        "name": "Mens Relaxed Jogger",
        "category": "Fleece Lounge",
        "price": "₹8,200"
      },
      {
        "name": "Straight Leg Pant",
        "category": "Boyfriend Fleece",
        "price": "₹7,850"
      },
      {
        "name": "Crewneck",
        "category": "Boyfriend Fleece",
        "price": "₹6,400"
      },
      {
        "name": "Cargo Pant",
        "category": "Boyfriend Fleece",
        "price": "₹8,750"
      },
      {
        "name": "Bike Short",
        "category": "Outdoor",
        "original_price": "₹2,800",
        "discounted_price": "₹2,250"
      },
      {
        "name": "Track Jacket",
        "category": "Boyfriend Fleece",
        "price": "₹8,750"
      }
    ]
  },
  {
    "title": "Explore Collection",
    "products": [
      {
        "name": "Mens Relaxed Short",
        "category": "Fleece Lounge",
        "price": "₹5,950"
      },
      {
        "name": "Mens Classic Straight Leg Pant",
        "category": "Fleece Lounge",
        "price": "₹8,200"
      },
      {
        "name": "Mens Tapered Jogger",
        "category": "Fleece Lounge",
        "price": "₹7,850"
      },
      {
        "name": "Mens Classic Hoodie",
        "category": "Fleece Lounge",
        "price": "₹7,850"
      },
      {
        "name": "Mens Classic Crewneck",
        "category": "Fleece Lounge",
        "price": "₹7,250"
      },
      {
        "name": "Oversized Pant",
        "category": "Fleece Lounge",
        "price": "₹10,150"
      }
    ]
  },
  {
    "title": "We Think You'd Like",
    "products": [
      {
        "name": "Mens 5\" Boxer Brief",
        "category": "Skims Stretch",
        "price": "₹1,800"
      },
      {
        "name": "Mens Classic Long Sleeve T-Shirt",
        "category": "Skims Cotton",
        "price": "₹4,500"
      },
      {
        "name": "Cami Bodysuit",
        "category": "Fits Everybody",
        "price": "₹5,000"
      },
      {
        "name": "Long Sleeve T-Shirt",
        "category": "Cotton Jersey",
        "price": "₹5,250"
      },
      {
        "name": "Legging",
        "category": "Cotton Rib",
        "price": "₹5,250"
      }
    ]
  }
]

export type modalPropsType = Omit<modalPropsTypes,"onSubmit">
export type FormModalPropsType = Omit<modalPropsTypes,"onClick">