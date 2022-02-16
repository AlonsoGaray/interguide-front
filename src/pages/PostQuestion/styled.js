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

  input {
    width: 90%;
    height: 30px;
    margin: 0 auto;
    padding: 0;
  }

  .ReactTags__tags {
    position: relative;
    width: 90%;
    margin: 0 auto;
  }

  /* Styles for the input */
  .ReactTags__tagInput input.ReactTags__tagInputField,
  .ReactTags__tagInput input.ReactTags__tagInputField:focus {
    width: 100%;
  }

  /* Styles for selected tags */
  .ReactTags__selected span.ReactTags__tag {
    background: #63bcfd;
    color: white;
    font-size: 12px;
    display: inline-block;
    padding: 5px;
    margin: 2px 5px;
    border-radius: 2px;
  }

  /* Styles for suggestions */
  .ReactTags__suggestions {
    position: absolute;
    width: 100%;
  }
  .ReactTags__suggestions ul {
    list-style: none;
    box-shadow: 0.05em 0.01em 0.5em rgba(0, 0, 0, 0.2);
    background: white;
    margin: 0;
    padding: 0;
  }
  .ReactTags__suggestions li {
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
    margin: 0;
  }
  .ReactTags__suggestions li mark {
    text-decoration: underline;
    background: none;
    font-weight: 600;
  }
  .ReactTags__suggestions ul li.ReactTags__activeSuggestion {
    background: #b7cfe0;
    cursor: pointer;
  }

  .ReactTags__remove {
    border: none;
    cursor: pointer;
    background: none;
    color: white;
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
