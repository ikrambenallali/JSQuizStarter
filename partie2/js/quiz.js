async function getQuestios() {
    try {
        const response = await fetch('../data/javascript.json');
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}
getQuestios();


