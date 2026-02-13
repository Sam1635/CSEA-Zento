
import './EventCard.css';

export default function EventCard({
    frontImage,
    backImage,
    kanji,
    title,
    subtitle,
    category,
    date,
    location,
    price,
    description,
    
}) {
    return (
        <div className="event-card" id='event-section'>
            <div className="card-inner">
                {/* FRONT SIDE */}
                <div className="card-front">
                    <div className="card-image-container">
                        <img src={frontImage} alt={title} className="card-image" />
                        <div className="image-overlay"></div>
                    </div>
                    <div className="card-front-content">
                        <span className="event-kanji">{kanji}</span>
                        <h3 className="event-title">{title}</h3>
                        <p className="event-subtitle">{subtitle}</p>  
                        <div className="title-slash"></div>
                        <span className="event-category">{category}</span>
                    </div>
                    <div className="card-corner top-left"></div>
                    <div className="card-corner top-right"></div>
                    <div className="card-corner bottom-left"></div>
                    <div className="card-corner bottom-right"></div>
                </div>

                {/* BACK SIDE */}
                <div className="card-back">
                    <div className="card-back-image">
                        <img src={backImage} alt={`${title} Details`} />
                        <div className="back-overlay"></div>
                    </div>
                    <div className="card-back-content">
                        <h4 className="back-title">EVENT DETAILS</h4>
                        <div className="detail-line">
                            <span className="detail-icon">📅</span>
                            <span className="detail-text">{date}</span>
                        </div>
                        <div className="detail-line">
                            <span className="detail-icon">📍</span>
                            <span className="detail-text">{location}</span>
                        </div>
                        <div className="detail-line">
                            <span className="detail-icon">🎫</span>
                            <span className="detail-text">{price}</span>
                        </div>
                        <p className="event-description">{description}</p>
                        
                    </div>
                    <div className="card-corner top-left"></div>
                    <div className="card-corner top-right"></div>
                    <div className="card-corner bottom-left"></div>
                    <div className="card-corner bottom-right"></div>
                </div>
            </div>
        </div>
    );
}

// Default props
EventCard.defaultProps = {
    frontImage: '/event-image.jpg',
    backImage: '/event-details.jpg',
    kanji: '侍',
    title: 'EVENT NAME',
    category: 'TECH',
    date: 'TBA',
    location: 'TBA',
    price: 'TBA',
    description: 'Event description goes here.',
    onRegister: () => console.log('Register clicked')
};