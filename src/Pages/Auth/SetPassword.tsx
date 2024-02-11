import { TextInput, Button, PasswordInput } from "@mantine/core"
import { useForm } from "@mantine/form";
export const SetPassword=()=>{

    const form= useForm({
        initialValues: {
            password: '',
            setPassword: ''
          }
    });
    
    const submitForm=()=>{

    }


    return <div className="px-lg flex items-center h-full">
    <form className="w-full flex-col justify-between" onSubmit={form.onSubmit((values)=> submitForm())}>
        <div className="text-3xl mb-xl font-bold">Set Password</div>
        <div className="">
        <PasswordInput placeholder="Password" label="Password" mt="sm" required {...form.getInputProps('password')} />
        <PasswordInput placeholder="Set Password" label="Password" mt="sm" required {...form.getInputProps('setpassword')} />
        </div>
        <Button fullWidth variant="outline" color="rgba(0, 0, 0, 1)">Send Verification</Button>
    </form>
    </div>
}