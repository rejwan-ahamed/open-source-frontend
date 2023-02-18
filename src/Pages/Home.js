import React from "react";
import Header from "../Components/Header";

const Home = () => (
  <div>
    <Header></Header>
    {/* search the student my class roll */}
    <div className="main-wrapper max-w-[1560px] mx-auto">
      <div className="search-student border-b grid grid-cols-3 ">
        <div className="left-part border-r pl-40 py-20 dark:text-white">
          <form
            action=""
            className="flex flex-col items-start w-[25rem] font-general"
          >
            <label
              htmlFor="student-roll"
              className="font-[500] text-xl mb-2 dark:text-[#EBFF00]"
            >
              Student roll
            </label>
            <div className="search-main flex items-center gap-2 rounded-sm w-full">
              <input
                type="number"
                name="student-roll"
                id=""
                className="h-[2rem] border   focus:ring-violet-600 dark:focus:ring-[#EBFF00] dark:border-[#EBFF00] dark:bg-black"
              />
              <button className="bg-violet-200 h-[2rem] px-2 text-violet-600 border border-violet-500 rounded-sm dark:text-[#EBFF00] dark:border-[#EBFF00] dark:bg-[#eaff0069]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </form>

          <p className="text-left text-violet-600 mt-3 w-[80%] font-[500] dark:text-[#EBFF00] font-general">
            ** Enter student class roll to get the details of the student.
            Please enter valid student roll.
          </p>
        </div>
        {/* right side */}
        <div className="right-part pl-20 py-20 font-general">
          <h1 className="font-[500] text-violet-600 dark:text-[#EBFF00] text-xl underline text-left mb-2">
            Student details
          </h1>
          <div className="student-details text-left">
            <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
              Name:{" "}
              <span className="text-violet-600 dark:text-[#EBFF00]">
                Rejwan
              </span>
            </p>
            <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
              Roll:{" "}
              <span className="text-violet-600 dark:text-[#EBFF00]">106</span>
            </p>
            <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
              Section:{" "}
              <span className="text-violet-600 dark:text-[#EBFF00]">B</span>
            </p>
            <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
              Status:{" "}
              <span className="text-violet-600 dark:text-[#EBFF00]">
                Leader
              </span>
            </p>
            <p className="font-[500] text-violet-400 text-[18px] dark:text-[#eaff00ab]">
              Task submission:{" "}
              <span className="text-violet-600 dark:text-[#EBFF00]">23</span>
            </p>
          </div>
        </div>

        <div className="left-part border-l pl-20 pr-16 py-20 font-general dark:text-white">
          <form action="" className="flex flex-col items-start">
            <h2 className="font-[500] text-xl mb-3 dark:text-white">
              Create A new group
            </h2>
            <div className="group-filed flex flex-col w-[80%]">
              <input
                type="text"
                name=""
                id=""
                placeholder="group name"
                className="h-[3rem] rounded-t-lg hover:ring-violet-600 dark:bg-black dark:ring-[#EBFF00] dark:border-[#EBFF00] dark:placeholder:text-white"
              />

              <button
                type="text"
                name=""
                id=""
                placeholder="group name"
                className="h-[3rem] rounded-b-lg bg-violet-600 text-white hover:ring-violet-600 dark:bg-[#EBFF00] font-[500] dark:text-black dark:border-[#EBFF00]"
              >
                Create group
              </button>
            </div>
          </form>

          <p className="text-left text-violet-600 mt-4 w-[90%] font-[500] dark:text-[#EBFF00]">
            ** Enter enter a valid group name for ex:(A) and assign a valid roll
            to create a group leader for the group.
          </p>
        </div>
      </div>

      {/* create group */}
      <div className="create-group-main font-general border-b grid grid-cols-3">
        <div className="left-part border-r pl-40 py-20 dark:text-white">
          <form action="" className="flex flex-col items-start">
            <h2 className="font-[500] text-xl mb-3 dark:text-white">
              Assign a group leader
            </h2>
            <div className="group-filed flex flex-col w-[80%]">
              <input
                type="text"
                name=""
                id=""
                placeholder="group name"
                className="h-[3rem] rounded-t-lg hover:ring-violet-600 dark:bg-black dark:ring-[#EBFF00] dark:border-[#EBFF00] dark:placeholder:text-white"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="group leader roll"
                className="h-[3rem] border-y-0 hover:ring-violet-600 dark:bg-black dark:ring-[#EBFF00] dark:border-[#EBFF00] dark:placeholder:text-white"
              />
              <button
                type="text"
                name=""
                id=""
                placeholder="group name"
                className="h-[3rem] rounded-b-lg bg-violet-600 text-white hover:ring-violet-600 dark:bg-[#EBFF00] font-[500] dark:text-black dark:border-[#EBFF00]"
              >
                Assign leader
              </button>
            </div>
          </form>

          <p className="text-left text-violet-600 mt-4 w-[90%] font-[500] dark:text-[#EBFF00]">
            ** Enter enter a valid group name for ex:(A) and assign a valid roll
            to create a group leader for the group.
          </p>
        </div>
        {/* right side */}
        <div className="middle-part pl-20 pr-20 py-20  flex flex-col justify-start border-r">
          <h1 className="mb-4 text-sm font-general font-[500] text-left rounded-full px-3 py-[3px] max-w-max border border-violet-600 text-violet-600 dark:border-[#EBFF00]  dark:text-[#EBFF00]">
            All recently crated groups names
          </h1>
          {/* <h1 className="font-general font-[500] text-xl">No group found</h1> */}
          <h1 className="font-general font-[500] text-xl text-left border-b py-2 dark:text-white flex justify-between">
            A group leader name{" "}
            <span className="text-red-600 dark:text-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </span>
          </h1>
          <h1 className="font-general font-[500] text-xl text-left border-b py-2 dark:text-white">
            A group leader name
          </h1>
          <h1 className="font-general font-[500] text-xl text-left border-b py-2 dark:text-white">
            A group leader name
          </h1>
          <h1 className="font-general font-[500] text-xl text-left border-b py-2 dark:text-white">
            A group leader name
          </h1>

          {/* {document.body.style.backgroundColor === "light"? <img src="/images/group.svg" className="w-[18rem]" alt="" srcset="" />: <img src="/public/images/dark.svg" className="w-[18rem]" alt="" srcset="" />} */}
          {/* <img src="/images/group.svg" className="w-[18rem]" alt="" srcset="" /> */}
        </div>
        <div className="right-part flex flex-col items-start justify-center pl-20 pr-16 py-20 dark:text-white">
          <form action="" className="flex flex-col items-start w-full">
            <h2 className="font-[500] text-xl mb-3 dark:text-white">
              Update group leader
            </h2>
            <div className="group-filed flex flex-col w-[80%]">
              <select
                id="countries"
                class="h-[3rem] rounded-t-lg border-b-0 bg-gray-50 border text-gray-900 text-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#EBFF00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#EBFF00] dark:focus:border-[#EBFF00]"
              >
                <option selected>Select group</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <input
                type="text"
                name=""
                id=""
                placeholder="Previous group leader roll"
                className="h-[3rem] hover:ring-violet-600 dark:hover:ring-[#EBFF00] dark:bg-black dark:border-[#EBFF00] dark:placeholder:text-white"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="New group leader roll"
                className="h-[3rem] border-y-0 hover:ring-violet-600 dark:hover:ring-[#EBFF00] dark:bg-black dark:border-[#EBFF00] dark:placeholder:text-white"
              />
              <button
                type="text"
                name=""
                id=""
                className="h-[3rem] rounded-b-lg bg-violet-600 text-white hover:ring-violet-600 dark:hover:ring-[#EBFF00] dark:bg-[#EBFF00] dark:text-black font-[500] dark:border-[#EBFF00] "
              >
                Update
              </button>
            </div>
          </form>

          <p className="text-left text-violet-600 mt-4 w-[90%] font-[500] dark:text-[#EBFF00]">
            ** Enter previous group leader roll and new group leader roll to
            update group.
          </p>
        </div>
      </div>

      <div className="group-details sm:px-20   xl:px-40 py-20">
        {/* select group */}
        <div className="select-group-details w-[15rem] text-left font-general">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select group
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-black text-gray-900 text-sm rounded-sm  focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#EBFF00] dark:focus:border-[#EBFF00]"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="group-table-list mt-10 font-general">
          <div class="relative overflow-x-auto">
            <table class="border border-black w-full text-sm text-left text-black dark:text-white dark:border-white">
              <thead class="text-xs text-black uppercase border-b border-black dark:text-white dark:border-b-white">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    group name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Student name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Roll
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Task status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b border-black dark:border-white dark:bg-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    A
                  </th>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                    Rejwan
                  </td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                    106
                  </td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                    Leader
                  </td>
                  <td class="px-3 py-4 text-violet-500 font-[500] dark:text-[#ebff00] border-l border-black sm:px-6 dark:border-l-white">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                      <div
                        className="bg-violet-600 h-2.5 rounded-full duration-500 dark:bg-[#ebff00]"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b border-black dark:border-white dark:bg-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    A
                  </th>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                    Rejwan
                  </td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                    106
                  </td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                    Leader
                  </td>
                  <td class="px-3 py-4 text-violet-500 font-[500] dark:text-[#ebff00] border-l border-black sm:px-6 dark:border-l-white">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                      <div
                        className="bg-violet-600 h-2.5 rounded-full duration-500 dark:bg-[#ebff00]"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b border-black dark:border-white dark:bg-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    A
                  </th>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                    Rejwan
                  </td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                    106
                  </td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                    Leader
                  </td>
                  <td class="px-3 py-4 text-violet-500 font-[500] dark:text-[#ebff00] border-l border-black sm:px-6 dark:border-l-white">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                      <div
                        className="bg-violet-600 h-2.5 rounded-full duration-500 dark:bg-[#ebff00]"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
