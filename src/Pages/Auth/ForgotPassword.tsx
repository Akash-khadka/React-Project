import { TextInput, Button,PasswordInput } from "@mantine/core"
import {useForm} from '@mantine/form';



export const ForgotPassword=()=>{

    const form= useForm({
        initialValues: {
            email:'',
          },

          validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          },
    })

    const submitForm=()=>{

    }

return <div className="px-lg flex h-full">
<form className="w-full flex-col justify-between" onSubmit={form.onSubmit((values)=> submitForm())}>
    <div className="h-1/2">
          <div className="text-3xl  font-extrabold	">Forgot Password</div>
          <TextInput className="py-sm" placeholder="Email" label="" {...form.getInputProps('email')}  />
          
    </div>
    <div>
          <Button className="my-xl" fullWidth variant="filled" color="orange">Send Verification</Button>
    </div>
    
</form>
</div>
}