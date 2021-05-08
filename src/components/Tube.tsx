import React from 'react'
import {Block} from "./Block";
import {IBlockItem} from '../interface'

interface IProps {
    items:IBlockItem[];
}

export const Tube:React.FunctionComponent<IProps>=({items})=>{

    const blocks=items.map((item)=><Block key={item.id} blockData={item}/>)

    return(
        <div  className="tube">
            {blocks}
        </div>
    )

}
