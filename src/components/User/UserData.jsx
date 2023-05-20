import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  UserWrapper,
  Avatar,
  Photo,
  AvatarContainer,
  AvatarInput,
  Title,
  EditAvatarBtn,
  LogOutBtn,
  BtnText,
  LogOutText,
  InputItem,
  InputContainer,
  Wrap,
  EditInputBtn,
} from './';
import Icon from 'shared/components/Icon/Icon';
import { addAvatar, getCurrent } from 'utils/Api';
import { updateUserInfo } from 'utils/Api';
import ModalApproveAction from 'components/ModalApproveAction';
import Logout from 'components/ModalApproveAction/Logout';
import { reverseISODate } from 'utils/reverseISODate';

const initialState = {
  name: '',
  email: '',
  birthday: new Date(),
  phone: '',
  city: '',
  photo: null,
};

const UserData = () => {
  const [user, setUser] = useState(initialState);
  const [disable, setDisable] = useState(true);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const token = useSelector(store => store.auth.token);
  const { t } = useTranslation();

  useEffect(() => {
    const getUser = async token => {
      const res = await getCurrent(token);
      setUser({ ...res.data, birthday: reverseISODate(res.data.birthday) });
    };
    getUser(token);
  }, [token]);

  const handlePhotoChange = e => {
    setUser({ ...user, photo: e.target.files[0] });
    setIsConfirm(true);
  };

  const handleUploadPhoto = async () => {
    await addAvatar(token, { avatar: user.photo });
    setIsConfirm(false);
  };

  const handleInputEdit = () => {
    setDisable(false);
  };

  const handleInputSubmit = async () => {
    const req = { birthday: user.birthday };
    await updateUserInfo(token, req);
    setDisable(true);
  };

  const handleLogOut = () => {
    setIsModalLogoutOpen(true);
  };

  return (
    <>
      <Wrap>
        <Title>{t('My_information')}:</Title>
        <UserWrapper>
          <AvatarContainer>
            <Avatar>
              <AvatarInput
                id="avatar"
                type="file"
                onChange={handlePhotoChange}
                accept="image/png, image/jpeg"
                multiple={false}
              />
              {user.photo ? (
                <Photo
                  src={URL.createObjectURL(user.photo)}
                  alt="Selected file"
                />
              ) : (
                <Photo src={user.avatarUrl} alt="default avatar" />
              )}
            </Avatar>
            {!isConfirm ? (
              <EditAvatarBtn>
                <Icon id="camera" s="#54ADFF" />
                <label style={{ cursor: 'pointer' }} htmlFor="avatar">
                  {t('Edit_photo')}
                </label>
              </EditAvatarBtn>
            ) : (
              <EditAvatarBtn onClick={handleUploadPhoto}>
                <Icon id="complite" s="#54ADFF" />
                <BtnText>{t('Confirm')}</BtnText>
              </EditAvatarBtn>
            )}
          </AvatarContainer>
          <InputContainer>
            <InputItem
              name={t('Name')}
              type="text"
              value={user.name || 'User'}
              placeholder={t('Name')}
            />
            <InputItem
              name={t('Email')}
              type="text"
              value={user.email}
              placeholder={t('Email')}
            />
            <InputItem
              name={t('Birthday')}
              placeholderText="DD.MM.YYYY"
              onChange={date => setUser({ ...user, birthday: date })}
              selected={user.birthday}
              value={user.birthday}
              dateFormat="dd.MM.yyyy"
              disabled={disable}
            />
            {disable ? (
              <EditInputBtn onClick={handleInputEdit}>
                <Icon id="edit" f="#54ADFF" s="none" />
              </EditInputBtn>
            ) : (
              <EditInputBtn onClick={handleInputSubmit}>
                <Icon id="complite" s="#00C3AD" />
              </EditInputBtn>
            )}
            <InputItem
              name={t('Phone')}
              type="text"
              value={user.phone}
              placeholder="+380XXXXXXXXX"
            />
            <InputItem name={t('Сity')} type="text" value={user.city || ''} />
            <LogOutBtn onClick={handleLogOut}>
              <Icon id="logout" s="#54ADFF" />
              <LogOutText>{t('Log_Out')}</LogOutText>
            </LogOutBtn>
          </InputContainer>
          {isModalLogoutOpen && (
            <ModalApproveAction close={() => setIsModalLogoutOpen(false)}>
              <Logout close={() => setIsModalLogoutOpen(false)} />
            </ModalApproveAction>
          )}
        </UserWrapper>
      </Wrap>
    </>
  );
};

export default UserData;
