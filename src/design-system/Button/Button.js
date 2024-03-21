import "./Button.css";

const Button = ({ size, color, children }) => {
    const classNames = {
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg",
        orange: "btn-orange",
        green: "btn-green",
        black: "btn-black",
        white: "btn-white"
    };

    return (
        <button className={`btn ${classNames[size]} ${classNames[color]}`}>
            {children}
        </button>
    );
};

export default Button;
