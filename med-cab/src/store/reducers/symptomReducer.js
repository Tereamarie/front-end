import * as Types from "../actions";

const initialState = {
    symptoms: []
};

export const symptomReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_SYMPTOM:
        const { symptomName, severity, pharmaUse, description } = action.payload;
        const newSymptom = {
            symptomName: symptomName,
            pharmaUse: pharmaUse,
            severity: severity,
            description: description,
            id: Date.now()
        };
        return {
            ...state,
            symptoms: [...state.symptoms, newSymptom]
        };
        case Types.REMOVE_SYMPTOM:
        return {
            ...state,
            symptoms: [
            ...state.symptoms.filter(obj => obj.id !== action.payload.id)
            ]
        };
        default:
        return state;
    }
};