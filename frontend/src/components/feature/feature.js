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
                        <h3 className="feature__heading">Make a friend</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                        </p>

                    </div>
                    <div>
                        <img className="feature__image" src="https://www.matcheduk.com/wp-content/uploads/2021/06/matched-by-sukh-kaur-indian-matchmaker-matchmaking-sikh-hindu-uk-london-leicester-dating-expert-looking-for-love-friendzone-why-she-put-you-in-the-1-scaled.jpg" alt="" />
                    </div>

                </div>
                <div className='feature__block feature'>
                    <div className="feature__content">
                        <h3 className="feature__heading">Explore Outdoor</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                        </p>

                    </div>
                    <div>
                        <img className="feature__image" src="https://imgprd19.hobbylobby.com/8/dc/38/8dc38d7a0734b6de97aaf0a9ba597115aee99e9c/1400Wx1400H-1793249-0619-px.jpg" alt="" />
                    </div>

                </div>
                <div className='feature__block feature'>
                    <div className="feature__content">
                        <h3 className="feature__heading">Scocial Connect</h3>
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

