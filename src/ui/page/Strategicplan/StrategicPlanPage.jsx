import React from "react";
import { PageHeader, Row, Space, Tag, Typography } from "antd";
import { useContext } from "react/cjs/react.development";
import NavigatorContext from "../../../service/context/NavigatorContext";
import ContentTab from "../../component/tabs/ContentTab";
import MfoPage from "./MfoPage";
import IpcrPage from "./IpcrPage";
import OpcrPage from "./OpcrPage";
import UserContext from "../../../service/context/UserContext";

//import PresTable from "../../component/Prestable/PresTable";

const StrategicPlanPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("strategicPlan");
  const user = React.useContext(UserContext);
  let content = [
    {
      title: "MFO",
      key: "mfo",
      content: <MfoPage />,
    },
    {
      title: "OPCR",
      key: "opcr",
      content: <OpcrPage />,
    },
  ];

  if (!user.user._role.is_head) {
    content = [
      ...content,
      {
        title: "IPCR",
        key: "ipcr",
        content: <IpcrPage />,
      },
    ];
  }

  return (
    <>
      <PageHeader
        title="CNSC Strategic Plan"
        subTitle="Strategic Priorities"
        extra={
          <Space direction="vertical">
            <Tag color="gold">
              <Typography.Text strong>Office : </Typography.Text>
              {user.user._office.name}
            </Tag>
            <Tag color="volcano">
              <Typography.Text strong>Role : </Typography.Text>{" "}
              {user.user._role.name}
            </Tag>
          </Space>
        }
      />
      <ContentTab content={content} />
    </>
  );
};

export default StrategicPlanPage;
