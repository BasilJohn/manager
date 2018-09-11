import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';

export default class RouterComponent extends React.Component {

    
    render() {
        return (
            <Stacks style={styles.stackStyle} />
        );
    }
};

const Stacks = StackNavigator({
    Login: {
        screen: LoginForm
    }
});


const styles = StyleSheet.create({

    stackStyle: {
        backgroundColor: '#2D4262'

    }

});