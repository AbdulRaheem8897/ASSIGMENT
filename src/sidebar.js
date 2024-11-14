import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Back Button */}
      <div className="back">
        <button>← Back</button>
      </div>

      {/* Title */}
      <h1>Maitreya Buddha in Gesture of Fearlessness (Abhaya Mudra)</h1>

      {/* Like, Share, View buttons with counts */}
      <div className="actions">
        <div className="action-item">
          <span role="img" aria-label="like">👍</span>
          <span className="count">27</span>
        </div>
        <div className="action-item">
          <span role="img" aria-label="share">🔗</span>
          <span className="count">32</span>
        </div>
        <div className="action-item">
          <span role="img" aria-label="view">👁️</span>
          <span className="count">240</span>
        </div>
      </div>

      {/* Details */}
      <div className="details">
        <p><strong>Dynasty:</strong> Ahichchhatra</p>
        <p><strong>Period:</strong> 200 CE</p>
        <p><strong>Material:</strong> Sandstone</p>
        <p><strong>Location:</strong> National Museum</p>
      </div>

      {/* Description */}
      <div className="description">

<h4>Description</h4>
         
        <p>
          Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears heavily adorned earrings, wristlets, necklaces, and an amulet.
        </p>
        <button className="read-more"> → Read More </button>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="add-to-collection">Add to Collection</button>
        <button className="souvenir">Souvenir</button>
      </div>
    </div>
  );
}

export default Sidebar;
