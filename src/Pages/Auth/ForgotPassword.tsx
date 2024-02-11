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

return <div className="px-lg flex items-center h-full">
<form className="w-full flex-col justify-between" onSubmit={form.onSubmit((values)=> submitForm())}>
    <div className="text-3xl mb-xl font-bold">Forgot Password</div>
    <div className="">
    <TextInput placeholder="Email" label="Email" {...form.getInputProps('email')}  />
    </div>
    <Button fullWidth variant="outline" color="rgba(0, 0, 0, 1)">Send Verification</Button>
</form>
</div>
}