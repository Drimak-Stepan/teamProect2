import React, { useState } from 'react';
import {
  FriendsList,
  Friend,
  FriendTitle,
  FriendBlock,
  FriendImg,
  FriendInfo,
  InfoItem,
  InfoItemTitle,
  InfoItemText,
  InfoItemTime,
  ScheduleField,
  ScheduleRow,
  ScheduleDay,
  ScheduleTime,
  InfoItemAddress,
  InfoItemEmail,
  InfoItemPhone,
} from './OurFriendsList.styles';
import friendImgPlug from '../../../images/other/ourFriends-plug-min.jpeg';

const OurFriendsList = ({ friends }) => {
  const [expandedFriendId, setExpandedFriendId] = useState(null);

  const renderTodayWorkday = workDays => {
    const today = new Date().getDay();
    const todayWorkday = workDays[today];

    if (todayWorkday && todayWorkday.isOpen) {
      return (
        <div key={today}>
          {todayWorkday.from} - {todayWorkday.to}
        </div>
      );
    } else {
      return <div key={today}>Closed</div>;
    }
  };

  const toggleExpandFriend = friendId => {
    if (expandedFriendId === friendId) {
      setExpandedFriendId(null);
    } else {
      setExpandedFriendId(friendId);
    }
  };

  const renderSchedule = workDays => {
    const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    return daysOfWeek.map((day, index) => {
      const workDay = workDays[index];

      if (workDay && workDay.isOpen) {
        return (
          <ScheduleRow key={day}>
            <ScheduleDay>{day}</ScheduleDay>
            <ScheduleTime>
              {workDay.from} - {workDay.to}
            </ScheduleTime>
          </ScheduleRow>
        );
      } else {
        return (
          <ScheduleRow key={day}>
            <ScheduleDay>{day}</ScheduleDay>
            <ScheduleTime>Closed</ScheduleTime>
          </ScheduleRow>
        );
      }
    });
  };

  const friendsList = friends.map(
    ({
      _id,
      title,
      url,
      addressUrl,
      imageUrl,
      address,
      workDays,
      phone,
      email,
    }) => {
      const isExpanded = expandedFriendId === _id;

      return (
        <Friend key={_id}>
          <FriendTitle
            href={url}
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            {title}
          </FriendTitle>
          <FriendBlock>
            <FriendImg src={imageUrl ? imageUrl : friendImgPlug} alt={title} />
            <FriendInfo>
              <InfoItemTime
                onClick={() => toggleExpandFriend(_id)}
                hasSchedule={workDays && workDays.length > 0}
              >
                <InfoItemTitle>Time:</InfoItemTitle>
                <InfoItemText>
                  {workDays === null || workDays === undefined ? (
                    'day and night'
                  ) : isExpanded && !workDays ? (
                    <div>on the website</div>
                  ) : isExpanded ? (
                    <>
                      <ScheduleField>{renderSchedule(workDays)}</ScheduleField>
                      {renderTodayWorkday(workDays)}
                    </>
                  ) : (
                    renderTodayWorkday(workDays)
                  )}
                </InfoItemText>
              </InfoItemTime>
              <InfoItem>
                <InfoItemTitle>Adress:</InfoItemTitle>
                <InfoItemText>
                  <InfoItemAddress
                    href={addressUrl}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    {address ? address : 'on the website'}
                  </InfoItemAddress>
                </InfoItemText>
              </InfoItem>
              <InfoItem>
                <InfoItemTitle>Email: </InfoItemTitle>
                <InfoItemText>
                  {email ? (
                    <InfoItemEmail
                      href={`mailto:${email}`}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      {email}
                    </InfoItemEmail>
                  ) : (
                    'on the website'
                  )}
                </InfoItemText>
              </InfoItem>
              <InfoItem>
                <InfoItemTitle>Phone:</InfoItemTitle>
                <InfoItemText>
                  {phone ? (
                    <InfoItemPhone
                      href={`tel:${phone}`}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      {phone}
                    </InfoItemPhone>
                  ) : (
                    'on the website'
                  )}
                </InfoItemText>
              </InfoItem>
            </FriendInfo>
          </FriendBlock>
        </Friend>
      );
    }
  );
  return (
    <>
      <FriendsList>{friendsList}</FriendsList>
    </>
  );
};

export default OurFriendsList;
