import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

// import { css } from '@emotion/core';
// import PacmanLoader from 'react-spinners/PacmanLoader';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// 'Audio'
// 'BallTriangle'
// 'Bars'
// 'Circles'
// 'Grid'
// 'Hearts'
// 'Oval'
// 'Puff'
// 'Rings'
// 'TailSpin'
// 'ThreeDots'
// 'Watch'
// 'RevolvingDot'
// 'Triangle'
// 'Plane'
// 'MutatingDots'
// 'None'
// 'NotSpecified';

// type="Hearts"
// type="Watch"
// type="MutatingDots"
// type="NotSpecified"
// color="#00BFFF"
// secondaryColor="#00BFFF"

// const Spinner = () => {
//   return (
//     <div className="sweet-loading">
//       <PacmanLoader
//         size={80}
//         color={'#f2c847'}
//         // loading={this.state.loading}
//       />
//     </div>
//   );
// };

const LoaderWrapper = styled.div`
  z-index: 20;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: rgba(0, 0, 0, 0.1);
`;

const Spinner = () => {
  return (
    <LoaderWrapper>
      <Loader
        type="Plane"
        color="#f2c847"
        secondaryColor="#00BFFF"
        // timeout={3000} //3 secs
      />
    </LoaderWrapper>
  );
};

export default Spinner;
