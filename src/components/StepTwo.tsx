import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'


type PlanData = {
    name: string
    email: string
    phone: string
}


type PlanFormProps = PlanData & {
    updateFields: (fields: Partial<PlanData>) => void
}




export function StepTwo(){
    return (
    <>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="plan" onClick={e => updateFields({name: e.target.value})}>
            <img src={arcade} alt='image of the arcade plan'/>
            <div>
            <h2>Arcade</h2>
            <p>$9/mo</p>
            </div>
        </div>
        <div className="plan">
            <img src={advanced} alt='image of the advanced plan'/>
            <div>
            <h2>Advanced</h2>
            <p>$12/mo</p>
            </div>
        </div>
        <div className="plan" >
            <img src={pro} alt='image of the pro plan'/>
            <div>
            <h2>Pro</h2>
            <p>$15/mo</p>
            </div>
        </div>
        <div className='monthly-or-yearly'>
            <h3>Monthly</h3>
                <button><span className='circle'></span></button>
            <h3>Yearly</h3>
        </div>
    </>
    )
}