import {Card} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
 function App() {
    const data=[
        {
           productImage: "https://ii2.pepperfry.com/media/catalog/product/w/r/494x544/wrought-iron-green-and-blue-peacock-wall-art-with-led-by-ganeshay-textiles-craft-wrought-iron-green--nn4wgn.jpg",
            productName: "Product 1",
            price: "$40.00 - $80.00",
            // rating: "&#9733",
            pbtn:"View options",
        },
        {
            productImage:"https://ii3.pepperfry.com/media/catalog/product/i/r/1600x1760/iron-reindeer-wall-decorative-by-the-shining-rays-iron-reindeer-wall-decorative-by-the-shining-rays-9gt4sc.jpg",
             productName: "Product 2",
             rating: "★★★★★",
             price1:"$20.00",
             price: "$18.00",
             pbtn:"Add to cart",
            
         },
         {
            productImage:"https://ii2.pepperfry.com/media/catalog/product/m/u/1100x1210/multicolour-wrought-iron-decorative-wall-art-by-godeccor-multicolour-wrought-iron-decorative-wall-ar-orspfp.jpg",
             productName: "Product 3",
             price1: "$50.00",
             price: "$25.00",
             pbtn:"Add to cart",
            },
         {
            productImage:"https://ii2.pepperfry.com/media/catalog/product/d/e/494x544/decorative-zik-zag-sardar-wall-art-by-godeccor-decorative-zik-zag-sardar-wall-art-by-godeccor-wsu64g.jpg",
             productName: "Product 4",
             rating: "★★★★★",
             price: "$40.00",
             pbtn:"Add to cart",
         },
         {
            productImage:"https://ii3.pepperfry.com/media/catalog/product/m/u/494x544/multicolour-wrought-iron-decorative-wall-art-by-godeccor-multicolour-wrought-iron-decorative-wall-ar-duke1j.jpg",
             productName: "Product 5",
            price1: "$50.00",
             price:"$25.00",
             pbtn:"Add to cart",
         },
         {
            productImage:"https://ii1.pepperfry.com/media/catalog/product/b/i/494x544/bike-wall-art-in-multicolour-by-mahalaxmi-art-and-crafts-bike-wall-art-in-multicolour-by-mahalaxmi-a-q6x2op.jpg",
            productName: "Product 6",
            price:"$120.00 - $280.00",
            pbtn:"View options",         
            },
         {
            productImage:"https://ii3.pepperfry.com/media/catalog/product/m/u/494x544/multicolour-wrought-iron-decorative-wall-art-by-godeccor-multicolour-wrought-iron-decorative-wall-ar-74zybu.jpg",
             productName: "Product 7",
            rating: "★★★★★",
             price1:"$20.00",
             price: "$18.00",
             pbtn:"Add to cart",
        },
         {
            productImage:"https://ii2.pepperfry.com/media/catalog/product/b/u/1100x1210/buddha-worship-style-metal-wall-art-by-the-next-decor-buddha-worship-style-metal-wall-art-by-the-nex-kvv41e.jpg",
             productName: "Product 8",
            rating: "★★★★★",
             price:"$40.00",
             pbtn:"Add to cart",
         },
    ]
  return (
    <div className="App">
    {data.map((prod, idx)=>(<Card key={idx}style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImage}/>
      <Card.Body>
        <Card.Text>
          <b>{prod.productName}</b>
        </Card.Text>
        <Card.Text>
         <span className='str'>{prod.rating}</span>
         </Card.Text>
         <Card.Text>
          <span className='span'>{prod.price1}</span>  {prod.price}
         </Card.Text>
         <Button variant="primary" className='btn'>{prod.pbtn}</Button>
       </Card.Body>
     </Card>
))}    
    </div>
  )
 }
export default App;
