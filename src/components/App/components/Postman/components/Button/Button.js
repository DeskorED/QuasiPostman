import "./style.scss"

export const Button = (props) => {
    return (<button className={props.className}
        value={props.value || ""}
        onClick={props.onClick}
        disabled={props.disabled}>
        {props.children || props.value}
    </button>);
};

export default Button;