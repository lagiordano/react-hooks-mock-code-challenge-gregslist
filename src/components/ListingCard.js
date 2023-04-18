import React, {useState} from "react";

function ListingCard({listing, onRemoveListing}) {

  

  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick () {
    setIsLiked(isLiked => !isLiked);
  }

  function handleDeleteClick () {
    fetch(` http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    });
    onRemoveListing(listing.id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
