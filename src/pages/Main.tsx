import React, { FC, useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const mainWrap = css`
  padding: 3rem;
`;

const contentWrap = css`
  display: flex;
  height: 90vh;
  margin: 0 auto;
  border: 1px solid blue;
`;

const leftWrap = css`
  width: 50%;
`;

const textWrap = css`
  height: 95%;
  border-radius: 10px;
  resize: none;
  padding: 1.5rem;
  font-family: sans-serif;
  font-size: 1.6rem;

  &::placeholder {
    color: gray;
  }
`;

const rightWrap = css`
  width: 50%;
  border: 1px solid green;
`;

const Main: FC = () => {
  const [markdownValue, setMarkdownValue] = useState('');
  const changeMarkdownValue = (e: any) => setMarkdownValue(e.target.value);

  console.log(markdownValue);
  return (
    <div css={mainWrap}>
      <main css={contentWrap}>
        <div css={leftWrap}>
          <div>제목</div>
          <textarea
            css={textWrap}
            autoFocus
            placeholder="마크다운을 입력해주세요"
            value={markdownValue}
            onChange={changeMarkdownValue}
          ></textarea>
        </div>
        <div css={rightWrap}>
          <div>preview 탭</div>
        </div>
      </main>
    </div>
  );
};

export default Main;
