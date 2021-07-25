import React from "react";
import {
  AccessAlarmOutlined,
  ChatOutlined,
  EqualizerOutlined,
} from "@material-ui/icons";
import Data from "../mock/data";

export let EventsList = [
  {
    id: 0,
    title: "Item 1",
    description:
      "Descriçao bolada sobre o item, que vai ser um pouco maior que o usual",
    icon: <AccessAlarmOutlined />,
    // chart: <Data />,
  },
  {
    id: 1,
    title: "Item 2",
    description:
      "Descriçao bolada sobre o item, que vai ser um pouco maior que o usual",
    icon: <ChatOutlined />,
    // chart: <Data />,
  },
  {
    id: 2,
    title: "Item 3",
    description:
      "Descriçao bolada sobre o item, que vai ser um pouco maior que o usual",
    icon: <EqualizerOutlined />,
    chart: <Data />,
  },
];
