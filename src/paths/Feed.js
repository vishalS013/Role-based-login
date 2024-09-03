import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableViewIcon from "@mui/icons-material/TableView";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Button, OutlinedInput } from "@mui/material";
import bgImage from "./Images/bg.jpg";
import imageTable from "./Images/imageOne.jpg";
import imageTableOne from "./Images/imageTwo.jpeg";
import imageTableTwo from "./Images/imageThree.jpg";
import imageTablethree from "./Images/imageThre.jpg";




import MessageIcon from "@mui/icons-material/Message";
import AppleIcon from "@mui/icons-material/Apple";

const Feed = () => {
  const data = [
    {
      picture: bgImage,
      name: "Sophie B.",
      message: "Hy how are you",
      action: "Reply",
    },
    {
      picture: bgImage,
      name: "Anne Marie",
      message: "Awesome work, can you..",
      action: "Reply",
    },
    {
      picture: bgImage,
      name: "Ivanna",
      message: "About files I can..",
      action: "Reply",
    },
    {
      picture: bgImage,
      name: "Peterson",
      message: "About afternoon",
      action: "Reply",
    },
    {
      picture: bgImage,
      name: "Ivanna",
      message: "About files I can..",
      action: "Reply",
    },
  ];

  const houses =[
    {id:1, name:"project", heading:'modern', description:"As Uber works through a huge amount of internal management turmoil.", action:"View Project",image:imageTable}
  ]
  return (
    <div>
      <div className="flex justify-around pt-5 ">
        <div className="bg-gray-700 w-2/12 h-[90vh] sticky rounded-md">
          <ul className="p-5 space-y-5 text-white">
            <li className="flex gap-2">
              <DashboardIcon />
              Dashboard
            </li>
            <li className="flex gap-2">
              <TableViewIcon />
              Tables
            </li>
            <li className="flex gap-2">
              <ChecklistRtlIcon />
              RTL
            </li>
            <li className="flex gap-2">
              <Person2Icon />
              Profile
            </li>
            <li className="flex gap-2">
              <AssignmentLateIcon />
              Sign In
            </li>
            <li className="flex gap-2">
              <ExitToAppIcon />
              Sign Up
            </li>
          </ul>
        </div>

        <div className="w-[80%] justify-around h-[90vh] overflow-y-auto">
          <div className="pl-6 pr-6 ">
            <div className="flex h-10 items-center">
              <div className="flex w-full">
                <HomeIcon fontSize="small" />
                <p>/Profile</p> <br />
              </div>
              <div className="flex gap-2 justify-center items-center">
                <OutlinedInput
                  title="search"
                  fontSize="small"
                  placeholder="Search"
                  className="p-0.5 pr-6 relative left-1"
                />
                <ZoomInIcon className="relative right-[45px]" />
                <Person2Icon fontSize="small" />
                <SettingsIcon fontSize="small" />
                <NotificationsIcon fontSize="small" />
              </div>
            </div>
            <p className="pl-5">Profile</p>
          </div>
          <div
            className="bg-gray-500 w-full h-[300px] bg-center rounded-lg "
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
          <div className="border border-blue-500 rounded-[20px] m-4 !h-[150%] relative bottom-14  bg-white">
            <div className="flex">
              <img
                src={bgImage}
                alt="userImage"
                className="rounded-[50%] h-[80px] w-[80px] text-center ml-10 mt-4  "
              />

              <div className="flex flex-grow mt-2  justify-end gap-3 pr-5">
                <button className="w-24 h-10 flex items-center gap-1 text-sm">
                  <AppleIcon fontSize="medium" className="pb-1" /> App
                </button>
                <button className="w-24 h-10 flex items-center gap-1 text-sm">
                  <MessageIcon fontSize="medium" className="pb-1" /> Message
                </button>
                <button className="w-24 h-10 text-sm flex gap-1 items-center">
                  <SettingsIcon fontSize="medium" className="pb-1" />
                  Settings
                </button>
              </div>
            </div>

            <div className="flex justify-between h-72 mt-2 pl-2">
              <div className=" w-80 min-h-[400px] h-[400px]">
                <p className="font-bold text-base">Platform settings</p>
              </div>

              <div className=" w-80 pl-4 h-[400px] min-h-[400px]">
                <p className="font-bold text-base">Profile information</p>
                <p className="text-sm">
                  Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </p>
                <label className="font-bold text-sm">full name</label>
                <span className="text-sm">: Alec M. Thompson</span> <br />
                <label className="font-bold text-sm">mobile</label>
                <span className="text-sm">: (44) 123 1234 123</span>
                <br />
                <label className="font-bold text-sm">email</label>
                <span className="text-sm">: alecthompson@mail.com</span>
                <br />
                <label className="font-bold text-sm">location</label>
                <span className="text-sm">: USA</span>
                <br />
                <label className="font-bold text-sm">social</label>
                <span className="items-center gap-2">
                  : <AppleIcon color="success" fontSize="small" />
                  <DashboardIcon color="secondary" fontSize="small" />
                  <NotificationsIcon color="primary" fontSize="small" />
                </span>
                <br />
              </div>

              <div className="w-80 min-h-[400px] pl-3 h-[400px]">
                <p className="font-bold text-base">Conversations</p>

                {data.map((item, id) => {
                  return (
                    <div
                      key={id}
                      className=" h-12 w-full flex items-center p-2 mt-1"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={item?.picture}
                          className="h-10 w-10 rounded-[50%] bg-red-600"
                          alt="default"
                        />
                      </div>
                      <div className="flex-1 ml-3">
                        <p className="text-md font-semibold">{item.name}</p>
                        <p className="text-sm ">{item.message}</p>
                      </div>
                      <div className="ml-1 pb-2 ">
                        <Button className="text-blue-800">{item.action}</Button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

        <div className=" mt-4 pl-4">
                <p className="!text-md !font-semibold">Projects</p>
                <p>Architects design houses</p>
                <div>
                    {houses.map((item,id)=>{
                        return(
                            <>
                            <div className="!h-1/3 w-1/4 border bg-green-400 border-black">
                                <img src={item.image}  alt="default" className="h-36 w-full rounded-lg"/>
                                <p></p>
                                <p>{item.description}</p>
                                <p></p>
                                <div>
                                    <Button>{item.action}</Button>
                                </div>
                            </div>
                            </>
                        )
                    })

                    }
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
