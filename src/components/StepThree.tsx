export function StepThree(){
    return (
    <>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="addon">
            <input type="checkbox"></input>
            <div>
            <h2>Online service</h2>
            <p>Access to multiplayer games</p>
            </div>
            <div>
                <span>+$1/mo</span>
            </div>
        </div>
        <div className="addon">
            <input type="checkbox"></input>
            <div>
            <h2>Larger storage</h2>
            <p>Extra 1TB of clou save</p>
            </div>
            <div>
                <span>+$2/mo</span>
            </div>
        </div>
        <div className="addon">
            <input type="checkbox"></input>
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