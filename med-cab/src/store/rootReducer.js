import { combineReducers } from 'redux';

import { symptomReducer as symptoms } from './reducers/symptomReducer';
import { strainReducer as strains } from './reducers/strainReducer';
import { loginReducer as login } from './reducers/loginReducer';

export default combineReducers({
    symptoms,
    strains,
    login
});
