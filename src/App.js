import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EventCard from "./components/EventCard";
import "./index.css";
import Footer from "./components/Footer";


const API_URL = "http://localhost:3001/events";

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Fetch from db.json
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setEvents)
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  const filteredEvents = events
    .filter((ev) =>
      filter ? ev.sport.toLowerCase() === filter.toLowerCase() : true
    )
    .filter((ev) =>
      search ? ev.title.toLowerCase().includes(search.toLowerCase()) : true
    )
    .filter((ev) => {
      if (priceFilter === "low") return ev.price < 500;
      if (priceFilter === "mid") return ev.price >= 500 && ev.price <= 1000;
      if (priceFilter === "high") return ev.price > 1000;
      return true;
    });

  // Handle Ticket Purchase
  const handleBuy = async (id) => {
    const event = events.find((ev) => ev.id === id);
    if (!event || event.tickets <= 0) {
      alert("Tickets sold out!");
      return;
    }

    const updatedEvent = { ...event, tickets: event.tickets - 1 };

    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
    });

    // Post purchase record to db.json 
    const purchaseData = {
      eventId: id,
      eventName: event.title,
      sport: event.sport,
      price: event.price,
      location: event.location,
      time: new Date().toLocaleString(),
    };

    await fetch("http://localhost:3001/purchases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(purchaseData),
    });

    // Purchase Alert
    setEvents((prev) =>
      prev.map((ev) => (ev.id === id ? updatedEvent : ev))
    );

    alert(`Ticket purchased successfully for ${event.title}!`);
  };

  return (
    <div>
      <Navbar
        onSearch={setSearch}
        onReset={() => {
          setSearch("");
          setFilter("");
          setPriceFilter("");
          setSelectedEvent(null);
        }}
      />
      

      <div className="layout">
        
        <Sidebar
          onFilter={setFilter}
          onPriceFilter={setPriceFilter}
          activeFilter={filter}
          selectedEvent={selectedEvent}
          onBuy={handleBuy}
        />

        <main className="content">
          <div id="product-container" className="grid">
            {filteredEvents.length ? (
              filteredEvents.map((ev) => (
                <div key={ev.id} onClick={() => setSelectedEvent(ev)}>
                  <EventCard event={ev} onBuy={handleBuy} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-info">No events found</div>
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;

