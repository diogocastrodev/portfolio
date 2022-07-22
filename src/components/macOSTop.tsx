import AppleIcon from "./Icons/AppleIcon";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ControlCenter from "./Icons/ControlCenter";
import { Menu } from "@headlessui/react";

interface props {}

export default function MacOSTop({}: props) {
  const [Time, setTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const dayOfWeek = dayjs().format("ddd");
      const month = dayjs().format("MMM");
      const date = dayjs().format("D");
      const time = dayjs().format("HH:mm");
      const ampm = dayjs().format("A");
      setTime(`${dayOfWeek}, ${month} ${date} ${time} ${ampm}`);
      /* const dateTime = `${time}`;
      setTime(dateTime); */
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="h-7 w-screen flex bg- relative text-gray-200">
        <div className="absolute h-7 w-screen backdrop-blur-md"></div>
        <div className="px-3 w-full flex flex-row z-20">
          <div className="w-1/2 flex items-center flex-row gap-x-4">
            <AppleIcon
              options={{
                className: "fill-gray-200 w-5 h-5",
              }}
            />
            <div className="text-gray-300 font-bold">iTerm2</div>
            <div>Edit</div>
            <div>Window</div>
            <div>Help</div>
          </div>
          <div className="w-1/2 justify-end flex flex-row items-center gap-x-2">
            <ControlCenter
              options={{
                className: "fill-gray-200 w-5 h-5 text-white-200 invert",
              }}
            />
            <div className="flex-row hidden sm:flex">{Time}</div>
          </div>
        </div>
      </div>
    </>
  );
}
