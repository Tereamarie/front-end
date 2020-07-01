import * as Types from "./actionTypes";

export const addSymptom = symptom => {
  console.log(symptom);
  return { type: Types.ADD_SYMPTOM, payload: symptom };
};

export const removeSymptom = symptom => {
  return { type: Types.REMOVE_SYMPTOM, payload: symptom };
};

export const addStrainToSaved = strain => {
  return { type: Types.ADD_STRAIN_TO_USER_SAVED, payload: strain };
};

export const removeStrainFromSaved = strain => {
  return { type: Types.REMOVE_STRAIN_FROM_USER_SAVED, payload: strain };
};

export const removeStrain = strain => dispatch => {
  dispatch(removeStrainFromSaved(strain));
};

export const addEntryToLog = entry => {
  return { type: Types.ADD_LOG_TO_DOSAGE_LOGS, payload: entry };
};