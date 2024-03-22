import starFilled from "../../../../assets/star-filled.svg";
import starEmpty from "../../../../assets/star-empty.svg";

const Star = (props) => {
    return (
        <img
            src={props.number ? starFilled : starEmpty}
            alt={props.number ? "Filled Star" : "Empty Star"}
        />
    );
};

export default Star;
