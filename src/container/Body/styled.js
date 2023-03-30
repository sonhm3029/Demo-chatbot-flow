import styled from "styled-components";

const BodyStyleWrapper = styled.main`
  .func-option-wrapper {
  }
  .story-text {
    border: 1px solid #94d794;
    border-radius: 10px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 12px;

    p {
      margin-bottom: 0px;
    }
    p + p {
      margin-top: 8px;
    }
  }
  .option-wrapper {
    .option-btn {
      height: "auto";
      white-space: normal;
    }
  }
`;

export default BodyStyleWrapper;
