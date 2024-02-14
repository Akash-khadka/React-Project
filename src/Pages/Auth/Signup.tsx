import { TextInput, Button,PasswordInput } from "@mantine/core"
import {useForm} from '@mantine/form';
import { NavLink } from "react-router-dom";



export const SignupPage=()=>{

    const form= useForm({
        initialValues: {
            email: '',
            password: '',
          },
      
          validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          },
    })

    const submitForm=()=>{

    }

return <div className="px-lg flex items-center h-full">
<form className="w-full" onSubmit={form.onSubmit((values)=> submitForm())}>
    <div className="text-3xl mb-xl font-bold">Create an account</div>
    <div className="">
    <TextInput placeholder="Email" label="Email" {...form.getInputProps('email')}  />
    <PasswordInput placeholder="Password" label="Password" mt="sm" required {...form.getInputProps('password')} />
    </div>
    <Button  className="my-xl" fullWidth variant="filled" color="orange">Sign up</Button>

    <div className="text-sm flex justify-center font-semibold">Signup with</div>
    <span className="flex">
      <div className="w-1/2 flex justify-end mx-sm"> Google</div>
      <div className="w-1/2 mx-sm"> Facebook</div>
    </span>

    <div className="flex justify-center py-sm text-sm font-bold">
      Already have an account?
      <NavLink className="no-underline" to="/auth">
      <span className="text-orange-500">Login</span>
      </NavLink>
    </div>
</form>
</div>
}