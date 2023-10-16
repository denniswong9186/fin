import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => setAuthUser(user || null));
        return () => unsubscribe();
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => console.log('Sign out successful'))
            .catch(error => {
                console.error('Sign out error:', error);
                // Consider setting an error state here to display to the user
            });
    };

    const renderAuthDetails = () => {
        if (authUser) {
            const { email } = authUser;
            return (
                <>
                    <p>Signed In as {email}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </>
            );
        }
        return (
          <>
            <p>Signed Out</p>
            <Link to="/sign-in">Sign In</Link> | <Link to="/sign-up">Sign Up</Link>
          </>
        );
    };

    return (
        <div className="container">
          <div className="header">{renderAuthDetails()}</div>
        </div>
    );
};

export default AuthDetails;
