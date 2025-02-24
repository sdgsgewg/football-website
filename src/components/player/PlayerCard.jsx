import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import flagImages from "../../data/flagImages";
import clubImages from "../../data/clubImages";

export default function PlayerCard({ teamType, teamName, player, playerType }) {
  const navigate = useNavigate();

  const [origin, setOrigin] = useState(null);
  const [playerOrigin, setPlayerOrigin] = useState(null);
  const [flagUrl, setFlagUrl] = useState("/assets/img/flags/default.png");

  // useEffect untuk memperbarui state saat player berubah
  useEffect(() => {
    if (!player) return;

    const newOrigin =
      teamType === "nation" ? player.club : player.nationalities;
    setOrigin(newOrigin);

    if (Array.isArray(newOrigin)) {
      const newPlayerOrigin = newOrigin[0];
      setPlayerOrigin(newPlayerOrigin);
      setFlagUrl(
        flagImages[newPlayerOrigin?.replaceAll(" ", "")] ||
          "/assets/img/flags/default.png"
      );
    } else {
      setPlayerOrigin(newOrigin);
      setFlagUrl(
        clubImages[newOrigin?.replaceAll(" ", "")?.replaceAll("'", "")] ||
          "/assets/img/flags/default.png"
      );
    }
  }, [teamType, teamName, player, playerType]); // useEffect akan berjalan jika data berubah

  const { image, name, firstName, lastName, slug, positions, squadNumber } =
    player;

  return (
    <div
      className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 cursor-pointer"
      onClick={() =>
        navigate(`/${teamType}/${teamName}/${playerType}/players/${slug}`)
      }
    >
      <div className="flex flex-col p-4">
        <div
          className="rounded-t-md shadow-md flex justify-center overflow-hidden"
          style={{ width: "100%", height: "250px" }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110"
          />
        </div>

        <div className="bg-white p-4">
          <div className="flex flex-row justify-between mb-2">
            <div className="flex flex-col">
              <p
                className={`font-semibold ${
                  firstName === lastName ? "text-white" : "text-slate-400"
                } text-large uppercase`}
              >
                {firstName}
              </p>
              <p className="font-bold text-xl uppercase">{lastName}</p>
            </div>
            <p className="text-5xl font-bold">{squadNumber}</p>
          </div>

          <div className="flex items-center font-semibold text-base text-secondary">
            <h5>{positions[0]}</h5>
          </div>

          <div className="flex items-center font-semibold text-sm text-secondary gap-2 mt-2">
            <img
              src={flagUrl}
              alt={playerOrigin}
              className={`${Array.isArray(origin) ? "w-6 h-4" : "w-4 h-4"}`}
            />
            <h5>{playerOrigin}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
