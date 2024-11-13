import { addToCart } from "@/app/redux/features/cartSlice"
import { useAppDispatch } from "@/app/redux/hooks"
import { makeToast } from "@/app/utils/helper"
import { AiOutlineShoppingCart } from "react-icons/ai"


interface propsType{
  id: string,
  name:string,
  slug:string,
  images:string,
  price:number,
  salePrice:number,
  subcategory:string,
  qte:number
}

const ProductCard = ({id,name,images,subcategory,price,salePrice,slug,qte}:propsType) => {
  const dispatch = useAppDispatch()

  const addProductToCart = () => {
    const payload:propsType = {id,name,images,subcategory,price,salePrice,slug,qte}
    dispatch(addToCart(payload))
    makeToast("Added to Cart")
  }

  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img  className="inline-block" src={`http://localhost:1337/${images}`} alt={name} />
      </div>
      <div className="px-8 py-4">
        <p className="text-gray-500 text-[14px] font-medium">{subcategory}</p>
        <h2 className="font-medium">{`${name.slice(0,45)}...`}</h2>

        <div className="flex justify-between items-center mt-4">
          <div>
           {salePrice?<div className="font-medium text-slate-400 line-through">{price}DT</div>:''}
          <h2 className="font-medium text-accent text-xl">
            {salePrice?`${salePrice}DT`:`${price}DT`}
          </h2>
          </div>
          <div className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent"
          onClick={addProductToCart}
          >
            <AiOutlineShoppingCart/> Add To Cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard