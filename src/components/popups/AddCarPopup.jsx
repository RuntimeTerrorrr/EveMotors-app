import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const steps = ['Basic Info', 'Specification', 'Images', 'Model and Cover Image'];

export default function AddCarPopup() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [formData, setFormData] = React.useState({
    makeModel: '',
    variant: '',
    registeredIn: '',
    assembledIn: '',
    engine: '',
    torque: '',
    power: '',
    topSpeed: '',
    bodyType: '',
    category: '',
    imageLink1: '',
    imageLink2: '',
    imageLink3: '',
    imageLink4: '',
    modelCDN: '',
    fixedScaleValue: '',
  });
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
    // Here, you can submit the `formData` object to your backend or perform any other actions
    console.log('Form Data:', formData);
    setFormSubmitted(true);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

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
                  value={formData.makeModel}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.variant}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.registeredIn}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.assembledIn}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.intro}
                  onChange={handleChange}
                  className="mt-1 h-24 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.engine}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.torque}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.power}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.topSpeed}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.bodyType}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.imageLink1}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.imageLink2}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
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
                  value={formData.imageLink3}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="imageLink4"
                  className="block text-sm font-medium text-white"
                >
                  Image Link4
                </label>
                <input
                  type="text"
                  id="imageLink4"
                  value={formData.imageLink4}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                  placeholder="i.e, Mike"
                  required
                />
              </div>
            </div>
          </>
        )}
        {activeStep === 3 && (
          <>
            <div className="grid grid-cols-2 px-10 gap-4 mt-10">
              <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <div>
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
                    value={formData.modelCDN}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                    placeholder="i.e, Mike"
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
                    value={formData.fixedScaleValue}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                    placeholder="i.e, Mike"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="imageLink5"
                    className="block text-sm font-medium text-white"
                  >
                    Image Link5
                  </label>
                  <input
                    type="text"
                    id="imageLink5"
                    value={formData.imageLink5}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border bg-white text-sm shadow-sm p-2"
                    placeholder="i.e, Mike"
                    required
                  />
                </div>
              </div>
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
