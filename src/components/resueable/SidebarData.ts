import {
  HomeIcon,
  HelpCircleIcon,
  Car,
  BellIcon,
  UserCircle,
} from "lucide-react";

const Sidebardata = [
  {
    title: "Home",
    path: "/home",
    icon: HomeIcon,
    name: "home",
  },
  {
    title: "Notification",
    path: "/notification",
    icon: BellIcon,
    name: "notification",
  },
  {
    title: "My Orders",
    path: "/orders",
    icon: Car,
    name: "orders",
  },
  {
    title: "Help",
    path: "/help",
    icon: HelpCircleIcon,
    name: "help",
  },
  {
    title: "My Profile",
    path: "/profile",
    icon: UserCircle,
    name: "profile",
  },
];

export default Sidebardata;
