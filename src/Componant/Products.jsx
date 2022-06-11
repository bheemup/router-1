import React, { useEffect, useState } from 'react'

function Products() {

    const [products, setProducts]=useState();
    var data;

    useEffect(()=>{
        const fetchData = async()=>{
            let res =await fetch("https://fakestoreapi.com/products");
             data = await res.json();
            setProducts(data)

           

        }
        fetchData();
    },[])



    console.log(data)
  return (

    <>
    <div>Products :</div>
    <div>
      <ul>
        {
            // console.log(products)
        }
      </ul>
        
    </div>
    </>
  )
}

export default Products