import React from 'react';

import ThemeProvider from '../src/ThemeProvider';
import createTheme from '../src/tools/createTheme';
import SoundsProvider from '../src/SoundsProvider';
import createSounds from '../src/tools/createSounds';

import Template from './components/Template';

const resources = {
  background: {
    small: '/public/img/background.jpg',
    medium: '/public/img/background-medium.jpg',
    large: '/public/img/background-large.jpg',
    xlarge: '/public/img/background-large.jpg'
  },
  pattern: '/public/img/glow.png',
};

const sounds = {
  shared: {
    volume: 0.5,
  },
  players: {
    click: {
      sound: { src: ['/public/sound/click.mp3'] },
      settings: { oneAtATime: true }
    },
    typing: {
      sound: { src: ['/public/sound/typing.mp3'] },
      settings: { oneAtATime: true }
    },
    deploy: {
      sound: { src: ['/public/sound/deploy.mp3'] },
      settings: { oneAtATime: true }
    },
  }
};

export default (App) => {
  return (props) => (
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds(sounds)}>
        <Template>
          <App resources={resources} {...props} />
        </Template>
      </SoundsProvider>
    </ThemeProvider>
  );
};
