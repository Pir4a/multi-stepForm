import arcade from "../../assets/images/icon-arcade.svg"
import advanced from "../../assets/images/icon-advanced.svg"
import pro from "../../assets/images/icon-pro.svg"

import { planOptions } from "../App"
import "./StepTwo.scss"

type PlanData = {
  month: boolean
  plan: "Arcade" | "Advanced" | "Pro"
  email: string
  phone: string
}

type PlanFormProps = PlanData & {
  updateFields: (fields: Partial<PlanData>) => void
}

export function StepTwo({ plan, updateFields, month }: PlanFormProps) {
  return (
    <>
      <div className="steptwo">
        <div className="head">
          <h1>Select your plan</h1>
          <p className="headtext">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <div className="gridcontainer">
          <div
            className={
              plan === "Arcade" ? "plancontainer planactive" : "plancontainer"
            }
          >
            <input
              type="radio"
              checked={plan === "Arcade"}
              className="plan"
              onChange={() => updateFields({ plan: "Arcade" })}
            />
            <img src={arcade} alt="image of the arcade plan" />
            <div className="textcontainer">
              <h2>Arcade</h2>
              <p>
                {month
                  ? `$${planOptions.Arcade.monthly}/mo`
                  : `$${planOptions.Arcade.yearly}/yr`}
              </p>
              <p className="free">{month ? "" : "2 months free"}</p>
            </div>
          </div>

          <div
            className={
              plan === "Advanced" ? "plancontainer planactive" : "plancontainer"
            }
          >
            <input
              type="radio"
              checked={plan === "Advanced"}
              className="plan"
              onChange={() => updateFields({ plan: "Advanced" })}
            />

            <img src={advanced} alt="image of the advanced plan" />
            <div className="textcontainer">
              <h2>Advanced</h2>
              <p>
                {month
                  ? `$${planOptions.Advanced.monthly}/mo`
                  : `$${planOptions.Advanced.yearly}/yr`}
              </p>
              <p className="free">{month ? "" : "2 months free"}</p>
            </div>
          </div>

          <div
            className={
              plan === "Pro" ? "plancontainer planactive" : "plancontainer"
            }
          >
            <input
              type="radio"
              checked={plan === "Pro"}
              className="plan"
              onChange={() => updateFields({ plan: "Pro" })}
            />

            <img src={pro} alt="image of the pro plan" />
            <div className="textcontainer">
              <h2>Pro</h2>
              <p>
                {month
                  ? `$${planOptions.Pro.monthly}/mo`
                  : `$${planOptions.Pro.yearly}/yr`}
              </p>
              <p className="free">{month ? "" : "2 months free"}</p>
            </div>
          </div>
          <div className="monthly-or-yearly">
            {month ? <h3>Yearly</h3> : <h3 className="activeslider">Yearly</h3>}
            <label className="switch">
              <input
                className="slider"
                type="checkbox"
                name="planmonth"
                onChange={(e) => updateFields({ month: e.target.checked })}
              />
              <span className="sliderspan"></span>
            </label>
            {month ? (
              <h3 className="activeslider">Monthly</h3>
            ) : (
              <h3>Monthly</h3>
            )}
          </div>
        </div>
        <div className="monthly-or-yearlydesktop">
          {month ? <h3>Yearly</h3> : <h3 className="activeslider">Yearly</h3>}
          <label className="switch">
            <input
              className="slider"
              type="checkbox"
              name="planmonth"
              onChange={(e) => updateFields({ month: e.target.checked })}
            />
            <span className="sliderspan"></span>
          </label>
          {month ? <h3 className="activeslider">Monthly</h3> : <h3>Monthly</h3>}
        </div>
      </div>
    </>
  )
}
