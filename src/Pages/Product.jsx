import React, { useEffect, useState } from 'react'

function Product() {



  const [product, setProduct] = useState([])
  
  
    useEffect(() => {
      function fetching() {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          // .then((data) => console.log(data))
          .then(data => setProduct(data))
      }
      fetching();
    }, []);

  return (
   <>




   <div className=" max-w-7xl m-auto flex justify-around flex-wrap gap-y-7  mt-5 p-5 ">


          {product.map( pro=> (
          <div key={pro.id} className=" bg-gray-400/20  w-[20%] min-w-62.5  p-2 rounded-xl shadow-[0px_0px_4px_gray] hover:shadow-[0px_0px_4px_gray] hover:-translate-y-2.5 transition-all ">
            <div className="h-75  p-5">
              <img className="w-full h-full"
                src={pro.image}
                alt=""
              />
            </div>
            <div className="">
              <p className="line-clamp-1">{pro.title} </p>
              <p className="text-red-500 ">${pro.price}</p>
            </div>
          </div>
          ))}

        </div>
   
   
   
   
   </>
  )
}

export default Product