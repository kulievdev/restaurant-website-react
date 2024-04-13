import "./Input.css";

const Input = ({
    type,
    placeholder,
    handleOnFocus,
    handleOnBlur,
    children
}) => {
    return type !== "select" ? (
        <input
            className="input"
            type={type}
            placeholder={placeholder}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        />
    ) : (
        <select className="select">{children}</select>
    );
};

export default Input;
