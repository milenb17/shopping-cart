import { Link } from 'react-router-dom';

function Nav(props) {
    let cartString = 'Cart';
    if (props.count !==0) {
        cartString += ` (${props.count})`;
    }
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/cart'>
                    <li>{cartString}</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;