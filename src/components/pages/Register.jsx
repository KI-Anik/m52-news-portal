import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

  const {createNewUser, setUser} = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')
    const email = form.get('email')
    const photo = form.get('photo')
    const password = form.get('password')
    console.log({ name, email, photo, password })

    createNewUser(email,password)
    .then((result) => {
      const user = result.user;
      setUser(user)
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name="photo" type="text" placeholder="photo-url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
          <p className="font-semibold text-center">Already have an account ?
            <Link className={'ml-2 text-red-500'} to={'/auth/login'}>Login</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Register;