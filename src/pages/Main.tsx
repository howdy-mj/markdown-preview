import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Title } from '../styles/index';

const wrapStyle = css`
  background-color: gray;
  width: 100%;
  margin: 0 auto;
`;

const Main: FC = () => {
  return (
    <React.Fragment>
      <div css={wrapStyle}>
        <Title>Markdown Preview</Title>
      </div>
      <div>dd</div>
    </React.Fragment>
  );
};

export default Main;
