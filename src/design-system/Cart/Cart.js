import cartIcon from "../../assets/cart.svg";
import "./Cart.css";

const Cart = () => {
    return (
        <div className="cart">
            <img src={cartIcon} alt="Shopping Cart" />
        </div>
    );
};

export default Cart;
