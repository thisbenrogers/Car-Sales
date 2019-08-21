export const BUY_ITEM = "BUY_ITEM";
export const REM_FEAT = "REM_FEAT";

export const buyItem = item => {
    console.log("item in action: ", item);
    return {
        type: BUY_ITEM,
        payload: item
    }
};

export const removeFeature = item => {
    return {
        type: REM_FEAT,
        payload: item
    }
};

