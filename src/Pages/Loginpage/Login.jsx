import React from 'react'

const Login = () => {
  return (
    <div>
    <section className='home'>
       <div className="max-w-xl text-white ">
        <h2 className='text-4xl font-semibold text-start pb-8'> Exepteur Gives Class To Your Wordrobe </h2>
        <p className='text-xl text-start pb-4'> Login or sign up or become first to access the exciting offers and wide range of products to enhance your daily office going look. A member gets additional discounts on selected products </p>
        <a className='border-2 border-solid border-white rounded-3xl py-2.5 px-10 mt-10  hover:bg-sky-950 hover:border-none' href="#">Get Started</a>
       </div>
       <div className="wrapper-login ">
        <h2 className='member'>Member Login</h2>
        <form action="#">
          <div className="input-box">
            <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg></span>
            <input type="email" required />
            <label>Enter Your Email</label>
          </div>
          <div className="input-box">
            <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></span>
            <input type="password" required />
            <label>Enter Your Password</label>
          </div>
          
          
      
          
        </form>
       </div>
    </section>
    </div>
  )
}

export default Login
