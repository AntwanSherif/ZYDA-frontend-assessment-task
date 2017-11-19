import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Menu, Header, Image, Search, List, Container, Input } from 'semantic-ui-react'
import autobind from 'autobind-decorator'

import { setEnglishLanguageAction, setArabicLanguageAction } from '../actions/languageActions'


@connect(state => state)
@autobind
export default class SearchBar extends Component {
    
    state={
        isLoading: false, 
        results: [], 
        value: ''
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    handleResultSelect = (e, { result }) => this.setState({ value: result.title });
    
    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });
    
        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();
    
            const { data:restaurantsData } = this.props.restaurants;
            
            RegExp.escape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); //escape special characters
            const re = new RegExp(RegExp.escape(value), 'i');
            // const isMatch = result => re.test(result.title);

            
            const searchResults = restaurantsData.map(restaurant => {
                // re.test(restaurant.attributes['title-en'])
                const { 'title-ar': name_ar, 'title-en': name_en, 'logo-url': logoSrc, rating } = restaurant.attributes;
                
                // if (name_en === )
                return (
                    <List.Item key={restaurant.id}>
                        <Image avatar src={logoSrc} />
                        <List.Content>
                            <List.Header as='a' content={name_en} />
                            <List.Description content={rating} />
                        </List.Content>
                    </List.Item>
                )
            });
    
            this.setState({
                isLoading: false,
                // results: restaurantsData.filter(isMatch),
                // results: restaurantsData.filter(restaurant => re.test(restaurant.attributes['title-en'])),
                results: searchResults,
            });
        }, 500)
    }

    switchLanguage = (lang) => {
        const { dispatch } = this.props;

        if (lang === 'en') {
            dispatch(setEnglishLanguageAction());
        } else {
            dispatch(setArabicLanguageAction());
        }
    }

    render() {
        const { language } = this.props;
        const { isLoading, value, results } = this.state        
        const { language: searchbarLanguage } = language;

        return (
            <Menu size='small' fixed='top' borderless>
                <Container>
                    {/* Logo */}
                    <Menu.Item style={{paddingLeft:0}}>
                      <Image size='mini' src='/assets/images/logo.png' />
                    </Menu.Item>
                    
                    {/* Search input */}
                    <Menu.Item>
                        <Input fluid icon='search' placeholder='Search...' />
                        {/* <Search
                            loading={isLoading}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={this.handleSearchChange}
                            results={results}
                            value={value}
                            {...this.props}
                        />*/}
                    </Menu.Item>
                    
                    {/* Switch language button */}
                    {
                        searchbarLanguage === 'en'
                        ? (
                            <Menu.Item onClick={this.switchLanguage.bind(this, 'ar')} position='right'>
                                <Image src='/assets/images/language_switch_english.svg' />
                            </Menu.Item>
                        )
                        : (
                            <Menu.Item onClick={this.switchLanguage.bind(this, 'en')} position='right'>
                                <Image src='/assets/images/language_switch_arabic.svg' />
                            </Menu.Item>
                        )
                    }
                </Container>
            </Menu>
        );
    }
}

SearchBar.propTypes = {

};