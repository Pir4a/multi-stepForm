import { FormEvent, useState } from 'react'
import './App.scss'
import { StepFive } from './components/StepFive'
import { StepFour } from './components/StepFour'
import { StepOne } from './components/StepOne'
import { StepThree } from './components/StepThree'
import { StepTwo } from './components/StepTwo'
import { useMultistepForm } from './useMultiStepForm'

type FormData = {
  name: string
  email: string
  phone: string
  plan: string
}

const INITIAL_DATA: FormData = {
  name: '',
  email: "",
  phone: "",
  plan: "",
}


function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>){
    setData(prev =>{
      return{...prev, ...fields}
    })
  }


  const {steps, step, currentStepIndex, isFirstStep, back,next, isLastStep } =
   useMultistepForm([
    <StepOne {...data} updateFields={updateFields}/>,
    <StepTwo {...data}  updateFields={updateFields}/>,
    <StepThree {...data} updateFields={updateFields}/>,
    <StepFour {...data} updateFields={updateFields}/>,
    <StepFive {...data} updateFields={updateFields}/>,
   ])

   function onSubmit(e: FormEvent){
    e.preventDefault()
    next()
   }

  return (
    <>
    <div className='formbackground'>
      <div className='currentformstep'>

      </div>
    </div>
    <div className='formcontainer'>
      <form onSubmit={onSubmit}>
        {step}
     
    
    <div className='buttonscontainer'
    >
      {!isFirstStep && (
      <button type="button" onClick={back}>
        Go Back
      </button>
      )}
      <button type="submit">
        {isLastStep ? "Finish" : "Next Step"}
      </button>
      
      </div>
      </form>
    </div>
    </>
  )
}

export default App
