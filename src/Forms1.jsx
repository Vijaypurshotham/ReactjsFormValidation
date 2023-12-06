import React from 'react'
import { useForm } from 'react-hook-form'

const Forms1 = () => 
{
let {register, formState : {errors}, handleSubmit} = useForm()

  const onSubmit = (data) => {
    alert(data)
  }

  return (
    <div>
   <form onSubmit={handleSubmit(onSubmit)}>
   <div>
    <h1>Registration Form</h1>
    </div>
    <div>
        <label>First Name</label>
        <input placeholder="Enter First Name"
        {...register("name", {required: true})}/>
<error>
    {errors.name?.type === "required" && "First Name is required"}
</error>
        </div> 
        <div>
        <label>Last Name</label>
        <input placeholder="Enter Last Name"
        {...register("lastname", {required: true})}/>
<error>
    {errors.name?.type === "required" && "Last Name is required"}
</error>
        </div> 
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter Email-Id"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </error>
        </div>
        
        <div>
          <label>Password</label>
          <input type='password' placeholder="Enter password"
            {...register("password", {  required: true, minLength: 5,maxLength: 20})}/>

          <error>
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </error>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="number" placeholder='Enter Phone Number'
            {...register("number", { minLength: 6, maxLength: 12})}/>

          <error>
            {errors.number?.type === "minLength" &&
              "Entered number is less than 6 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more than 10 digits"}
          </error>
        </div>
        <div>
          <input className="button" type="submit" />
        </div>
         </form>
        
        
    </div>
  )
}

export default Forms1
