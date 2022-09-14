import ShopItem from './ShopItem';
function Shop(props) {
    const { handleClick, items } = props;
    return (
        <div>
            <h1>Shop</h1>
            <div className='shop'>
            {Object.entries(items).map(([key, value]) => {
                return (
                    <ShopItem item={value} key={key} handleClick={handleClick} />
                )
            })}
            </div>
            
        </div>
        
        
    )
}

export default Shop;