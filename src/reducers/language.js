import * as languageActions from '../actions/languageActions'
import initialState from '../initialState'

const language = (state = initialState.language, action) => {

    switch (action.type) {
        case languageActions.SET_ARABIC_LANGUAGE:
            return { language: 'ar' };
        
        case languageActions.SET_ENGLISH_LANGUAGE:
        default:
            return { language: 'en' };
    }
}

export default language;