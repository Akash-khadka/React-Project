import { Button, Grid, NumberInput, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { Dropzone } from '@mantine/dropzone';
import { APIUploadImage } from "../../../api/image";
import { APIAddMyAccounts } from "../../../api/account";
export const AddAccountForm = (props: any) => {

    const form = useForm({
        initialValues: {
            title: '',
            img: '',
            openingBalance: 0
        },
    })

    const submitForm = async () => {
        let imgFile = '';
        if(form.values.img === '' || form.values.img === null){
            console.log('error')
            return;
        }

            const formData= new FormData();
            formData.append('file', form.values.img)
            const imgUrlRes = await APIUploadImage(formData);

            imgFile = imgUrlRes.data.filename;

            const res  = await APIAddMyAccounts({
                title: form.values.title,
                openingBalance: form.values.openingBalance,
                img: imgFile
            });
            
            props.loadData();
            props.close();
    }

    const handleDrop =(files:any)=>{
        form.setFieldValue('img', files[0])
    }

    return <div>
        <form onSubmit={form.onSubmit(() => submitForm())}>
            <Grid>
                <Grid.Col span={4}>
                    <Dropzone
                        onDrop={(files) => handleDrop(files)}
                        onReject={(files) => console.log('rejected files', files)}
                        maxSize={5 * 1024 ** 2}
                        {...props}
                    >
                        <img src={form.values.img !=='' ? URL.createObjectURL(form.values.img):''} />
                    </Dropzone>
                </Grid.Col>
                <Grid.Col span={8}>
                    <TextInput placeholder="Enter title" label="Title" {...form.getInputProps('title')} />
                    <NumberInput placeholder="Enter opening balance" label="Opening balance" className="mt-sm"  {...form.getInputProps('openingBalance')} />
                    <div className="mt-lg flex justify-end">
                        <Button type="submit">Save</Button>
                    </div>
                </Grid.Col>
            </Grid>
        </form>
    </div>
}