import React, { useState } from 'react';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

import { useMedia } from 'shared/hooks/useMedia';
import CircleButton from 'shared/components/CircleButton';
import {
  FilterContainer,
  FilterOptions,
  FiltersTitle,
  FiltersItems,
  ContainerItem,
  FilterChose,
  Item,
} from './NoticesFilters.styles';
import Checkbox from '../../../shared/components/Checkbox';

function NoticesFilters({ fetchData }) {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  // const [age, setAge] = useState(null);
  // const [gender, setGender] = useState(null);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleAgeClick = () => {
    setIsAgeOpen(!isAgeOpen);
  };

  const handleGenderClick = () => {
    setIsGenderOpen(!isGenderOpen);
  };

  const handleAgeChange = event => {
    // const value = event.target.value;
    // setAge(prevState =>
    //   prevState.includes(value)
    //     ? prevState.filter(item => item !== value)
    //     : [...prevState, value]
    // );
    // fetchData();
  };

  const handleGenderChange = event => {
    // const value = event.target.value;
    // setGender(prevState =>
    //   prevState.includes(value)
    //     ? prevState.filter(item => item !== value)
    //     : [...prevState, value]
    // );
    // fetchData();
  };

  return (
    <FilterContainer
      style={{
        position: 'relative',
      }}
    >
      {isUpToWidth480 ? (
        <CircleButton
          id="filters"
          pos="absolute"
          t="0"
          r="0"
          style={{
            width: 40,
            height: 40,
          }}
          onClick={handleFilterClick}
        ></CircleButton>
      ) : (
        <Button style={{ width: '152px' }} onClick={handleFilterClick}>
          Filter
          <Icon id="filters" />
        </Button>
      )}
      {isFilterOpen && (
        <FilterOptions>
          <FiltersTitle>Filters</FiltersTitle>
          <div style={{position: 'relative'}}>
          <ContainerItem>
            <FiltersItems onClick={handleAgeClick}>
              <Icon id={!isAgeOpen ? "up" : "down"}/>
              <Item>By age</Item>
            </FiltersItems>
            {isAgeOpen && (
              <FilterChose>
                <Checkbox value="young" label="3-12m" onChange={handleAgeChange}></Checkbox>
                <Checkbox value="adult" label="1 year" onChange={handleAgeChange}></Checkbox>
                <Checkbox value="old" label="2 year" onChange={handleAgeChange}></Checkbox>
                {/*<label>*/}
                {/*  <input*/}
                {/*    type="checkbox"*/}
                {/*    value="young"*/}
                {/*    onChange={handleAgeChange}*/}
                {/*  />*/}
                {/*  3-12m*/}
                {/*</label>*/}
              {/*  <label>*/}
              {/*  <input*/}
              {/*    type="checkbox"*/}
              {/*    value="adult"*/}
              {/*    onChange={handleAgeChange}*/}
              {/*  />*/}
              {/*  1 year*/}
              {/*</label>*/}
              {/*  <label>*/}
              {/*    <input*/}
              {/*      type="checkbox"*/}
              {/*      value="old"*/}
              {/*      onChange={handleAgeChange}*/}
              {/*    />*/}
              {/*    2 year*/}
              {/*  </label>*/}
              </FilterChose>
            )}
          </ContainerItem>
          <ContainerItem>
            <FiltersItems onClick={handleGenderClick}>
              <Icon id={!isGenderOpen ? "up" : "down"}/>
              <Item>By gender</Item>
            </FiltersItems>
            {isGenderOpen && (
              <FilterChose>
                <Checkbox value="male" label="male" onChange={handleAgeChange}></Checkbox>
                <Checkbox value="female" label="female" onChange={handleAgeChange}></Checkbox>
                {/*<label>*/}
                {/*  <input*/}
                {/*    type="checkbox"*/}
                {/*    value="male"*/}
                {/*    onChange={handleGenderChange}*/}
                {/*  />*/}
                {/*  male*/}
                {/*</label>*/}
                {/*<label>*/}
                {/*  <input*/}
                {/*    type="checkbox"*/}
                {/*    value="female"*/}
                {/*    onChange={handleGenderChange}*/}
                {/*  />*/}
                {/*  female*/}
                {/*</label>*/}
              </FilterChose>
            )}
            </ContainerItem>
          </div>
        </FilterOptions>
      )}
    </FilterContainer>
  );
}

export default NoticesFilters;
