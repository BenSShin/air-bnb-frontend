/* eslint-disable react/prop-types */
export function RoomsShow(props) {
  return (
    <div id="rooms-show">
      <h3>{props.room.description}</h3>
      <img src={props.room.url} />
      <h5>Address</h5>
      <p>{props.room.address}</p>
      <p>
        {props.room.city}, {props.room.state}
      </p>
      <p>Home type: {props.room.home_type}</p>
      <p>Room type: {props.room.room_type}</p>
      <p>Total bedrooms: {props.room.total_bedrooms}</p>
      <p>Total bathrooms: {props.room.total_bathrooms}</p>
      <p>Total occupancy: {props.room.total_occupancy}</p>
      <h4>${props.room.price} per night</h4>
      <form>
        <h4>Reserve</h4>
        <div>
          Start Date: <input type="date" />
        </div>
        <div>
          End Date: <input type="date" />
        </div>
        <div>
          <button type="submit">Reserve</button>
        </div>
      </form>
    </div>
  );
}
