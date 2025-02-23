import { useNavigate, useParams } from "react-router-dom";
import flagImages from "../../data/flagImages";
import playerData from "../../data/playerData";
import clubImages from "../../data/clubImages";

export default function PlayerDetail() {
  const { teamType, teamName, playerType, slug } = useParams();
  const navigate = useNavigate();

  const players = playerData[teamName][playerType];
  const player = players.find((p) => p.slug === slug);

  if (!player) {
    return (
      <div className="text-center pt-36 pb-16">
        <p>Player not found.</p>
      </div>
    );
  }

  const {
    image,
    name,
    dob,
    pob,
    positions,
    preferredFoot,
    squadNumber,
    height,
    weight,
    nationalities,
    marketValue,
  } = player;

  const calculateAge = () => {
    const birthDate = new Date(dob); // Mengubah string jadi objek Date
    const today = new Date(); // Tanggal saat ini

    let age = today.getFullYear() - birthDate.getFullYear(); // Hitung selisih tahun

    // Cek apakah ulang tahun sudah lewat dalam tahun ini
    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age -= 1; // Kurangi umur jika ulang tahun belum lewat
    }

    return age;
  };

  // Positions
  const mainPosition = positions[0];
  const otherPositions = positions.slice(1);

  return (
    <div className="pt-36 pb-16">
      <div className="w-full">
        {/* Player Name and Image */}
        <div className="max-w-xl mx-auto text-center mb-8">
          <h1 className="text-5xl font-bold uppercase">{name}</h1>

          <div
            className="flex justify-center overflow-hidden my-8"
            style={{ width: "100%", height: "350px" }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Player Profile */}
        <div className="max-w-xl mx-auto text-center mb-8">
          <div className="bg-red-600 text-white text-2xl font-bold px-5 py-3 uppercase mb-2">
            <p className="text-start">Player Profile</p>
          </div>

          {/* Name */}
          <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">Name:</p>
            <p className="text-large font-semibold col-span-2 text-start">
              {name}
            </p>
          </div>

          {/* Squad Number */}
          <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">
              Squad Number:
            </p>
            <p className="text-large font-semibold col-span-2 text-start">
              {squadNumber}
            </p>
          </div>

          {/* Position */}
          <div className="bg-white grid grid-cols-3 border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">
              Position:
            </p>
            {/* Main Position */}
            <div className="flex flex-col items-start text-large font-semibold col-span-1 text-start">
              <p>Main Position:</p>
              <p>{mainPosition}</p>
            </div>

            {/* Other Positions */}
            {otherPositions.length > 0 && (
              <div className="flex flex-col text-large font-semibold col-span-1 text-start">
                <p>Other Position:</p>
                {otherPositions.map((position) => (
                  <p key={position}>{position}</p>
                ))}
              </div>
            )}
          </div>

          {/* Date of Birth */}
          <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">
              Date of Birth:
            </p>
            <p className="text-large font-semibold col-span-2 text-start">
              {dob + " (" + calculateAge() + ")"}
            </p>
          </div>

          {/* Place of Birth */}
          <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">
              Place of Birth:
            </p>
            <p className="text-large font-semibold col-span-2 text-start">
              {pob}
            </p>
          </div>

          {/* Height */}
          <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">Height:</p>
            <p className="text-large font-semibold col-span-2 text-start">
              {height + " m"}
            </p>
          </div>

          {/* Weight */}
          <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">Weight:</p>
            <p className="text-large font-semibold col-span-2 text-start">
              {weight + " kg"}
            </p>
          </div>

          {/* Preferred Foot */}
          <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">
              Preferred Foot:
            </p>
            <p className="text-large font-semibold col-span-2 text-start">
              {preferredFoot}
            </p>
          </div>

          {/* Nationality */}
          <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">
              Nationality:
            </p>
            <div className="flex flex-col gap-1 text-large font-semibold col-span-2 text-start">
              {nationalities.map((nationality) => (
                <div
                  key={nationality}
                  className="flex flex-row items-center gap-2"
                >
                  <img
                    src={
                      flagImages[nationality.replaceAll(" ", "")] ||
                      "/assets/img/flags/default.png"
                    }
                    alt={nationality}
                    className="w-6 h-4"
                  ></img>
                  <p>{nationality}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Club */}
          {teamType === "nation" && (
            <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
              <p className="text-large font-bold uppercase text-start">Club:</p>
              <div className="flex flex-col gap-1 text-large font-semibold col-span-2 text-start">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={
                      clubImages[player.club.replaceAll(" ", "").replaceAll("'", "")] ||
                      "/assets/img/flags/default.png"
                    }
                    alt={player.club}
                    className="w-4 h-4"
                  ></img>
                  <p>{player.club}</p>
                </div>
              </div>
            </div>
          )}

          {/* Market Value */}
          <div className="bg-white grid grid-cols-3 items-center border-b-2 border-gray-200 px-5 py-3">
            <p className="text-large font-bold uppercase text-start">
              Market Value:
            </p>
            <p className="text-large font-semibold col-span-2 text-start">
              {player.marketValue >= 1
                ? `€${marketValue.toFixed(2)}m` // Jutaan (€1.80m)
                : `€${(marketValue * 1000).toFixed(0)}k`}{" "}
              {/* Ribuan (€300k) */}
            </p>
          </div>
        </div>

        {/* Back to Players Page */}
        <div className="max-w-xl mx-auto flex items-center justify-center ">
          <button
            className="bg-red-500 text-white px-8 py-2 rounded-xl cursor-pointer"
            onClick={() => navigate(`/${teamType}/${teamName}/${playerType}/players`)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
