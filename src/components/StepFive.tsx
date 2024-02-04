import valid from "../../assets/images/icon-thank-you.svg"
import "./StepFive.scss"

export function StepFive() {
  return (
    <>
      <div className="stepfive">
        <img src={valid} />
        <h1>Thank You!</h1>
        <p className="ptext">
          Thanks for confirming your subscription!
          <br />
          We hope you have fun using our platform.If your ever need support,
          please feel free to mail us at support@loremgaming.com.
        </p>
      </div>
    </>
  )
}
