import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import GoogleButton from 'react-google-button';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    } 
    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                var credential = result.credential;


                var token = credential.accessToken;

                const {displayName, email }= result.user;
                const signedInUser = {name:displayName, email}
                
                setUserToken();

                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;

                var credential = error.credential;

            });
    }

    const setUserToken =() =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token',idToken)
          }).catch(function(error) {
            // Handle error
          });
    };


    return (
        <div className="d-flex justify-content-center ">
            <div className="mt-5 p-5">
               

                <GoogleButton 
                    onClick={handleGoogleSignIn}
                />
            </div>
        </div>

    );
};

export default Login;