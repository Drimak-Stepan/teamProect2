import React, { useState } from 'react';
import useAuth from 'shared/hooks/useAuth';

import { deleteNotice } from '../../../utils/ApiNotices';
import { updateFavoriteNotice } from '../../../utils/ApiNotices';
import { calculateAge } from 'utils/calculateAge';

import {
  Card,
  CardImage,
  ImageDetails,
  CardImageContainer,
  ImageDetailsItem,
  ImageCategory,
  PhotoDescription,
  BelowItemContainer,
} from './NoticeCategoryItem.styles';

import Icon from 'shared/components/Icon/Icon';
import Button from 'shared/components/Button';
import CircleButton from 'shared/components/CircleButton';

// import ModalNoticeTest from '../NoticeModalTest/NoticeModalTest';
// _____________Modal Componenets________________
import ModalApproveAction from 'components/ModalApproveAction';
import NoticeModal from 'components/ModalApproveAction/NoticeModal';
import Delete from 'components/ModalApproveAction/Delete';

const AddToFavorite = ({ notice }) => {
  const { isLoggedIn } = useAuth();
  const [isFavorite, setIsFavorite] = useState(!!notice.favorite);
  const [isHovered, setIsHovered] = useState(false);

  const handleUpdate = async () => {
    try {
      if (!isLoggedIn) {
        alert('Please sign in to add to favorites');
        return;
      }

      const updateToFavorite = {
        favorite: !notice.favorite,
      };
      await updateFavoriteNotice(notice._id, updateToFavorite);
      notice.favorite = !isFavorite;
      setIsFavorite(!isFavorite);
    } catch (error) {
      alert('Failed to update notice. Please try again later.');
    }
  };

  return (
    <CircleButton
      id="heart"
      z="999"
      pos="absolute"
      t="12px"
      r="12px"
      onClick={handleUpdate}
      f={
        isHovered ? '#CCE4FB' : isLoggedIn && isFavorite ? '#54adff' : '#CCE4FB'
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></CircleButton>
  );
};

const LearnMore = ({ onButtonClick }) => {
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  return (
    <Button
      style={{
        width: '100%',
        marginTop: '20px',
        transition: 'stroke 250ms ease',
      }}
      onMouseEnter={() => setIsHoveredOrFocused(true)}
      onMouseLeave={() => setIsHoveredOrFocused(false)}
      onFocus={() => setIsHoveredOrFocused(true)}
      onBlur={() => setIsHoveredOrFocused(false)}
      onClick={onButtonClick}
    >
      Learn More
      {isHoveredOrFocused && <Icon id="paw" f="#FEF9F9" w="24" h="24" />}
    </Button>
  );
};

const NoticeCategoryItem = ({ notice, deleteAndRefresh }) => {
  const { isLoggedIn, user } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  // const dispatch = useDispatch();

  const handleDelete = async id => {
    try {
      await deleteNotice(id);
      deleteAndRefresh(id);
    } catch (error) {
      alert('Failed to delete notice. Please try again later.');
    }
  };

  return (
    <Card>
      <AddToFavorite notice={notice} />
      <CardImageContainer>
        <CardImage src={notice.photoUrl} alt={notice.title} />
        <ImageCategory>
          {notice.category.replace('for-free', 'for free').replace(/-/g, '/')}
        </ImageCategory>

        <ImageDetails>
          <ImageDetailsItem>
            <Icon id="location" h="18" w="18" s="#54ADFF" />
            {notice.location}
          </ImageDetailsItem>
          <ImageDetailsItem>
            <Icon id="clock" h="18" w="18" s="#54ADFF" />
            {calculateAge(notice.birthday)}
          </ImageDetailsItem>
          <ImageDetailsItem>
            {notice.sex === 'male' ? (
              <Icon id="male" h="18" w="18" s="#54ADFF" />
            ) : (
              <Icon id="female" h="18" w="18" s="#54ADFF" />
            )}
            {notice.sex}
          </ImageDetailsItem>
        </ImageDetails>
      </CardImageContainer>
      <BelowItemContainer>
        <PhotoDescription>{notice.title}</PhotoDescription>
        <LearnMore onButtonClick={() => setIsModalOpen(true)} />
      </BelowItemContainer>
      {/* {isModalOpen && <ModalNoticeTest close={() => setIsModalOpen(false)} />} */}
      {isModalOpen && (
        <ModalApproveAction close={() => setIsModalOpen(false)}>
          <NoticeModal notice={notice} close={() => setIsModalOpen(false)} />
        </ModalApproveAction>
      )}
      {isLoggedIn && user && notice.own && (
        <CircleButton
          id="trash"
          z="999"
          pos="absolute"
          t="68px"
          r="12px"
          onClick={() => handleDelete(notice._id)}
        ></CircleButton>
      )}
      {isModalDeleteOpen && (
        <ModalApproveAction close={() => setIsModalDeleteOpen(false)}>
          <Delete
            approve={() => handleDelete(notice._id)}
            close={() => setIsModalDeleteOpen(false)}
          />
        </ModalApproveAction>
      )}
    </Card>
  );
};

export default NoticeCategoryItem;
