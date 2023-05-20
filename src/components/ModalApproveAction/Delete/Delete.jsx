import { useMedia } from 'shared/hooks/useMedia';
import Button from 'shared/components/Button';
import {
  Text,
  TextAccent,
  ContainerView,
  ButtonWrap,
  TextWrap,
  Title,
} from './Delete.styles';

import Icon from 'shared/components/Icon';

const Delete = ({ close, approve }) => {
  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)'],
    ['desktop', 'tablet', 'mobile'],
    'xs'
  );

  const isSmallMobile = screenSize === 'xs';
  const isMobile = screenSize === 'mobile';
  const isTablet = screenSize === 'tablet';
  const isDesktop = screenSize === 'desktop';

  return (
    <ContainerView>
      <Title>Delete adverstiment?!</Title>
      <TextWrap>
        <Text>
          Are you sure you want to delete{' '}
          <TextAccent>“Cute dog looking for a home”</TextAccent>? <br />
          You can`t undo this action.
        </Text>
      </TextWrap>
      {isSmallMobile && (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              h="40"
              style={{
                marginBottom: '8px',
                width: '100%',
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={approve}
              h="40"
              shape="solid"
              g="8"
              style={{
                width: '100%',
                maxWidth: '256px',
              }}
            >
              Yes
              <Icon id="trash" s="#FEF9F9" />
            </Button>
          </ButtonWrap>
        </>
      )}
      {isMobile && (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              w="256"
              h="40"
              style={{
                marginBottom: '8px',
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={approve}
              w="256"
              h="40"
              shape="solid"
              g="8"
            >
              Yes
              <Icon id="trash" s="#FEF9F9" />
            </Button>
          </ButtonWrap>
        </>
      )}
      {isTablet && (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              w="129"
              h="40"
              style={{
                marginRight: '17px',
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={approve}
              w="129"
              h="40"
              shape="solid"
              g="8"
            >
              Yes
              <Icon id="trash" s="#FEF9F9" />
            </Button>
          </ButtonWrap>
        </>
      )}
      {isDesktop && (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              w="129"
              h="40"
              style={{
                marginRight: '17px',
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={approve}
              w="129"
              h="40"
              shape="solid"
              g="8"
            >
              Yes
              <Icon id="trash" s="#FEF9F9" />
            </Button>
          </ButtonWrap>
        </>
      )}
    </ContainerView>
  );
};

export default Delete;
