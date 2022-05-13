import React from 'react'
import './footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render(){
        return(
            <div className='footer'>

                <div className="team__info">
                    <div>
                        <img src={require('../images/Joe.jpeg')} className='team__info--img' />
                    </div>
                    <div>
                        <div className='team__info--detail info--name'>
                            Joe Delaney    
                        </div>
                        <div className='team__info--detail'>
                            <GitHubIcon sx={{ fontSize: 24 }} />
                            <span className='team-info-label'>GitHub</span>
                        </div>
                        <div className='team__info--detail'>
                            <LinkedInIcon sx={{ fontSize: 24 }} />
                            <span className='team-info-label'>LinkedIn</span>
                        </div>
                    </div>
                         
                </div>

                <div className="team__info">
                    <div>
                        <img src={require('../images/Nick.jpeg')} className='team__info--img' />
                    </div>
                    <div>
                        <div className='team__info--detail info--name'>
                            Nicholas Angleton    
                        </div>
                        <div className='team__info--detail'>
                            <GitHubIcon sx={{ fontSize: 24 }}/> 
                            <span className='team-info-label'>GitHub</span>
                        </div>
                        <div className='team__info--detail'>
                            <LinkedInIcon sx={{ fontSize: 24 }}/>
                            <span className='team-info-label'>LinkedIn</span>    
                        </div>
                    </div>
                </div>

                <div className="team__info">
                    <div>
                        <img src={require('../images/Harry.png')} className='team__info--img' />
                    </div>
                    <div>
                        <div className='team__info--detail info--name'>
                            Harry Israel   
                        </div>
                        <div className='team__info--detail'>
                            <GitHubIcon sx={{ fontSize: 24 }} />
                            <span className='team-info-label'>GitHub</span>
                        </div>
                        <div className='team__info--detail'>
                            <LinkedInIcon sx={{ fontSize: 24 }} />
                            <span className='team-info-label'>LinkedIn</span>
                        </div>
                    </div>
                </div>

                <div className="team__info">
                    <div>
                        <img src={require('../images/Janice.jpeg')} className='team__info--img' />
                    </div>
                    <div>
                        <div className='team__info--detail info--name'>
                            Janic Shih
                        </div>
                        <div className='team__info--detail'>
                            <GitHubIcon sx={{ fontSize: 24 }} />
                            <span className='team-info-label'>GitHub</span>
                        </div>
                        <div className='team__info--detail'>
                            <LinkedInIcon sx={{ fontSize: 24 }} />
                            <span className='team-info-label'>LinkedIn</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}