import { planOptions } from "../App"


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


export function StepFour(
    {month, plan, updateFields, isCustomizable, isLarger, isOnline}: PlanFormProps)
    {

    const planTotal = month ? planOptions[plan].monthly : planOptions[plan].yearly
    const addonTotal = [isCustomizable, isLarger, isOnline].reduce((acc, addOn, index) => {
        if (!addOn) return acc;
        const name = ["customizableProfile", "largerStorage", "onlineServices"][
          index
        ] as "customizableProfile" | "largerStorage" | "onlineServices";
        const planName = month ? "monthly" : "yearly";
        const numToAdd = planOptions[name][planName];
        return acc + numToAdd;
      }, 0);

    return (
    <>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div>
            <div>
                <span>
                    {plan} 
                    {!month ? "(Yearly)" : "(Monthly)"}
                    change
                </span>   
                <span>
                    ${month ? `${planOptions[plan].monthly}/mo` : `${planOptions[plan].yearly}/yr`}
                    <p onClick={()=> updateFields({month: !month})}>Change</p>
                </span> 
            </div>
            <div>   
                <div>
                    <span>{isOnline ? `Online service` : ""}</span>
                    <span>{!isOnline ? "" : month ?
                     `$${planOptions.onlineServices.monthly}/mo` :
                     `$${planOptions.onlineServices.yearly}/yr`}
                    </span>
                </div>
                <div>
                    <span>{isLarger ? `Larger storage` : ""}</span>
                    <span>{!isLarger ? "" : month ?
                     `$${planOptions.largerStorage.monthly}/mo` :
                     `$${planOptions.largerStorage.yearly}/yr`}
                    </span>
                </div>
                <div>
                    <span>{isCustomizable ? `Customizable profile` : ""}</span>
                    <span>{!isCustomizable ? "" : month ?
                     `$${planOptions.customizableProfile.monthly}/mo` :
                     `$${planOptions.customizableProfile.yearly}/yr`}
                    </span>
                </div>
            </div>
        </div>
        <p>Total (per {month? "month": "year"})</p>
        <span>+${planTotal + addonTotal}{month? "/mo": "/yr"}</span>
    </>
    )
}