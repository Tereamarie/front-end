import * as Types from "../actions";

const initialState = {
      
     strains: [
        {
            id: 1,
            name: "Tangie",
            type: "sativa",
            rating: 4.1,
            effects: "Happy, Hungry, Focused, Creative, Paranoia",
            description: "Heavily influenced by Sativa, Tangie gives recreational users the uplifting effects they are looking for. Cerebral characteristics include euphoria, creativity, focus, and happiness. The THC level is above average making it more suitable for the intermediate or advanced user. For medical users, the herb is versatile due to its balanced nature. Try it for its sedative effect that may alleviate pain, stress, depression, and insomnia. Some have reported that it is good munchie herb; use it for digestive problems, lack of appetite, and nausea. Side effects of dry mouth and bloodshot eyes are typical for cannabis products.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Tangie.jpg"
        }
    ],
     

     savedStrains: [
        {
            name: "White Widow",
            type: "sativa",
            rating: 4.5,
            effects: "Energetic, Euphoric, Cotton Mouth",
            description: "What this strain lacks in flavor profile, it makes up for in quick-acting cerebral effects. Users can become more acutely perceptive of their surroundings, tuned into sounds and patterns that may have gone unnoticed before. Enthusiasts also describe an almost immediate uplift in mood and an energy and focus that can applied to either mundane tasks like cleaning or more complex problem-solving processes. White Widow can also be creatively valuable, inducing a kind of rapid-fire thought association that can open up some previously unexplored territory. Psychedelic effects like visual distortion and increased perception can amplify the impact of music or art, while a very mild body buzz mellows users out. Because of its deeply cerebral effects, this strain is typically more psychologically than physically helpful. Its effects manage nausea, anxiety and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/White-Widow-Icon.png"
        }
    ]
    };

    export const strainReducer = (state = initialState, action) => {
        switch (action.type) {
            case Types.ADD_STRAIN_TO_USER_SAVED:
            const strain = action.payload;
            console.log(strain);
            return {
                ...state,
                savedStrains: [...state.savedStrains, strain]
            };
            case Types.REMOVE_STRAIN_FROM_USER_SAVED:
            return {
                ...state,
                savedStrains: [
                ...state.savedStrains.filter(obj => obj.id !== action.payload.id)
                ]
            };
            default:
            return state;
        }
    }; 
