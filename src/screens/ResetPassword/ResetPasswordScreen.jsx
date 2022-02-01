import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'
import urls from '../../../utils/urls'
import { resetPassword } from '../../actions/User'
import classes from './ResetPasswordScreen.module.css'

const ResetPasswordScreen = () => {
  const TOKEN_MASK = "hidden"
  const VALIDATION = {
    SUCCESS: 0,
    ERR_EMPTY_PW: 1,
    ERR_PW_MISMATCH: 2
  }
  const SUBMIT = {
    NONE: 0,
    SUCCESS: 1,
    ERR: 2
  }
  const [token, setToken] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [validation, setValidation] = useState(VALIDATION.SUCCESS)
  const [loading, setLoading] = useState(false)
  const [submit, setSubmit] = useState(SUBMIT.NONE)

  const handleChange = (e, setState) => {
    setState(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword)
      setValidation(VALIDATION.ERR_PW_MISMATCH)
    else if (!password)
      setValidation(VALIDATION.ERR_EMPTY_PW)
    else {
      setLoading(true)
      setTimeout(async () => {
        await fetch("/api/users/resetpassword", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          referrerPolicy: 'no-referrer', 
          body: JSON.stringify({token, password})
        })
        .then((res) => {
          if (res.status === 200) 
            setSubmit(SUBMIT.SUCCESS)
          else 
            setSubmit(SUBMIT.ERR)
          setLoading(false)
        })
      }, 3000);
      setValidation(VALIDATION.SUCCESS)
    }
  }

  const router = useRouter()

  useEffect(() => {
    setToken(router.query.token)
    router.replace('/resetpassword/hidden', undefined, { shallow: true })
  }, [])

  return (
    <div className={classes.background}>
    <div className={classes.formContainer}>
      <h2 className={classes.welcomeText}>Reset Password</h2>
      {
        token === TOKEN_MASK ? 
        <h3> Please reopen reset link sent to your email </h3> :
        <form className={classes.form} onSubmit={handleSubmit} >
        <div className={classes.inputContainer}>
          <label htmlFor="email" className={classes.inputLabel}>
            New Password
          </label>
          { validation === VALIDATION.ERR_EMPTY_PW 
            && <p className={classes.errorMsg}> Password cannot be empty </p> }
          <input
            className={classes.input}
            required
            id="password"
            type="password"
            value={password}
            onChange={(e) => handleChange(e, setPassword)}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password" className={classes.inputLabel}>
            Confirm Password
          </label>
          { validation === VALIDATION.ERR_PW_MISMATCH 
            && <p className={classes.errorMsg}> Passwords do not match </p> }
          <input
            className={classes.input}
            required
            id="password"
            type="password"
            value={confirmPassword}
            onChange={(e) => handleChange(e, setConfirmPassword)}
          />
        </div>
        <button className={classes.button} type="submit">
          Reset Password
        </button>
        {
          loading && <h3>LOADING....</h3>
        }
        {
          submit !== SUBMIT.NONE && (
          submit === SUBMIT.SUCCESS ? 
          <h5> Successfully updated password </h5> :
          <h5 className={classes.errorMsg}> Error occurred, please contact gt@bitsofgood.org </h5>)
        }
      </form>
      }
    </div>
  </div>
  )
}

export default ResetPasswordScreen