function NewValueInput(props) {
    return <input onChange={(event) => {
        props.onChangeValue(event);
        event.target.value = "";
    }}/>
}

export default NewValueInput