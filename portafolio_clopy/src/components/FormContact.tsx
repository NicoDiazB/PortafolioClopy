"use client"
import React, { useState } from 'react'
import InputLabel from './InputLabel'
import { sendData } from '@/helpers/fetch';

export const FormContact: React.FC = () => {
     const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    privacyPolicy: '',
  });

    const validate = () => {
    const newErrors = {
        name: '',
        email: '',
        message: '',
        privacyPolicy: '',
    };

      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
      if (!formData.message.trim()) newErrors.message = 'Message is required';
      if (!formData.privacyPolicy) newErrors.privacyPolicy = 'You must accept the privacy policy';

      setErrors(newErrors);

      // Devuelve true si no hay errores
      return Object.values(newErrors).every((err) => !err);
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        try {
          await sendData(formData);
          alert("Formulario enviado exitosamente");
          setFormData({
            name: "",
            email: "",
            message: "",
            privacyPolicy: false,
          });
        } catch (error) {
          alert("Ocurrió un error al enviar el formulario");
          console.error(error);
        }
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type} = e.target;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
    setFormData({
      ...formData,
      [name]: e.target.checked,
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  };



  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
       <InputLabel  labelData="Name"
                name="name"
                idInput="name"
                placeholder="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                />
                <div className='w-full'>
                {errors.name && (
                    <span className="text-lg font-bold text-red-700">
                        {errors.name}
                    </span>
                )}
            </div>
       <InputLabel  labelData="Email"
                name="email"
                idInput="email"
                placeholder="jhondow@mail.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                />
                <div className='w-full'>
                {errors.email && (
                    <span className="text-lg font-bold text-red-700">
                        {errors.email}
                    </span>
                )}
            </div>
       <InputLabel  labelData="Message"
                name="message"
                idInput="message"
                placeholder="Type your message"
                type="text"
                value={formData.message}
                onChange={handleChange}
                as='textarea'
                />
           <div className='w-full'>
                {errors.message && (
                    <span className="text-lg font-bold text-red-700">
                        {errors.message}
                    </span>
                )}
            </div>
            <div className="flex items-center mt-4 gap-2">
            <input
            type="checkbox"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
          
             />
            <label htmlFor="privacyPolicy" className="text-sm">
                I accept the privacy policy
            </label>
      </div>
        <div className='w-full'>
                {errors.privacyPolicy && (
                    <span className="text-lg font-bold text-red-700">
                        {errors.privacyPolicy}
                    </span>
                )}
            </div>
            <button className={`
        w-fit bg-[#E2DFCF] text-black rounded-3xl py-2 px-6 font-bold
        outline-2 outline-dashed outline-offset-[-4px] outline-[#4B70A6]
        active:scale-95 active:shadow-[inset_0_0_8px_rgba(0,0,0,0.40)]
        hover:bg-[#d86c49] hover:text-white hover:outline-[#FFFEFB]
        transition-all cursor-pointer mt-4
        
      `}>Send</button>
    </form>
  )
}
