import * as React from "react"
import { senderErrors } from "./Logic"
import { FormFields, FormErrors } from "../../types"
import css from "./EmailForm.module.css"

type EmailProps = {
  message: string
  subject: string
  errors: FormErrors
  fields: FormFields
  subjectError: {
    error: boolean
    message: string
  }
  messageError: {
    error: boolean
    message: string
  }
  setFields: any
  sendMail: any
  checkFields: any
  setState: any
  setErrors: any
  formSide: string
}

export const EmailForm: React.FC<EmailProps> = ({
  setState,
  setFields,
  message,
  subject,
  sendMail,
  checkFields,
  formSide,
  fields,
  setErrors,
  subjectError,
  messageError,
  errors,
}) => {
  const { nameError, emailError, phoneError } = errors

  const handleChange = ({ target: { value, id } }) => {
    switch (id) {
      case "subjectInput":
        return (
          setFields(fields => ({ ...fields, subject: value })),
          setErrors(errors => ({
            ...errors,
            subjectError: { error: false, message: "" },
          }))
        )
      case "messageInput":
        return (
          setFields(fields => ({ ...fields, message: value })),
          setErrors(errors => ({
            ...errors,
            messageError: { error: false, message: "" },
          }))
        )
    }
  }

  return (
    <div className={css.emailWrapper}>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Subject</label>
        </div>
        <div className={css.inputWrapper}>
          <input
            type="text"
            id="subjectInput"
            value={subject}
            className={subjectError.error ? css.error : ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}>{subjectError.message}</div>
        </div>
      </div>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Message</label>
        </div>
        <div className={css.inputWrapper}>
          <textarea
            className={messageError.error ? css.error : ""}
            name=""
            id="messageInput"
            cols="30"
            rows="10"
            placeholder="(Length goes beyond section border)"
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}>{messageError.message}</div>
        </div>
      </div>
      <div
        className={`${css.backWrapper} ${
          senderErrors(nameError, emailError, phoneError)
            ? css.senderErrors
            : null
        }`}
        onClick={() => setState(state => ({ ...state, formSide: "sender" }))}
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 178 322"
          enableBackground="new 0 0 178 322"
        >
          <path
            fill="white"
            d="M17,319.5c-3.7,0-7.4-1.4-10.3-4.2c-5.7-5.7-5.7-14.8,0-20.5L140.5,161L6.7,27.3c-5.7-5.7-5.7-14.8,0-20.5
		c5.7-5.7,14.8-5.7,20.5,0l144,144c5.7,5.7,5.7,14.8,0,20.5l-144,144C24.4,318.1,20.7,319.5,17,319.5z"
          />
        </svg>
      </div>
      <div
        className={css.sendWrapper}
        onClick={() =>
          setState(state => ({
            ...state,
            mailStatus: "sent",
            formSide: "status",
          }))
        }
      >
        <div
          className={`${css.planeWrapper} ${
            formSide === "status" ? css.mailSend : null
          }`}
        >
          <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 454.36 303.21"
            enableBackground="new 0 0 454.36 303.21"
          >
            <linearGradient
              id="planeWhite_1_"
              gradientUnits="userSpaceOnUse"
              x1="254.8878"
              y1="136.0061"
              x2="220.1644"
              y2="-1.8663"
            >
              <stop offset="0.0305" stopColor="#666666" />
              <stop offset="0.1101" stopColor="#858585" />
              <stop offset="0.237" stopColor="#B1B1B1" />
              <stop offset="0.3598" stopColor="#D3D3D3" />
              <stop offset="0.4759" stopColor="#EBEBEB" />
              <stop offset="0.5824" stopColor="#FAFAFA" />
              <stop offset="0.6706" stopColor="#FFFFFF" />
            </linearGradient>
            <linearGradient
              id="planeBlue_1_"
              gradientUnits="userSpaceOnUse"
              x1="254.8878"
              y1="136.0061"
              x2="220.1644"
              y2="-1.8663"
            >
              <stop offset="0.0305" stopColor="#234757" />
              <stop offset="0.6706" stopColor="#60A2BE" />
            </linearGradient>
            <polygon
              className={css.blue2}
              points="451.86,2.5 73.99,118.93 2.5,49.48 		"
            />
            <linearGradient
              id="planeWhite_2_"
              gradientUnits="userSpaceOnUse"
              x1="283.7169"
              y1="104.1329"
              x2="337.8446"
              y2="325.7499"
            >
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.1764" stopColor="#FAFAFA" />
              <stop offset="0.3854" stopColor="#ECECEC" />
              <stop offset="0.6108" stopColor="#D4D4D4" />
              <stop offset="0.8462" stopColor="#B3B3B3" />
              <stop offset="1" stopColor="#999999" />
            </linearGradient>
            <linearGradient
              id="planeBlue_2_"
              gradientUnits="userSpaceOnUse"
              x1="283.7169"
              y1="104.1329"
              x2="337.8446"
              y2="325.7499"
            >
              <stop offset="6.393348e-08" stopColor="#60A2BE" />
              <stop offset="0.1755" stopColor="#5D9EB9" />
              <stop offset="0.3832" stopColor="#5591AB" />
              <stop offset="0.6074" stopColor="#467C93" />
              <stop offset="0.8415" stopColor="#335F72" />
              <stop offset="1" stopColor="#234757" />
            </linearGradient>
            <polygon
              className={css.blue3}
              points="451.86,2.5 227.18,300.71 138.38,203.89 106.67,169.31 		"
            />
            <linearGradient
              id="planeWhite_3_"
              gradientUnits="userSpaceOnUse"
              x1="25.4595"
              y1="136.2903"
              x2="405.3744"
              y2="111.7797"
            >
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.1764" stopColor="#FAFAFA" />
              <stop offset="0.3854" stopColor="#ECECEC" />
              <stop offset="0.6108" stopColor="#D4D4D4" />
              <stop offset="0.8462" stopColor="#B3B3B3" />
              <stop offset="1" stopColor="#999999" />
            </linearGradient>
            <linearGradient
              id="planeBlue_3_"
              gradientUnits="userSpaceOnUse"
              x1="25.4595"
              y1="136.2903"
              x2="405.3744"
              y2="111.7797"
            >
              <stop offset="6.393348e-08" stopColor="#60A2BE" />
              <stop offset="0.1755" stopColor="#5D9EB9" />
              <stop offset="0.3832" stopColor="#5591AB" />
              <stop offset="0.6074" stopColor="#467C93" />
              <stop offset="0.8415" stopColor="#335F72" />
              <stop offset="1" stopColor="#234757" />
            </linearGradient>
            <polygon
              className={css.blue4}
              points="451.86,2.5 106.67,169.31 73.99,239.44 73.99,118.93 		"
            />
            <linearGradient
              id="planeWhite_4_"
              gradientUnits="userSpaceOnUse"
              x1="75.1667"
              y1="199.826"
              x2="105.805"
              y2="209.0175"
            >
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.1764" stopColor="#FAFAFA" />
              <stop offset="0.3854" stopColor="#ECECEC" />
              <stop offset="0.6108" stopColor="#D4D4D4" />
              <stop offset="0.8462" stopColor="#B3B3B3" />
              <stop offset="1" stopColor="#999999" />
            </linearGradient>
            <linearGradient
              id="planeBlue_4_"
              gradientUnits="userSpaceOnUse"
              x1="75.1667"
              y1="199.826"
              x2="105.805"
              y2="209.0175"
            >
              <stop offset="3.196674e-08" stopColor="#60A2BE" />
              <stop offset="0.1755" stopColor="#5D9EB9" />
              <stop offset="0.3832" stopColor="#5591AB" />
              <stop offset="0.6074" stopColor="#467C93" />
              <stop offset="0.8415" stopColor="#335F72" />
              <stop offset="1" stopColor="#234757" />
            </linearGradient>
            <polygon
              className={css.blue5}
              points="138.38,203.89 73.99,239.44 106.67,169.31 		"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
