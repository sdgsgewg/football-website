import { useState, useEffect, useContext } from "react";
import playerData from "../../data/playerData";
import PlayerSection from "./PlayerSection";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../../context/PlayerContext";
import SearchBox from "./search/SearchBox";
import FilterDropdown from "./filter/FilterDropdown";

export default function Player() {
  // const navigate = useNavigate();
  let { teamType, teamName, playerType } = useParams();

  const availableTypes = playerData[teamName]
    ? Object.keys(playerData[teamName])
    : [];
  const selectedType = availableTypes.includes(playerType)
    ? playerType
    : availableTypes[0];

  const { players, setPlayers } = useContext(PlayerContext);
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  const [selectedFilter, setSelectedFilter] = useState("all-players");

  // useEffect: untuk update state ketika URL berubah
  useEffect(() => {
    let newPlayers = playerData[teamName]?.[selectedType] || [];
    setPlayers(newPlayers);
    setFilteredPlayers(players);
  }, [teamName, selectedType, players, setPlayers]);

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

        {/* Filter */}
        <FilterDropdown
          teamType={teamType}
          teamName={teamName}
          setFilteredPlayers={setFilteredPlayers}
          players={players}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          selectedType={selectedType}
          availableTypes={availableTypes}
        />

        {/* Search Box */}
        <SearchBox
          selectedFilter={selectedFilter}
          setFilteredPlayers={setFilteredPlayers}
          players={players}
        />
      </div>

      {/* Hasil Entri Players */}
      {/* Tidak Ditemukan */}
      {filteredPlayers.length === 0 && (
        <div className="text-center text-gray-500">
          <p>Player Not Found</p>
        </div>
      )}
      {/* Ditemukan */}
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
