import { useNavigate } from "react-router-dom";

export default function FilterTeamType({
  teamType,
  teamName,
  selectedType,
  availableTypes,
}) {
  const navigate = useNavigate();

  // Buat proses pergantian tipe pemain (Men, Women, Academy, dll)
  const handlePlayerTypeChange = (e) => {
    const selectedType = e.target.value;
    navigate(`/${teamType}/${teamName}/${selectedType}/players`);
  };

  return (
    <>
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
    </>
  );
}
