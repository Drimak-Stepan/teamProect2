import { useState } from 'react';
import { Formik, Form} from 'formik';
import ChooseOptionStep from './ChooseOptionStep';
import validationSchema  from './validationSchema';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon/Icon';
import PersonalDetailsMyPet from './PersonalDetailsMyPet';
import PersonalDetailsSell from './PersonalDetailsInHands';
import PersonalDetailsLost from './PersonalDetailsSell';
import PersonalDetailsInHands from './PersonalDetailsLost';
import MoreInfoMyPet from './MoreInfoMyPet';
import MoreInfoSell from './MoreInfoSell';
import MoreInfoLost from './MoreInfoLost';
import MoreInfoInHands from './MoreInfoInHands';
import FormWrapper from './FormWrapper';


const options = [
  { label: 'your pet', value: 'your pet' },
  { label: 'sell', value: 'sell' },
  { label: 'lost/found', value: 'lost/found' },
  { label: 'in good hands', value: 'in good hands' },
];

const personalDetailsSteps = {
  'your pet': [
    <PersonalDetailsMyPet key="personalDetailsMyPet" />,
  ],
  'sell': [
    <PersonalDetailsSell key="personalDetailsSell" />
  ],
  'lost/found': [
    <PersonalDetailsLost key="personalDetailsLost" />
  ],
  'in good hands': [
    <PersonalDetailsInHands key="personalDetailsInHands" />
  ],
};

const moreInfo = {
  'your pet': [
    <MoreInfoMyPet key="moreInfoMyPet" />,
  ],
  'sell': [
    <MoreInfoSell key="moreInfoSell" />
  ],
  'lost/found': [
    <MoreInfoLost key="moreInfoLost" />
  ],
  'in good hands': [
    <MoreInfoInHands key="moreInfoInHands" />
  ],
};

const AddPetForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState("sell");
    
    const handleSubmit = (values) => {
        // відправка даних на бекенд
    };

    const handleGoBack = () => {
        setCurrentStep((step) => step - 1);
    }

    const handleNext = () => {
        setCurrentStep((step) => step + 1);
    }

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }
    return (
        <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({ isSubmitting }) => (

                <Form>
                    <FormWrapper currentStep={currentStep} >
                        {currentStep === 1 && (
                            <ChooseOptionStep
                                options={options}
                                onSelect={handleOptionSelect}
                                value={selectedOption}
                            />
                        )}
                        {currentStep === 2 && selectedOption && personalDetailsSteps[selectedOption]}
                        {currentStep === 3 && selectedOption && moreInfo[selectedOption]}

                        <div>
                            {currentStep !== 3 && (
                                <Button type="button" w="248" h="48" shape="solid" disabled={isSubmitting} onClick={handleNext}>
                                    Next
                                    <Icon id="paw" f="currentColor" s="none" />
                                </Button>
                            )}
                            {currentStep === 3 && (
                                <Button type="button" w="248" h="48" shape="solid" disabled={isSubmitting}>
                                    Done
                                    <Icon id="paw" f="currentColor" s="none" />
                                </Button>
                            )}
                            {currentStep !== 1 && (
                                <Button type="button" w="248" h="48" onClick={handleGoBack}>
                                    <Icon id="arrow-left" />
                                    Back
                                </Button>
                            )}
                            {currentStep === 1 && (
                                <Button type="button" w="248" h="48">
                                    Cancel
                                </Button>
                            )}
                        </div>
                    </FormWrapper>
                </Form>)}
        </Formik>
    );
};

export default AddPetForm;


    

        