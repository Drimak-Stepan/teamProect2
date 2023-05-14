import { Field } from "formik";
import { useState } from "react";

const MoreInfoSell = ({ name, options, value, onSelect}) => {
    const [checkedValue, setCheckedValue] = useState(value);

    const handleChange = (e) => {
        setCheckedValue(e.target.value);
        //onSelect(e.target.value);
    }
    return (
    <>
        <label>The Sex: </label>
        <div role="group" aria-labelledby="choose-pet-option">
          {options.map((option) => (
            <div key={option.value}>
                <Field
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={checkedValue === option.value}
                  onChange={handleChange}
                  onBlur={() => { }}
                />
              {option.label}
            </div>
        ))}
        </div>
        <br/>
        <label>Location: </label>
        <Field name="location" id="location" />
        <br/>
        <label>Price: </label>
        <Field name="price" id="price" />
        <br/>
        <label>Comments: </label>
        <Field name="comments" id="comments" />
    </>
    )
};

export default MoreInfoSell;
