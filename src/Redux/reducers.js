import { INCREMENT, DECREMENT, INCREMENT_BY_TEN, DECREMENT_BY_TEN } from "./action";

const initialStte = {
    count: 0
}

const counterReducer = (state = initialStte, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1.
            }
        case INCREMENT_BY_TEN :
            return {
                ...state,
                count: state.count + 10
            }
        case DECREMENT_BY_TEN:
            return {
                ...state,
                count: state.count - 10
            }
        default:
            return state
    }
}

export default counterReducer