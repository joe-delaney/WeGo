export const selectSearchResults = ({activities, searchResults}) => {
    let searchedActivities = [];
    searchResults.map((id) => {
        searchedActivities.push(activities[id]);
    })
    return searchedActivities;
}