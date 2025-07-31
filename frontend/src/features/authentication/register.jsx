import '../../ResponsiveCSS/responsive.css';

function Register() {
  return (
    <div className="bg-slate-900 text-white h-screen w-screen flex justify-center items-center">
      <div className="login_container border-2 border-indigo-500 px-10 py-8">
        <h1 className="heading text-5xl font-bold text-center mb-10">
          Create an account
        </h1>
        <form className="flex flex-col gap-2">
          <input
            className="input_field border-2 border-indigo-500 rounded-2xl py-3 bg-transparent w-full px-4 outline-none"
            type="text"
            placeholder="Enter your first name"
          />
          <input
            className="input_field border-2 border-indigo-500 rounded-2xl py-3 bg-transparent w-full px-4 outline-none"
            type="text"
            placeholder="Enter your last name"
          />
          <input
            className="input_field border-2 border-indigo-500 rounded-2xl py-3 bg-transparent w-full px-4 outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="input_field border-2 border-indigo-500 rounded-2xl py-3 bg-transparent w-full px-4 outline-none"
            type="number"
            placeholder="Enter your age"
          />
          <div>
            <h2 className="mb-2 text-lg font-semibold">Select Your Gender</h2>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" className="accent-indigo-600" />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" className="accent-indigo-600" />
                Female
              </label>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">Select a Role</h2>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="role" className="accent-indigo-600" />
                Admin
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="role" className="accent-indigo-600" />
                User
              </label>
            </div>
          </div>
          <input
            className="input_field border-2 border-indigo-500 rounded-2xl py-3 bg-transparent w-full px-4 outline-none"
            type="password"
            placeholder="Create a strong password"
          />
          <button className="button text-2xl mt-2 bg-indigo-600 hover:bg-indigo-700 rounded-2xl py-2 px-20 font-medium cursor-pointer">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
