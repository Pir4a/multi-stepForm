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
      <div className="head">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="gridcontainer">
        <div className="plancontainer">
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
            <span>{month ? "" : "2 months free"}</span>
          </div>
        </div>

        <div className="plancontainer">
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
            <span>{month ? "" : "2 months free"}</span>
          </div>
        </div>

        <div className="plancontainer">
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
            <span>{month ? "" : "2 months free"}</span>
          </div>
        </div>
      </div>

      <div className="monthly-or-yearly">
        <h3>Monthly</h3>
        <input
          type="checkbox"
          name="planmonth"
          onChange={(e) => updateFields({ month: e.target.checked })}
        />
        <h3>Yearly</h3>
      </div>
    </>
  )
}
