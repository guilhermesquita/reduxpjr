import React from "react";
import { connect } from 'react-redux'

function Calculator(){
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

export default connect()(Calculator)