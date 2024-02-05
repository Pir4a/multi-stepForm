import "./Stepone.scss"

type UserData = {
  name: string
  email: string
  phone: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function StepOne({ name, email, phone, updateFields }: UserFormProps) {
  return (
    <>
      <div className="steponecontainer">
        <div className="personalinfos">
          <h1>Personal Info</h1>
          <p className="infospara">
            Please provide your name, email, address and phone number.
          </p>
        </div>
        <div className="infos">
          <label>Name</label>
          <input
            placeholder="e.g Stephen King"
            value={name}
            onChange={(e) => updateFields({ name: e.target.value })}
          ></input>
        </div>
        <div className="infos">
          <label>Email Address</label>
          <input
            placeholder="e.g stephenking@lorem.com"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
          ></input>
        </div>
        <div className="infos">
          <label>Phone Number</label>
          <input
            placeholder="e.g +1 234 567 890"
            value={phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
          ></input>
        </div>
      </div>
    </>
  )
}
