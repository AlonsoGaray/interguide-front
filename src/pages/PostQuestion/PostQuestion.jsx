/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import useForm from '../../hooks/useForm';
import {
  Container,
  FormContainer,
  SubmitButton,
  EditorContainer,
} from './styled';
import {
  postQuestion,
  getTagsFromDB,
  getCompaniesFromDB,
  postCompany,
} from '../../store/actions';

const animatedComponents = makeAnimated();

const PostQuestion = () => {
  const user = useSelector((state) => state.user);
  const tagsDB = useSelector((state) => state.tagsDB);
  const companyDB = useSelector((state) => state.companyDB);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileForm = {
    userId: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    tag: [],
    company: undefined,
    answers: [],
  };

  const { form, handleChange } = useForm(profileForm);
  const [formOk, setFormOk] = useState(0);

  const tags = tagsDB.map((tag) => {
    return {
      value: tag.name,
      label: tag.name,
      id: tag._id,
    };
  });

  const companies = companyDB.map((company) => {
    return {
      value: company.name,
      label: company.name,
    };
  });

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedTags, setSelectedTags] = useState(null);
  const [answer, setAnswer] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedTags !== null) {
      selectedTags.forEach((item) => {
        form.tag.push({
          _id: item.id,
          name: item.label,
        });
      });
    }

    if (answer !== null) {
      form.answers.push({
        userId: user.id,
        description: answer,
      });
    }

    form.company = selectedCompany.label;

    if (selectedCompany.__isNew__) {
      await postCompany(dispatch, {
        name: selectedCompany?.label,
        userId: user?.id,
      });
    }

    const response = await postQuestion(dispatch, form);

    if (response.ok) {
      setSelectedTags(null);
      setSelectedCompany(null);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }

    if (response.error) {
      setTimeout(() => {
        setSelectedTags(null);
        setSelectedCompany(null);
      }, 2500);
    }
  };

  useEffect(() => {
    const validateForm = () => {
      if (
        Object.keys(form)?.length >= 1 &&
        form?.question?.length > 5 &&
        answer !== null &&
        selectedCompany !== null
      ) {
        return setFormOk(true);
      }
      return setFormOk(false);
    };
    validateForm();
  }, [handleChange]);

  useEffect(() => {
    const getTags = async () => {
      await getTagsFromDB(dispatch);
    };
    getTags();
    const getCompanies = async () => {
      await getCompaniesFromDB(dispatch);
    };
    getCompanies();
  }, []);

  return (
    <div>
      {user ? (
        <Container>
          <p>Post The Question</p>
          <FormContainer onSubmit={handleSubmit}>
            <p>Company</p>
            <Creatable
              name="company"
              defaultValue={selectedCompany}
              onChange={setSelectedCompany}
              options={companies}
              maxMenuHeight={250}
              placeholder="Select a company"
            />

            <p>Question</p>
            <input
              className="input-question"
              name="question"
              id="question"
              type="text"
              onChange={handleChange}
              placeholder="e.g What is an anonymous function?"
            />

            <p>Tags</p>
            <Select
              name="tagsSelect"
              components={animatedComponents}
              onChange={setSelectedTags}
              options={tags}
              maxMenuHeight={250}
              placeholder="Select tags"
              isMulti
            />

            <p>Answer</p>
            <EditorContainer>
              <Editor
                apiKey={process.env.REACT_APP_TINY_MCE}
                init={{
                  placeholder: 'Type Your Answer Here',
                  height: 300,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    'codesample',
                  ],
                  toolbar:
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help ' +
                    'codesample',
                  content_style:
                    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
                onEditorChange={(content) => {
                  setAnswer(content);
                }}
              />
            </EditorContainer>

            <SubmitButton type="submit" disabled={!formOk}>
              Submit
            </SubmitButton>
            {/* <input type="checkbox" name="answer" id="answer" /> */}
          </FormContainer>
        </Container>
      ) : (
        <p>Log In to see this page</p>
      )}
    </div>
  );
};

export default PostQuestion;
