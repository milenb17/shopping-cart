import black from './black.jpeg';
import blackHoodie from './blackHoodie.jpeg';
import gray from './gray.jpeg';
import green from './green.jpeg';
import pink from './pink.jpeg';
import purple from './purple.jpeg';
import red from './red.jpeg';
import white from './white.jpeg';
import whiteHoodie from './whiteHoodie.jpeg';

const array = [{name: 'Black Tee', link: black, price: 50}, {name: 'Black Hoode', link: blackHoodie, price: 100}, {name: 'Gray Tee', link: gray, price: 20}, {name: 'Green Tee', link: green, price: 20}, {name: 'Pink Tee', link: pink, price: 20}, {name: 'Purple Tee', link: purple, price: 20}, {name: 'Red Tee', link: red, price: 20}, {name: 'White Tee', link: white, price: 50}, {name: 'White Hoodie', link: whiteHoodie, price: 500}];
const items = {};
array.forEach(item => {
    items[item.name] = {name: item.name, link: item.link, price: item.price}
})
export default items;