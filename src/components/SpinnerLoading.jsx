import CatContainer from "./containers/CatContainer";


export default function SpinnerLoading( props ) {
    console.log(props.datafact);
    return (
        <div className="text-center">
            <div role="status">
                <div className="w-8 h-8 animate-spin">
                    <CatContainer/>
                </div>
            </div>
        </div>
    )
}


