import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

import { planOptions } from '../App'


type PlanData = {
    
    month: boolean
    plan: "arcadeplan" | "advancedplan" | "proplan"
    email: string
    phone: string
}


type PlanFormProps = PlanData & {
    updateFields: (fields: Partial<PlanData>) => void
}




export function StepTwo({plan, updateFields, month}: PlanFormProps){

  

    return (
    <>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <input 
            type='radio' 
            checked={plan === "arcadeplan"}
            className="plan"
            onChange={() => updateFields({plan: "arcadeplan"})}
         />   
            <img src={arcade} alt='image of the arcade plan'/>
            <div>
            <h2>Arcade</h2>
            <p>{month ? `$${planOptions.arcadeplan.monthly}` : `$${planOptions.arcadeplan.yearly}`}</p>
            <span>{month ? "" : "2 months free"}</span>
            </div>
        
        <input 
           type='radio'
           checked={plan === "advancedplan"}
           className="plan"
           onChange={() => updateFields({plan: "advancedplan"})}
        />
          
            <img src={advanced} alt='image of the advanced plan'/>
            <div>
            <h2>Advanced</h2>
            <p>{month ? `$${planOptions.advancedplan.monthly}` : `$${planOptions.advancedplan.yearly}`}</p>
            <span>{month ? "" : "2 months free"}</span>
            </div>
       
        <input 
          type='radio' 
          checked={plan === "proplan"}
          className="plan" 
          onChange={() => updateFields({plan: "proplan"})}
         />
        
            <img src={pro} alt='image of the pro plan'/>
            <div>
            <h2>Pro</h2>
            <p>{month ? `$${planOptions.proplan.monthly}` : `$${planOptions.proplan.yearly}`}</p>
            <span>{month ? "" : "2 months free"}</span>
            </div>
        <input/>
        <div className='monthly-or-yearly'>
            <h3>Monthly</h3>
                <input
                type='checkbox'
                name="planmonth"
                onChange={(e) => updateFields({ month: e.target.checked })}
                />
            <h3>Yearly</h3>
        </div>
    </>
    )
}