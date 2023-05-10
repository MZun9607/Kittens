export default function ContainerMaxWidth( props ) {
    let divClassName = "flex w-full items-center justify-center "

    if (props.bg!= null || props.bg !="") {
        divClassName = divClassName + props.bg + " "
    }
    if (props.bg!= null || props.spacing !="") {
        divClassName = divClassName + props.spacing + " "
    }

    return (
        <div className={divClassName}>
            <div className="w-full max-w-6xl">
                {props.item}
            </div>
        </div>
    )
}