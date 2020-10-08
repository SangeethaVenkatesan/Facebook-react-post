import { Button } from '@material-ui/core'
import React from 'react'

import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

import "./Login.css"


function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result);
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">

            <div className="login__logo">
                <img src="https://www.iconfinder.com/data/icons/social-media-square-set/960/facebook-512.png" alt=""></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQmpAG2FVYztshccrslxEEmSS8H_HRjlS0cw&usqp=CAU" alt=""></img>
            </div>

            <Button type="submit" onClick={signIn}>Sign In</Button>

        </div>
    )
}

export default Login
