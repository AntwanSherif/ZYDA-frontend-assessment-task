import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Segment, Card } from 'semantic-ui-react'

import RestaurantCard from '../components/restaurantCard'
import { fecthRestaurantsRequestAction } from '../actions/restaurantsActions'


@connect(state => state)
export default class RestaurantsContainer extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fecthRestaurantsRequestAction());
    }
    
    render() {
        const { restaurants, language } = this.props;
        const { isFetching, data } = restaurants;
        const { language: searchbarLanguage } = language;

        //lorem ipsum description (because description isn't included in API)
        const description_en = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
        const description_ar = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
        أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
        أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات.`;
        
        return (
            <Segment loading={isFetching}>
                {
                    isFetching
                    ? <div>Loading...</div>
                    : (
                        <Card.Group itemsPerRow={2} doubling>
                        {
                            data.length && data.map(restaurant => {
                                const { 'title-ar': name_ar, 'title-en': name_en, 'photo-url': imgSrc, 'logo-url': logoSrc, rating } = restaurant.attributes;
        
                                return(
                                    <RestaurantCard 
                                        key={restaurant.id}
                                        name={searchbarLanguage === 'en' ? name_en : name_ar}
                                        description={searchbarLanguage === 'en' ? description_en : description_ar}
                                        logoSrc={logoSrc !== '/logo_urls/original/missing.png' ? logoSrc : '/assets/images/default-image.png'}
                                        imgSrc={imgSrc !== '/photo_urls/original/missing.png' ? imgSrc : '/assets/images/default-image.png'}
                                        rating={rating || 0}
                                        language={searchbarLanguage}
                                    />
                                )
                            })
                        }
                        </Card.Group>                
                    )
                }
            </Segment>
        );
    }
}