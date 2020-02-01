import React from 'react';
import { Button } from '@material-ui/core';
import { 
    Link,
    useLocation,
} from 'react-router-dom';
import { paths } from '../../../constants';
import LoginDialogForm from '../../loginDialog';

const linkStyle = {
    textDecoration: 'none'
};

export default (props) => {
    
    const location = useLocation();

    return (
        <div className="">
            <Button
                disabled={location.pathname === paths.signup}
                color="primary"
                onClick={props.handleOpen}
            >
                Log In
            </Button>
            <LoginDialogForm {...props}/>
            <Link to={paths.signup} style={linkStyle}>
                <Button color="primary">
                    Sign up
                </Button>
            </Link>
        </div>
    )
}
