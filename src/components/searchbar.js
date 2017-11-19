import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Menu, Image, Container, Input } from 'semantic-ui-react'
import autobind from 'autobind-decorator'

import { setEnglishLanguageAction, setArabicLanguageAction } from '../actions/languageActions'


@connect(state => state)
@autobind
export default class SearchBar extends Component {

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
        const { language: searchbarLanguage } = language;

        return (
            <Menu fluid size='small' fixed='top' borderless>
                <Container>
                    {/* Logo */}
                    <Menu.Item>
                      <Image size='mini' src='/assets/images/logo.png' />
                    </Menu.Item>
                    
                    {/* Search input */}
                    <Menu.Item position='right' style={{width:'67%'}}>
                        <Input fluid icon='search' placeholder='Search restaurant ...' />
                    </Menu.Item>
                    
                    <Menu.Item position='right'>
                        {/* Switch language button */}
                        {
                            searchbarLanguage === 'en'
                            ? <Image src='/assets/images/language_switch_english.svg' spaced='left' style={{cursor: 'pointer'}} onClick={this.switchLanguage.bind(this, 'ar')} />
                            : <Image src='/assets/images/language_switch_arabic.svg'  spaced='left' style={{cursor: 'pointer'}} onClick={this.switchLanguage.bind(this, 'en')} />
                        }
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}