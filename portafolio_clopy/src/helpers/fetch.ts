import { FormContactProps } from "@/interfaces";

    

export const sendData = async (formData: FormContactProps) =>{

    const payload = new FormData();

    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);
   
        
    const response = await fetch(`https://formspree.io/f/xeogdzoq`, {
        method: `POST`,
        headers: {
            Accept: `application/json`
        },
        body: payload
        })
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send form");     
    }
    return response.json();
}
    
