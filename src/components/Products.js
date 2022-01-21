
import Product from './Product'
import {Data} from './Data'

import {useState} from 'react'

function Products() {


const [items,setitems] = useState(Data);


    return (



      <div className="products">

      <div className="inside-container">
          <h3>Products</h3>
          <div className="products-center">
              {items.map(product=>  <Product key={product._id} data={product}  />)}
          </div>
      </div>

    </div>












    );
  }

  export default Products;
