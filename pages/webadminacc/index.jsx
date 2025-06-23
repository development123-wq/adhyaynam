"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../../app/index.css";
import Addblog from "@/components/AdminCompenents/add-blog";
import GetBLog from "@/components/AdminCompenents/blog";
import QuestionTable from "@/components/Quiz/QuestionsTable";
import UsersTable from "@/components/AdminCompenents/UsersTabale";
import axios from "axios";

const Admin = ({ user }) => {
  const [components, setComponents] = useState("Blogs");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setisLogin] = useState(false);

  const verifyLogin = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/auth/verifylogin', { data: "verifylogin" }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        setisLogin(true)
        alert(response.data.message)
      }
    } catch (error) { console.log(error) }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        verifyLogin()
      } else {
        console.error(response, ' failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };


  const Logout = () => {
    setisLogin(null)
    localStorage.removeItem('token');
    alert("Log out successfuly");
  };

  useEffect(() => {
    verifyLogin()
  }, [])

  return (
    <>
      {!isLogin ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 p-4 mt-16 sm:py-10  grid-cols-5 sm:grid sm:container">
          {/* <h1>Welcome, {user.name}</h1> */}
          <nav
            id="full-screen-example"
            class="col-span-1  overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]  "
            data-te-sidenav-init
            data-te-sidenav-mode-breakpoint-over="0"
            data-te-sidenav-mode-breakpoint-side="sm"
            data-te-sidenav-hidden="false"
            data-te-sidenav-color="dark"
            data-te-sidenav-content="#content"
            data-te-sidenav-scroll-container="#scrollContainer"
          >
            <div class="pt-6 ">
              <div id="header-content" class="pl-4">
                <h4 class="mb-2 text-1xl font-medium leading-[1.2]">
                  Adhyayanamacademy Admin
                </h4>
                <p class="mb-4"> </p>
              </div>
              <hr class="border-gray-300" />
            </div>

            <div id="scrollContainer">
              <hr class="border-gray-300" />
              <ul class="relative m-0 list-none px-[0.2rem]">
                <li class="relative">
                  <Link
                    class={
                      components === "Blogs"
                        ? "group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 text-red"
                        : "group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                    }
                    href=""
                    data-te-sidenav-link-ref
                    onClick={() => setComponents("Blogs")}
                  >
                    <span
                      class={
                        components === "Blogs"
                          ? "mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300 fill-red"
                          : "mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                    </span>
                    <span>Blogs</span>
                  </Link>
                </li>
                <li class="relative">
                  <a
                    class={
                      components === "Quiz"
                        ? "group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 text-red"
                        : '"group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"'
                    }
                    data-te-sidenav-link-ref
                    onClick={() => setComponents("Quiz")}
                  >
                    <span class="mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class={
                          components === "Quiz"
                            ? "h-3.5 w-3.5 fill-gray-700 dark:fill-gray-300 fill-red"
                            : "h-3.5 w-3.5 fill-gray-700 dark:fill-gray-300"
                        }
                      >
                        <path d="M 162.09375 64 A 16 16 0 0 0 149.15625 69.78125 L 20.03125 340.78125 L 20 341.15625 A 48.006944 48.006944 0 0 0 68 384 L 454 384 A 48.006944 48.006944 0 0 0 502 341.15625 L 373.21875 70.15625 A 16 16 0 0 0 361.21875 64 L 162.09375 64 z M 162.09375 96 L 331.90625 96 L 451.96875 341.21875 A 16.007464 16.007464 0 0 0 438.19336 352 L 96 352 L 162.09375 96 z M 256 416 A 48.002496 48.002496 0 0 0 208 464 A 48.002496 48.002496 0 0 0 256 512 A 48.002496 48.002496 0 0 0 304 464 A 48.002496 48.002496 0 0 0 256 416 z M 256 448 A 16.018032 16.018032 0 0 1 272 464 A 16.018032 16.018032 0 0 1 256 480 A 16.018032 16.018032 0 0 1 240 464 A 16.018032 16.018032 0 0 1 256 448 z M 384 416 A 48.002496 48.002496 0 0 0 336 464 A 48.002496 48.002496 0 0 0 384 512 A 48.002496 48.002496 0 0 0 432 464 A 48.002496 48.002496 0 0 0 384 416 z M 384 448 A 16.018032 16.018032 0 0 1 400 464 A 16.018032 16.018032 0 0 1 384 480 A 16.018032 16.018032 0 0 1 368 464 A 16.018032 16.018032 0 0 1 384 448 z" />
                      </svg>
                    </span>

                    <span>Quiz</span>
                  </a>
                </li>
                <li class="relative">
                  <a
                    class={
                      components === "Banners"
                        ? "group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 text-red"
                        : "group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                    }
                    data-te-sidenav-link-ref
                    onClick={() => setComponents("Banners")}
                  >
                    <span
                      class={
                        components === "Banners"
                          ? "mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300 fill-red"
                          : "mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
                      </svg>
                    </span>
                    <span>Banners</span>
                  </a>
                </li>
                <li class="relative">
                  <div
                    class={
                      components === "User"
                        ? "group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 text-red"
                        : "group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                    }
                    data-te-sidenav-link-ref
                    onClick={() => setComponents("User")}
                  >
                    <span
                      class={
                        components === "User"
                          ? "mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300 fill-red"
                          : "mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z" />
                      </svg>
                    </span>
                    <span>Users</span>
                  </div>
                </li>
                <li class="relative">
                  <div
                    class="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-gray-300/30 hover:text-inherit hover:outline-none focus:bg-gray-300/30 focus:text-inherit focus:outline-none active:bg-gray-300/30 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                    onClick={() => Logout()}
                    data-te-sidenav-link-ref
                  >
                    <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z" />
                      </svg>
                    </span>
                    <span>Log out</span>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {/* <!-- Sidenav --> */}

          {/* <!-- Content --> */}
          <div
            class="col-span-4  w-full bg-gray  text-center sm:container"
            id="content"
          >
            {components === "Blogs" ? (
              <div class=" text-center">
                <h3 class="my-5 text-[1.75rem] font-medium leading-[1.2]"> </h3>

                <Addblog />
                <div className="mt-10"></div>
                <GetBLog />
              </div>
            ) : components === "Quiz" ? (
              <div className="">
                {/* <Quizadmin /> */}
                <QuestionTable />
              </div>
            ) : components === "User" ? (
              <div className="">
                {/* <Quizadmin /> */}
                <UsersTable />
              </div>
            ) : (
              "Nothing yet"
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
