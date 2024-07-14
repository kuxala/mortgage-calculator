import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px;
  @media (min-width: 768px) {
    border-radius: 24px;
    background: var(--color-white, #fff);
    box-shadow: 0px 32px 64px 0px rgba(19, 48, 65, 0.1);
    height: 100%;
    /* padding: 24px 150px; */
    border-radius: 20px 0px 0px 20px;
  }
  .clearall {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 200px;
    }
  }
  .desktop-input {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 24px;
      .input {
        width: 100%;
      }
    }
  }
  .input h1 {
    color: var(--color-slate-900, #133041);
    font-size: var(--font-size-text-preset-2, 24px);
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 30px */
    padding-bottom: 12px;
  }

  .input .clear {
    color: var(--color-slate-700, #4e6e7e);
    font-size: var(--font-size-text-preset-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    text-decoration-line: underline;
    cursor: pointer;
  }

  .input p {
    color: var(--color-slate-700, #4e6e7e);
    font-size: var(--font-size-text-preset-4, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    padding-top: 24px;
    padding-bottom: 12px;
  }

  .input input {
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid var(--color-slate-500, #6b94a8);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-150, 12px);
    align-self: stretch;
    padding: 1.2rem;
  }

  .input div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 24px;

    button {
      display: flex;
      width: 100%;
      height: 48px;
      align-items: flex-start;
      align-self: stretch;
      color: var(--color-slate-900, #133041);
      align-items: center;
      padding: 1.2rem;
      font-size: var(--font-size-text-preset-3, 18px);
      background: transparent;
      border-radius: 4px;
      border: 1px solid var(--color-slate-500, #6b94a8);

      font-style: normal;
      font-weight: 700;
      line-height: 125%; /* 22.5px */
      cursor: pointer;
    }
  }

  .percentage-container {
    position: relative;
    width: 100%;
  }

  .percentage-input {
    padding-right: 24px;
    text-decoration: none !important;
  }

  .percentage-icon {
    position: absolute;
    right: 12px;
    top: 33%;
    transform: translateY(-50%);
    pointer-events: none;

    color: var(--color-slate-700, #4e6e7e);
  }

  button {
    margin: 0 auto;
    display: flex;
    height: 56px;
    padding: 0px var(--spacing-500, 40px);
    align-items: center;
    gap: var(--spacing-300, 24px);
    align-self: stretch;
    border-radius: 30px;
    background-color: #d8db2f;
    color: var(--color-slate-900, #133041);
    text-align: center;
    border: none;
    font-family: "Plus Jakarta Sans";
    font-size: var(--font-size-text-preset-3, 18px);
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 22.5px */
    cursor: pointer;
  }
`;

export default Wrapper;
