import React, { Component } from "react";
import WelcomeCenter from "./components/WelcomeCenter";
import NavBar from "./components/NavBar";
import DesktopDisplay from "./components/DesktopDisplay";
import MobileDisplay from "./components/MobileDisplay";
import Footer from "./components/Footer";
import { StyleRoot } from "radium";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            isMobile: false
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.scrollBottom = this.scrollBottom.bind(this);
    }
    scrollBottom() {
        window.scrollTo(
            0,
            document.body.scrollHeight || document.documentElement.scrollHeight,
            "smooth"
        );
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    render() {
        const appOuterStyle = {
            width: "100%",
            height: "100%",
            marginTop: "0px",
            padding: "0",
            textAlign: "center"
        };

        let nav = null;
        let displayNext;

        if (this.state.windowWidth > 1025) {
            nav = <NavBar />;
            displayNext = <DesktopDisplay isMobile={this.state.isMobile} />;
        } else {
            displayNext = (
                <MobileDisplay
                    scrollBottom={this.scrollBottom}
                    updateMobileStatus={this.state.isMobile}
                />
            );
        }

        return (
            <StyleRoot>
                <div style={appOuterStyle}>
                    {nav}
                    <WelcomeCenter
                        windowHeight={this.state.windowHeight}
                        windowWidth={this.state.windowWidth}
                    />
                </div>
                {displayNext}
                <Footer />
            </StyleRoot>
        );
    }
}

export default App;
