const links = {
    /* Accept POST */
    ADD_DAY:                    'https://vast-cliffs-86394.herokuapp.com/api/add/dailyworkout',
    ADD_EXERCISE:               'https://vast-cliffs-86394.herokuapp.com/api/add/exercise/',        //      + dayID
    ADD_SET:                    'https://vast-cliffs-86394.herokuapp.com/api/add/set/',             //      + EXERCISEID
    /* Accept Get */
    GET_DAYS:                   'https://vast-cliffs-86394.herokuapp.com/api/get/dailyworkout',
    GET_DAY_EXERCISES:          'https://vast-cliffs-86394.herokuapp.com/api/get/exercises/'
}

export default links;