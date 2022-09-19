import React from 'react';

import ThemeProvider from '../src/ThemeProvider';
import createTheme from '../src/tools/createTheme';
import SoundsProvider from '../src/SoundsProvider';
import createSounds from '../src/tools/createSounds';
import smallImage from '/public/img/background.jpg';
import mediumImage from '/public/img/background-medium.jpg';
import largeImage from '/public/img/background-large.jpg';
import xlargeImage from '/public/img/background-large.jpg';
import glowImage from '/public/img/glow.png';
import clicksound from '/public/sound/click.mp3';
import typingsound from '/public/sound/typing.mp3';
import deploysound from '/public/sound/deploy.mp3';


import Template from './components/Template';

const resources = {
  background: {
    small: smallImage,
    medium: mediumImage,
    large: largeImage,
    xlarge: largeImage,
  },
  pattern: glowImage,
};

const sounds = {
  shared: {
    volume: 0.5,
  },
  players: {
    click: {
      sound: { src: [ clicksound ] },
      settings: { oneAtATime: true }
    },
    typing: {
      sound: { src: [ typingsound ] },
      settings: { oneAtATime: true }
    },
    deploy: {
      sound: { src: [ deploysound ] },
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
