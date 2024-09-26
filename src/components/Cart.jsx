import { useSelector, useDispatch } from 'react-redux'
import { cart } from "../store/Cartslice/cartSlice"


const product =[
    {
        product: "iPad 4 Mini",
        price:"$500.01",
        count:'3',
        id: 1
    },
    {
        product: "H&M T-Shirt White",
        price:"10.99",
        count:'7',
        id: 2
    },
    {
        product: "Charli XCX - Sucker CD",
        price:"19.99",
        count:'10',
        id: 3
    }
]

function Cart() {
    // const cart = useSelector((state) => state.cart.items);
    // const dispatch = useDispatch();


    // const AddToCart = () => {
    //     dispatch(cart())

    // }
    return (
        <>
        <h1>Shopping Cart Example</h1><br /><hr />
        <h3>Products</h3>
        {product.map((cart)=>(
            <div>
                <p>{cart.product}</p>
                <button >Add to cart</button><br />
            </div>
        ))}
             <h2>Your Cart</h2><br />
                <p></p>
                <p></p>
                <p></p>
        <p>Total: $1052.98</p>
        <button>Checkout</button>
        
        
        </>
    )
}

export default Cart
