import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    //navigate after signup
    const navigate = useNavigate();
    //form data grab
    const [data, setData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
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
        const { fullname, email, password, confirmPassword } = data
        if (fullname && email && password && confirmPassword) {
            if (password === confirmPassword) {
                alert('data submited.!')
                navigate("/login")
            } else {
                alert("Check the Password & Confirm Password are not Equle")
            }
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
                            name="fullname"
                            id="fullname"
                            value={data.fullname}
                            onChange={handleOnChangeData}
                            placeholder="Full Name" />

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
                        <input
                            type={"password"}
                            className="border border-grey-light w-full p-3 rounded mb-4 outline-none"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={data.confirmPassword}
                            onChange={handleOnChangeData}
                            placeholder="Confirm Password" />
                        <button
                            type={"submit"}
                            className="bg-secondary-200 flex items-center text-center py-3 px-5 rounded-full text-slate-600 hover:bg-green-dark focus:outline-none my-1 border border-sky-500 hover:bg-secondary-300">Create Account
                        </button>
                    </form>
                </div>

                <div className="text-slate-700 mt-6 flex gap-2">
                    <p> Already have an account?</p>
                    <Link to={"/login"} className="underline text-slate-800">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    )
}

export default Signup
