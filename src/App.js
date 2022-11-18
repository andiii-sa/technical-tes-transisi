import { ReactComponent as IconSearch } from "./assets/images/icon-search.svg";
import { ReactComponent as IconBar } from "./assets/images/icon-bar.svg";
import { ReactComponent as IconAdd } from "./assets/images/icon-add.svg";
import { ReactComponent as IconAddSecondary } from "./assets/images/icon-add-secondary.svg";
import { ReactComponent as IconDots } from "./assets/images/icon-dots.svg";
import { useState } from "react";

function App() {
  const [listToday, setListToday] = useState([]);

  const listStatus = ["Approved", "In Progress", "In Review", "Waiting"];

  const addListToday = (e) => {
    e.preventDefault();

    setListToday((prev) => [
      ...prev,
      {
        id: listToday.length + 1,
        label: `List today -> ${listToday.length + 1}`,
        status: listStatus[Math.floor(Math.random() * listStatus.length)],
      },
    ]);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap bg-navy p-2">
        <div className="lg:flex-1 flex-auto relative overflow-hidden">
          <button className="bg-inputText rounded-lg w-[35px] h-[35px] p-3 mt-3 ml-3">
            <IconBar />
          </button>
          <div className="w-[100px] h-[100px] pattern absolute top-0 -right-8"></div>
          <div className="w-[100px] h-[100px] pattern z-[1] absolute -bottom-5 left-16"></div>
          <div className="flex flex-col px-20 relative z-[2] lg:mt-20 mt-4">
            <h2 className="text-white text-4xl font-semibold">Hi Samantha</h2>
            <span className="text-secondary font-normal text-md mt-3 mb-4">
              Welcome back to the workspace, we missed you!
            </span>
            <div className="flex flex-row ">
              <div className="bg-inputText w-[50px] h-[50px] p-3 rounded-l-2xl">
                <IconSearch />
              </div>
              <input
                type="text"
                placeholder="Search Task or Project ..."
                className="bg-inputText rounded-r-2xl border-none focus:outline-none text-white px-2 w-full"
              />
            </div>
            <h5 className="text-white font-semibold text-xl mt-10">
              <span>Projects </span>
              <span className="text-secondary font-normal text-sm">(13)</span>
            </h5>
            <div className="flex flex-row flex-wrap gap-3 xl:gap-6 mt-6 list-project">
              <div className="flex-1 flex-col flex items-center xl:flex-none md:mb-6 mb-2">
                <div className="bg-gradient-to-tr from-[#FA2E8A] to-[#F83BC8] w-[100px] h-[100px] flex flex-row justify-center items-center rounded-xl relative">
                  <div className="pattern-project-1 w-[100px] h-[100px]"></div>
                  <span className="font-bold text-xl text-white">GH</span>
                </div>
                <span className="mt-4 text-center text-slate-300 z-[2] relative">
                  Green House
                </span>
              </div>
              <div className="flex-1 flex-col flex items-center xl:flex-none md:mb-6 mb-2">
                <div className="bg-gradient-to-tr from-[#2CD5A4] to-[#3874E3] w-[100px] h-[100px] flex flex-row justify-center items-center rounded-xl active relative">
                  <div className="pattern-project-2 w-[100px] h-[100px]"></div>
                  <span className="font-bold text-xl text-white">CP</span>
                </div>
                <span className="mt-4 text-center text-slate-300">
                  Cyber Punk
                </span>
              </div>
              <div className="flex-1 flex-col flex items-center xl:flex-none md:mb-6 mb-2">
                <div className="bg-gradient-to-tr from-[#BE67D6] to-[#633CBC] w-[100px] h-[100px] flex flex-row justify-center items-center rounded-xl info relative">
                  <div className="pattern-project-3 w-[100px] h-[100px]"></div>
                  <span className="font-bold text-xl text-white">EC</span>
                </div>
                <span className="mt-4 text-center text-slate-300">
                  Easy Crypto
                </span>
              </div>
              <div className="flex-1 flex-col flex items-center xl:flex-none md:mb-6 mb-2">
                <div className="bg-gradient-to-tr from-[#7D52EF] to-[#2CBBEF] w-[100px] h-[100px] flex flex-row justify-center items-center rounded-xl relative">
                  <div className="pattern-project-4 w-[100px] h-[100px]"></div>
                  <span className="font-bold text-xl text-white">TA</span>
                </div>
                <span className="mt-4 text-center text-slate-300">
                  Travel App
                </span>
              </div>
              <div className="flex-1 flex-col flex items-center xl:flex-none md:mb-6 mb-2">
                <div className="bg-gradient-to-tr from-[#F7BD73] to-[#EC6E62] w-[100px] h-[100px] flex flex-row justify-center items-center rounded-xl info relative">
                  <div className="pattern-project-5 w-[100px] h-[100px]"></div>
                  <span className="font-bold text-xl text-white">LP</span>
                </div>
                <span className="mt-4 text-center text-slate-300">
                  Landing Page
                </span>
              </div>
              <div className="flex-1 flex-col flex items-center xl:flex-none md:mb-6 mb-2">
                <div className="bg-[#3B3F54] w-[100px] h-[100px] flex flex-row justify-center items-center rounded-xl">
                  <span className="font-bold text-xl text-white">8+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex-1 flex-auto md:mt-0 mt-5 bg-white min-h-[calc(100vh-0.5rem)] rounded-2xl py-12 px-10 relative">
          <div className="flex-col px-6">
            <div className="flex flex-row flex-wrap justify-between">
              <div className="md:flex-1 flex-col">
                <h2 className="text-3xl font-bold text-navy">Cyber Punk</h2>
                <p className="text-secondary2 font-normal text-md mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  dicta, aperiam quia quo repudiandae commodi fugit maiores.
                </p>
              </div>
              <div className="md:flex-none flex-col md:mt-0 mt-3">
                <div className="flex flex-row items-center wrapper-member">
                  <img
                    src="https://picsum.photos/200"
                    alt="alt-img"
                    className="h-[32px] w-[32px] rounded-[50%] border-2 border-white z-[2] "
                  />
                  <img
                    src="https://picsum.photos/200"
                    alt="alt-img"
                    className="h-[32px] w-[32px] rounded-[50%] border-2 border-white z-[1] -ml-2"
                  />
                  <img
                    src="https://picsum.photos/200"
                    alt="alt-img"
                    className="h-[32px] w-[32px] rounded-[50%] border-2 border-white z-[0] -ml-2"
                  />
                  <button className="h-[24px] w-[24px] rounded-[50%] border-2 border-secondary2 ml-2 p-1 ">
                    <IconAddSecondary />
                  </button>
                </div>
              </div>
            </div>

            <div className="wrapper-checkbox flex flex-col mt-10">
              <div className="flex flex-row justify-between mb-6">
                <h4 className="text-xl font-semibold text-navy">Today</h4>
                <button className="w-[30px] h-[100%]">
                  <IconDots />
                </button>
              </div>
              <div className="wrapper-today-value flex flex-row md:flex-nowrap flex-wrap items-center justify-between mb-3">
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    className="mr-2 custom-checkbox"
                    checked
                  />
                  <label>Create initial layout for homepage</label>
                </div>
                <span className="approved rounded-2xl whitespace-nowrap text-sm font-semibold px-4 py-1 md:mt-0 mt-3 ml-9">
                  Approved
                </span>
              </div>
              <div className="wrapper-today-value flex flex-row md:flex-nowrap flex-wrap items-center justify-between mb-3">
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    className="mr-2 custom-checkbox"
                    checked
                  />
                  <label>Fixing icons with transparant background</label>
                </div>
                <span className="in-progress rounded-2xl whitespace-nowrap text-sm font-semibold px-4 py-1 md:mt-0 mt-3 ml-9">
                  In Progress
                </span>
              </div>
              <div className="wrapper-today-value flex flex-row md:flex-nowrap flex-wrap items-center justify-between mb-3">
                <div className="flex flex-row items-center">
                  <input type="checkbox" className="mr-2 custom-checkbox" />
                  <label>Discussion regarding workflow improvement</label>
                </div>
                <span className="in-review rounded-2xl whitespace-nowrap text-sm font-semibold px-4 py-1 md:mt-0 mt-3 ml-9">
                  In Review
                </span>
              </div>
              <div className="wrapper-today-value flex flex-row md:flex-nowrap flex-wrap items-center justify-between mb-3">
                <div className="flex flex-row items-center">
                  <input type="checkbox" className="mr-2 custom-checkbox" />
                  <label>Create quotation for app redesign project</label>
                </div>
                <span className="waiting rounded-2xl whitespace-nowrap text-sm font-semibold px-4 py-1 md:mt-0 mt-3 ml-9">
                  Waiting
                </span>
              </div>
              {listToday?.length > 0 &&
                listToday?.map((list, idx) => (
                  <div
                    key={idx}
                    className="wrapper-today-value flex flex-row md:flex-nowrap flex-wrap items-center justify-between mb-3"
                  >
                    <div className="flex flex-row items-center">
                      <input type="checkbox" className="mr-2 custom-checkbox" />
                      <label>{list?.label ?? "-"}</label>
                    </div>
                    <span
                      className={[
                        "rounded-2xl whitespace-nowrap text-sm font-semibold px-4 py-1 md:mt-0 mt-3 ml-9",
                        list?.status === "Approved"
                          ? "approved"
                          : list?.status === "In Progress"
                          ? "in-progress"
                          : list?.status === "In Review"
                          ? "in-review"
                          : "waiting",
                      ].join(" ")}
                    >
                      {list?.status ?? "--"}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <button
            className="absolute bottom-3 right-3 bg-purple w-[50px] h-[50px] p-4 rounded-2xl shadow-lg shadow-purple"
            onClick={addListToday}
          >
            <IconAdd />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
