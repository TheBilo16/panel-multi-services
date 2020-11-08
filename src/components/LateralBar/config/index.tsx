import NSLateralBar from "../metadata";
import {
  BsBarChart,
  BsPeople,
  BsEnvelope,
  BsPerson,
  BsBriefcase,
} from "react-icons/bs";

const linkConfiguration: NSLateralBar.Link[] = [
  {
    title: "Dashboard",
    Icon: BsBarChart,
    link: "/",
  },
  {
    title: "Usuarios",
    Icon: BsPeople,
    link: "/user",
  },
  {
    title: "Trabajadores",
    Icon: BsPerson,
    link: "/worker",
  },
  {
    title: "Especialidades",
    Icon: BsBriefcase,
    link: "/specialty",
  },
  {
    title: "Correos",
    Icon: BsEnvelope,
    link: "/email",
  }
];

export default linkConfiguration;
