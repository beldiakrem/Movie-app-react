import React, { Component } from 'react'
import Rating from '../component/Rating'

const Card = (props) => {
        return (
            <div className="container">
                {props.cards.filter(el=>el.Rating>= props.rate && el.Title.toLowerCase().includes(props.search.toLowerCase())).map(el=>
            <div className="movie-card">
                <img className="movie-header" src={el.Image}></img>

                <div className="movie-content">
                    <div className="movie-content-header">
                        <h3 className="movie-title">{el.}</h3>
                    </div>
                    <div className="movie-info">
                        <div className="info-section">
                            <label>Released</label>
                            <span>{el.Released}</span>
                        </div>
                        <div className="info-section">
                            <label>Runtime</label>
                            <span>{el.Runtime}</span>
                        </div>
                        <div className="info-section">
                            <label>Rating</label>
                            <Rating number={el.Rating}/>
                        </div>

                    </div>
                </div>
            </div>
                  )}
        </div>

        )
    }

export default Card;
