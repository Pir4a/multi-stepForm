import { planOptions } from "../App"
import "./StepFour.scss"

type PlanData = {
  isOnline: boolean
  isLarger: boolean
  isCustomizable: boolean
  month: boolean
  plan: "Arcade" | "Advanced" | "Pro"
  email: string
  phone: string
}

type PlanFormProps = PlanData & {
  updateFields: (fields: Partial<PlanData>) => void
}

export function StepFour({
  month,
  plan,
  updateFields,
  isCustomizable,
  isLarger,
  isOnline,
}: PlanFormProps) {
  const planTotal = month ? planOptions[plan].monthly : planOptions[plan].yearly
  const addonTotal = [isCustomizable, isLarger, isOnline].reduce(
    (acc, addOn, index) => {
      if (!addOn) return acc
      const name = ["customizableProfile", "largerStorage", "onlineServices"][
        index
      ] as "customizableProfile" | "largerStorage" | "onlineServices"
      const planName = month ? "monthly" : "yearly"
      const numToAdd = planOptions[name][planName]
      return acc + numToAdd
    },
    0
  )

  return (
    <>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="servicecontainer">
        <div className="plantype">
          <span>
            <h3>
              {plan}
              {!month ? "  (Yearly)" : "  (Monthly)"}
            </h3>
            <p
              className="underlined"
              onClick={() => updateFields({ month: !month })}
            >
              Change
            </p>
          </span>
          <span className="deepblue">
            <p>
              $
              {month
                ? `${planOptions[plan].monthly}/mo`
                : `${planOptions[plan].yearly}/yr`}{" "}
            </p>
          </span>
        </div>
        <hr />
        <div className="addoncontainer">
          <div className={isOnline ? "plantype" : ""}>
            <h3>{isOnline ? `Online service` : ""}</h3>
            <p>
              {!isOnline
                ? ""
                : month
                ? `+$${planOptions.onlineServices.monthly}/mo`
                : `+$${planOptions.onlineServices.yearly}/yr`}
            </p>
          </div>
          <div className={isLarger ? "plantype" : ""}>
            <h3>{isLarger ? `Larger storage` : ""}</h3>
            <p>
              {!isLarger
                ? ""
                : month
                ? `+$${planOptions.largerStorage.monthly}/mo`
                : `+$${planOptions.largerStorage.yearly}/yr`}
            </p>
          </div>
          <div className={isCustomizable ? "plantype" : ""}>
            <h3>{isCustomizable ? `Customizable profile` : ""}</h3>
            <p>
              {!isCustomizable
                ? ""
                : month
                ? `+$${planOptions.customizableProfile.monthly}/mo`
                : `+$${planOptions.customizableProfile.yearly}/yr`}
            </p>
          </div>
        </div>
      </div>
      <div className="total">
        <h3>Total (per {month ? "month" : "year"})</h3>
        <p className="price">
          ${planTotal + addonTotal}
          {month ? "/mo" : "/yr"}
        </p>
      </div>
    </>
  )
}
