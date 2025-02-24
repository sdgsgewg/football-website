export default function FilterCallup({
  teamType,
  setFilteredPlayers,
  players,
  selectedFilter,
  setSelectedFilter,
}) {
  // Buat proses filter by callup pemain timnas
  const handleCallupFilter = (e) => {
    const callupFilter = e.target.value;

    if (callupFilter === "called-up-players") {
      // setPlayers(players.filter((player) => player.isCalledUp));
      setFilteredPlayers(players.filter((player) => player.isCalledUp));
    } else {
      setFilteredPlayers(players);
    }
    setSelectedFilter(callupFilter);
  };

  return (
    <>
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
    </>
  );
}
