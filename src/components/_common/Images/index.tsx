import React from 'react'
import Image from 'next/image'
const Images = (props: any) => {
  return (
    <div >
      <Image src={props.icon} alt={props.alt} width={props.width} height={props.height}/>
    </div>
  )
}

export default Images
