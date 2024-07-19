import "./Input.css";

const Input = ({
    type,
    placeholder,
    handleOnFocus,
    handleOnBlur,
    children,
    value,
    onChange
}) => {
    return type !== "select" ? (
        <input
            className="input"
            type={type}
            placeholder={placeholder}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={value}
            onChange={onChange}
        />
    ) : (
        <select
            className="select"
            value={value}
            onChange={onChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            {children}
        </select>
    );
};

export default Input;
