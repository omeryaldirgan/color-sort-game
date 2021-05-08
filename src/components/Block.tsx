import React from 'react'
import {IBlockItem} from '../interface'

interface IProps {
    blockData:IBlockItem
}

export const Block:React.FunctionComponent<IProps>=({blockData})=>{

    const dragStart=(e:React.DragEvent<HTMLDivElement>)=>{

        e.dataTransfer.setData("text",e.currentTarget.id)

    }
 
    return(
        <div id={blockData.id.toString()} className={`block block-${blockData.color}`} draggable onDragStart={dragStart}/>
    )
}
