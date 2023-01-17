import "./style.scss";

export const Button = ({ className, children, onClick, disabled }) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
