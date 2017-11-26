import React from 'react';
import { Stacknavigator } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { onEmailChanged, onPasswordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
        headerTintColor: '#F1F1F2',
        headerTitleStyle: { color: '#F1F1F2' }
    };

    onEmailChange(text) {
        this.props.onEmailChanged(text);
    }
    passwordChange(text) {
        this.props.onPasswordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (<Button onPress={this.onButtonPress.bind(this)}>
            Login
</Button>);
    }
    render(props) {
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
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}


mapStateToProps = ({ auth }) => {

    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    }

};


export default connect(mapStateToProps,
    {
        onEmailChanged,
        onPasswordChanged,
        loginUser
    })(LoginForm)

// export default class RouterComponent extends React.Compnent {
//     render() {
//         return (
//             <Stacks style={styles.stackStyle} />
//         );
//     }
// };

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    stackStyle: {
        backgroundColor: '#2D4262'

    }
});


