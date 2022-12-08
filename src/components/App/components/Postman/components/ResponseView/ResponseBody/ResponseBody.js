import "./style.scss"

export function ResponseBody({responseBody}) {
    let bodyText = ""
    if(responseBody){
        bodyText = `{\n`;
        for( let [key, value] of Object.entries(responseBody)){
            bodyText += `\t ${key}: ${value}\n`;
        }
        bodyText += `}`
    }
    return <textarea
        className={"responseBody"}
        readOnly={true}
        value={bodyText}>
    </textarea>
}