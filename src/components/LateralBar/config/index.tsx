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
    icon: BsBarChart,
    link: "/",
  },
  {
    title: "Usuarios",
    icon: BsPeople,
    link: "/user",
  },
  {
    title: "Trabajadores",
    icon: BsPerson,
    link: "/worker",
  },
  {
    title: "Especialidades",
    icon: BsBriefcase,
    link: "/specialty",
  },
  {
    title: "Correos",
    icon: BsEnvelope,
    link: "/email",
  },
];

export default linkConfiguration;
