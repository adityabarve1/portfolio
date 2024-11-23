import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactMessages.css"; // Import the CSS file

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BASE_URL = "http://localhost:8000/api"; // Update this to your backend URL

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/contact`);
        setMessages(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch messages. Please try again later.");
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p className="loading">Loading messages...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="contact-messages">
      <h2 className="title">Contact Messages</h2>
      {messages.length === 0 ? (
        <p className="no-messages">No messages found.</p>
      ) : (
        <div className="table-container">
          <table className="messages-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Reply</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.message}</td>
                  <td>
                    <a href={`mailto:${msg.email}`} className="reply-button">
                      Reply
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactMessages;
