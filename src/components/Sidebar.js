import React from "react";

function Sidebar({ onFilter, onPriceFilter, activeFilter, selectedEvent }) {
  const sports = ["Football", "Basketball", "Golf"];

  return (
    <aside className="sidebar">
      
      <h3 className="sidebar-title">Sports</h3>
      {sports.map((sport) => (
        <button
          key={sport}
          className={`tab-btn ${activeFilter === sport ? "active" : ""}`}
          onClick={() => onFilter(sport)}
        >
          {sport}
        </button>
      ))}

      <hr />

      
      <div className="filter-section">
        <h3 className="sidebar-title">Filter by Price</h3>
        <select
          className="price-select"
          onChange={(e) => onPriceFilter(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="low">Below Ksh 500</option>
          <option value="mid">Ksh 500 - 1000</option>
          <option value="high">Above Ksh 1000</option>
        </select>
      </div>

      <hr />

      {/*  Event Details */}
      {selectedEvent && (
        <div className="event-details-box">
          <h3 className="details-header">Event Details</h3>
          <div className="details-body">
            <p><strong>Title:</strong> {selectedEvent.title}</p>
            <p><strong>Sport:</strong> {selectedEvent.sport}</p>
            <p><strong>Stadium:</strong> {selectedEvent.stadium}</p>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Time:</strong> {selectedEvent.time}</p>
            <p><strong>Price:</strong> Ksh {selectedEvent.price}</p>
            <p>
              <strong>Tickets:</strong>{" "}
              {selectedEvent.tickets > 0 ? (
                <span className="ticket-available">
                  {selectedEvent.tickets} left
                </span>
              ) : (
                <span className="ticket-soldout">Sold Out</span>
              )}
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
