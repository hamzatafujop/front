import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IProduct{
  id: string,
  name:string,
  slug:string,
  // images: {
  //   formats: {
  //     thumbnail: {
  //       url: string
  //     }
  //   }
  // }[],
  images:string,
  subcategory:string,
  // subcategory:{
  //   name:string
  // }
  price:number,
  salePrice:number,
  // quantity:number,
  // reference:string,
  //Disponibility:string,
  //color:string,
  //marque:string,
  // subcategory:string,
  qte:number
}

const initialState: Array<IProduct>=[];

export const cartSlice = createSlice({
  name:"cartSlice",
  initialState,
  reducers:{
    addToCart:(state,action:PayloadAction<IProduct>)=>{
      if(state.findIndex((prod)=>prod.id === action.payload.id)===-1){
        state.push(action.payload)
      }else{
        return state.map((item)=>{
          return item.id=== action.payload.id ? {...item,qte:item.qte+1}:item;
        })
      }
    },
    removeFromCart:(state,action:PayloadAction<string>)=>{
      const id= action.payload
      return state.filter((item)=>item.id!=id)
    }
  }
});

export const {addToCart, removeFromCart}= cartSlice.actions
export default cartSlice.reducer