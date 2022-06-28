import React,{useState,useEffect}from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Products from './product';

const ProductList=(props)=>{
const [ searchName, setSearchName ] = useState('');
const [productDataList, setProductDataList] = useState(null);
const filtersearchName = (array) => {
  if(searchName.length >=1){
    return array.filter((item) => item.title.toLowerCase().indexOf(searchName.toLowerCase()) != -1);
  }else{
    return array;
  }
};

const handleChange = value => {
  setSearchName(value);
};

const clearAllHandle= product_data => {
  setProductDataList(product_data);
  setSearchName("")
}

useEffect(() => {
  //Filter options updated so apply all filters here
  let result = props.productData
  result = filtersearchName(result);
  setProductDataList(result);
}, [props.productData,searchName]);

  return (
    <div className='container mt-3'>
        <Stack direction="horizontal" gap={4}>
          <div className="bg-light border">   
          <Form.Control 
            type="name"
            value={searchName}
            onChange={e => handleChange(e.target.value)} 
            placeholder="search by title" />
          </div>
        <div className="bg-light border">
        <Button variant="primary" onClick={()=>clearAllHandle(props.productData)}>Clear</Button>
        </div>
      </Stack>
      <div className="row d-flex justify-content-center align-items-center">
        {
          productDataList !== null ?  productDataList.map((product) => {
            return (
              <>
                <Products key={product.id} product={product} />
              </>
            )
          })
          :null
        }
        
      </div>
    </div>
  )
}

export default ProductList