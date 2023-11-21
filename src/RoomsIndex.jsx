/* eslint-disable react/prop-types */
export function RoomsIndex(props) {
  return (
    <div>
      <h1>Available Rooms</h1>
      {props.rooms.map((room) => (
        <div key={room.room_id}>
          <h2>{room.description}</h2>
          <h3>
            {room.city}, {room.state}
          </h3>
          <p>Total bedrooms: {room.total_bedrooms}</p>
          <p>Total bathrooms: {room.total_bathrooms}</p>
          <h3>${room.price}</h3>
        </div>
      ))}
    </div>
  );
}
