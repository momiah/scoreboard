import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Scoreboard from "./Scoreboard";
import styled from "styled-components/native";

const Home = () => {
  const tabs = [
    {
      component: "Scoreboard",
    },
    {
      component: "Player Performance",
    },
    {
      component: "Team Performance",
    },
  ];
  return (
    <HomeContainer>
      <Overview></Overview>
      <Tabs>
        {tabs.map((tab) => {
          return (
            <Tab>
              <Text>{tab.component}</Text>
            </Tab>
          );
        })}
      </Tabs>
      <Scoreboard />
    </HomeContainer>
  );
};

const HomeContainer = styled.View({
  flex: 1,
  padding: 10,
  width: "100%",
});
const Overview = styled.View({
  border: "1px solid red",
  height: "100px",
  width: "100%",
});
const Tabs = styled.View({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});
const Tab = styled.TouchableOpacity({
  border: "1px solid #ccc",
  padding: 10,
  borderRadius: 20,
  marginTop: 20,
  // height: "100px",
});

export default Home;
