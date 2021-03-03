import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css'

const cockpit = props => {
    const toogleBtnRef = useRef(null);

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
            <button onClick={props.login}>Log in</button>
        </div>
    );
};

export default React.memo(cockpit);
