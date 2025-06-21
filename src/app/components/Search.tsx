"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";
import { Button } from "./Button";

type SearchIconProps = {
  size?: string;
};

function Search() {
  const [textInputValue, setTextInputValue] = useState("");  

  return (
    <form action="" className="bg-gray-800 rounded-lg flex">
      <input
        className=" px-3 py-2 text-white placeholder-gray-300"
        type="text"
        placeholder="Digite aqui sua pesquisa"
        value={textInputValue}
        onChange={(event) => setTextInputValue(event.target.value)}
      />
      
        <Button variant="icon">
          <SearchIcon  />
        </Button>
    </form>
  );
}

const SearchIcon = ({size = "2em"}: SearchIconProps) => {
    return (
      <IconContext.Provider value={{ size }}>
            <div>
              <CiSearch />
            </div>
          </IconContext.Provider>
    )
  }

export {Search, SearchIcon}