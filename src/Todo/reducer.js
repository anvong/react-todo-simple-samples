import {SET_JOB, ADD_JOB, DELETE_JOB} from './constants'
// Init state
export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    // this function to handle actions and payload inside the action
    // console.log('Action:', action)
    // console.log('Prev state:', state)
    let newState
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                // job: action.payload,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            // make a jobs list copy
            let newJobs = [...state.jobs]
            // remove the job list with index passed inside the action
            newJobs.splice(action.payload, 1)
            // set new state
            return {
                ...state,
                // job: action.payload,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action.')
    }
    // console.log('New state:', newState)
    // return newState
}

export default reducer