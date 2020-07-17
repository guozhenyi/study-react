
// import React from 'react';


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    if (props.logged) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}


class LoginControl extends React.Component {

    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {logged: false};
    }

    handleLoginClick() {
        this.setState({logged: true});
    }

    handleLogoutClick() {
        this.setState({logged: false});
    }

    render() {
        let button;
        if (this.state.logged) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting logged={this.state.logged} />
                <div>
                    {button}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<LoginControl />, document.getElementById('conditional_jsx'));

