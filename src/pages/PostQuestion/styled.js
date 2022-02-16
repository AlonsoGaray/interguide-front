import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 500px;
  border: 1px solid green;

  p {
    margin-left: 20px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  border: 1px solid red;

  p {
    margin-top: 30px;
  }

  .input-question {
    width: 90%;
    height: 35px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-left: 8px;
    font-size: 16px;
    color: rgb(51, 51, 51);
    font-family: serif;
    font-weight: 400;
  }

  .css-26l3qy-menu {
    z-index: 9999;
  }

  .css-b62m3t-container {
    width: 90%;
    margin: auto;
  }
`;

const SubmitButton = styled.button`
  margin: 0 auto;
  margin-top: 20px;
  width: 100px;
  height: 40px;
`;

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  width: 90%;
  min-height: 200px;

  .DraftEditor-root {
    padding: 8px;
  }

  .public-DraftStyleDefault-block {
    min-height: 200px;
  }
`;

// eslint-disable-next-line prettier/prettier
export {
  Container,
  FormContainer,
  SubmitButton,
  EditorContainer,
};
