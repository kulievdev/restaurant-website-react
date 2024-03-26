import cartIcon from "../../assets/cart.svg";
import useWindowWidth from "../../custom-hooks/useWindowWidth";
import "./Cart.css";

const Cart = () => {
    const windowWidth = useWindowWidth();

    return (
        <>
            {windowWidth < 375 ? null : (
                <div className="cart">
                    <img src={cartIcon} alt="Shopping Cart" />
                </div>
            )}
        </>
    );
};

export default Cart;
