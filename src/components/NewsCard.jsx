import React from 'react';

const NewsCard = ({ authorName, className = '', chosen = '', day, month, time, city = '', online, category ='', title, text }) => (
    <div className={`news-card ${className}`}>
        <div className="news-card__author">
            <div className="news-card__author-info">
                <div className={`news-card__author-logo ${className}`} />
                <div className="news-card__author-name">{authorName}</div>
            </div>
            {chosen && <div className="news-card__chosen">Выбор редакции</div>}
        </div>
        <div className={`news-card__image ${className}`}>
            {text && <div className="news-card__image-title">{text}</div>}
            <div className="news-card__image-wrap">
                <div className="_date">
                    <span className="_date-day">{day}</span>
                    <span className="_date-month">{month}</span>
                </div>
                <span>{time}</span>
            </div>
        </div>
        <div className="news-card__info">
            {city && <div className="news-card__info-city">{city}</div>}
            {online && <div className="news-card__online">Online</div>}
            {category && <div className="news-card__category">{category}</div>}
        </div>
       <div className="news-card__title">{title}</div>
    </div>
);

export default NewsCard;
