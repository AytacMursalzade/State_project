"use client"

import React, { useState } from "react";
import styles from "../List/styles.module.css";
import { IoSearchSharp, IoSettingsOutline, IoInformation } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdInsertPageBreak } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { RiFileEditFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaPeopleGroup, FaStar } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

function List() {
  type MenuItem = {
    label: string;
    icon: React.ReactNode;
    drop?: React.ReactNode;
    subMenu?: string[];
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items: MenuItem[] = [
    {
      label: "Axtarış",
      icon: <IoSearchSharp />,
      drop: <IoMdArrowDropdown />,
      subMenu: [
        "Standart axtarış",
        "Sürətli axtarış panelini göstər",
        "Keçid üzrə axtarış (Əmlak Bazası serverində, 18 milyon elan arasından axtarış)",
        "Açar söz üzrə ətraflı axtarış",
        "Telefon nömrəsi üzrə axtarış",
        "Hüquq sahibi üzrə axtarış",
        "Əlaqəli şəxs üzrə axtarış",
        "Şəhər üzrə axtarış",
        "Nişangah üzrə axtarış",
        "Email üzrə axtarış",
        "Skype üzrə axtarış",
        "Seçilən istifadəçinin məsul olduğu əmlaklar",
        "Seçilən istifadəçinin barəsində məlumat",
        "MTK üzrə axtarış",
        "İnternetdən oxunan (təsdiq edilməyənlər)",
      ],
    },
    {
      label: "Geniş Axtarış",
      icon: <IoSearchSharp />,
    },
    {
      label: "Baxış",
      icon: <MdInsertPageBreak />,
      drop: <IoMdArrowDropdown />,
      subMenu: [
        "Əlaqəli Əmlaklar",
        "Eyni parametrlərə uyğun əmlaklar",
        "Oxşar parametrlərə uyğun əmlaklar",
        "Fərqləndir",
        "Zəng et",
        "Seçilən əmlakı xəritədə göstər",
        "Vasitəçi olmadığını təkrar yoxla",
        "Vasitəçidir",
        "Arxivə göndər",
        "Seçilən əmlakı çap et",
        "Seçilən əmlakın əməliyyat,rəyləri göstər",
        "Seçilən əmlaka təklif edilən qiymətləri göstər",
      ],
    },
    {
      label: "Əlavə et",
      icon: <TiPlus />,
      drop: <IoMdArrowDropdown />,
      subMenu: [
        "Seçilən əmlaka əməliyyat,rəy əlavə et",
        "Seçilən əmlaka qiymət təklifi əlavə et",
      ],
    },
    {
      label: "Redaktə et",
      icon: <RiFileEditFill />,
      drop: <IoMdArrowDropdown />,
      subMenu: ["Arxivə göndər"],
    },
    { label: "Sil", icon: <FaMinus /> },
    {
      label: "Elanları oxu",
      icon: <GiWorld />,
      drop: <IoMdArrowDropdown />,
      subMenu: ["Əvvəlki tarixə olan elanları oxu"],
    },
    {
      label: "Sifarişlər",
      icon: <BsFillTelephoneFill />,
    },
    { label: "Agentlər", icon: <FaPeopleGroup /> },
    {
      label: "Əlavələr",
      icon: <FaStar />,
      drop: <IoMdArrowDropdown />,
      subMenu: [
        "Tapşırıqlar",
        "Gündəlik qeydlər",
        "Sürətli rejim",
        "Yalnız şirkət əməkdaşları tərəfindən daxil edilən məlumatların idarəedilməsi",
        "Yalnız internetdən oxunan məlumatların idarəedilməsi",
        "Şəxslər (müştəri bazası)",
        "Bütün əməliyyat,rəylər",
        "Qara siyahı",
        "Vasitəçi elanlarının bazadan təmizlənməsi*",
        "Köhnə elanların fotoşəkillərini silinməsi",
        "Telefon nömrəsi üzrə internetdə axtarış",
        "Əmlak Agentlikləri üçün müzakirə mərkəzi",
        "Elektron Hökümət Portalından məlumat al",
        "Əmlak saytları",
        "Şəhər və rayonlar Google Map`də",
        "MTK-lar barədə məlumat axtar",
      ],
    },
    {
      label: "Hesabatlar",
      icon: <FaDatabase />,
      drop: <IoMdArrowDropdown />,
      subMenu: [
        "Günlər üzrə əlavə edilən elanların hesabatı",
        "Əmlak növləri üzrə əlavə edilən elanların hesabatı",
        "Torpaqlar üzrə",
        "Fərdi yaşayış evləri üzrə",
        "Bağ evləri üzrə",
        "Qeyri yaşayışsahələri üzrə",
        "Mənzillər üzrə",
        "Qarajlar üzrə",
      ],
    },
    {
      label: "İdarəetmə",
      icon: <IoSettingsOutline />,
      drop: <IoMdArrowDropdown />,
      subMenu: [
        "İstifadəçilər (Agentlər)",
        "Avtomatik oxunma parametrləri",
        "Normativ məlumatlar",
        "Məlumat bazasını optimallaşdır",
        "Məlumat bazasını arxivləşdir",
      ],
    },
    {
      label: "Haqqında",
      icon: <IoInformation />,
      drop: <IoMdArrowDropdown />,
      subMenu: [
        "Ödəniş et",
        "Məlumatların",
        "Şifrəni dəyişdir",
        "Daşınmaz əmlak axtarış paneli",
        "Limitsiz versiyaya keçid",
        "Video təlimlər",
        "Sonlandır",
      ],
    },
  ];

  return (
    <ul className={styles.containerList}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "25px" }}>{item.icon}</span>
            <span style={{ marginLeft: "8px" }}>{item.label}</span>
            {item.drop && (
              <span
                style={{ marginLeft: "auto", cursor: "pointer" }}
                onClick={() => handleToggle(index)}
              >
                {item.drop}
              </span>
            )}
          </span>

          {item.subMenu && openIndex === index && (
            <ul className={styles.submenu}>
              {item.subMenu.map((sub, subIndex) => (
                <li key={subIndex} className={styles.submenuItem}>
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
export default List;
