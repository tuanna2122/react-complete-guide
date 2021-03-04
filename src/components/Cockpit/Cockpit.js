import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = props => {
    const toogleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // // Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toogleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    // useEffect();

    const cssClasses = [];
    if (props.personsLength <= 2) {
        cssClasses.push(classes.red); // cssClasses = ['red']
    }
    if (props.personsLength <= 1) {
        cssClasses.push(classes.bold); // cssClasses = ['red', 'bold']
    }
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={cssClasses.join(' ')}>This is really working!</p>
            <button ref={toogleBtnRef} className={btnClass} onClick={props.clicked}>
                Toogle Persons
            </button>
            {/* <AuthContext.Consumer>
                {
                    (context) => <button onClick={context.login}>Log in</button>
                }
            </AuthContext.Consumer> */
            }
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(cockpit);
