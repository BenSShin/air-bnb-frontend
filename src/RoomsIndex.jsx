/* eslint-disable react/prop-types */
export function RoomsIndex(props) {
  return (
    <div id="rooms-index">
      <h1>Available Rooms</h1>
      <div className="container text-center">
        <div className="row row-cols-3">
          {props.rooms.map((room) => (
            <div key={room.id} className="col">
              <h2>{room.description}</h2>
              <img src={room.url} />
              <h3>
                {room.city}, {room.state}
              </h3>
              <p>Total bedrooms: {room.total_bedrooms}</p>
              <p>Total bathrooms: {room.total_bathrooms}</p>
              <h3>${room.price}</h3>
              <button onClick={() => props.onRoomsShow(room)} className="btn btn-outline-danger">
                More info
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
