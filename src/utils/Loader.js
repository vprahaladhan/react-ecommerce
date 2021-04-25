import React from 'react';
import Loader from 'react-loader-spinner';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => (
  <div className='vertically-centered'>
    <Loader
      type="Watch"
      color="#00BFFF"
      height={250}
      width={250}
    />
  </div>
);

export default Loading;