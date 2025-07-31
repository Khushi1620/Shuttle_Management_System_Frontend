import '../../ResponsiveCSS/responsive.css'

function Login() {
   return (
    <div className="flex justify-center items-center h-screen w-screen bg-slate-900 text-white">
        <div className="login_container border-2 border-indigo-500 rounded-xl px-10 py-12">
            <h1 className="text-5xl font-bold text-center mb-10 p-2">Login</h1>
            <form className="flex flex-col gap-4">
                <input className="input_field border-2 border-indigo-500 rounded-full py-4 bg-transparent w-100 px-4 outline-none" type="email" placeholder="Enter your email"/>
                <input className="input_field border-2 border-indigo-500 rounded-full py-4 bg-transparent w-100 px-4 outline-none" type="password" placeholder="Enter your password"/>
                <div className="flex justify-between">
                <label>
                <input type="checkbox"/>Remember me
                </label>
                <a href="">Forgot password?</a>
                </div>
                <button className="text-2xl bg-indigo-600 hover:bg-indigo-700 rounded-full py-2 px-20 font-medium cursor-pointer">Login</button>
                <div className="flex justify-center mb-10">
                    <h2>Don't have an account?</h2>
                    <a className="font-semibold" href="">Register</a>
                </div>
            </form>
        </div>
    </div>
   )
}
export default Login;