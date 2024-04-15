import "./Button.css";

const Button = ({ size, color, width, children, onClick }) => {
    const classNames = {
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg",
        xl: "btn-xl",
        orange: "btn-orange",
        green: "btn-green",
        black: "btn-black",
        white: "btn-white",
        gray: "btn-gray",
        full: "btn-full",
        half: "btn-half"
    };

    return (
        <button
            onClick={onClick}
            className={`btn ${classNames[size]} ${classNames[color]} ${classNames[width]}`}
        >
            {children}
        </button>
    );
};

export default Button;
