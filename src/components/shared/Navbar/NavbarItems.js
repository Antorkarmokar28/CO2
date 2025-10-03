import { LayoutDashboard, CreditCard, Bell, Phone, Settings } from "lucide-react";

const navbarItems = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Transaction",
    link: "/transaction",
    icon: CreditCard,
  },
  {
    id: 3,
    title: "Notifications",
    link: "/notifications",
    icon: Bell,
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
    icon: Phone,
  },
  {
    id: 5,
    title: "Settings",
    link: "/settings",
    icon: Settings,
  },
];

export default navbarItems;
