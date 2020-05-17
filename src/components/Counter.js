import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 50px;
`;

const NumberStyle = { marginBottom: '10px' };

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <Container>
      <h1 style={NumberStyle}>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </Container>
  );
};

export default Counter;
