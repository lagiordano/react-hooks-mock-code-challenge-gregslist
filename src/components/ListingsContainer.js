import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onRemoveListing}) {


  const visibleListings = listings.map( listing => <ListingCard key={listing.id} listing={listing} onRemoveListing={onRemoveListing} /> );


  return (
    <main>
      <ul className="cards">
        {visibleListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
