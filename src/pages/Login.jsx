import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import loginRegImg from "../assets/login reg img.png"
import useAuth from "../hooks/useAuth"
import { useForm } from "react-hook-form"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { Login: EmailLogin, GoogleLogin } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    EmailLogin(data.email, data.password)
    .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        navigate("/");
    })
    .catch((error) => {
        console.error("Error logging in:", error);
        alert(error.message);
    });
  }

  const handleGoogleSignIn = () => {
    GoogleLogin()
    .then((result) => {
        console.log("Google Login successful:", result.user);
        navigate("/");
    })
    .catch((error) => {
        console.error("Error with Google Login:", error);
        alert(error.message);
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f0eb] py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-4xl w-full flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-[#2d3e2f]/5">
        
        {/* Image Side */}
        <div className="md:w-1/2 relative hidden md:block">
            <img 
                src={loginRegImg} 
                alt="Restaurant atmosphere" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d3e2f]/90 to-transparent flex flex-col justify-end p-8 sm:p-10">
                <h2 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>Welcome Back</h2>
                <p className="text-white/80 text-sm leading-relaxed">Log in to reserve your table, check your previous orders, and enjoy an exclusive dining experience.</p>
            </div>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-[#f5f0eb] mb-4 text-[#d4a574]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
                Sign In
            </h2>
            <p className="text-base-content/50 text-sm mt-2">Enter your credentials to access your account</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider text-[11px]">Email Address</label>
              <input 
                type="email" 
                placeholder="hello@example.com" 
                className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors bg-[#f5f0eb]/30" 
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-sm font-semibold text-[#2d3e2f] uppercase tracking-wider text-[11px]">Password</label>
                  <a href="#" className="text-[11px] text-[#d4a574] hover:underline font-semibold uppercase tracking-wider">Forgot password?</a>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors bg-[#f5f0eb]/30 pr-12" 
                  {...register("password", { required: "Password is required" })}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-[#d4a574] transition-colors focus:outline-none p-1"
                >
                  {showPassword ? (
                    // Eye slash icon
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    // Eye icon
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
            </div>

            <button 
                type="submit" 
                className="w-full bg-[#2d3e2f] text-white py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#d4a574] transition-colors duration-300 shadow-md mt-4"
            >
              Login Securely
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 flex items-center justify-center space-x-2">
            <div className="h-px bg-[#2d3e2f]/10 w-full"></div>
            <span className="text-[10px] text-base-content/40 uppercase tracking-widest font-bold px-2">or</span>
            <div className="h-px bg-[#2d3e2f]/10 w-full"></div>
          </div>

          {/* Google Button */}
          <button 
              type="button" 
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white border border-[#2d3e2f]/10 text-[#2d3e2f] py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#f5f0eb] transition-colors duration-300 shadow-sm mt-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm text-base-content/60 mt-8">
            Don't have an account?{' '}
            <NavLink to="/register" className="text-[#d4a574] font-bold hover:underline">
              Create one now
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login