import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  //form data grab
  const [data, setData] = useState({
    email: "",
    password: "",

  })
  console.log(data)

  const handleOnChangeData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(values => ({ ...values, [name]: value }))
  }
  //handle the submit
  const handleChange = (e) => {
    e.preventDefault()
    //grab data from state
    const { email, password } = data
    if (email && password) {
      alert('Login Sucessfully.!')
    }
    else {
      alert("Please fill all fields.")
    }
  }
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form className="flex flex-col items-center " onSubmit={handleChange}>

            <input
              type={"text"}
              className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
              name="email"
              id="email"
              value={data.email}
              onChange={handleOnChangeData}
              placeholder="Email" />

            <input
              type={"password"}
              className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
              name="password"
              id="password"
              value={data.password}
              onChange={handleOnChangeData}
              placeholder="Password" />

            <button
              type={"submit"}
              className="bg-secondary-200 flex items-center text-center font-bold py-2 px-5 rounded-full text-slate-600 hover:bg-green-dark focus:outline-none my-1 border border-sky-500 hover:bg-secondary-300">Log in
            </button>
          </form>
        </div>

        <div className="text-slate-700 mt-6 flex gap-2">
          <p> Regester your account..!</p>
          <Link to={"/signup"} className="underline text-slate-800">
            Sign Up
          </Link>.
        </div>
      </div>
    </div>
  )
}

export default Login
