import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL



export default function Example() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            firstname: data.firstname,
            lastname: data.lastname,
            phonenumber: data.phonenumber,
            email: data.email,
            Message: data.Message,
        };
        await axios.post(`${BACKEND_URL}/contactus/contact`, userInfo).then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Contact you soon");
                    document.getElementById("contactuser").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.contactus));
                    }, 2000);
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                    setTimeout(() => { }, 3000);
                }
            });
    };

    return (
        <>
        <div className="isolate bg-red-500 px-6 py-24 sm:py-32 lg:px-8" id="contactuser">
            <section className="contact">
                <div className="form">
                    <h1>CONTACT US</h1>
                    <div>
                        <label>First Name</label>
                        <input {...register("firstname", { required: true })}
                            type="text" className=""
                        />
                        <br />
                        {errors.firstname && <span className='textarea'>This field is required</span>}

                    </div>
                    <div>
                        <label>Last Name</label>
                        <input {...register("lastname", { required: true })}
                            type="text" className=""
                        />
                        <br />
                        {errors.lastname && <span className='textarea'>This field is required</span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input {...register("email", { required: true })}
                            type="email" className=""
                        />
                        <br />
                        {errors.email && <span className='textarea'>This field is required</span>}
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input {...register("phonenumber", { required: true })}
                            type="Number" className=""
                        />
                        <br />
                        {errors.phonenumber && <span className='textarea'>This field is required</span>}
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea {...register("Message", { required: true })}
                            rows={4}
                            className="Message"
                            defaultValue={''}
                        />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-10">
                            <button
                                type="submit"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            </div>
        </>
    );
}
