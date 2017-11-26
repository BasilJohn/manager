import React from 'react';
import { connect } from 'react-redux';
import { onEmailChanged,onPasswordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';


 class LoginForm extends React.Component {
 onEmailChange(text){
    this.props.onEmailChanged(text);
 }
 passwordChange(text){
    this.props.onPasswordChanged(text);
 }
 onButtonPress(){
     const { email, password } = this.props;
    this.props.loginUser( {email,password} );
 }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email} 
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeHolder="Password"
                        onChangeText={this.passwordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

mapStateToProps = state => {

    return {
        email: state.auth.email,
        password: state.auth.password
    }

};

export default connect(mapStateToProps,
    { onEmailChanged,
     onPasswordChanged,
     loginUser }) (LoginForm)