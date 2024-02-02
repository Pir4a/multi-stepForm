import { planOptions } from "../App"

type PlanData = {
    month: boolean
    plan: "arcadeplan" | "advancedplan" | "proplan"
    email: string
    phone: string
    isOnline: boolean
    isLarger: boolean
    isCustomizable: boolean
}


type PlanFormProps = PlanData & {
    updateFields: (fields: Partial<PlanData>) => void
}


export function StepThree({isOnline,isLarger,isCustomizable,updateFields, month}: PlanFormProps ){
    return (
    <>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="addon">
            <input
             type="checkbox"
             checked={isOnline}
             className="addons"
             onChange={(e) => updateFields({isOnline: e.target.checked})}
             />
            <div>
            <h2>Online service</h2>
            <p>Access to multiplayer games</p>
            </div>
            <div>
                <span>{month ? `$${planOptions.onlineServices.monthly}` : `$${planOptions.onlineServices.yearly}`}</span>
            </div>
        </div>
        <div className="addon">
            <input  
                type="checkbox"
                checked={isLarger}
                className="addons"
                onChange={(e) => updateFields({isLarger: e.target.checked})}
             />
            <div>
            <h2>Larger storage</h2>
            <p>Extra 1TB of cloud save</p>
            </div>
            <div>
            <span>{month ? `$${planOptions.largerStorage.monthly}` : `$${planOptions.largerStorage.yearly}`}</span>
            </div>
        </div>
        <div className="addon">
            <input  
                type="checkbox"
                checked={isCustomizable}
                className="addons"
                onChange={(e) => updateFields({isCustomizable: e.target.checked})}
             />
            <div>
            <h2>Customizable profile</h2>
            <p>Custom theme on your profile</p>
            </div>
            <div>
            <span>{month ? `$${planOptions.customizableProfile.monthly}` : `$${planOptions.customizableProfile.yearly}`}</span>
            </div>
        </div>
    </>
    )
}