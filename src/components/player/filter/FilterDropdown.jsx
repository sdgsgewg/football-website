import FilterTeamType from "./FilterTeamType";
import FilterCallup from "./FilterCallup";

export default function FilterDropdown({
  teamType,
  teamName,
  setFilteredPlayers,
  players,
  selectedFilter,
  setSelectedFilter,
  selectedType,
  availableTypes,
}) {
  return (
    <>
      <div className="flex justify-center my-16 gap-4">
        {/* Dropdown untuk memilih tipe pemain */}
        <FilterTeamType
          teamType={teamType}
          teamName={teamName}
          selectedType={selectedType}
          availableTypes={availableTypes}
        />

        {/* Dropdown untuk filter callup */}
        <FilterCallup
          teamType={teamType}
          setFilteredPlayers={setFilteredPlayers}
          players={players}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
    </>
  );
}
