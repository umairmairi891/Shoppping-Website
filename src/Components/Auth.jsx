import React from 'react'
import { Mail, Lock, User, ArrowRight } from 'lucide-react';


function Auth({onLogin}) {
      const [isLogin, setIsLogin] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin({
        name: isLogin ? "Rosie Bloom" : "New User",
        email: "hello@pinkparadise.com",
        role: "customer",
        avatar: "https://picsum.photos/seed/user/100/100",
        joinedDate: Date.now()
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className='min-h-[calc-100vh-80px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-pink-50'>
          <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-xl border border-pink-100">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 rotate-3">
            <User className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">
            {isLogin ? "Welcome Back!" : "Join the Paradise"}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {isLogin ? "Let's get you back to your pink world." : "Create an account to start your journey."}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300 w-5 h-5" />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 bg-pink-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300 w-5 h-5" />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 bg-pink-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300 w-5 h-5" />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-pink-50 border-none rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-2xl text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                <span className="flex items-center gap-2">
                  {isLogin ? "Login" : "Sign Up"} <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm font-medium text-pink-600 hover:text-pink-500 underline decoration-2 underline-offset-4"
          >
            {isLogin ? "Need an account? Sign up here" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth