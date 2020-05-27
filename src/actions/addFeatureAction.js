export const UPDATE_FEATURES = "UPDATE_FEATURES";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

const updateFeatures = newPrice => {
    console.log("trying to find the new price: ", newPrice)
    return {
        type: UPDATE_FEATURES,
        payload: newPrice
    }


}

export const removeFeature = featureId => {
    console.log("feature id: ", featureId);
    return {
        type: REMOVE_FEATURE,
        payload: featureId
    }

}

export default updateFeatures