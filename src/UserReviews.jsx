export function UserReviews() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const params = new FormData(event.target);
  //   console.log("handle submit", params);
  //   props.onCreatePost(params);
  //   event.target.reset();
  // };

  return (
    <div>
      <h3>Leave a review!</h3>
      <form>
        <div>
          Review: <input name="review" type="text" />
          Rating: <input name="rating" type="integer" />
        </div>
        <div>
          <button type="submit" className="btn btn-outline-danger">
            Submit your review
          </button>
        </div>
      </form>
    </div>
  );
}
