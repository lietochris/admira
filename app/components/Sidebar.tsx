import {
  HiOutlineCog6Tooth,
  HiOutlineFilm,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineInbox,
  HiOutlinePresentationChartBar,
  HiOutlineSparkles,
  HiXMark,
} from "react-icons/hi2";
import { Link } from "@remix-run/react";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import SidebarDropdown from "~/components/SidebarDropdown";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar(props: Props) {
  const ref = useRef(null);
  useOnClickOutside(ref, props.onClose);
  return (
    <aside
      ref={ref}
      className={`bg-slate-100 z-10 fixed w-60 top-0 h-screen p-2 border transition-all border-slate-200 ${props.open ? "flex" : "hidden"} lg:flex flex-col gap-4`}
    >
      <div className="flex items-center jus">
        <div className="w-full">
          <div className={"bg-slate-300 h-8 w-32"}></div>
        </div>
        <div className="">
          <button onClick={props.onClose} className={"p-2 lg:hidden"}>
            <HiXMark className={"size-6"} />
          </button>
        </div>
      </div>
      <div className="">
        <ul>
          <li>
            <SidebarDropdown text={"Luke Skywalker"}>
              <>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-slate-100  "
                >
                  Ver perfil
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-slate-100  "
                >
                  Atajos de teclado
                </a>
                <hr className="border-gray-200  " />
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-slate-100  "
                >
                  Compañia
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-slate-100  "
                >
                  Equipo
                </a>
                <hr className="border-gray-200  " />
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-slate-100  "
                >
                  Ayuda
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-slate-100  "
                >
                  Cerrar sesión
                </a>
              </>
            </SidebarDropdown>
          </li>
          <li>
            <Link
              onClick={props.onClose}
              className={"hover:bg-slate-200 text-slate-600 transition-colors rounded-lg flex items-center gap-2 p-1"}
              to={"/dashboard"}
            >
              <HiOutlineHome className={"size-5 text-slate-600"} /> Inicio
            </Link>
          </li>
          <li>
            <a className={"hover:bg-slate-200 text-slate-600 transition-colors rounded-lg flex items-center gap-2 p-1"} href="#inicio">
              <HiOutlineInbox className={"size-5 text-slate-600"} /> Bandeja de entrada
            </a>
          </li>
          <li>
            <a className={"hover:bg-slate-200 text-slate-600 transition-colors rounded-lg flex items-center gap-2 p-1"} href="#inicio">
              <HiOutlineCog6Tooth className={"size-5 text-slate-600"} /> Configuración
            </a>
          </li>
        </ul>
      </div>
      <div className="h-full">
        <div className="">
          <div className="text-xs font-semibold text-slate-400">Analytics</div>
          <ul className={"mt-2"}>
            <li>
              <Link
                onClick={props.onClose}
                className={"hover:bg-slate-200 transition-colors rounded-lg w-full flex p-1 justify-start items-center gap-2"}
                to="/dashboard/advertisements"
              >
                <HiOutlineFilm className={"size-5 text-slate-600"} /> Anuncios
              </Link>
            </li>
            <li>
              <Link
                onClick={props.onClose}
                className={"hover:bg-slate-200 transition-colors rounded-lg w-full flex p-1 justify-start items-center gap-2"}
                to="/dashboard/leads"
              >
                <HiOutlineSparkles className={"size-5 text-slate-600"} /> Leads
              </Link>
            </li>
            <Link
              onClick={props.onClose}
              className={"hover:bg-slate-200 transition-colors rounded-lg w-full flex p-1 justify-start items-center gap-2"}
              to="/dashboard/campaigns"
            >
              <HiOutlinePresentationChartBar className={"size-5 text-slate-600"} /> Campañas
            </Link>
            <Link
              onClick={props.onClose}
              className={"hover:bg-slate-200 transition-colors rounded-lg w-full flex p-1 justify-start items-center gap-2"}
              to="/dashboard/population"
            >
              <HiOutlinePresentationChartBar className={"size-5 text-slate-600"} /> Población
            </Link>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center gap-1 font-light text-slate-400">
          Made with <HiOutlineHeart />
        </div>
      </div>
    </aside>
  );
}
