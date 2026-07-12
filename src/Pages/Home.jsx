import React, { useEffect, useState } from "react";
import { Link, NavLink,  } from "react-router";

function Home() {

const [product, setProduct] = useState([])


  useEffect(() => {
    function fetching() {
      fetch("https://fakestoreapi.com/products?limit=8")
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then(data => setProduct(data))
    }
    fetching();
  }, []);



  return (
    <>
      {/* Home */}
      <div className="bg-amber-200 h-300 max-h-screen  flex justify-center items-center ">
        <div className="flex flex-col text-center ">
          <h3 className="text-2xl font-bold ">New Collection </h3>
          <h1 className="text-4xl font-bold p-3">Luxary Without Labels</h1>
          <p>Explore new-in product and best sellers</p>
          <div className="pt-3">
            <button className="bg-gray-950 text-white p-2 px-8 rounded-xl hover:bg-gray-700 transition-all">
              View Collectoin
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mt-26">
        <div className="bg-white text-center ">
          <h1 className="text-3xl font-bold">Best Sellers</h1>
          <p className="text-xl text-gray-600 pt-4">
            Explore our best seller products
          </p>
        </div>

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

          <div className="flex justify-center items-center p-5 pt-4 ">
            <Link to="/product">
            <button className="bg-black text-white borde- p-2 px-7 rounded hover:bg-gray-900 cursor-pointer "   > Explore More</button>
            </Link>
            
            
          </div>
        
      </div>

      {/* <nav>

    <NavLink to="/">Home</NavLink> |
    <NavLink to="/about">About</NavLink> |
    <NavLink to="/product">Product</NavLink> |
    <NavLink to="/contact">Contact</NavLink> |

    </nav> */}
    </>
  )
}

export default Home;
