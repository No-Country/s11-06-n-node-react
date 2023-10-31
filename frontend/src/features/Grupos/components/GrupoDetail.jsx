import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ImageBg } from "../../../components/Images/ImageProfileUser";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ListCardFirends from "../../../components/ListCardFriends";

export function GrupoDetail() {
  const [activeTab, setActiveTab] = React.useState("html");
  const grupoData = {
    _id: 1,
    description: "Argentinos en Italia",
    image:
      "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg",
  };
  const data = [
    {
      label: "Noticias",
      value: "noticias",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Personas",
      value: "personas",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Eventos",
      value: "eventos",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Archivos",
      value: "archivos",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <div className="flex w-full">
      <div className="hidden xl:block">
        <Sidebar />
      </div>
      <div className="mb-20 ml-0 xl:ml-56  mx-auto w-full">
        <div className="h-28 md:h-40">
          <ImageBg imagen={grupoData.image} />
        </div>

        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "greenPrimary font-bold" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      <div className='hidden lg:block'><ListCardFirends/></div>
    </div>
  );
}
