export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_BY_TEN = 'INCREMENT_BY_TEN'
export const DECREMENT_BY_TEN = 'DECREMENT_BY_TEN'

export const increment = () => (
    {
        type: INCREMENT,
    }
)

export const decrement = () => (
    {
        type: DECREMENT
    }
)

export const incrementByTen = () => (
    {
        type: INCREMENT_BY_TEN
    }
)

export const decrementByTen = () => (
    {
        type: DECREMENT_BY_TEN
    }
)