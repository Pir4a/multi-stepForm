import { planOptions } from "../App"
import "./StepThree.scss"

type PlanData = {
  month: boolean
  plan: "Arcade" | "Advanced" | "Pro"
  email: string
  phone: string
  isOnline: boolean
  isLarger: boolean
  isCustomizable: boolean
}

type PlanFormProps = PlanData & {
  updateFields: (fields: Partial<PlanData>) => void
}

export function StepThree({
  isOnline,
  isLarger,
  isCustomizable,
  updateFields,
  month,
}: PlanFormProps) {
  return (
    <>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="addoncontainer">
        <div className="checkboxgrid">
          <div className={isOnline ? "addon active" : "addon"}>
            <input
              type="checkbox"
              checked={isOnline}
              className="addons"
              onChange={(e) => updateFields({ isOnline: e.target.checked })}
            />
            <div className="text">
              <h2>Online service</h2>
              <p>Access to multiplayer games</p>
            </div>
            <div>
              <span className="money">
                {month
                  ? `+$${planOptions.onlineServices.monthly}/mo`
                  : `+$${planOptions.onlineServices.yearly}/yr`}
              </span>
            </div>
          </div>
          <div className={isLarger ? "addon active" : "addon"}>
            <input
              type="checkbox"
              checked={isLarger}
              className="addons"
              onChange={(e) => updateFields({ isLarger: e.target.checked })}
            />
            <div className="text">
              <h2>Larger storage</h2>
              <p>Extra 1TB of cloud save</p>
            </div>
            <div>
              <span className="money">
                {month
                  ? `+$${planOptions.largerStorage.monthly}/mo`
                  : `+$${planOptions.largerStorage.yearly}/yr`}
              </span>
            </div>
          </div>
          <div className={isCustomizable ? "addon active" : "addon"}>
            <input
              type="checkbox"
              checked={isCustomizable}
              className="addons"
              onChange={(e) =>
                updateFields({ isCustomizable: e.target.checked })
              }
            />
            <div className="text">
              <h2>Customizable profile</h2>
              <p>Custom theme on your profile</p>
            </div>
            <div>
              <span className="money">
                {month
                  ? `+$${planOptions.customizableProfile.monthly}/mo`
                  : `+$${planOptions.customizableProfile.yearly}/yr`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
