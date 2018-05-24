import React from 'react';
import ReactDOM from 'react-dom';





const Page = (props) => {
   return (
        <div>
           You are successfuly logged in.
        </div>
   );
    
};

const AuthComponent = (WrappedComponent) => {
    return (props) => {
        return (
            <div>

                {props.loggedIn ? 
                    <WrappedComponent {...props}/>
                : 
                    <p>Please authenticate.</p>
                }
                

            </div>
        )
    };
};

const Torender = AuthComponent(Page);

ReactDOM.render(<Torender loggedIn={true}/>, document.getElementById('app'));
