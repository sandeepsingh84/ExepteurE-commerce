import React from "react";

export const About = () => {
  return (
    <div className="p-2">
      <div>
        {/* <img
          src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-full w-full"
        /> */}

        <div className='bg-[url("https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-[100vh] w-full bg-no-repeat bg-cover  mt-2  '>
          <div>
            <h1 className='text-7xl text-white  font-["sans-sarif"] pt-28 pl-32 '>
              EXEPTEUR Brand
            </h1>

            <p className="text-3xl italic pl-32 mt-6 text-white ">
              Welcome to our shopping website! We are delighted to have you
              here. At EXEPTEUR, we strive to provide an exceptional online
              shopping experience for all our valued customers. Our platform
              offers a wide range of high-quality products, competitive prices,
              and outstanding customer service.
            </p>
          </div>
        </div>
      </div>

      <p className="font-bold text-5xl text-center text-red-500 mt-32">
        OUR STORY
      </p>

      <div className="flex ">
        <div className="flex w-full mt-4 justify-around">
          <div className="w-[30%]">
            <img
              src="https://images.pexels.com/photos/5717077/pexels-photo-5717077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[500px] w-[500px]"
            />
            <img
              src="https://www.morebusiness.com/wp-content/uploads/2020/09/handwritten-email-signature.jpg"
              className="h-32 w-32"
            />
          </div>

          <div className="w-[30%]">
            <p className="text-2xl mt-12">
              IN 2013 WE DROPPED OUT OF COLLEGE WITH THE DREAM OF SHAKING UP
              WITH THE FASHION IMDUSTRY
            </p>
            <p className="text-2xl mt-4">
              Tired of big brands and its shopping criteria ,we get out to
              create an online-first brand.Our original work design and a
              successful campaign got at all the grounds through social media
              and then it grows globally ,along with our company.
            </p>
            <p className="text-center mt-4 text-3xl">
              Today with the support of our team we reached at the peak with thr
              help of online platform
            </p>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[500px] w-[500px]"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0605/8508/3119/products/Screenshot_19.png?v=1666923538&width=1445"
              className="h-32 w-36"
            />
          </div>
        </div>
      </div>

      <div className=""></div>

      {/* 
<div><img src='https://files.cdn.printful.com/o/upload/bfl-image/43/4851_l_about-us-page-behind-the-scenes-example.png' /></div> */}

      <div className=" flex w-full  items-center justify-center bg-gray-200 px-32 py-12">
        <div className="w-[60%]">
          <div className="grid grid-cols-2 place-content-center w-[78%] ">
            <img
              src="https://images.pexels.com/photos/10003649/pexels-photo-10003649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[400px] w-[400px]"
            />
            <img
              src="https://images.pexels.com/photos/6830012/pexels-photo-6830012.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[400px] w-[400px]"
            />
            <img
              src="https://images.pexels.com/photos/8633771/pexels-photo-8633771.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[400px] w-[400px]"
            />
            <img
              src="https://images.pexels.com/photos/7363126/pexels-photo-7363126.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[400px] w-[400px]"
            />
          </div>

          <div className="text-3xl font-semibold w-[60%] mt-20 bg-white p-4 text-gray-700 italic">
            <p>
              Secure and Convenient Shopping: Your safety and convenience are
              our top priorities. We have implemented robust security measures
              to safeguard your personal information and payment details. Our
              user-friendly interface ensures a seamless and hassle-free
              shopping experience. With just a few clicks, you can browse,
              select, and purchase your desired items, all from the comfort of
              your own home.
            </p>
          </div>
        </div>

        <div className="w-[40%] mt-32">
          <div className="text-3xl font-semibold ">
            <p className=" bg-white text-center text-gray-400 ">OUR PRODUCTS</p>
            <p className="bg-white p-4 text-gray-700 italic">
              We believe that everyone should have access to affordable products
              without compromising on quality. To achieve this, we work hard to
              negotiate the best possible prices with our suppliers. By
              eliminating unnecessary intermediaries, we pass on the savings
              directly to you, our valued customer. At [Website Name], you can
              enjoy competitive pricing on a vast array of products.
            </p>
            <img
              src="https://images.pexels.com/photos/9555098/pexels-photo-9555098.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[500px] w-[500px] mt-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
