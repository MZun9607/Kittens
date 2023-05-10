import CatContainer from "./CatContainer";

export default function CatCard( props ) {
    console.log(props.datafact);
    return (
        <div>
            <div className="relative flex items-center justify-center w-full"> 
                <CatContainer/>
                <img src={props.dataimage} className="absolute inset-0 m-auto w-1/2 object-cover aspect-square rounded-full translate-y-[6%]"/>
            </div>
            
            
            <div className="m-8 rounded-xl text-neutral-800 dark:text-neutral-50 hover:dark:text-neutral-700 text-justify max-h-sm px-6 py-6  hover:bg-amber-200 transition-colors duration-500">
                <h1 className="text-4xl md:text-xl text-center font-Sigmar text-kitty-pink">
                    {props.datafact.split(" ")[0]} {props.datafact.split(" ")[1]} {props.datafact.split(" ")[2]}...
                </h1>             
                <p className="px-2 my-0.5 font-Poppins  text-center lg:text-justify text-xl md:text-2xl lg:text-xl">
                    {props.datafact}
                </p>
            </div>
        </div>
    )
}

