import "./style.scss"
const Button = (props) => {
    return (
        <button value={props.value || "" } onClick={props.onClick}>{props.children || props.value}</button>
    );
};

export default Button;