import { TextInput, Button,PasswordInput } from "@mantine/core"
import {useForm} from '@mantine/form';
import { NavLink } from "react-router-dom";
import Google from "../../Images/google.png"
import Facebook from "../../Images/facebook.png"


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
    <TextInput placeholder="Email" label="" {...form.getInputProps('email')}  />
    <PasswordInput placeholder="Password" label="" mt="sm" required {...form.getInputProps('password')} />
    </div>
    <Button  className="my-xl" fullWidth variant="filled" color="orange">Sign up</Button>

    <div className="text-sm flex justify-center font-semibold">Signup with</div>
    <span className="flex justify-center">
      <div className="px-sm">
        <img src={Google}/>
      </div>
      <div className="px-sm">
          <img src={Facebook}/>
      </div>
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