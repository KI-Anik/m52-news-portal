import { Link } from "react-router-dom";

const Register = () => {
    return (
             <div className="min-h-screen flex justify-center items-center">
               <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo-url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
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