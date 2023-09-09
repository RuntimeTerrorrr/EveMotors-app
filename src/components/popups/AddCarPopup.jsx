import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'tailwindcss/tailwind.css';
import { FormDashboard } from '../../services/Dashboard.service.js';
import { useNavigate } from 'react-router-dom';

const steps = ['Basic Info', 'Specification', 'Images', 'Model and Cover Image'];

const AddCarPopup = ({ onCdnLinkChange, onhandleScaleValueChange, onhandleChangeTargetX, onhandleChangeTargetY, onhandleChangeTargetZ }) => {

  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const [makeModel, setMakeModel] = React.useState('');
  const [variant, setVariant] = React.useState('');
  const [registeredIn, setRegisteredIn] = React.useState('');
  const [assembledIn, setAssembledIn] = React.useState('');
  const [intro, setIntro] = React.useState('');
  const [engine, setEngine] = React.useState('');
  const [displacement, setDisplacement] = React.useState('');
  const [transmission, setTransmission] = React.useState('');
  const [torque, setTorque] = React.useState('');
  const [power, setPower] = React.useState('');
  const [topSpeed, setTopSpeed] = React.useState('');
  const [bodyType, setBodyType] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [imageLink1, setImageLink1] = React.useState('');
  const [imageLink2, setImageLink2] = React.useState('');
  const [imageLink3, setImageLink3] = React.useState('');
  const [imageLink4, setImageLink4] = React.useState('');
  const [coverImageUrl, setCoverImageUrl] = React.useState('');
  const [modelCDN, setModelCDN] = React.useState('');
  const [fixedScaleValue, setFixedScaleValue] = React.useState('');
  const [fixedTargetValue, setfixedTargetValue] = React.useState(['', '', '']);
  const [fixedTargetValueX, setfixedTargetValueX] = React.useState('');
  const [fixedTargetValueY, setfixedTargetValueY] = React.useState('');
  const [fixedTargetValueZ, setfixedTargetValueZ] = React.useState('');

  React.useEffect(() => {
    setfixedTargetValue([fixedTargetValueX, fixedTargetValueY, fixedTargetValueZ]);
  }, [fixedTargetValueX, fixedTargetValueY, fixedTargetValueZ]);

  const handleChangeCDN = (e) => {

    setModelCDN(e.target.value);
    const newValue = e.target.value;
    onCdnLinkChange(newValue);
  }

  const handleChangeScale = (e) => {
    setFixedScaleValue(e.target.value);
    const newValue = e.target.value;
    onhandleScaleValueChange(newValue);
  }
  const handleChangeTargetX = (e) => {
    setfixedTargetValueX(e.target.value);
    const newValue = e.target.value;
    onhandleChangeTargetX(newValue)
  }
  const handleChangeTargetY = (e) => {
    setfixedTargetValueY(e.target.value);
    const newValue = e.target.value;
    onhandleChangeTargetY(newValue);
  }
  const handleChangeTargetZ = (e) => {
    setfixedTargetValueZ(e.target.value);
    const newValue = e.target.value;
    onhandleChangeTargetZ(newValue);
  }

  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      window.location.href = '/dashboard';
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {

    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const handleReset = () => {
    window.location.href = '/dashboard';
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("makeModel", makeModel);
    formData.append("variant", variant);
    formData.append("registeredIn", registeredIn);
    formData.append("assembledIn", assembledIn);
    formData.append("intro", intro);
    formData.append("engine", engine);
    formData.append("displacement", displacement);
    formData.append("transmission", transmission);
    formData.append("torque", torque);
    formData.append("power", power);
    formData.append("topSpeed", topSpeed);
    formData.append("bodyType", bodyType);
    formData.append("category", category);
    formData.append("imageLink1", imageLink1);
    formData.append("imageLink2", imageLink2);
    formData.append("imageLink3", imageLink3);
    formData.append("imageLink4", imageLink4);
    formData.append("coverImageUrl", coverImageUrl);
    formData.append("modelCDN", modelCDN);
    formData.append("fixedScaleValue", fixedScaleValue);
    formData.append("fixedTargetValue", fixedTargetValue);

    console.log('Form Data:', formData);
    setFormSubmitted(true);

    FormDashboard(formData)
    .then(() => {
      navigate('/dashboard')
    })
    .catch((error) => {
      console.error(error);
  })
  };


  FormDashboard(formData)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    })

  return (
    <Box className="flex flex-col justify-between" sx={{ width: '100%', px: '20px', height: '400px' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && (
          <>
            <div className="grid grid-cols-2 px-10 gap-4 mt-10">
              <div>
                <label
                  htmlFor="makeModel"
                  className="block text-sm font-medium text-white"
                >
                  Make Model
                </label>
                <input
                  type="text"
                  id="makeModel"
                  value={makeModel}
                  onChange={(e) => setMakeModel(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="variant"
                  className="block text-sm font-medium text-white"
                >
                  Variant
                </label>
                <input
                  type="text"
                  id="variant"
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="registeredIn"
                  className="block text-sm font-medium text-white"
                >
                  Registered In
                </label>
                <input
                  type="text"
                  id="registeredIn"
                  value={registeredIn}
                  onChange={(e) => setRegisteredIn(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="assembledIn"
                  className="block text-sm font-medium text-white"
                >
                  Assembled In
                </label>
                <input
                  type="text"
                  id="assembledIn"
                  value={assembledIn}
                  onChange={(e) => setAssembledIn(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div className="col-start-1 col-end-3">
                <label
                  htmlFor="intro"
                  className="block text-sm font-medium text-white"
                >
                  Intro
                </label>
                <textarea
                  id="intro"
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                  className="mt-1 h-24 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
            </div>
          </>
        )}
        {activeStep === 1 && (
          <>
            <div className="grid grid-cols-2 px-10 gap-4 mt-10">
              <div>
                <label
                  htmlFor="engine"
                  className="block text-sm font-medium text-white"
                >
                  Engine
                </label>
                <input
                  type="text"
                  id="engine"
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="displacement"
                  className="block text-sm font-medium text-white"
                >
                  Displacement
                </label>
                <input
                  type="text"
                  id="displacement"
                  value={displacement}
                  onChange={(e) => setDisplacement(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="transmission"
                  className="block text-sm font-medium text-white"
                >
                  Transmission
                </label>
                <input
                  type="text"
                  id="transmission"
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="torque"
                  className="block text-sm font-medium text-white"
                >
                  Torque
                </label>
                <input
                  type="text"
                  id="torque"
                  value={torque}
                  onChange={(e) => setTorque(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="power"
                  className="block text-sm font-medium text-white"
                >
                  Power
                </label>
                <input
                  type="text"
                  id="power"
                  value={power}
                  onChange={(e) => setPower(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="topSpeed"
                  className="block text-sm font-medium text-white"
                >
                  Top Speed
                </label>
                <input
                  type="text"
                  id="topSpeed"
                  value={topSpeed}
                  onChange={(e) => setTopSpeed(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="bodyType"
                  className="block text-sm font-medium text-white"
                >
                  Body Type
                </label>
                <input
                  type="text"
                  id="bodyType"
                  value={bodyType}
                  onChange={(e) => setBodyType(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-white"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
            </div>
          </>
        )}
        {activeStep === 2 && (
          <>
            <div className="grid grid-cols-2 px-10 gap-4 mt-10">
              <div>
                <label
                  htmlFor="imageLink1"
                  className="block text-sm font-medium text-white"
                >
                  Image Link1
                </label>
                <input
                  type="text"
                  id="imageLink1"
                  value={imageLink1}
                  onChange={(e) => setImageLink1(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="imageLink2"
                  className="block text-sm font-medium text-white"
                >
                  Image Link2
                </label>
                <input
                  type="text"
                  id="imageLink2"
                  value={imageLink2}
                  onChange={(e) => setImageLink2(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="imageLink3"
                  className="block text-sm font-medium text-white"
                >
                  Image Link3
                </label>
                <input
                  type="text"
                  id="imageLink3"
                  value={imageLink3}
                  onChange={(e) => setImageLink3(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="imageLink4"
                  className="block text-sm font-medium text-white"
                >
                  Target Value For X-axis
                </label>
                <input
                  type="text"
                  id="imageLink4"
                  value={imageLink4}
                  onChange={(e) => setImageLink4(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
            </div>
          </>
        )}
        {activeStep === 3 && (
          <>
            <div className="grid grid-cols-2  px-10 gap-4 mt-10">

              <div>
                <label
                  htmlFor="modelCDN"
                  className="block text-sm font-medium text-white"
                >
                  Cover Image Url
                </label>
                <input
                  type="text"
                  id="coverImageUrl"
                  value={coverImageUrl}
                  onChange={(e) => setCoverImageUrl(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="modelCDN"
                  className="block text-sm font-medium text-white"
                >
                  3D Model CDN
                </label>
                <input
                  type="text"
                  id="modelCDN"
                  value={modelCDN}
                  onChange={handleChangeCDN}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="fixedScaleValue"
                  className="block text-sm font-medium text-white"
                >
                  FixedScale Value
                </label>
                <input
                  type="text"
                  id="fixedScaleValue"
                  value={fixedScaleValue}
                  onChange={handleChangeScale}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.1"
                  onChange={handleChangeScale}
                  value={fixedScaleValue}
                  id="fixedScaleRange"
                />
              </div>
              <div>
                <label
                  htmlFor="fixedTargetValue"
                  className="block text-sm font-medium text-white"
                >
                  Target Value
                </label>
                <input
                  type="text"
                  id="fixedTargetValue"
                  value={fixedTargetValue}
                  onChange={(e) => setfixedTargetValue(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />

              </div>
              <div>
                <label
                  htmlFor="fixedTargetValue"
                  className="block text-sm font-medium text-white"
                >
                  Target Value X-axis
                </label>
                <input
                  type="text"
                  id="fixedTargetValueX"
                  value={fixedTargetValueX}
                  onChange={(e) => setfixedTargetValue(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.1"
                  onChange={handleChangeTargetX}
                  value={fixedTargetValueX}
                  id="fixedScaleRange"
                />
                <label
                  htmlFor="fixedTargetValueY"
                  className="block text-sm font-medium text-white"
                >
                  Target Value Y-axis
                </label>
                <input
                  type="text"
                  id="fixedTargetValueY"
                  value={fixedTargetValueY}
                  onChange={(e) => setfixedTargetValueY(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />

                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.1"
                  onChange={handleChangeTargetY}
                  value={fixedTargetValueY}
                  id="fixedTargetValueY"
                />
                <label
                  htmlFor="fixedTargetValueZ"
                  className="block text-sm font-medium text-white"
                >
                  Target Value Y-axis
                </label>
                <input
                  type="text"
                  id="fixedTargetValueZ"
                  value={fixedTargetValueZ}
                  onChange={(e) => setfixedTargetValueZ(e.target.value)}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  required
                />

                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.1"
                  onChange={handleChangeTargetZ}
                  value={fixedTargetValueZ}
                  id="fixedTargetValueZ"
                />
              </div>
              {/* </div> */}
            </div>
          </>
        )}
      </div>
      {allStepsCompleted() ? (
        <div className="w-full h-full flex justify-center items-center">
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, color: 'white' }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ position: 'absolute', bottom: '10px', right: '20px' }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Home</Button>
              {!formSubmitted && <Button onClick={handleSubmit}>Submit</Button>}

            </Box>
          </React.Fragment>
        </div>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" onClick={handleBack} sx={{ mr: 1, color: 'white' }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} sx={{ mr: 1, color: 'white' }}>
              Next
            </Button>
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <Typography variant="caption" sx={{ display: 'inline-block', color: 'white' }}>
                  {/* Step {activeStep + 1} already completed */}
                </Typography>
              ) : (
                <Button sx={{ color: 'white' }} onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? 'Finish'
                    : 'Complete Step'}
                </Button>
              ))}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default AddCarPopup;