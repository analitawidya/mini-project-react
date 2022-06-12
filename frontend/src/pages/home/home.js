import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/api';
import { Alert } from 'react-bootstrap';
import CardComponent from '../../components/card/card-component';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';



const Home = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGetAllProduct = async () => {
    await setIsLoading(true);
    await getAllProducts()
    .then((response) => setDataProduct(response.data))
    .catch((eror) => {
      console.log(eror);
    })
    await setIsLoading(false);
  };


  useEffect(() => {
    fetchGetAllProduct();

  }, [])
  return (

    <div>
      <Alert key='light' variant='light'>
        You get 50%, buy now!!
      </Alert>
      <div>
        {isLoading ? (
        <ReactLoading type="splinningBubbles" color="blue"className ="m-auto mt-5"/> 
        ) : (
         
            <div className='d-flex flex-wrap'>
            {dataProduct.map((products) => (
              <Link 
              to= {`/detail-product/${products.id} `}
              className="text-decoratione-none">

                <CardComponent
                  tittle={products.name}
                  price={products.price} 
                  image={products.image}
                  />
                  </Link>
             
            ))}
            
          </div>
      
        )} 

      </div>
    </div>
  )
}

export default Home