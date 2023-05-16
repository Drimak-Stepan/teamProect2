import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 24px;
`;

export const Step = styled.p`
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 10px;
  line-height: 1.4;
  width: 80px;
  color: ${(props) => {
        if (props.active) {
            return '#54ADFF';
        } else if (props.disabled) {
            return '#888888';
        } else {
            return '#00C3AD';
        }
}};

position: relative;


  
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: ${(props) => {
        if (props.active) {
            return '#54ADFF';
        } else if (props.disabled) {
            return '#CCE4FB;';
        } else {
            return '#00C3AD';
        }
}};
  }

  @media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 1.6;
  width: 122px;

  &::after {
    width: 120px;
  }}
`;
