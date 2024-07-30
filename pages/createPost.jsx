import { useForm } from "react-hook-form";
import { useState } from "react";
import { create } from "./api/users";
import { getUsers } from "./api/users";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const router = useRouter();
  const [values, setValues] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    const newValues = value.split(/[, ]+/);
    setValues(newValues);
  };

  const {
    handleSubmit,
    register,
    formState: { erorr },
    setError,
  } = useForm();

  async function onSubmit(data) {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token) {
      const users = await getUsers(token);
      const userId = users.filter((user) => {
        return user.email === email;
      });

      create(
        data.title,
        data.image,
        data.body,
        userId[0]._id,
        values,
        token
      ).then(() => {
        toast.message("Creating Post");
        router.push("/");
      });
    } else {
      toast.error("Debes de estar loggeado");
    }
  }

  return (
    <>
      <Toaster />
      <main className=" bg-[#c5c2c2] max-h-fit">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <img
            className="h-[40px] w-[45px] md:h-[45px] md:w-[50px] md:m-2"
            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="logo"
          />
        </button>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border mt-[50px] md:mt-[80px]  relative rounded-md md:w-[100%] h-[700px] bg-white lg:ml-[90px] lg:w-[66%] 2xl:w-[60%] 2xl:ml-[150px]"
        >
          <div className="flex flex-col absolute top-[3%] left-[5%] md:top-[8%] md:left-[13%]">
            <input
              type="text"
              placeholder=""
              className="h-[40px] w-[83%] md:w-[50%] border rounded-lg p-3 text-center text-md "
              {...register("image", {
                required: { value: false },
              })}
            />
            <input
              className="font-bold text-3xl mt-6 mb-4 md:text-5xl"
              type="text"
              placeholder="Comparte lo que piensas"
              {...register("title", {
                required: { value: true },
              })}
            />
            <input
              type="text"
              onChange={handleChange}
              placeholder="con que tag"
            />
          </div>
          <div className="absolute top-[26%] left-[5%] md:top-[32%] md:left-[13%]">
            <div className="flex flex-row md:w-[70%]">
              {values.length > 0 &&
                values.map((value, index) => (
                  <div
                    className="flex flex-row border rounded-md h-[36px] w-[30%] p-2 items-center"
                    key={`tags-${index}`}
                  >
                    <p className="mr-1">#</p>
                    <input
                      disabled
                      key={index}
                      type="text"
                      value={value}
                      onChange={() => {}}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-[#F5F5F5] absolute top-[34%] w-[100%] h-[60px] md:top-[39%] md:p-4 items-center border flex flex-row ">
           
            </div>
          <input
            type="text"
            placeholder=" "
            className=" absolute top-[49%] h-[51%] w-[100%] text-2xl  p-3 align-top "
            {...register("body", {
              required: { value: true },
            })}
          />
          <div className="absolute top-[100%] flex flex-row">
            <button className="bg-[#a4a8d8] text-black  ml-2  h-[45px] mt-4 rounded-md w-[100px]">
              Publicar
            </button>
            
          </div>
        </form>
      </main>
    </>
  );
}
