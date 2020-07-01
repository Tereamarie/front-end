import { combineReducers } from 'redux';

import { strainReducer as strains } from './strainReducer';
import { symptomReducer as symptoms } from './symptomReducer';

export default combineReducers({
    strains,
    symptoms
});