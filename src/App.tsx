import { FormEvent, useState } from "react"
import "./App.scss"
import { StepFive } from "./components/StepFive"
import { StepFour } from "./components/StepFour"
import { StepOne } from "./components/StepOne"
import { StepThree } from "./components/StepThree"
import { StepTwo } from "./components/StepTwo"
import { useMultistepForm } from "./useMultiStepForm"
import bg from "../assets/images/bg-sidebar-mobile.svg"
import bgdesktop from "../assets/images/bg-sidebar-desktop.svg"

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
}

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
  isEmpty: boolean
  isEmailEmpty: boolean
  isPhoneEmpty: boolean
}

const INITIAL_DATA: FormData = {
  name: "",
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
  isEmpty: false,
  isEmailEmpty: false,
  isPhoneEmpty: false,
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const {
    step,
    currentStepIndex,
    isFirstStep,
    back,
    next,
    isLastStep,
    isSecondToLastStep,
  } = useMultistepForm([
    <StepOne {...data} updateFields={updateFields} />,
    <StepTwo {...data} updateFields={updateFields} />,
    <StepThree {...data} updateFields={updateFields} />,
    <StepFour {...data} updateFields={updateFields} />,
    <StepFive />,
  ])

  function checkEmpty() {
    if (data.name == "") {
      data.isEmpty = true
    } else {
      data.isEmpty = false
    }
    if (data.email == "") {
      data.isEmailEmpty = true
    } else {
      data.isEmailEmpty = false
    }
    if (data.phone == "") {
      data.isPhoneEmpty = true
    } else {
      data.isPhoneEmpty = false
    }
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(data.isEmpty, data.isEmailEmpty, data.isPhoneEmpty)
    checkEmpty()
    setUpdate(!update)
    if (
      data.isEmpty === true ||
      data.isEmailEmpty === true ||
      data.isPhoneEmpty === true
    ) {
      return
    }
    next()
  }

  const [update, setUpdate] = useState(false)

  return (
    <>
      <div className="desktopcontainer">
        <div className="formbackground">
          <img src={bg}></img>

          <div className="currentformstep"></div>
        </div>
        <div className="formcontainer">
          <div className="circlescontainer">
            {currentStepIndex == 0 ? (
              <div className="circle active">1</div>
            ) : (
              <div className="circle">1</div>
            )}
            {currentStepIndex == 1 ? (
              <div className="circle active">2</div>
            ) : (
              <div className="circle">2</div>
            )}
            {currentStepIndex == 2 ? (
              <div className="circle active">3</div>
            ) : (
              <div className="circle">3</div>
            )}
            {currentStepIndex == 3 ? (
              <div className="circle active">4</div>
            ) : (
              <div className="circle">4</div>
            )}
          </div>

          <form onSubmit={onSubmit}>
            <div className="formbackgrounddesktop">
              <div className="circlescontainerdesktop">
                {currentStepIndex == 0 ? (
                  <div className="circleandtext">
                    <div className="circle active">1</div>
                    <div className="circletext">
                      <p>STEP 1</p>
                      <h1>YOUR INFO</h1>
                    </div>
                  </div>
                ) : (
                  <div className="circleandtext">
                    <div className="circle">1</div>
                    <div className="circletext">
                      <p>STEP 1</p>
                      <h1>YOUR INFO</h1>
                    </div>
                  </div>
                )}
                {currentStepIndex == 1 ? (
                  <div className="circleandtext">
                    <div className="circle active">2</div>
                    <div className="circletext">
                      <p>STEP 2</p>
                      <h1>SELECT PLAN</h1>
                    </div>
                  </div>
                ) : (
                  <div className="circleandtext">
                    <div className="circle">2</div>
                    <div className="circletext">
                      <p>STEP 2</p>
                      <h1>SELECT PLAN</h1>
                    </div>
                  </div>
                )}
                {currentStepIndex == 2 ? (
                  <div className="circleandtext">
                    <div className="circle active">3</div>
                    <div className="circletext">
                      <p>STEP 3</p>
                      <h1>ADD-ONS</h1>
                    </div>
                  </div>
                ) : (
                  <div className="circleandtext">
                    <div className="circle">3</div>
                    <div className="circletext">
                      <p>STEP 3</p>
                      <h1>ADD-ONS</h1>
                    </div>
                  </div>
                )}
                {currentStepIndex == 3 || currentStepIndex == 4 ? (
                  <div className="circleandtext">
                    <div className="circle active">4</div>
                    <div className="circletext">
                      <p>STEP 4</p>
                      <h1>SUMMARY</h1>
                    </div>
                  </div>
                ) : (
                  <div className="circleandtext">
                    <div className="circle">4</div>
                    <div className="circletext">
                      <p>STEP 4</p>
                      <h1>SUMMARY</h1>
                    </div>
                  </div>
                )}
              </div>
              <img src={bgdesktop}></img>

              <div className="currentformstep"></div>
            </div>

            {step}

            <div className="buttonscontainer">
              {isFirstStep ? <button className="none"></button> : ""}
              {isLastStep
                ? ""
                : !isFirstStep && (
                    <button type="button" onClick={back} className="prevbtn">
                      Go Back
                    </button>
                  )}
              <button type="submit" className={isLastStep ? "none" : "nextbtn"}>
                {isLastStep ? "" : isSecondToLastStep ? "Confirm" : "Next Step"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
