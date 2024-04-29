import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditcClick() {
    {
      /* Forma correcta de cambiar estados respetando el scheduling de react */
    }
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(evento) {
    setPlayerName(evento.target.value);
  }
  {
    /* **************btn caption Save********************************* */
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  {
    /* *********************************************** */
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditcClick}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </li>
    </>
  );
}
{
  /* ddd */
}
