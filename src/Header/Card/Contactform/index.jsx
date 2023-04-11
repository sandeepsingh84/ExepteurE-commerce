import React from "react";


export const Contactform = () => {


  // const handleSubmit = (values) => {
  //   values.preventDefault();
  //   const form = values.target;
  //   const formData = new FormData(form);
  //   const Username = formData.get("username");
  //   const Email = formData.get("Email");
  //   const phoneNo=formData.get("PhoneNo");
  //   const msg=formData.get("Message")
  // };
  const handlesubmit=(values)=>{

    values.preventDefault();

    const form = values.target;

    const formData = new FormData(form);
    const Name= formData.get("Name");
    const Email = formData.get("Email");
    const PhoneNo = formData.get("PhoneNo");
    const Message = formData.get("Message");

    console.log(Name,Email,PhoneNo,Message)
 }




  return (
    <div className="flex justify-center ">
      <div className="border border-black h-[750px] w-[900px] p-2 bg-gray-600 text-white ">
        <div className="flex gap-28 bg-gray-600 p-2 shadow ">
          <div>
            <img
              src="
          https://i.pinimg.com/originals/5d/95/38/5d95381726fea01966a317b8943b1b87.jpg"
              className="h-20 w-20 rounded-md"
            />
          </div>
          <div>
            <p className="mt-6 font-bold text-3xl italic ml-32 ">CONTACT US</p>
          </div>
        </div>

        <div className="font-bold text-xl p-2 italic ">
          Please fill this form in a decent manner
        </div>
        <div>
          <form onSubmit={(values) =>handlesubmit(values)}>
            <div className="mt-4 text-xl ">
              <label className="font-bold ">
                Name
                <input
                  type="text"
                  name="Name"
                  required
                  className="text-black ml-4 h-max w-[88%]"
                />
              </label>
            </div>
            <div className="mt-2 text-xl font-bold mt-8">
              <label>
                E-Mail
                <input
                  type="email"
                  name="Email"
                  required
                  className="text-black ml-4 h-max w-[88%]"
                />
              </label>
            </div>
            <div className="mt-2 text-xl font-bold mt-8">
              <label>
                PhoneNo
                <input
                  type="number"
                  name="PhoneNo"
                  required
                  className="text-black ml-4 h-max w-[80%]"
                />
              </label>
            </div>
            <div className="mt-8 text-xl font-bold">
              <label>
                Message
                <input
                  type="textarea"
                  name="Message"
                  required
                  className="text-black h-56 w-[100%] mt-6"
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button className="mt-8 border border-black text-white font-bold bg-gray-400 p-4 rounded-md text-xl hover:bg-gray-300  ">
                <input type="submit" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
