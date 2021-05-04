import React from 'react'

export const Demo = () => {

    const dragStart=(e:React.DragEvent<HTMLDivElement>)=>{
        e.dataTransfer.setData("text",e.currentTarget.id)
        console.info("sürükleme başladı")
    }

    const onDrop=(e:React.DragEvent<HTMLDivElement>)=>{
       console.log(e.dataTransfer.getData("text"));
    }
    return (
        <>
            <div className='box'
                 id="42"
                 draggable onDragStart={dragStart}
                 onDragEnd={() => console.info("sürükleme bitti")}
                 onDrop={()=>console.info("bırakıldı kutu")}
            />
            <div className="canvas"
                 onDragOver={(e)=>e.preventDefault()}
                 onDrop={onDrop}
            />
        </>
    )
}
