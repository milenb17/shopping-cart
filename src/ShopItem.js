import { useState } from 'react';
function ShopItem(props) {
  const [quantity, setQuantity] = useState(1);
  const handleChange = function(e) {
        e.preventDefault();
        setQuantity(e.target.value);
  }
    const { item, handleClick, } = props;
    return (
        <div>
            <p>{item.name} - ${item.price}</p>
            <img src={item.link} alt={item.name} className='shopImage'></img>
            <form id={item.name} onSubmit={handleClick}>
                <input type='number' min='1' value={quantity} onChange={handleChange}></input>
                <button type='submit'>Add to Cart</button>
            </form>
            
        </div>
    )
}




export default ShopItem;