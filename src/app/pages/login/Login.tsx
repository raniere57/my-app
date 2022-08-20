import { useState } from "react"


export const Login = () => {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleClick = () => {
    console.log(email)
    console.log(password)
  }

  return(
    <>
      <form>
        <label>
          <span>Email</span>
        </label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <label>
          <span>Senha</span>
        </label>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="button" onClick={handleClick}>
          Entrar
        </button>
      </form>
    </>
  )
}