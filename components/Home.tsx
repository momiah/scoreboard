import React from "react";
import { View, Text } from "react-native";
import Scoreboard from "./Scoreboard";
import styled from "styled-components/native";

const Home = () => {
  return (
    <HomeContainer>
      <Overview></Overview>
      <Tabs></Tabs>
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
  border: "1px solid black",
  height: "100px",
  width: "100%",
});

export default Home;
