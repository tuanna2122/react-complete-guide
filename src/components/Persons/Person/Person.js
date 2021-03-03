import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';
import styled from 'styled-components';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        const style = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        };
        const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
    
            @media (min-width: 500px) {
                width: 450px
            }
        `;
        return (
            <Auxiliary>
                {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p key="1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p key="2">{this.props.children}</p>
                <input
                    key="3"
                    type="text"
                    value={this.props.name}
                    onChange={this.props.changed}
                    // ref={(inputEle) => this.inputElement = inputEle}
                    ref={this.inputElementRef}
                />
            </Auxiliary>
        );
    };
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

// export default Radium(person);
export default withClass(Person, classes.Person);
