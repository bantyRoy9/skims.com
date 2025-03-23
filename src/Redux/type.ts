export type TProducts = IProduct[]
export interface IProduct {
  id: number
  name: string
  description: string
  productdetails:{
    details:string
  },
  base_price: string
  promo:{
    heading:string,
    subheading:string
  }
  created_at: string
  brandName: string
  // category: ICategory
  image_url:string
  // shopProducts: IShopProduct[]
  sliding_images:string[]
}

export interface IBrand {
  id: number
  name: string
  description: string
  created_at: string
}

export interface ICategory {
  id: number
  name: string
  created_at: string
}

export interface IShopProduct {
  id: number
  price: string
  created_at: string
}
