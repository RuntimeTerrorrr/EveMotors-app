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
  const [step1Data, setStep1Data] = React.useState('');
  const [step2Data, setStep2Data] = React.useState('');
  const [step3Data, setStep3Data] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState(null);



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
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box className=" flex flex-col justify-center" sx={{ width: '100%', px: '20px' , height: '400px' }}>
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
            <div className=' grid grid-cols-2 px-10 gap-4 mt-10'>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Make Model
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Varient
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Registered in
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Assembled in
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div className=' col-start-1 col-end-3'>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Intro
                </label>
                <textarea
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 h-24  w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
            </div>
          </>
        )}
        {activeStep === 1 && (
          <>
            <div className=' grid grid-cols-2 px-10 gap-4 mt-10'>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Engine
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Torque
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Power
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Top Speed
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Body Type
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
            </div>
          </>
        )}
        {activeStep === 2 && (
          <>
            <div className=' grid grid-cols-2 px-10 gap-4 mt-10'>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Image Link1
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Image Link2
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Image Link3
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Image Link4
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
              </div>
            </div>
          </>
        )}
        {activeStep === 3 && (
          <>
            <div className=' grid grid-cols-2 px-10 gap-4 mt-10'>
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
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                3D Model CDN 
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
                </div>
                <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  FixedScale Value
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                />
                </div>
                <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-white"
                >
                  Image Link1
                </label>
                <input
                  type="text"
                  id="FirstName"
                  value={step1Data}
                  onChange={(e) => setStep1Data(e.target.value)}
                  className="mt-1 w-full rounded-md border  bg-white text-sm shadow-sm p-2 "
                  placeholder="i.e, Mike"
                  required
                /> 
                </div>
              </div>
            </div>
          </>
        )}
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: 'white' }}
              >
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
      </div>
    </Box>
  );
}
