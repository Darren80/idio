import React, { Component } from 'react';
import './ListPosts.css';

export class ListPosts extends React.Component{
    constructor(props) {
        super(props);
        this.spreadContent = this.spreadContent.bind(this);
    }

    spreadContent() {
        if (this.props.idioContent) {
            
            let jsx = this.props.idioContent.content.map(thread => {

                let sectionStyle = {
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(" + thread.main_image_url + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  };

                return (
                    <div className="card" key={thread.id}>
                        <div className="cardBackgroundImage" style={sectionStyle}></div>
                        <a href={thread.full_details_url + "?key=" + this.props.apiKey}><p>{thread.title}</p></a>
                    </div>
                )
            });
            return jsx;
        }
    }

    render() {
        return (
            <div className="all-cards">
                {this.spreadContent()}
            </div>
        )
    }
}