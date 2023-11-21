import { RoomsIndex } from "./RoomsIndex";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { UserReviews } from "./UserReviews";
import { Modal } from "./Modal";
import { useState } from "react";

export function Content() {
  const [isUserReviewsVisible, setIsUserReviewsVisible] = useState(false);

  const handleUserReviews = () => {
    setIsUserReviewsVisible(true);
  };

  const handleClose = () => {
    setIsUserReviewsVisible(false);
  };

  const room = [
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
      <Login />
      <RoomsIndex rooms={room} />
      <SignUp />
      <button onClick={handleUserReviews}>Leave a review</button>
      <Modal show={isUserReviewsVisible} onClose={handleClose}>
        <UserReviews />
      </Modal>
    </main>
  );
}
