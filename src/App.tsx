import { FormEvent, useState } from 'react'
import './App.scss'
import { StepFive } from './components/StepFive'
import { StepFour } from './components/StepFour'
import { StepOne } from './components/StepOne'
import { StepThree } from './components/StepThree'
import { StepTwo } from './components/StepTwo'
import { useMultistepForm } from './useMultiStepForm'

export const planOptions = {
  arcadeplan: {
    monthly: 9,
    yearly: 90,
  },
  advancedplan: {
    monthly: 12,
    yearly: 120,
  },
  proplan: {
    monthly: 15,
    yearly: 150,
  },
  onlineServices: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
};


type FormData = {
  name: string
  email: string
  phone: string
  plan: "arcadeplan" | "advancedplan" | "proplan"
  planOne: any
  planTwo: any
  planThree: any
  month: boolean
  isOnline: boolean
  isLarger: boolean
  isCustomizable: boolean
}

const INITIAL_DATA: FormData = {
  name: '',
  email: "",
  phone: "",
  plan: "advancedplan",
  planOne: undefined,
  planTwo: undefined,
  planThree: undefined,
  month: false,
  isOnline: false,
  isLarger: false,
  isCustomizable: false,
}


function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>){
    setData(prev =>{
      return{...prev, ...fields}
    })
  }


  const {steps, step, currentStepIndex, isFirstStep, back,next, isLastStep, isSecondToLastStep } =
   useMultistepForm([
    <StepOne {...data} updateFields={updateFields}/>,
    <StepTwo {...data} updateFields={updateFields}/>,
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
      {isLastStep ? "" : !isFirstStep && (
      <button type="button" onClick={back}>
        Go Back
      </button>
      )}
      <button type="submit">
        {isLastStep ? "" : isSecondToLastStep ? "Confirm" : "Next Step"}
      </button>
      
      </div>
      </form>
    </div>
    </>
  )
}

export default App
