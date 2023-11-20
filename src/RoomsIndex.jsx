export function RoomsIndex(props) {
  return (
    <div>
      <h1>Available Rooms</h1>
      {props.rooms.map((room) => (
        <div key={room.room_id}>
          <h2>{room.description}</h2>
        </div>
      ))}
    </div>
  );
}
