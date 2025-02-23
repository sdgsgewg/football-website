import { useState, useEffect } from "react";
import playerData from "../../data/playerData";
import PlayerSection from "./PlayerSection";
import { useNavigate, useParams } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();
  let { teamType, teamName, playerType } = useParams();

  const availableTypes = playerData[teamName]
    ? Object.keys(playerData[teamName])
    : [];

  const selectedType = availableTypes.includes(playerType)
    ? playerType
    : availableTypes[0];

  const players = playerData[teamName]?.[selectedType] || [];

  const [filteredPlayers, setFilteredPlayers] = useState(players);
  const [selectedFilter, setSelectedFilter] = useState("all-players");

  // ✅ Gunakan useEffect untuk update state ketika URL berubah
  useEffect(() => {
    const newPlayers = playerData[teamName]?.[selectedType] || [];
    setFilteredPlayers(newPlayers);
    setSelectedFilter("all-players"); // Reset filter setiap kali pindah tim
  }, [teamName, selectedType]);

  const handlePlayerTypeChange = (e) => {
    const selectedType = e.target.value;
    navigate(`/${teamType}/${teamName}/${selectedType}/players`);
  };

  const handleCallupFilter = (e) => {
    const callupFilter = e.target.value;

    if (callupFilter === "called-up-players") {
      setFilteredPlayers(players.filter((player) => player.isCalledUp));
      setSelectedFilter("called-up-players");
    } else {
      setFilteredPlayers(players);
      setSelectedFilter("all-players");
    }
  };

  const groupedPlayers = [
    {
      title: "Goalkeepers",
      players: filteredPlayers.filter((p) =>
        p.positions[0].includes("Goalkeeper")
      ),
    },
    {
      title: "Defenders",
      players: filteredPlayers.filter((p) => p.positions[0].includes("Back")),
    },
    {
      title: "Midfielders",
      players: filteredPlayers.filter((p) =>
        p.positions[0].includes("Midfield")
      ),
    },
    {
      title: "Forwards",
      players: filteredPlayers.filter((p) =>
        ["Winger", "Forward"].some((pos) => p.positions[0].includes(pos))
      ),
    },
  ];

  return (
    <section id="player" className="pt-36 pb-16 bg-slate-100">
      <div className="w-full">
        <div className="max-w-xl mx-auto text-center mb-8">
          <h4 className="font-semibold text-lg text-primary">Player</h4>
          <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
            {teamName} Teams
          </h2>
          <p className="font-medium text-md text-secondary md:text-lg">
            {teamName +
              " " +
              selectedType.charAt(0).toUpperCase() +
              selectedType.slice(1)}{" "}
            {selectedType.toLowerCase() === "academy" ? "" : "Senior "} Teams
          </p>
        </div>

        <div className="flex justify-center my-16 gap-4">
          {/* Dropdown untuk memilih tipe pemain */}
          <select
            className="w-xs p-2 border border-gray-300 rounded-lg text-dark font-semibold uppercase"
            value={selectedType}
            onChange={handlePlayerTypeChange}
          >
            {availableTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* Dropdown untuk filter callup */}
          {teamType === "nation" && (
            <select
              className="w-xs p-2 border border-gray-300 rounded-lg text-dark font-semibold uppercase"
              value={selectedFilter}
              onChange={handleCallupFilter}
            >
              <option value="all-players">All Players</option>
              <option value="called-up-players">Called Up Players</option>
            </select>
          )}
        </div>
      </div>

      {groupedPlayers.map(({ title, players }) => (
        <PlayerSection
          key={title}
          title={title}
          teamType={teamType}
          teamName={teamName}
          players={players}
          playerType={selectedType}
        />
      ))}
    </section>
  );
}
