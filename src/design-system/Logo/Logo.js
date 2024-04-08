import "./Logo.css";

const Logo = (props) => {
    return (
        <div className="logo_wrapper">
            <div className="logo_initials_wrapper">
                <p
                    className={
                        props.type === "white"
                            ? "logo_initials_text_white"
                            : "logo_initials_text_black"
                    }
                >
                    LN
                </p>
            </div>
            <p
                className={
                    props.type === "white"
                        ? "logo_name_black"
                        : "logo_name_white"
                }
            >
                Luce <span className="logo_name_highlight">Notte</span>
            </p>
        </div>
    );
};

export default Logo;
