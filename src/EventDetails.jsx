import "./EventDetails.css";
import { useEffect } from "react";

export default function EventDetails() {
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const section = document.querySelector('.event-details-section');
    //         if (!section) return;
            
    //         const rect = section.getBoundingClientRect();
    //         const windowHeight = window.innerHeight;
            
    //         // Calculate visibility percentage
    //         const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    //         const visibilityPercent = Math.max(0, Math.min(1, visibleHeight / windowHeight));
            
    //         // Apply only fade effect, no scale to avoid white splash
    //         section.style.opacity = visibilityPercent;
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     handleScroll(); // Initial call
        
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <section className="event-details-section">
            {/* Background grid effect */}
            <div className="grid-overlay"></div>
            
            {/* Decorative corner elements */}
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>

            <div className="details-container">
                {/* Entry fee banner at top */}
                <div className="fee-banner">
                    <span className="fee-label">ENTRY FEE</span>
                    <span className="fee-amount">₹150</span>
                    <span className="fee-note">(Per Head)</span>
                </div>

                {/* Key message */}
                <div className="key-message">
                    <span style={{ position: 'relative', zIndex: 1 }}>
                        Once the Entry Fee is Paid, Participants can Participate In any Three Events.
                    </span>
                </div>

                {/* Info list - compact */} 
                <div className="info-list">
                    <div className="info-item">
                        <div className="item-icon">◆</div>
                        <div className="item-content">
                            <p>Participants may pay an additional <span className="highlight">₹50</span> to access extra Two events.</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="item-icon">◆</div>
                        <div className="item-content">
                            <p>Once you pay the registration fees, you will receive a <span className="highlight">Unique PARTICIPANT ID</span> and registration links for all the events through your mail.</p>
                        </div> 
                    </div>

                    <div className="info-item">
                        <div className="item-icon">◆</div>
                        <div className="item-content">
                            <p>You can register as a team but all individual are asked to pay thier registration fee. You have to use your unique <span className="highlight">PARTICIPANT ID</span> while registering for the events. </p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="item-icon">◆</div>
                        <div className="item-content">
                            <p>The Additional Events will be held at Fixed time Attend the events at your own risk.</p>
                        </div>
                    </div>


                    <div className="info-item">
                        <div className="item-icon">◆</div>
                        <div className="item-content">
                            <p>Participants are requested to check your mail ID frequently once the payment is done.</p>
                        </div>
                    </div>

                    <div className="info-item featured">
                        <div className="item-icon">◆</div>
                        <div className="item-content">
                            <p><span className="highlight">Refreshments and Lunch will Be Provided.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}