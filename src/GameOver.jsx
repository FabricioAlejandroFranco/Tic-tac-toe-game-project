export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} es el Ganador!</p>}
      {!winner && <p>{winner} Hay un empate</p>}
      <button onClick={onRestart}> Jugar de nuevo</button>
    </div>
  );
}
