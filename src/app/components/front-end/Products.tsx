"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export interface IProduct {
  id: string,
  name:string,
  slug:string,
  images: {
    formats: {
      thumbnail: {
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
interface ApiResponse {
  data: []
  status: number
}

const token = '1f45927c20dbead3b95fb07c51c1bb845079d6ae7ed8f10ac7cd69c031124002a77b0897166fc358dcbdb0103e514b0b0fce3ae9754e89f4375458e068a5afac7435e35edbe3d6f45bb29decc4ab30458086ca462e6657f969d7dd3c3e035ff7bcd14b2ab2f8a4b1a9c6651b109cb2a08235647d90b38e1bd96a2835b6b829b6';
const TrendingProducts = () => {

  const [products,setProducts] = useState<[]>([])
  const [loading,setLoading] = useState<boolean>(false)
  useEffect(()=>{
    const fetchData = async():Promise<void> =>{
      try{
        setLoading(true)
        const {data} = await axios.get<ApiResponse>("http://localhost:1337/api/products?populate=*",{
          headers: { Authorization: `Bearer ${token}` }
        })
        console.log(data.data)
        setProducts(data.data)
      }
      catch(err){
        console.log(err)
      }
      setLoading(false)
    }
    fetchData()
  },[])

  return (
    <div className="container mt-32">
    <div className="sm:flex justify-between items-center">
      <h2 className="text-4xl font-medium"> Products</h2>
      <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
        <div className="text-black">New</div>
        <div>Feature</div>
        <div>Top Sellers</div>
      </div>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
      
      { 
      loading ? '...loading':
      products.map((item : IProduct) => 
        //<div>{item.name}</div>
      <ProductCard 
        key={item.id}
        id={item.id}
        images={item.images[0].formats.thumbnail.url}
        subcategory={item.subcategory.name}
        name={item.name}
        slug={item.slug}
        price={item.price}
        salePrice={item.salePrice}
        qte={1}
        //color={item.color}
        // marque={item.marque}
        //Disponibility={item.Disponibility}
      />
      )
      }
    </div>
    </div>

  )
}

export default TrendingProducts;