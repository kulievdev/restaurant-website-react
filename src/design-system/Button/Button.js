import "./Button.css";

const Button = ({ size, color, children, onClick }) => {
    const classNames = {
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg",
        xl: "btn-xl",
        orange: "btn-orange",
        green: "btn-green",
        black: "btn-black",
        white: "btn-white",
        gray: "btn-gray"
    };

    return (
        <button
            onClick={onClick}
            className={`btn ${classNames[size]} ${classNames[color]}`}
        >
            {children}
        </button>
    );
};

export default Button;
