import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '964867663265-l6kjit7hba2cj0h0adj15uftbeh7p7ia.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut(this.auth.currentUser.get().getId());
        }
    };

    handleSignInClick() {
        this.auth.signIn();
    }

    handleSignOutClick() {
        this.auth.signOut();
    }


    renderAuthButton() {
        if (this.props.isSignedIn) {
            return (
                <button
                    className="ui google button"
                    onClick={() => this.handleSignOutClick()}>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button
                    className="ui google button"
                    onClick={() => this.handleSignInClick()}>
                    <i className="google icon" />
                    Sign In With Google
                </button>
            )
        }
    }

    render() {
        return (
            <div> {this.renderAuthButton()}</div>
        );
    };
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);