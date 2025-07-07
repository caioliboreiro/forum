'use client'
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

interface UserIconProps {
  size?: string;
}

export default function UserIcon({ size = "2em" }: UserIconProps) {
  return (
    <IconContext.Provider value={{ size }}>
      <div>
        <FaUserCircle />
      </div>
    </IconContext.Provider>
  );
}

