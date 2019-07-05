import React, { Component } from "react";
import WelcomeCenter from "./components/WelcomeCenter";
import NavBar from "./components/NavBar";
import DesktopDisplay from "./components/DesktopDisplay";
import MobileDisplay from "./components/MobileDisplay";
import { StyleRoot } from "radium";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        console.log("window obj ", window.devicePixelRatio);
        const appOuterStyle = {
            width: "100%",
            height: "100%",
            marginTop: "0px",
            padding: "0",
            textAlign: "center"
        };
        let nav = null;
        let displayNext;
        if (this.state.windowWidth > 1000) {
            nav = <NavBar />;
            displayNext = <DesktopDisplay />;
        } else {
            displayNext = <MobileDisplay />;
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
            </StyleRoot>
        );
    }
}

export default App;
