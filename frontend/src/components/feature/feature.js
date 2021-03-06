import React from 'react'
import './feature.css'

export default class Feature extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render(){
        return(
            <>
                <div className='feature__block feature'>
                   
                    <div className="feature__content">
                        <h3 className="feature__heading">Make new friends.</h3>
                        <p>
                            WeGo gives you the opportunity to meet new people and connect
                            with them in an easy and simple way. Find other users, explore their profile and
                            interests, and message them to better understand one another.
                        </p>
                    </div>
                    <div>
                        <img className="feature__image" src="https://media3.giphy.com/media/cdEj5Qt1g0VI0cZnu3/giphy.gif" alt="" />
                    </div>
                </div>
                <div className='feature__block feature'>
                    <div className="feature__content feature__content-2">
                        <h3 className="feature__heading">Try new activities.</h3>
                        <p>
                            WeGo provides the platform for you to host and find fun, new activities no matter how big or small. 
                            Whether you are looking for adventure, leisure, or something in between, WeGo has you covered. 
                        </p>
                    </div>
                    <div>
                        <img className="feature__image" src="https://media4.giphy.com/media/MvLWScDJ6TPvp0ntC6/giphy.gif?cid=790b76112fea0c53879adcf9d6c46e3e9efaf8d6b701f971&rid=giphy.gif&ct=g" alt="" />
                    </div>
                </div>
            </>
        )
    }

}

