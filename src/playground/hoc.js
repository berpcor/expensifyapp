

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>Thi info is: {props.info}</p>
        </div>
    );
}


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info, please, don't share!</p>
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                <WrappedComponent {...props} /> : <p>Please authenticate</p>
            }
            
            
        </div>
    );
};



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="some info"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo info="some info" isAuthenticated={false}/>, document.getElementById('app'));
