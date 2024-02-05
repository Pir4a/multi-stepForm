import "./Stepone.scss"

type UserData = {
  isEmailEmpty: boolean
  isPhoneEmpty: boolean
  isEmpty: boolean
  name: string
  email: string
  phone: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function StepOne({
  name,
  email,
  phone,
  updateFields,
  isEmpty,
  isEmailEmpty,
  isPhoneEmpty,
}: UserFormProps) {
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
          <div className="labelcontainer">
            <label>Name</label>
            {isEmpty ? <p className="error">This field is required</p> : ""}
          </div>
          <input
            className={isEmailEmpty ? "redoutline" : ""}
            placeholder="e.g Stephen King"
            value={name}
            onChange={(e) => updateFields({ name: e.target.value })}
          ></input>
        </div>
        <div className="infos">
          <div className="labelcontainer">
            <label>Email Address</label>
            {isEmailEmpty ? (
              <p className="error">This field is required</p>
            ) : (
              ""
            )}
          </div>
          <input
            className={isEmailEmpty ? "redoutline" : ""}
            type="email"
            placeholder="e.g stephenking@lorem.com"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
          ></input>
        </div>
        <div className="infos">
          <div className="labelcontainer">
            <label>Phone Number</label>
            {isPhoneEmpty ? (
              <p className="error">This field is required</p>
            ) : (
              ""
            )}
          </div>
          <input
            className={isEmailEmpty ? "redoutline" : ""}
            placeholder="e.g +1 234 567 890"
            value={phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
          ></input>
        </div>
      </div>
    </>
  )
}
