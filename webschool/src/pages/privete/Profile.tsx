import { api } from "@/axios.config";
import { parseCookies } from "nookies";
import { useForm } from "react-hook-form"

export default function Profile() {
    
    const { register, handleSubmit } = useForm();

    const handleUploads = (data)=> {

        /* const filesData = new FormData();
        for (let i = 0; i < data.files.length; i++) {
            filesData.append(`files[${i}]`, data.files[i]);
        }


        const { "webschool.token": token } = parseCookies();
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        
        const files: any[] | undefined = [];

        filesData.forEach(item =>  {
             return files.push(item);
        })
        api.post("/uploads", /)

        console.log(files); */
        

        console.log(data.files);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleUploads)}>
                <input 
                    type="file"
                    multiple
                    {...register("files")} 
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}