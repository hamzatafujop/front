import { removeFromCart } from '@/app/redux/features/cartSlice';
import { useAppDispatch } from '@/app/redux/hooks'
import React from 'react'
import { RxCross1 } from 'react-icons/rx';

interface propsType{
  id: string,
  name:string,
  slug:string,
  images:string,
  subcategory:string,
  price:number,
  salePrice:number,
  qte:number
}
const CartProduct: React.FC<propsType> = ({
  id, name, images, price, salePrice,subcategory,qte
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <img className='h-[80px]' src={`http://localhost:1337/${images}`} alt='title'/>
        <div className='space-y-2'>
          <h3 className='font-medium'>{name}</h3>
          <p className='text-gray-600 text-[14px]'>
            {qte} x ${price}.00
          </p>
        </div>

      </div>
      <RxCross1 className='cursor-pointer font-bold text-[24px]' onClick={()=> dispatch(removeFromCart(id))}/>
      </div>
  )
}

export default CartProduct