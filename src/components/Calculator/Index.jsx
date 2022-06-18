import React from "react";

export function Calculator(){
    return(
        <>
            <input type="text"  placeholder='a'/>
            <input type="text" placeholder='b'/>

            <button>Somar</button>
            <button>Subtrair</button>

            <div>
              resultado 
            </div>
            
        </>
    )
}