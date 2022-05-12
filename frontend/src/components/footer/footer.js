import React from 'react'
import './footer.css'

export default class Feature extends React.Component {
    constructor(props) {
        super(props);
       
    }

    render(){
        return(
            <footer className="footer">
                <div className="footer__brand">
                <div className="footer__copyright">©2022 WeGo. All rights
            reserved.</div>
                </div>        
            </footer>

        )
    }
}