import { RoomsIndex } from "./RoomsIndex";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { UserReviews } from "./UserReviews";
import { Modal } from "./Modal";
import { useState } from "react";
import { RoomsShow } from "./RoomsShow";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [isUserReviewsVisible, setIsUserReviewsVisible] = useState(false);
  const [isRoomsShowVisible, setIsRoomsShowVisible] = useState(false);
  const [currentRoom, setCurrentRoom] = useState({});

  const handleUserReviews = () => {
    setIsUserReviewsVisible(true);
  };

  const handleClose = () => {
    setIsUserReviewsVisible(false);
  };

  const handleShowClose = () => {
    setIsRoomsShowVisible(false);
  };

  const handleRoomsShow = () => {
    setIsRoomsShowVisible(true);
    setCurrentRoom(room);
  };

  const room = {
    id: 1,
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
    url: "https://remodelerplatform.blob.core.windows.net/wwwmymatrixbasementcom/gallery/original/c4eea334-33ae-49d5-bae3-bc15ba2cab92.jpg",
  };

  const rooms = [
    {
      id: 1,
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
      url: "https://remodelerplatform.blob.core.windows.net/wwwmymatrixbasementcom/gallery/original/c4eea334-33ae-49d5-bae3-bc15ba2cab92.jpg",
    },
    {
      id: 2,
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
      url: "https://remodelerplatform.blob.core.windows.net/wwwmymatrixbasementcom/gallery/original/c4eea334-33ae-49d5-bae3-bc15ba2cab92.jpg",
    },
    {
      id: 3,
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
      url: "https://remodelerplatform.blob.core.windows.net/wwwmymatrixbasementcom/gallery/original/c4eea334-33ae-49d5-bae3-bc15ba2cab92.jpg",
    },
  ];

  return (
    <main>
      <h1>Welcome to Airbnb!</h1>
      <SignUp />
      <Login />
      <RoomsIndex rooms={rooms} onRoomsShow={handleRoomsShow} />
      <Modal show={isRoomsShowVisible} onClose={handleShowClose}>
        <RoomsShow room={currentRoom} />
      </Modal>
      <button onClick={handleUserReviews}>Leave a review</button>
      <Modal show={isUserReviewsVisible} onClose={handleClose}>
        <UserReviews />
      </Modal>
      <LogoutLink />
    </main>
  );
}
