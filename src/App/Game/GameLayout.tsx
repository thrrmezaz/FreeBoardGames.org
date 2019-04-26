import React from 'react';
import { GameOver } from './GameOver';
import { IGameArgs } from './GameBoardWrapper';
import { GameDarkSublayout } from './GameDarkSublayout';
import Typography from '@material-ui/core/Typography';

interface IGameLayoutProps {
  children?: React.ReactNode;
  gameOver?: string;
  gameArgs?: IGameArgs;
  optionsMenuItems?: React.ReactNode;
}

export class GameLayout extends React.Component<IGameLayoutProps, {}> {
  render() {
    if (this.props.gameOver) {
      return (<GameOver result={this.props.gameOver} gameArgs={this.props.gameArgs} />);
    } else {
      return (
        <GameDarkSublayout optionsMenuItems={this.props.optionsMenuItems}>
          {this.props.children}
        </GameDarkSublayout>
      );
    }
  }
}
