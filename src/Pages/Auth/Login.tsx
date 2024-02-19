import { Button, TextInput, PasswordInput } from "@mantine/core"
import { useForm } from '@mantine/form';
import { NavLink } from "react-router-dom";
import { authenticateUser } from "../../Store/modules/auth/action";
import { useDispatch } from "react-redux";
import Google from "../../Images/google.png"
import Facebook from "../../Images/facebook.png"

export const LoginPage = () => {

  const dispatch: any = useDispatch();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const submitForm = async () => {
    console.log("submit called");
    await dispatch(authenticateUser({ email: form.values.email, password: form.values.password }))
  }

  return <div className="px-lg flex items-center h-full">
    <form className="w-full" onSubmit={form.onSubmit((values) => submitForm())}>
      <div className="text-3xl font-bold">Login</div>
      <div className="">
        <TextInput className="my-xs" placeholder="Email" label="" {...form.getInputProps('email')} />
        <NavLink className="no-underline text-black	" to="/auth/forgot">
        <span className="text-sm flex font-bold justify-end ">Forgot Password?</span>
        </NavLink>
        
        <PasswordInput placeholder="Password" label="" mt="sm" required {...form.getInputProps('password')} />
      </div>
      <Button className="my-xl" type="submit" fullWidth variant="filled" color="orange">Log in</Button>

      <div className="text-sm flex justify-center">Login with </div>
      <span className="flex justify-center">
      <div className="px-sm">
        <img src={Google}/>
      </div>
      <div className="px-sm">
          <img src={Facebook}/>
      </div>
    </span>
      <div className="flex justify-center py-sm text-sm font-bold">
        Dont have an account?
        <NavLink className="no-underline" to="/auth/signup">
        <span className="text-orange-500">Signup</span>
        </NavLink>
      </div>

    </form>
  </div>
}