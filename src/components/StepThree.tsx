

type PlanData = {
    plan: string
    email: string
    phone: string
}


type PlanFormProps = PlanData & {
    updateFields: (fields: Partial<PlanData>) => void
}



export function StepThree(addon, ){
    return (
    <>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="addon">
            <input
             type="checkbox"
             checked={addon}
             className="addon"
             onChange={() => updateFields{addon = true}}
             />
            <div>
            <h2>Online service</h2>
            <p>Access to multiplayer games</p>
            </div>
            <div>
                <span>+$1/mo</span>
            </div>
        </div>
        <div className="addon">
            <input type="checkbox"/>
            <div>
            <h2>Larger storage</h2>
            <p>Extra 1TB of clou save</p>
            </div>
            <div>
                <span>+$2/mo</span>
            </div>
        </div>
        <div className="addon">
            <input type="checkbox"/>
            <div>
            <h2>Customizable profile</h2>
            <p>Custom theme on your profile</p>
            </div>
            <div>
                <span>+$2/mo</span>
            </div>
        </div>
    </>
    )
}