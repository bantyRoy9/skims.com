import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import buildEPCExtraReducers from "./Store.Builders";
import { IProduct, TProducts } from "./type";
export type initialStateTy = {
  products: TProducts,
  isDrawOpen:boolean,
  addtocard: any,
  product:IProduct
}

export const initialState: initialStateTy = {
  products: [],
  addtocard: {},
  isDrawOpen:false,
  product:{
    base_price:"5400",
    brandName:"HEAVYWEIGHT COTTON",
    productdetails:{
      details:"As essential as tees come. This relaxed long sleeve crewneck is made from 100% heavyweight cotton that’s soft and breathable. Features rib details at the neck and cuffs. Styled with casual or elevated looks, this style won’t let you down. Fits true to size."
    },
    promo:{
      heading:"BUY 2, GET 1 FREE",
      subheading:"For a limited time, mix, match, and save on the tees and tanks that can’t be topped"
    },
    description:'',
    id:1,
    image_url:"https://cdn.shopify.com/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-LS-LST-7893M-GUN.jpg?v=1738122119&width=130&height=130&crop=center",
    name:"MENS RELAXED LONG SLEEVE T-SHIRT",
    sliding_images:[
      "https://skims.imgix.net/s/files/1/0259/5448/4284/files/LS-LST-7893M-GUN-SB-SKIMS-MENS_0005-FR.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0",
"https://skims.imgix.net/s/files/1/0259/5448/4284/files/LS-LST-7893M-GUN-SB-SKIMS-MENS_0043-SD.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0",
"https://skims.imgix.net/s/files/1/0259/5448/4284/files/LS-LST-7893M-GUN-SB-SKIMS-MENS_0029-FR.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0", 
"https://skims.imgix.net/s/files/1/0259/5448/4284/files/LS-LST-7893M-GUN-SB-SKIMS-MENS_0034-FR.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0", 
"https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-HEAVYWEIGHTCOTTON-GUN-SW.jpg?v=1738119933&auto=format&w=106&h=106&ixlib=react-9.10.0", 
"https://skims.imgix.net/s/files/1/0259/5448/4284/files/SKIMS-LOUNGEWEAR-LS-LST-7893M-GUN.jpg?v=1738122119&auto=format&w=106&h=106&ixlib=react-9.10.0", 
    ],
  } as IProduct
}
const storeDetailSlice = createSlice({
  name: 'storeDetails',
  initialState,
  reducers: {
    addItem: ({ addtocard }, { payload: { product, type } }: PayloadAction<{ product: IProduct; type?: -1 | 1 }>) => {
      const product_id = product.id;
      if (type === -1 && product_id) {
        addtocard[product_id].splice(0, 1);
        if (!addtocard[product_id].length) delete addtocard[product_id]
      } else {
        if(!addtocard){
          addtocard = {}
        }
        addtocard[product_id] = [...(addtocard[product_id] || []), product]
      }
    },
    clearCart: (state) => {
      state.addtocard.items = [];
      state.addtocard.total = 0;
    },
    setSetIsDrawOpen:(state,{payload}:PayloadAction<boolean>)=>{
      state.isDrawOpen=payload
    }
  },
  extraReducers: buildEPCExtraReducers
});
export const { addItem,setSetIsDrawOpen } = storeDetailSlice.actions;
export default storeDetailSlice.reducer;