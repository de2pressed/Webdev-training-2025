function Register(){
    return(
        <>
            <div className="bg-[#1C2532]">
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="max-w-[440px] w-full bg-white rounded px-8 py-10" x-data="signUpForm()">
                        {/* <!-- Logo --> */}
                        <div className="text-center mb-6">

                        </div>
        
                        {/* <!-- Header --> */}
                        <h2 className="text-xl font-normal text-center mb-2 font-bold">Register</h2>

        
                        {/* <!-- Form --> */}
                        <form className="space-y-5" >
                            <div>
                                <input type="email" x-model="form.email" placeholder="Email*" className="w-full px-4 py-3.5 text-lg border border-2 border-gray-200 rounded focus:outline-none focus:border-rose-500 placeholder-gray-400" />
                            </div>
        
                            <div className="relative">
                                <input type="showPwd ? 'text' : 'password'"
                                    x-model="form.password"
                                    placeholder="Password*"
                                    className="w-full px-4 py-3.5 text-lg border border-2 border-gray-200 rounded focus:outline-none focus:border-rose-500 placeholder-gray-400"
                                />
                                <button type="button" onClick="showPwd = !showPwd" className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>
        
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" x-model="form.firstName" placeholder="First name*" className="w-full px-4 py-3.5 text-lg border border-2 border-gray-200 rounded focus:outline-none focus:border-rose-500 placeholder-gray-400" />
                                <input type="text" x-model="form.lastName" placeholder="Last name*" className="w-full px-4 py-3.5 text-lg border border-2 border-gray-200 rounded focus:outline-none focus:border-rose-500 placeholder-gray-400" />
                            </div>
        
                            <select x-model="form.country" className="w-full px-4 py-3.5 text-lg border border-2 border-gray-200 rounded focus:outline-none focus:border-rose-500 text-gray-500 appearance-none bg-white">
                                <option value="">Select country*</option>
                                <option value="UK">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
        
                            <input
                                type="text"
                                x-model="form.dob"
                                x-ref="dobInput"
                                placeholder="Date of birth* (DD/MM/YYYY)"
                                className="w-full px-4 py-3.5 text-lg border border-2 border-gray-200 rounded focus:outline-none focus:border-rose-500 placeholder-gray-400"
                            />
        
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" x-model="form.marketing" className="mt-1.5 w-4 h-4 border-gray-300 rounded" />
                                <span className="text-gray-500 text-base">
                                    Accept Terms and Conditions
                                </span>
                            </label>
        
                            <button type="submit" className="w-full bg-rose-700 text-white py-4 px-6 rounded text-lg hover:bg-rose-800 transition-colors mt-6" disabled="isLoading">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
        
                
            </div>
        </>
    );
};

export default Register;