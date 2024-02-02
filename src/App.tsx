import { FormEvent, useState } from 'react'
import './App.scss'
import { StepFive } from './components/StepFive'
import { StepFour } from './components/StepFour'
import { StepOne } from './components/StepOne'
import { StepThree } from './components/StepThree'
import { StepTwo } from './components/StepTwo'
import { useMultistepForm } from './useMultiStepForm'
import bg from "../assets/images/bg-sidebar-mobile.svg"

export const planOptions = {
  Arcade: {
    monthly: 9,
    yearly: 90,
  },
  Advanced: {
    monthly: 12,
    yearly: 120,
  },
  Pro: {
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
  plan: "Arcade" | "Advanced" | "Pro"
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
  plan: "Advanced",
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


  const {step, isFirstStep, back,next,isLastStep, isSecondToLastStep } =
   useMultistepForm([
    <StepOne {...data} updateFields={updateFields}/>,
    <StepTwo {...data} updateFields={updateFields}/>,
    <StepThree {...data} updateFields={updateFields}/>,
    <StepFour {...data} updateFields={updateFields}/>,
    <StepFive/>,
   ])

   function onSubmit(e: FormEvent){
    e.preventDefault()
    next()
   }

  return (
    <>
    <div className='formbackground'>
      <img src={bg}></img>
      
      <div className='currentformstep'>

      </div>
    </div>
    <div className='formcontainer'>
    <div className='circlescontainer'>
       <span className="circle one">1</span>
       <span className="circle two">2</span>
       <span className="circle three">3</span>
       <span className="circle four">4</span>
      </div>
      <form onSubmit={onSubmit}>
        {step}
     
    
    <div className='buttonscontainer'
    >
      {isFirstStep ?(<button className='none'></button>) : "" }
      {isLastStep ? "" : !isFirstStep && (
      <button type="button" onClick={back} className='prevbtn'>
        Go Back
      </button>
      )}
      <button type="submit" className='nextbtn'>
        {isLastStep ? "" : isSecondToLastStep ? "Confirm" : "Next Step"}
      </button>
      
      </div>
      </form>
    </div>
    </>
  )
}

export default App
