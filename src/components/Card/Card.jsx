import { useState,useEffect } from "react";
import axios from "axios";
import './card.css'

const Card = ()=>{
    const  [productData, setProductData] = useState([]);
    useEffect(() => {
      getData();
        
      
    }, [])
    

    const getData = async () =>{
try{

    let Data = await axios.get('https://dummyjson.com/products');
    setProductData(Data.data.products);
}catch(err){
    console.log(err)
}
                                }
    console.log(productData)



    return(
        <>
        <div className="cards">
           { productData.map((e,i)=><>
           
            <div className="card" key={i}>
                <div>
                    <img src={e.thumbnail} alt="" />
                </div>
                <div className="cardText">

                    <div>
                        <h1>{e.title}</h1>
                    </div>
                    <hr />
                    <div>
                        <p>{e.description}</p>
                    </div>
                    <div>
                        <p>Rating : {e.rating} / 5 </p>
                    </div>
                    <div className="cardBtn">
                        <strong>

                            price : {e.price} 
                        </strong>
                            
                        <button>
                            Add to cart
                        </button>
                    </div>
                    
                </div>

            </div>
           </>
            )}

        </div>
        </>
    )
}
export default Card;