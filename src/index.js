import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(

  // Please create your own Speechly.com account
  // so that we don't abuse this guy's account :) Pity him
  // And replace your appID below to run it locally

  // Making new changes
  // so that we can pass this course

  <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
