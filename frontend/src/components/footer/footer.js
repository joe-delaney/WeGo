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
                            <a href="https://github.com/joe-delaney/WeGo" className='team-info-label' target="_blank">GitHub</a>
                        </div>
                        <div className='team__info--detail'>
                            <LinkedInIcon sx={{ fontSize: 24 }} />
                            <a href="https://www.linkedin.com/in/joseph-delaney-46985b76/" className='team-info-label' target="_blank">LinkedIn</a>
                        </div>
                        <div className='team__info--detail'>
                            <img src='https://simpleicons.org/icons/angellist.svg'  className='team-info-angellist'/>
                            <a href="#" className='team-info-label'  target="_blank">AngelList</a>
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
                            <a href="https://github.com/N-Angleton"  className='team-info-label' target="_blank">GitHub</a>
                        </div>
                        <div className='team__info--detail'>
                            <LinkedInIcon sx={{ fontSize: 24 }}/>
                            <a href="https://www.linkedin.com/in/nhangleton/" className='team-info-label' target="_blank">LinkedIn</a>  
                        </div>
                        <div className='team__info--detail'>
                            <img src='https://simpleicons.org/icons/angellist.svg'  className='team-info-angellist'/>
                            <a href="#" className='team-info-label'  target="_blank">AngelList</a>
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
                            <a href="https://github.com/hisrael1"  className='team-info-label' target="_blank">GitHub</a>
                        </div>
                        <div className='team__info--detail'>
                            <LinkedInIcon sx={{ fontSize: 24 }} />
                            <a href="https://www.linkedin.com/in/harrison-israel/" className='team-info-label' target="_blank">LinkedIn</a>
                        </div>
                        <div className='team__info--detail'>
                            <img src='https://simpleicons.org/icons/angellist.svg'  className='team-info-angellist'/>
                            <a href="#" className='team-info-label'  target="_blank">AngelList</a>
                        </div>
                    </div>
                </div>

                <div className="team__info">
                    <div>
                        <img src={require('../images/Janice.jpeg')} className='team__info--img' />
                    </div>
                    <div>
                        <div className='team__info--detail info--name'>
                            Janice Shih
                        </div>
                        <div className='team__info--detail'>
                            <GitHubIcon sx={{ fontSize: 24 }} />
                            <a href="https://github.com/JaniceShih" className='team-info-label'  target="_blank">GitHub</a>
                        </div>
                        <div className='team__info--detail'>
                            <LinkedInIcon sx={{ fontSize: 24 }} />
                            <a href="https://www.linkedin.com/in/hsiu-chuan-shih-466b22236/" className='team-info-label'  target="_blank">LinkedIn</a>
                        </div>
                        <div className='team__info--detail'>
                            <img src='https://simpleicons.org/icons/angellist.svg'  className='team-info-angellist'/>
                            <a href="https://angel.co/u/hsiu-chuan-shih" className='team-info-label'  target="_blank">AngelList</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}