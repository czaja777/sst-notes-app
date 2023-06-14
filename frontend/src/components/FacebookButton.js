import React, { Component } from "react";
import { Auth } from "aws-amplify";
import LoaderButton from "./LoaderButton";

function waitForInit() {
  return new Promise((res, rej) => {
    const hasFbLoaded = () => {
      if (window.FB) {
        res();
      } else {
        setTimeout(hasFbLoaded, 300);
      }
    };
    hasFbLoaded();
  });
}

export default class FacebookButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    await waitForInit();
    this.setState({ isLoading: false });
  }

  statusChangeCallback = response => {
    // console.log('fb login response: ', response);
    if (response.status === "connected") {
      this.handleResponse(response.authResponse);
    } else {
        // console.log(response, "tutaj");
      this.handleError(response);
    }
  };

  checkLoginState = () => {
    // console.log('call check login status');
    window.FB.getLoginStatus(this.statusChangeCallback);
  };

  handleClick = () => {
    window.FB.login(this.checkLoginState, {scope: "public_profile,email"});
  };

  handleError(error) {
    console.error(error);
  }

  async handleResponse(data) {
    const { email, accessToken: token, expiresIn } = data;
    const expires_at = expiresIn * 1000 + new Date().getTime();
    const user = { email };

    this.setState({ isLoading: true });

    try {
      const response = await Auth.federatedSignIn(
        "facebook",
        { token, expires_at },
        user
      );
      this.setState({ isLoading: false });
      this.props.onLogin(response);
    } catch (e) {
      this.setState({ isLoading: false });
    //   console.log(e, "inny");
      this.handleError(e);
    }
  }

  render() {
    return (
      <LoaderButton
        // block
        // bsSize="large"
        // bsStyle="primary"
        className="FacebookButton"
        onClick={this.handleClick}
        // disabled={this.state.isLoading}
        isLoading={this.state.isLoading}
      >
        {this.props.children}
      </LoaderButton>
    );
  }
}