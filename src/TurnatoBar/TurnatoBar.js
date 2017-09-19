import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import logooptimizedsvg from '../resources/logo_optimized.svg';

class TurnatoBar extends React.Component {
  render() {
    let disconnectedLayer = null;
    if (this.props.disconnected) {
      disconnectedLayer = (<div style={{position: 'absolute', left: 0, top: 0,
        right:0, height: '100%', background: 'rgba(255,255,255,.85)',
        zIndex: 9001, display: 'block', textAlign: 'center'}}>
        <div style={{transform: 'translateX(-50%) translateY(-50%)',
          left: '50%', top: '50%', position: 'absolute'}}>
          <h1>Connection lost</h1>
          <h2>Reconnecting...</h2>
        </div>
      </div>);
    }
    return (
      <div>
        <MuiThemeProvider>
          <div style={{maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto'}}>
          <a href="/">
            <AppBar
              style={{position: 'fixed',
                maxWidth: '500px',
                marginLeft: 'auto',
                marginRight: 'auto'}}
              title="Turnato"
              iconElementLeft={<img src={logooptimizedsvg}
              style={{color:'white', width: '32px', height: '32px',
                marginTop: '8px'}}
              alt="Turnato logo."></img>}
            />
          </a>
          <div style={{height: '64px'}}></div>
          {this.props.children}
          </div>
        </MuiThemeProvider>
      {disconnectedLayer}
      </div>
    );
  }
}
export default TurnatoBar;
TurnatoBar.propTypes = {
  disconnected: PropTypes.bool.isRequired,
  children: PropTypes.node
};

TurnatoBar.defaultProps = {
  disconnected: false
};
