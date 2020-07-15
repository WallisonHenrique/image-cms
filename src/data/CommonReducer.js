export const CommonReducer = (...reducers) => (storeData, action) => {
    for (let i = 0; i < reducers.length; i++ ) {
        const newStore = reducers[i](storeData, action);
        if (newStore !== storeData) {
            return newStore;
        }
    }
    console.log('CommonReducer');
    return storeData;
}
