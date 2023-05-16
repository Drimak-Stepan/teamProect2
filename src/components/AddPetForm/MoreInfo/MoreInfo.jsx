import PropTypes from 'prop-types';
import { Field } from 'formik';
import ImageUploader from 'shared/components/ImageUploader';
import { Error, FormLabel, StyledField } from '../AddPetForm.styles';
import {
  ImageLabel,
  MoreInfoRadio,
  MoreInfoWrapper,
  RadioBox,
  TextField,
} from './MoreInfo.styles';
import Icon from 'shared/components/Icon';

const MoreInfo = ({ option, handleChange, handleBlur, values }) => {
  return (
    <MoreInfoWrapper>
      {option !== 'my-pet' && (
        <>
          <div role="group" aria-labelledby="choose-pet-option">
            <FormLabel>The sex</FormLabel>
            <RadioBox>
            <MoreInfoRadio checked={values.sex === 'female'}>
              <Icon id="female" w="10" h="18" />
              Female
              <Field
                type="radio"
                name="sex"
                value="female"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.sex === 'female'}
              />
            </MoreInfoRadio>
            <MoreInfoRadio checked={values.sex === 'male'}>
              <Icon id="male" w="10" h="18" />
              Male
              <Field
                type="radio"
                name="sex"
                value="male"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.sex === 'male'}
              />
              </MoreInfoRadio>
            </RadioBox>
            <Error name="sex" component="p" />
          </div>
        </>
      )}
          <ImageLabel>
            {/* {option === 'my-pet' ? ( */}
            <p>Add photo</p>
            {/* ) : (
          <span>Load the pet&#96;s image:</span>
        )} */}
            <ImageUploader
              onChange={handleChange}
              name="photo"
              value={values.photo}
            ></ImageUploader>
          </ImageLabel>
            <Error name="photo" component="p" />
      {option !== 'my-pet' && (
        <>
          <FormLabel htmlFor="location">
            Location
            <StyledField
              name="location"
              placeholder="Type of location"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.location}
            />
            <Error name="location" component="p" />
          </FormLabel>
        </>
      )}
      {option === 'sell' && (
        <FormLabel htmlFor="price">
          Price
          <StyledField
            name="price"
            placeholder="Type of price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          <Error name="price" component="p" />
        </FormLabel>
      )}
      <FormLabel htmlFor="comments">
        Comments
        <TextField
          as="textarea"
          name="comments"
          placeholder="Type breed"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.comments}
        />
        <Error name="comments" component="p" />
      </FormLabel>
    </MoreInfoWrapper>
  );
};

MoreInfo.propTypes = {
  option: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default MoreInfo;
