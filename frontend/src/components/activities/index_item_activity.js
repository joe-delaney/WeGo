
import React from 'react'

const IndexItemctivity = ({image, titile, date, Location, renderClass}) => {
 
  return (
            <>
               <div className={renderClass}>          
                    <div >
                        <img src={image} className='profile__activtiy--img' /> 
                    </div>
                    <div titile='profile__activtiy--info'>
                        <p>{titile}</p>
                        <p>{date}</p>
                        <p>{Location}</p>
                    </div>   
              </div>  
              
            </>
        )
}

export default IndexItemctivity