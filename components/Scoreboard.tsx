import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import styled from "styled-components/native";

// Define the calculateWin function
const calculateWin = (teamAScore: number, teamBScore: number): string => {
  if (teamAScore >= 21 && (teamAScore - teamBScore >= 2 || teamAScore === 30)) {
    return "Team 1";
  }
  if (teamBScore >= 21 && (teamBScore - teamAScore >= 2 || teamBScore === 30)) {
    return "Team 2";
  }
  return "No winner";
};

// Define the Player and Game types
type Player = {
  player1: string;
  player2: string;
  score: number;
};

type Game = {
  date: string;
  team1: Player;
  team2: Player;
  winner: string;
};

// Hardcoded games
const badmintonGames = [
  {
    date: "2024-06-01",
    team1: { player1: "Person A", player2: "Person B", score: 21 },
    team2: { player1: "Person B", player2: "Person C", score: 19 },
    get winner() {
      return calculateWin(this.team1.score, this.team2.score);
    },
  },
  {
    date: "2024-06-02",
    team1: { player1: "Person D", player2: "Person E", score: 22 },
    team2: { player1: "Person F", player2: "Person G", score: 20 },
    get winner() {
      return calculateWin(this.team1.score, this.team2.score);
    },
  },
  {
    date: "2024-06-03",
    team1: { player1: "Person H", player2: "Person I", score: 30 },
    team2: { player1: "Person J", player2: "Person K", score: 28 },
    get winner() {
      return calculateWin(this.team1.score, this.team2.score);
    },
  },
  {
    date: "2024-06-04",
    team1: { player1: "Person L", player2: "Person M", score: 21 },
    team2: { player1: "Person N", player2: "Person O", score: 23 },
    get winner() {
      return calculateWin(this.team1.score, this.team2.score);
    },
  },
  {
    date: "2024-06-05",
    team1: { player1: "Person P", player2: "Person Q", score: 19 },
    team2: { player1: "Person R", player2: "Person S", score: 21 },
    get winner() {
      return calculateWin(this.team1.score, this.team2.score);
    },
  },
  {
    date: "2024-06-06",
    team1: { player1: "Person T", player2: "Person U", score: 25 },
    team2: { player1: "Person V", player2: "Person W", score: 27 },
    get winner() {
      return calculateWin(this.team1.score, this.team2.score);
    },
  },
];

// Define the Scoreboard component
const Scoreboard = () => {
  return (
    <Container>
      <Title>Badminton Scoreboard</Title>
      <FlatList
        data={badmintonGames}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <GameContainer>
            <TeamContainer>
              <Team>{item.team1.player1}</Team>
              <Team>{item.team1.player2} </Team>
            </TeamContainer>

            <ResultsContainer>
              <Date>{item.date}</Date>
              <ScoreContainer>
                <Score>{item.team1.score} - </Score>
                <Score>{item.team2.score}</Score>
              </ScoreContainer>
              {/* <Winner>Winner: {item.winner}</Winner> */}
            </ResultsContainer>

            <TeamContainer>
              <Team>{item.team2.player1}</Team>
              <Team>{item.team2.player2} </Team>
            </TeamContainer>
          </GameContainer>
        )}
      />
    </Container>
  );
};

// Define styles
const Container = styled.View({
  flex: 1,
  padding: 5,
  backgroundColor: "#fff",
});

const Title = styled.Text({
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 16,
  textAlign: "center",
});

const GameContainer = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 16,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
});

const TeamContainer = styled.View({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: 8,
});

const ResultsContainer = styled.View({
  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  paddingBottom: 30,
});
const ScoreContainer = styled.View({
  display: "flex",
  flexDirection: "row",
});
const Score = styled.Text({
  fontSize: 30,
  fontWeight: "bold",
});

const Date = styled.Text({
  fontSize: 10,
  fontWeight: "bold",
});

const Team = styled.Text({
  display: "flex",
  border: "1px solid #ccc",
  flexDirection: "column",
  fontSize: 16,
  padding: 15,
  paddingLeft: 30,
  paddingRight: 30,
  borderRadius: 20,
});

export default Scoreboard;
