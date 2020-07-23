import * as React from "react"
import { FormFields } from "../../types"
import { formatNumber, correctEmailFormat, correctPhoneFormat } from "./Logic"
import css from "./SenderForm.module.css"
import { stateContext } from "react-three-fiber"

type SenderProps = {
  setFields: any
  setState: any
  setErrors: any
  phone: string
  phoneFormat: string
  company: string
  name: string
  email: string
  nameError: { error: boolean; message: string }
  phoneError: { error: boolean; message: string }
  emailError: { error: boolean; message: string }
}
export const SenderForm: React.FC<SenderProps> = ({
  name,
  phone,
  company,
  email,
  setFields,
  phoneFormat,
  setState,
  setErrors,
  nameError,
  phoneError,
  emailError,
}) => {
  const handleChange = ({ target: { id, value } }) => {
    switch (id) {
      case "nameInput":
        return (
          setFields(fields => ({ ...fields, name: value })),
          setErrors(errors => ({
            ...errors,
            nameError: { error: false, message: "" },
          }))
        )
      case "companyInput":
        return setFields(fields => ({ ...fields, company: value }))
      case "phoneInput":
        return (
          setFields(fields => ({
            ...fields,
            phone: formatNumber(phoneFormat, value),
          })),
          setErrors(errors => ({
            ...errors,
            phoneError: { error: false, message: "" },
          }))
        )
      case "emailInput":
        return (
          setFields(fields => ({ ...fields, email: value })),
          setErrors(errors => ({
            ...errors,
            emailError: { error: false, message: "" },
          }))
        )
    }
  }

  return (
    <div className={css.senderWrapper}>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Name</label>
        </div>
        <div className={css.inputWrapper}>
          <input
            type="text"
            value={name}
            id="nameInput"
            className={nameError.error ? css.error : ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}>{nameError.message}</div>
        </div>
      </div>

      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Company</label>
        </div>
        <div className={css.inputWrapper}>
          <input
            type="text"
            placeholder="(Optional)"
            id="companyInput"
            value={company}
            onChange={handleChange}
          />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}></div>
        </div>
      </div>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Email</label>
        </div>
        <div className={css.inputWrapper}>
          <input
            type="text"
            id="emailInput"
            className={emailError.error ? css.error : ""}
            value={email}
            onBlur={() =>
              correctEmailFormat(email)
                ? null
                : setErrors(errors => ({
                    ...errors,
                    emailError: {
                      error: true,
                      message: "Check email formatting",
                    },
                  }))
            }
            onChange={handleChange}
          />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}>{emailError.message}</div>
        </div>
      </div>
      <div className={css.sectionWrapper}>
        <div className={css.labelWrapper}>
          <label htmlFor="">Phone</label>
        </div>
        <div className={css.inputWrapper}>
          <div
            className={css.phoneFormat}
            onClick={() =>
              phoneFormat === "us"
                ? setState(state => ({ ...state, phoneFormat: "eu" }))
                : setState(state => ({ ...state, phoneFormat: "us" }))
            }
          >
            <div className={phoneFormat === "us" ? css.format : ""}>US</div>
            <div className={css.line}>|</div>
            <div className={phoneFormat === "us" ? "" : css.format}>EU</div>
          </div>

          <input
            type="text"
            id="phoneInput"
            maxLength="16"
            placeholder={
              phoneFormat === "us" ? "___  ____  -  _____" : "__  ____  ______"
            }
            value={phone}
            onBlur={() =>
              correctPhoneFormat(phone, phoneFormat)
                ? null
                : setErrors(errors => ({
                    ...errors,
                    phoneError: {
                      error: true,
                      message: "Check phone formatting.",
                    },
                  }))
            }
            className={phoneError.error ? css.error : ""}
            onChange={handleChange}
          />
        </div>
        <div className={css.errorWrapper}>
          <div className={css.error}>{phoneError.message}</div>
        </div>
      </div>
      <div
        className={css.nextButton}
        onClick={() => setState(state => ({ ...state, formSide: "email" }))}
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 178 322"
          enableBackground="new 0 0 178 322"
        >
          <path
            fill="#3e768e"
            d="M17,319.5c-3.7,0-7.4-1.4-10.3-4.2c-5.7-5.7-5.7-14.8,0-20.5L140.5,161L6.7,27.3c-5.7-5.7-5.7-14.8,0-20.5
		c5.7-5.7,14.8-5.7,20.5,0l144,144c5.7,5.7,5.7,14.8,0,20.5l-144,144C24.4,318.1,20.7,319.5,17,319.5z"
          />
        </svg>
      </div>
    </div>
  )
}
