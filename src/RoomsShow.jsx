/* eslint-disable react/prop-types */
export function RoomsShow(props) {
  return (
    <div id="rooms-show">
      <h3>{props.room.description}</h3>
      {/* <img src={props.room.url} /> */}
      <p>{props.room.address}</p>
      <p>
        {props.room.city}, {props.room.state}
      </p>
      <p>{props.room.home_type}</p>
      <p>{props.room.room_type}</p>
      <p>{props.room.total_bedrooms}</p>
      <p>{props.room.total_bathrooms}</p>
      <p>{props.room.total_occupancy}</p>
      <h3>${props.room.price}</h3>
      <form>
        <h3>Reserve</h3>
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
