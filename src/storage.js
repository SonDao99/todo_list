import projectFactory from './project';
import todoItem from './todoItem';

const storage = () => {
    const setAllProjects = (allProjectsArray) => {

        let allProjectNames = [];
        let allTodoListNames = [];
        let allTodoListStatuses = [];
        let allTodoListDates = [];

        for (let i=0; i<allProjectsArray.length; i++) {
            //project names:
            allProjectNames.push(allProjectsArray[i].name);

            //todo lists:
            let todoListNames = [];
            let todoListStatuses = [];
            let todoListDates = []
            for (let j=0; j<allProjectsArray[i].getList().length; j++) {
                todoListNames.push(allProjectsArray[i].getList()[j].name);

                todoListStatuses.push(allProjectsArray[i].getList()[j].getStatus());

                todoListDates.push(allProjectsArray[i].getList()[j].getDate())
            }
            allTodoListNames.push(todoListNames);
            allTodoListStatuses.push(todoListStatuses);
            allTodoListDates.push(todoListDates);
        }
        localStorage.setItem('allProjectNames', JSON.stringify(allProjectNames));
        localStorage.setItem('allTodoListNames', JSON.stringify(allTodoListNames));
        localStorage.setItem('allTodoListStatuses', JSON.stringify(allTodoListStatuses));
        localStorage.setItem('allTodoListDates', JSON.stringify(allTodoListDates));
    }

    const getAllProjects = () => {
        if (localStorage.getItem('allProjectNames') == null) {
            return [];
        } else {
            let allProjectsArray = [];
            let allProjectNames = JSON.parse(localStorage.getItem('allProjectNames'));
            let allTodoListNames = JSON.parse(localStorage.getItem('allTodoListNames'));
            let allTodoListStatuses = JSON.parse(localStorage.getItem('allTodoListStatuses'));
            let allTodoListDates = JSON.parse(localStorage.getItem('allTodoListDates'));

            for (let i=0; i<allProjectNames.length; i++) {
                allProjectsArray.push(projectFactory(allProjectNames[i]));

                for (let j=0; j<allTodoListNames[i].length; j++) {
                    allProjectsArray[i].addItem(todoItem(allTodoListNames[i][j], allTodoListStatuses[i][j], allTodoListDates[i][j]));
                }
            }

            return allProjectsArray;
        }
    }

    const getAllProjectNames = () => {
        if (localStorage.getItem('allProjectNames') == null) {
            return [];
        } else {
            let allProjectNames = JSON.parse(localStorage.getItem('allProjectNames'));
            return allProjectNames;
        }
    }

    return {setAllProjects, getAllProjects, getAllProjectNames}
}

export default storage;