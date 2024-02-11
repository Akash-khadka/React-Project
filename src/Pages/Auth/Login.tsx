import { Button, TextInput, PasswordInput } from "@mantine/core"
import {useForm} from '@mantine/form';


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
    <div className="text-3xl mb-xl font-bold">Login</div>
    <div className="">
    <TextInput placeholder="Enter your email" label="Email" {...form.getInputProps('email')}  />
    <PasswordInput placeholder="Enter your password" label="Password" mt="sm" required {...form.getInputProps('password')} />
    </div>
    <Button fullWidth variant="outline" color="rgba(0, 0, 0, 1)">Log in</Button>
</form>
</div>
}