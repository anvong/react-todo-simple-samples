import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'
// function to update state from input value
export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

// the action to add a job
export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

// the action to add a job
export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}