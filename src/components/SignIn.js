import React from 'react';
import { Button } from '@material-ui/core';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';


function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
}

function SignIn() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button onClick={signInWithGoogle} style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn;
