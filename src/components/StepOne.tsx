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
      <h1>Personal Info</h1>
      <p>Please provide your name, email, address and phone number.</p>
      <label>Name</label>
      <input
        placeholder="e.g Stephen King"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      ></input>
      <label>Email Address</label>
      <input
        placeholder="e.g stephenking@lorem.com"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      ></input>
      <label>Phone Number</label>
      <input
        placeholder="e.g +1 234 567 890"
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
      ></input>
    </>
  )
}
