/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from 'react-redux';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { Link } from 'react-router-dom';
import { postUploadFile } from '../../store/actions';
import {
  SuperContainer,
  DataContainer,
  TabContainer,
  ProfileButton,
  PhotoContainer,
  Form,
  CloseButton,
  InputGroup,
  UpdateButton,
} from './styled';

const CLOUD = process.env.REACT_APP_CLOUD_NAME;

const PerfilLeft = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [toggleClassBtnUser, setToggleCLassBtnUser] = useState('none');
  const [file, setFile] = useState(null);

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD,
    },
  });

  const myImage = cld.image(user?.photo?.public_id || 'Default-Profile-Photo');

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handlerUserPhoto = () => {
    if (toggleClassBtnUser === 'none') {
      return setToggleCLassBtnUser('block');
    }
    return setToggleCLassBtnUser('none');
  };

  const onSubmitFoto = async (e) => {
    e.preventDefault();
    await postUploadFile(dispatch, file, user);
    handlerUserPhoto();
  };

  return (
    <>
      <SuperContainer>
        <DataContainer>
          <ProfileButton type="button" onClick={handlerUserPhoto}>
            <AdvancedImage cldImg={myImage} />
          </ProfileButton>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
          <p>{user?.email}</p>
        </DataContainer>
        <div
          style={{
            borderTop: '1px solid #737373',
            marginTop: '10px',
          }}
        />
        <TabContainer>
          <Link to="/mi-perfil/">Activity</Link>
          <Link to="/mi-perfil/settings">Settings</Link>
        </TabContainer>
      </SuperContainer>

      <PhotoContainer display={toggleClassBtnUser} id="menu-perfil">
        <Form>
          <h4>Change your photo</h4>

          <CloseButton type="button" onClick={handlerUserPhoto}>
            &times;
          </CloseButton>

          <InputGroup>
            <p>Photo</p>

            <input
              type="file"
              name="file"
              id="file"
              onChange={onChangeFile}
              accept="image/*"
            />
          </InputGroup>

          <UpdateButton type="button" onClick={onSubmitFoto}>
            Update
          </UpdateButton>
        </Form>
      </PhotoContainer>
    </>
  );
};

export default PerfilLeft;
