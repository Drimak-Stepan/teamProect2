import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 40px;
    padding-bottom: 40px;

    list-style: none;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 20px;
      margin-left: auto;
      padding: 0;
    }


`;

export const AuthItem = styled.li`
     min-width: 142px;
    height: 40px;
    
    border: 2px solid #FFC107;
    border-radius: 40px;
    color: #FFC107;
    background-color: #FEF9F9;
    outline: none;    
    font-weight: 600;

    transition-property: color, background;
    transition-duration: 250ms;
    transition-timing-function: ease;
    
    &:hover, :focus  {
        background-color: #FFC107;
        color: #FEF9F9;
        }

      &:nth-of-type(1) {
        min-width: 165px;
        font-weight: 700;
        background-color: #FFC107;
        color: #FEF9F9;

         &:hover, :focus  {
          color: #FFC107;
          background-color: #FEF9F9;}
      }
    `

export const AuthLink = styled(NavLink)`
    display: block;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 7px 20px; 

    font-family: 'Manrope';
    font-size: 16px;
    line-height: 1.38;
    

  @media screen and (min-width: 768px) {
    padding: 8px 20px; 
  }

  @media screen and (min-width: 1280px) {
    
  }
`;
