import React from "react";
import styles from "../List/styles.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { MdInsertPageBreak } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { RiFileEditFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoInformation } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

function List() {
  type menuItem = {
    label: string;
    icon: React.ReactNode;
    drop?: React.ReactNode;
  };

  const items: menuItem[] = [
    { label: "Axtarış", icon: <IoSearchSharp />, drop: <IoMdArrowDropdown /> },
    {
      label: "Geniş Axtarış",
      icon: <IoSearchSharp />,
    },
    {
      label: "Baxış",
      icon: <MdInsertPageBreak />,
      drop: <IoMdArrowDropdown />,
    },
    { label: "Əlavə et", icon: <TiPlus />, drop: <IoMdArrowDropdown /> },
    {
      label: "Redaktə et",
      icon: <RiFileEditFill />,
      drop: <IoMdArrowDropdown />,
    },
    { label: "Sil", icon: <FaMinus />},
    { label: "Elanları oxu", icon: <GiWorld />, drop: <IoMdArrowDropdown /> },
    {
      label: "Sifarişlər",
      icon: <BsFillTelephoneFill />
     
    },
    { label: "Agentlər", icon: <FaPeopleGroup />},
    { label: "Əlavələr", icon: <FaStar />, drop: <IoMdArrowDropdown /> },
    { label: "Hesabatlar", icon: <FaDatabase />, drop: <IoMdArrowDropdown /> },
    {
      label: "İdarəetmə",
      icon: <IoSettingsOutline />,
      drop: <IoMdArrowDropdown />,
    },
    { label: "Haqqında", icon: <IoInformation />, drop: <IoMdArrowDropdown /> },
  ];

  return (
    <ul className={styles.containerList}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          <span style={{display: "flex" }}>
            <span style={{ fontSize: "25px"}}>
              {item.icon}
            </span>{item.drop &&
            <span style={{display:"flex",alignItems:"center", justifyContent:"center"}}>{item.drop}</span>}
          </span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
export default List;
