import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";

type SearchIconProps = {
  size?: string;
};

export default function SearchIcon({ size = '2em' }: SearchIconProps) {
  return (
    <IconContext.Provider value={{ size }}>
      <div>
        <CiSearch />
      </div>
    </IconContext.Provider>
  );
}

