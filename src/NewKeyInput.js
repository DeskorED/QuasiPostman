function NewKeyInput(props) {
    return <input onChange={(event) => {
        props.onChangeKey(event);
        event.target.value = "";
    }}/>
}

export default NewKeyInput