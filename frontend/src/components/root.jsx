import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import { SocketContext, socket} from './socket';

// const Root = ({ store }) => (
//     <SocketContext.Provider value={socket} >
//         <Provider store={store}>
//             <HashRouter>
//                 <App />
//             </HashRouter>
//         </Provider>
//     </SocketContext.Provider>
// );

class Root extends React.Component {
    constructor(props){
        super(props)
        this.state = {socket: socket}
    }

    render(){
        return (
            <SocketContext.Provider value={this.state.socket} >
                <Provider store={this.props.store}>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </Provider>
            </SocketContext.Provider>
        )
    }
}

export default Root;
