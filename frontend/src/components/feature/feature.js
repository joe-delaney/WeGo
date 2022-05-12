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
                        <img id="gif1" className="feature__image" src="https://media3.giphy.com/media/cdEj5Qt1g0VI0cZnu3/giphy.gif" alt="" />
                    </div>

                </div>
                <div className='feature__block feature'>
                    <div className="feature__content">
                        <h3 className="feature__heading">Try new things.</h3>
                        <p>
                            Host activities that you are interested in and find people
                            who want to join you.
                        </p>
                    </div>                   
                    <div>
                        <img className="feature__image" src="https://media4.giphy.com/media/MvLWScDJ6TPvp0ntC6/giphy.gif?cid=790b76112fea0c53879adcf9d6c46e3e9efaf8d6b701f971&rid=giphy.gif&ct=g" alt="" />
                    </div>
                </div>
                <div className='feature__block feature'>
                    <div className="feature__content">
                        <h3 className="feature__heading">Personalized Search</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                        </p>

                    </div>
                    <div>
                        <img className="feature__image" src="https://img.forconstructionpros.com/files/base/acbm/fcp/image/2021/04/soil_connect_logo.607ed736705d0.png?auto=format%2Ccompress&fit=crop&h=288&rect=161%2C96%2C874%2C491&w=512" alt="" />
                    </div>


                </div>
            </>
        )
    }

}

