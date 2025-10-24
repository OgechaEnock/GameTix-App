import React from "react";
import "../index.css";

function EventDetails({ event, onBuy }) {
  if (!event) {
    return (
      <div className="event-details-empty">
        <p>Select an event to view details</p>
      </div>
    );
  }

  return (
    <div className="event-details">
      <h2 className="details-title">{event.title}</h2>
      <p><strong>Sport:</strong> {event.sport}</p>
      <p><strong>Stadium:</strong> {event.stadium}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Price:</strong> Ksh {event.price}</p>
      <p>
        <strong>Status:</strong>{" "}
        {event.tickets > 0 ? (
          <span className="ticket-count">{event.tickets} tickets left</span>
        ) : (
          <span className="sold-out">Sold Out</span>
        )}
      </p>

      {event.tickets > 0 && (
        <button className="buy-btn" onClick={() => onBuy(event.id)}>
          Buy Ticket
        </button>
      )}
    </div>
  );
}

export default EventDetails;
