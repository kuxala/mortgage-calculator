import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 0px 20px 20px 0px;
  background: var(--color-slate-900, #133041);
  padding: 0 50px;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    padding-top: 24px;
    height: 100%;
  }
  img {
    margin-top: 12px;
    @media (min-width: 768px) {
      height: 50%;
    }
  }
  div h1 {
    color: var(--color-white, #fff);
    text-align: center;
    font-size: var(--font-size-text-preset-2, 24px);
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 30px */
    padding: 16px 0;
  }
  div p {
    color: var(--color-slate-300, #9abed5);
    text-align: center;
    font-size: var(--font-size-text-preset-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    @media (min-width: 768px) {
      max-width: 450px;
    }
  }
`;

export default Wrapper;
