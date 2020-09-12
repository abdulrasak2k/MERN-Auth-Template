import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../actions/authActions';

const Logout = () => {
    const dispatch = useDispatch();

    return (
        <Button variant="primary" onClick={() => dispatch(logOut())}>
            Logout
        </Button>
    );
};

export default Logout;
