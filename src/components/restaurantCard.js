import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Label } from 'semantic-ui-react'


export default class RestaurantCard extends Component {
    render() {
        let { language, imgSrc, logoSrc, name, rating, description } = this.props;


        //rating representation
        rating = Number.isInteger(rating) ? rating : rating.toFixed(1);
        
        //set rating label color based on actual ratings
        let ratingLabelColor;

        if (rating < 4) {
            ratingLabelColor = '#d22f2f';
        } else if (rating < 8) {
            ratingLabelColor = '#ffbf00';
        } else {
            ratingLabelColor = '#16cc74';
        }

        const textAlignStyle = language === 'ar' ? { textAlign:'right' } : null;    //based on language
        const ratingStyle = language === 'en' ? { float:'right' } : { float:'left' };


        return (
            <Card>
                <Image src={imgSrc} />
                
                <Card.Content>
                    <Card.Header style={textAlignStyle}>
                        {/* Change the order of restautant name and logo based on language */}
                        { language === 'ar' ? name : null }
                        <Image 
                            avatar 
                            size='mini' 
                            verticalAlign='top' 
                            spaced={language === 'en' ? 'right' : 'left'} 
                            src={logoSrc} 
                        />                        
                        { language === 'en' ? name : null }
                        
                        <Label size='tiny' content={rating} style={{ backgroundColor: ratingLabelColor, ...ratingStyle }} />
                    </Card.Header>
                    
                    <Card.Description style={{ wordWrap: 'break-word', ...textAlignStyle }}>
                        {description}
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

RestaurantCard.propTypes = {
    imgSrc:      PropTypes.string.isRequired, 
    logoSrc:     PropTypes.string.isRequired, 
    name:        PropTypes.string.isRequired, 
    rating:      PropTypes.number.isRequired, 
    description: PropTypes.string.isRequired
};