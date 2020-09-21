import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
          font-size: 62.5%;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        body {
          font-weight: 400;
          line-height: 1.6;
          font-size: 1.6rem;
        }
      `}
    />
  );
};
