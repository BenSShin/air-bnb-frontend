import { RoomsIndex } from "./RoomsIndex";
import { SignUp } from "./SignUp";

export function Content() {
  const rooms = [
    {
      user_id: 1,
      address: "1313 Mockingbird Ln",
      city: "Chicago",
      state: "Illinois",
      price: 100.0,
      description: "Cozy basement apartment",
      home_type: "apartment building",
      room_type: "bedroom",
      total_occupancy: 4,
      total_bedrooms: 2,
      total_bathrooms: 1,
    },
  ];

  return (
    <main>
      <h1>Welcome to React!</h1>
      <RoomsIndex rooms={rooms} />
      <SignUp />
    </main>
  );
}
