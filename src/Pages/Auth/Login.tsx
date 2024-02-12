import { Button, TextInput, PasswordInput } from "@mantine/core"
import {useForm} from '@mantine/form';
import { NavLink } from "react-router-dom";


export const LoginPage=()=>{

    const form= useForm({
        initialValues: {
          email: '',
          password: '',
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const submitForm=()=>{
        
    }

return  <div className="px-lg flex items-center h-full">
<form className="w-full" onSubmit={form.onSubmit((values)=> submitForm())}>
    <div className="text-3xl font-bold">Login</div>
    <div className="">
    <TextInput className="my-xs" placeholder="Email" label="" {...form.getInputProps('email')}  />
    <span className="text-sm flex font-bold justify-end">Forgot Password?</span>
    <PasswordInput placeholder="Password" label="" mt="sm" required {...form.getInputProps('password')} />
    </div>
    <Button className="my-xl" fullWidth variant="filled" color="orange">Log in</Button>

    <div className="text-sm flex justify-center">Login with </div>
    <span className="flex">
      <div className="w-1/2 flex justify-end mx-sm"> Google</div>
      <div className="w-1/2 mx-sm"> Facebook</div>
    </span>

    <div className="flex justify-center py-sm text-sm font-bold">
      Dont have an account?
      <span className="text-orange-500">Signup</span>
    </div>
    
</form>
</div>
}