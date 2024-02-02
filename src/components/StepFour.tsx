import { planOptions } from "../App"


type PlanData = {
     
    isOnline: boolean
    isLarger: boolean
    isCustomizable: boolean
    month: boolean
    plan: "arcadeplan" | "advancedplan" | "proplan"
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
        const planName = !month ? "monthly" : "yearly";
        const numToAdd = planOptions[name][planName];
        return acc + numToAdd;
      }, 0);

    return (
    <>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div>
            {plan} {!month ? "Yearly" : "Monthly"}
        </div>
    </>
    )
}