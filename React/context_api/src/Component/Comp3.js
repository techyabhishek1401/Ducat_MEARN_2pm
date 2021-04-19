import React from 'react'
import { NameContext } from '../Context';

export default function Comp3() {

    return (
        <div>
            <NameContext.Consumer>
                {
                    (context) => {
                        console.log("context:", context.name);
                        return <p>Using Consumer:{context.name}</p>
                    }
                }
            </NameContext.Consumer>
        </div >
    )
}
