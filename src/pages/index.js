import React, { useState } from "react";
import CatCard from "@src/components/containers/CatCard";
import ContainerMaxWidth from '@src/components/containers/ContainerMaxWidth.jsx';
import SpinnerLoading from "@src/components/SpinnerLoading";

export default function gatos1() {
    
    const [gato, setGato] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Load kittens :3");

    async function getFact() {
        const res = await fetch('https://catfact.ninja/fact')
        const dataFact = await res.json()
        return dataFact
    }
    
    async function getImage() {
        const res = await fetch('https://api.thecatapi.com/v1/images/search')
        const dataImage = await res.json()
        return dataImage
    }
    
    async function generateInfo(){
        const gatoData = await Promise.all([getFact(), getImage()]);
        return({'datafact': gatoData[0].fact, 'dataimage': gatoData[1][0].url});
    }
    
    async function AddData(){

        const generatedGatosPromises = Array.from({ length: 6 }, () => generateInfo());
        const generatedGatos = await Promise.all(generatedGatosPromises);
        await setGato(gato.concat(generatedGatos));
    }


    async function cargarData(){
        await setButtonDisabled(true);
        await AddData();
        if (buttonText!="Load moar kittens :3") await setButtonText("Load moar kittens :3");
        await setButtonDisabled(false);
    }


    function handleCargar(){
        cargarData();
    };

    function LoadingIcon(){
        if (!buttonDisabled) return(<></>);
        return(<ContainerMaxWidth item={
          <div className="flex items-center justify-center ">
            <SpinnerLoading/>
          </div>
        }/>);
    }
    
    return (
        <div className=" w-full h-full min-h-screen bg-neutral-50 dark:bg-neutral-800 ">
            
            <ContainerMaxWidth item={

                <div className='grid mx-2 my-4 lg:grid-cols-3 lg:gap-8 lg:m-4'>

                {gato.map((gato, key) => (
                    <React.Fragment key={key}>
                        <CatCard datafact={gato.datafact} dataimage={gato.dataimage}/>
                    </React.Fragment>
                ))}
                
                </div>
            }/>
            {LoadingIcon()}
            <ContainerMaxWidth spacing="p-4" item={
                <button className='bg-kitty-pink text-kitty-white text-6xl py-6 my-6 w-full font-Sigmar rounded-2xl' onClick={handleCargar} disabled={buttonDisabled ? true : false}>{buttonText}</button>
            }/>
            
        </div>
    )
}
  