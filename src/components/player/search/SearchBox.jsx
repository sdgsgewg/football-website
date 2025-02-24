import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox({
  selectedFilter,
  setFilteredPlayers,
  players,
}) {
  const [value, setValue] = useState("");

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);

    let updatedPlayers = players;

    if (selectedFilter === "called-up-players") {
      updatedPlayers = updatedPlayers.filter((player) => player.isCalledUp);
    }

    if (searchValue !== "") {
      updatedPlayers = updatedPlayers.filter((player) =>
        player.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setFilteredPlayers(updatedPlayers);
  };

  return (
    <>
      <div className="flex justify-center my-16">
        <form className="w-md" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="w-[85%] outline-none bg-none border border-[#adadad] p-2 mt-4 mb-3 rounded-l-xl text-black"
            name="search"
            id="search"
            value={value}
            placeholder="Search..."
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="w-[15%] bg-[#adadad] text-white border-none p-2 rounded-r-xl cursor-pointer hover:bg-[#767676] transition duration-300"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </>
  );
}
