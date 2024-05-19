
function createUserProfiles(originalNames, modifiedNames){
    
    if (originalNames.length !== modifiedNames.length){
        throw new Error("Arrays have to be of the same length.")
    }

    const userProfiles = [];
    for(let i = 0; i < originalNames.length; i++){
        userProfiles.push({
            id: i + 1,
            originalName: originalNames[i],
            modifiedName: modifiedNames[i]
        })
    }
    return userProfiles;
}

module.exports = {createUserProfiles};