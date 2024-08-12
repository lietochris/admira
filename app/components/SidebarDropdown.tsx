import { ReactNode, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { HiMiniChevronDown, HiOutlineUserCircle } from "react-icons/hi2";

interface Props {
  text: string;
  children?: ReactNode;
}

export default function SidebarDropdown(props: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div className={"relative"}>
      <button
        onClick={() => setOpen(true)}
        className={"hover:bg-slate-200 font-medium text-slate-600 transition-colors rounded-lg flex items-center gap-2 w-full p-1"}
      >
        <HiOutlineUserCircle className={"size-5"} /> {props.text} <HiMiniChevronDown className={"size-5"} />
      </button>
      {open && (
        <div ref={ref} className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl ">
          {props.children}
        </div>
      )}
    </div>
  );
}
