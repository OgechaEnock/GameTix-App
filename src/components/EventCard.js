import React from "react";

function EventCard({ event, onBuy }) {
  return (
    <div className="event-card">
      <img src={event.thumbnail} alt={event.title} className="event-image" />

      <div className="event-body">
        <h3>{event.title}</h3>
        <p className="sport">{event.sport}</p>

        <div className="event-info">
          <span className="price-tag">Ksh {event.price}</span>
          {event.tickets > 0 ? (
            <span className="ticket-count">{event.tickets} left</span>
          ) : (
            <span className="ticket-count sold">Sold Out</span>
          )}
        </div>

        {event.tickets > 0 && (
          <button className="buy-btn" onClick={() => onBuy(event.id)}>
            Buy Ticket
          </button>
        )}
      </div>
    </div>
  );
}

export default EventCard;
