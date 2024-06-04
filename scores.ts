const calculateRank = () => {};

const calculateWin = (teamAScore: number, teamBScore: number) => {
  if (teamAScore >= 21 && (teamAScore - teamBScore >= 2 || teamAScore === 30)) {
    return "Team 1";
  }
  if (teamBScore >= 21 && (teamBScore - teamAScore >= 2 || teamBScore === 30)) {
    return "Team 2";
  }
  return "No winner";
};

const players = {
  Mohsin: {
    name: "mohsin",
    wins: 0,
    losses: 0,
    ranking: null,
    xp: null,
  },
  Yasin: {
    name: "yasin",
    wins: 0,
    losses: 0,
    ranking: null,
    xp: null,
  },
  Rayyan: {
    name: "rayyan ",
    wins: 0,
    losses: 0,
    ranking: null,
    xp: null,
  },
  Saiful: {
    name: "saiful",
    wins: 0,
    losses: 0,
    ranking: null,
    xp: null,
  },
  Raqeeb: {
    name: "raqeeb",
    wins: 0,
    losses: 0,
    ranking: null,
    xp: null,
  },
};

export const badmintonGames = [
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
    team1: { player1: "Person A", player2: "Person D", score: 21 },
    team2: { player1: "Person B", player2: "Person E", score: 19 },
    winner: "Team 3",
    score: "21-18",
  },
  {
    date: "2024-06-03",
    team1: { player1: "Person A", player2: "Person C" },
    team2: { player1: "Person A", player2: "Person E" },
    winner: "Team 4",
    score: "19-21",
  },
  {
    date: "2024-06-04",
    team1: { player1: "Person B", player2: "Person D" },
    team2: { player1: "Person C", player2: "Person D" },
    winner: "Team 8",
    score: "15-21",
  },
  {
    date: "2024-06-05",
    team1: { player1: "Person C", player2: "Person E" },
    team2: { player1: "Person D", player2: "Person E" },
    winner: "Team 9",
    score: "21-10",
  },
  {
    date: "2024-06-06",
    team1: { player1: "Person A", player2: "Person B" },
    team2: { player1: "Person A", player2: "Person C" },
    winner: "Team 12",
    score: "17-21",
  },
  {
    date: "2024-06-07",
    team1: { player1: "Person A", player2: "Person D" },
    team2: { player1: "Person A", player2: "Person E" },
    winner: "Team 14",
    score: "16-21",
  },
  {
    date: "2024-06-08",
    team1: { player1: "Person B", player2: "Person C" },
    team2: { player1: "Person B", player2: "Person D" },
    winner: "Team 16",
    score: "18-21",
  },
  {
    date: "2024-06-09",
    team1: { player1: "Person B", player2: "Person E" },
    team2: { player1: "Person C", player2: "Person D" },
    winner: "Team 18",
    score: "14-21",
  },
  {
    date: "2024-06-10",
    team1: { player1: "Person C", player2: "Person E" },
    team2: { player1: "Person D", player2: "Person E" },
    winner: "Team 20",
    score: "12-21",
  },
];
