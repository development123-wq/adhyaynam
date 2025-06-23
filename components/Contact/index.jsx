'use client'
import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { sendContactForm } from "../../lib/api";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [number, setNumber] = useState('')
  const [loading, setLoading] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("* Please fill in all fields.");
    }

    setLoading(false);
    try {
      const res = await sendContactForm({ name, email, message, number, subject: 'Contact Form' });
      console.log(res, ' thsi si res')
      if (res.success === true) {
        alert("We have received your query. You will receive a response from us soon.")
        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
        setNumber('')
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(true);
    }
  };

  return (
    <section id="contact" className="overflow-hidden mx-2  ">
      <div className="w-full px-4 flex justify-center items-center pt-5">
        <SectionTitle
          title="Contact Us"
          paragraph="Get in touch with us and our staff will respond as soon as possible."
          width="100%"
          center
        />

      </div>
      <div class=" ">
        <section class="mb-10 ">
          <div class="relative h-[150px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('/Contact.jpg')]"></div>

          <div class=" px-6 md:px-12">
            <div
              class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[130px] backdrop-blur-[30px]">
              <div class="flex flex-wrap">
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">

                  <form onSubmit={handleSubmit}>
                    <div class="relative mb-6">
                      <input
                        type="text"
                        className="border border-gray-300 block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput90"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label
                        class="pointer-events-none absolute -top-2 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] scale-[0.8] text-black -translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                        for="exampleInput90">Name
                      </label>
                    </div>
                    <div class="relative mb-6">
                      <input type="email"
                        class="border border-dark-300 peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput91" placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                      <label
                        class="pointer-events-none absolute -top-2 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] scale-[0.8] text-black -translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                        for="exampleInput91">Email address
                      </label>
                    </div>

                    <div class="relative mb-6">
                      <input
                        type="tel"
                        minLength="10"
                        maxLength="10"
                        class="border border-dark-300 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput92"
                        placeholder="Contact Number"
                        value={number}
                        onChange={(e) => {
                          const inputNumber = e.target.value;
                          const numericRegex = /^[0-9]*$/;

                          if (numericRegex.test(inputNumber)) {
                            setNumber(inputNumber);
                          }
                        }}
                        required
                      />
                      <label
                        class="pointer-events-none absolute -top-2 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] scale-[0.8] text-black -translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                        for="exampleInput92">Contact Number
                      </label>
                    </div>
                    <div class="relative mb-6">
                      <textarea
                        className="border border-dark-300 block min-h-[auto] w-full rounded   py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                      <label for="exampleFormControlTextarea1"
                        class="pointer-events-none absolute -top-2 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] scale-[0.8] text-black -translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black">Message</label>
                    </div>
                    {errorMessage && (
                      <p className="text-red-500 text-sm mb-2 " style={{ color: "red" }}>{errorMessage}</p>
                    )}
                    {loading ?
                      <button
                        type="submit"
                        className="mb-6 inline-block w-full rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 focus:ring-0 lg:mb-0"
                      >
                        Send
                      </button>
                      :
                      <div className="flex justify-center align-center">
                        <div
                          class="inline-block h-4 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                          role="status">
                          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >Loading...</span >
                        </div>
                        <div
                          class="inline-block h-4 w-4 animate-[spinner-grow_1s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                          role="status">
                          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >Loading...</span >
                        </div>
                        <div
                          class="inline-block h-4 w-4 animate-[spinner-grow_1.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                          role="status">
                          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >Loading...</span >
                        </div>
                      </div>
                    }
                  </form>

                </div>
                <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12 ">
                  <div class="flex flex-wrap">
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xxl:w-6/12">
                      <div class="flex items-start">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-black-100 -p-2  md:p-4 text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" class="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-2 ">
                          <p class="mb-2 font-bold dark:text-white">
                            Enquiry
                          </p>
                          <p class="text-neutral-500 dark:text-neutral-200 -ml-10 sm:ml-0">
                            info@adhyayanamacademy.com
                          </p>
                          <p class="text-neutral-500 dark:text-neutral-200">
                          +91-9311430-127/128/129
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                      <div class="align-start flex">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-black-100 -p-2  md:p-4 text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" class="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-2 grow">
                          <p class="mb-2 font-bold dark:text-white"> Franchise Enquiry</p>
                          <p class="text-neutral-500 dark:text-neutral-200">
                            info@adhyayanamacademy.com
                          </p>
                          <p class="text-neutral-500 dark:text-neutral-200">
                            01140050800
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    {/* <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                      <div class="align-start flex">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-black-100 -p-2  md:p-4 text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" class="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                          </div>
                        </div>
                      
                        <div class="ml-2 grow">
                          <p class="mb-2 font-bold dark:text-white">Address</p>
                          <p class="text-neutral-500 dark:text-neutral-200">
                            NS 4, Deerwood E Space,
                            Nirvana Country, Sector 50,
                          </p>
                          <p class="text-neutral-500 dark:text-neutral-200">
                            Gurugram-122018
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
