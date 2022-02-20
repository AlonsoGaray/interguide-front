import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 500px;
  margin-bottom: 30px;

  .title {
    font-size: 30px;
    margin: 20px 0;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  outline: 1px solid #737373;
  border-radius: 15px;
  background-color: #e5e5e5;

  p {
    margin-left: 20px;
    margin-top: 25px;
  }

  .input-question {
    width: 90%;
    height: 35px;
    margin: 10px auto 0 auto;
    box-sizing: border-box;
    padding-left: 8px;
    font-size: 16px;
    color: rgb(51, 51, 51);
    font-family: serif;
    font-weight: 400;
  }

  .css-26l3qy-menu {
    z-index: 5;
  }

  .css-b62m3t-container {
    width: 90%;
    margin: 10px auto 0 auto;
  }

  .tox-tinymce {
    margin-top: 10px;
  }

  .css-1rhbuit-multiValue {
    color: black;
    border-radius: 15px;
    background-color: rgb(119, 255, 255);
  }

  .css-xb97g8:hover {
    border-radius: 15px;
    background-color: rgb(119, 255, 255);
  }
`;

const SubmitButton = styled.button`
  margin: 15px auto;
  width: 120px;
  height: 45px;
  font-size: 24px;
  color: white;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: rgb(10, 149, 255);

  &:hover {
    background-color: #0074cc;
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    background-color: gray;
    box-shadow: none;
  }
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
