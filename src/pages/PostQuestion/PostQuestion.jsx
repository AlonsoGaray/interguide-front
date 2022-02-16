/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Creatable from 'react-select/creatable';
import { useNavigate } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import { Editor } from '@tinymce/tinymce-react';
import {
  Container,
  FormContainer,
  SubmitButton,
  EditorContainer,
} from './styled';
import useForm from '../../hooks/useForm';
import {
  postQuestion,
  getTagsFromDB,
  getCompaniesFromDB,
  postCompany,
} from '../../store/actions';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

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

  const tagSuggestions = tagsDB.map((tag) => {
    return {
      id: tag._id,
      name: tag.name,
      _id: tag._id,
    };
  });

  const companies = companyDB.map((company) => {
    return {
      value: company.name,
      label: company.name,
    };
  });

  const [tagsData, setTagsData] = useState([]);
  const [tagsName, setTagsName] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [answer, setAnswer] = useState(null);

  const handleDeleteTags = (i) => {
    setTagsData(tagsData.filter((tag, index) => index !== i));
  };

  const handleAddition = (value) => {
    if (tagsName.includes(value.name)) {
      setTagsData([...tagsData, value]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    tagsData.forEach((item) => {
      form.tag.push(item);
    });

    form.answers.push({
      userId: user.id,
      description: answer,
    });

    form.company = selectedCompany.label;

    if (selectedCompany.__isNew__) {
      await postCompany(dispatch, {
        name: selectedCompany?.label,
        userId: user?.id,
      });
    }

    const response = await postQuestion(dispatch, form);

    if (response.ok) {
      setTagsData([]);
      setSelectedCompany(null);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }

    if (response.error) {
      setTimeout(() => {
        setTagsData([]);
        setSelectedCompany(null);
      }, 2500);
    }
  };

  useEffect(() => {
    const nameTags = tagsDB.map((tag) => tag.name);
    setTagsName(nameTags);
  }, [tagsDB]);

  useEffect(() => {
    const validateForm = () => {
      if (Object.keys(form)?.length >= 1 && form?.question?.length > 2) {
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
            <Creatable
              name="company"
              defaultValue={selectedCompany}
              onChange={setSelectedCompany}
              options={companies}
              placeholder="Select a company"
            />

            <p>Question</p>
            <input
              name="question"
              id="question"
              type="text"
              onChange={handleChange}
              placeholder="e.g What is an anonymous function?"
            />

            <p>Tags</p>

            <ReactTags
              labelField="name"
              tags={tagsData}
              suggestions={tagSuggestions}
              delimiters={delimiters}
              handleDelete={handleDeleteTags}
              handleAddition={handleAddition}
              inputFieldPosition="top"
              autofocus={false}
              autocomplete
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
