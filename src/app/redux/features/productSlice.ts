import { PayloadAction, createSlice } from "@reduxjs/toolkit"
interface IProduct {
  id: string,
  name:string,
  slug:string,
  images: {
    formats: {
      small: {
        url: string
      }
    }
  }[],
  subcategory:{
    name:string
  }
  price:number,
  salePrice:number,
  qte:number
}
const initialState:IProduct ={
  id: "",
  name:"",
  slug:"",
  images:[{formats:{small:{url:""}}}],
  price:0,
  salePrice:0,
  qte:1,
  subcategory:{name:""}
} 

const productSlice = createSlice({
  name:'productSlice',
  initialState,
  reducers:{
    setProduct:(state,action:PayloadAction<IProduct>)=>{
      return action.payload
    }
  }
});

export const {setProduct}= productSlice.actions
export default productSlice.reducer