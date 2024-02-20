import { PostRequest } from "../plugins/http"

export const APIUploadImage =(data:any)=>{
    return PostRequest('/image/upload-image', data);
}