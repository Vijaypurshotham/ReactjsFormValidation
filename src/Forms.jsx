import React from 'react'
import { useForm } from 'react-hook-form'

const Forms = () => {

const {register, formState: {errors}, handleSubmit} = useForm()

const onSubmit = (data) => {
    alert(data)
}
  return (
    <section>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
<div>
    <h1>Registration Format</h1>
</div>
<div>
    <label>First Name</label>
    <input type='text' placeholder='Enter First Name'
    {...register("name", {required:true})}/>
    <error>
        {errors.name?.type === "required" && "First Name is required"}
    </error>
</div>
<div>
    <label>Last Name</label>
    <input type='text' placeholder='Enter Last name'
    {...register("lastname", {required:true})}/>
    <error>
        {errors.name?.type === "required" && "Last Name is required"}
    </error>
</div>
<div>
    <label>Enter Your Email-Id</label>
    <input type='email' placeholder='Enter Your Email-id'
    {...register("email",{required:true})}/>
    <errors>
    {errors.name?.type === "required" && "Email is required"}
    </errors>
</div>

<div>
    <label>Enter Your Phone Number</label>
    <input type='number' placeholder='Enter Your phone Number'
    {...register("Number", {required:true})}/>
    <errors>
    {errors.name?.type==="required" && "Phone Number is required"}
    </errors>
</div>
<div>
    <input type='submit' />
</div>
        
            </form>
        </div>
    </section>
  )
}

export default Forms
