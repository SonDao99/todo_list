import projectFactory from './project';
import todoItem from './todoItem';
import storage from './storage';

const userInterface = () => {
    
    let allProjectNames = storage().getAllProjectNames();
    let allProjects = storage().getAllProjects();

    const updateProjectList = () => {
        let projectTemplate = document.querySelector('.projectTemplate');
        let projectList = document.querySelector('#allProjects');
        let newProjectButton = document.querySelector('#addProject');

        //clear project menu
        for (let i=projectList.childElementCount-2; i > 1 ; i--) {
            projectList.children[i].remove();
        }

        //loop through project list and add back the projects which haven't been deleted.
        for (let i=0; i < allProjectNames.length; i++) {
            let newProject = projectTemplate.cloneNode(true);
            newProject.classList.remove('projectTemplate');
            newProject.children[0].textContent = allProjectNames[i];
            projectList.insertBefore(newProject, newProjectButton);
        }

        //initiate project divs
        const projects = document.querySelectorAll('.project');
        projects.forEach(button => button.addEventListener('click', (e) => {
            projectTabButton(e);
        }))

        //initiate delete buttons
        const deleteProjectButtons = document.querySelectorAll('.deleteProject');
        deleteProjectButtons.forEach(button => button.addEventListener('click', (e) => {
            deleteProject(e);
        }))        
    }

    const addNewProject = () => {
        let projectTemplate = document.querySelector('.projectTemplate');
        let newProject = projectTemplate.cloneNode(true);
        newProject.classList.remove('projectTemplate');
        let newProjectButton = document.querySelector('#addProject');
        let projectList = document.querySelector('#allProjects');
        let projectNameDiv = document.querySelector('#projectName');
        let newTodoButton = document.querySelector('#addTodo');

        //once + button is pressed, replace name with input box
        newProject.children[0].innerHTML = "<input type='text' value='' class='textInputProject'>";
        
        newProject.children[0].children[0].addEventListener('keydown', (e) => {
            //press enter to submit name
            if (e.code === 'Enter' && newProject.children[0].children[0].value.trim() !== '') {
                
                if (allProjectNames.includes(newProject.children[0].children[0].value.trim().toLowerCase())) {
                    alert("Two projects can't have the same name. Please try again!");
                    return;
                } 

                //add new project to the 2 arrays
                allProjectNames.push(newProject.children[0].children[0].value.toLowerCase());
                allProjects.push(projectFactory(newProject.children[0].children[0].value.toLowerCase()));
                
                //replace input box with name
                newProject.children[0].innerHTML = newProject.children[0].children[0].value.toLowerCase();

                projectNameDiv.textContent = newProject.children[0].textContent;
                newTodoButton.style.display = 'block';
                displayTodoItems();
                storage().setAllProjects(allProjects);
            }
        })

        //adding project to menu before new project button
        projectList.insertBefore(newProject, newProjectButton);

        const projects = document.querySelectorAll('.project');
        projects.forEach(button => button.addEventListener('click', (e) => {
            projectTabButton(e);
        }))

        const deleteProjectButtons = document.querySelectorAll('.deleteProject');
        deleteProjectButtons.forEach(button => button.addEventListener('click', (e) => {
            deleteProject(e);
        }))
    }

    const projectTabButton = (e) => {
        let projectNameDiv = document.querySelector('#projectName');
        let newTodoButton = document.querySelector('#addTodo');

        if (e.target.classList[0] === 'textInputProject' || e.target.classList[0] === 'close' ) {
            return;
        } else if (e.target.parentNode.classList[0] === 'project') {
            projectNameDiv.textContent = e.target.textContent;
            newTodoButton.style.display = 'block';
            displayTodoItems();
        } else if (e.target.children[0].innerHTML.slice(0,6) !== '<input') {
            projectNameDiv.textContent = e.target.children[0].textContent;   
            newTodoButton.style.display = 'block';
            displayTodoItems(); 
        }

    }

    const displayTodoItems = () => {
        const todoListDiv = document.querySelector('#todoList');
        const projectNameDiv = document.querySelector('#projectName');
        const listItemTemplate = document.querySelector('.listTemplate');
        const newTodoButton = document.querySelector('#addTodo');

        for (let i=todoListDiv.childElementCount-2; i > 1 ; i--) {
            todoListDiv.children[i].remove();
        }

        let currentProject = allProjects.find(project => project.name.toLowerCase() === projectNameDiv.textContent.toLowerCase());
        for (let i=0; i < currentProject.getList().length; i++) {
            let newListItem = listItemTemplate.cloneNode(true);
            newListItem.classList.remove('listTemplate');

            let currentItemName = currentProject.getList()[i].name;
            newListItem.children[0].textContent = currentProject.getList()[i].name;

            let currentItem = currentProject.getList().find(item => item.name === currentItemName);
            if (currentItem.getStatus() === 'done') {
                newListItem.children[0].style.textDecoration = 'line-through 3px';
                newListItem.style.backgroundColor = '#bbc0c4';
            } else if (currentItem.getStatus() === 'none') {
                newListItem.children[0].style.textDecoration = '';
                newListItem.style.backgroundColor = '#DFE7EC';
            }

            let dueDate = currentProject.getList()[i].getDate();
            newListItem.children[1].children[0].children[0].value = dueDate;

            todoListDiv.insertBefore(newListItem, newTodoButton);
        }

        const deleteTodoButtons = document.querySelectorAll('.deleteTodoItem');
        deleteTodoButtons.forEach(button => button.addEventListener('click', (e) => {
            deleteTodoItem(e);
        }))

        const itemDescriptions = document.querySelectorAll('.itemDescription');
        itemDescriptions.forEach(div => div.addEventListener('click', (e) => {
            toggleItemStatus(e)
        }))

        const dateInputBoxes = document.querySelectorAll('.date');
        dateInputBoxes.forEach(box => box.addEventListener('change', (e) => {
            updateDate(e);
        }))
    }

    const deleteProject = (e) => {
        const projectNameDiv = document.querySelector('#projectName');
        const newTodoButton = document.querySelector('#addTodo');
        const todoListDiv = document.querySelector('#todoList');

        if (e.target.previousElementSibling.innerHTML.slice(0,6) !== '<input') {
            allProjectNames = allProjectNames.filter(project => project !== e.target.previousElementSibling.innerHTML);
            allProjects = allProjects.filter(project => project.name !== e.target.previousElementSibling.innerHTML);
            updateProjectList();

            projectNameDiv.textContent = '';
            newTodoButton.style.display = 'none';
            for (let i=todoListDiv.childElementCount-2; i > 1 ; i--) {
                todoListDiv.children[i].remove();
            }
            storage().setAllProjects(allProjects);
        } else {
            updateProjectList();
        }
    }

    const addNewTodo = () => {
        const todoListDiv = document.querySelector('#todoList');
        const projectNameDiv = document.querySelector('#projectName');
        const listItemTemplate = document.querySelector('.listTemplate');
        const newTodoButton = document.querySelector('#addTodo');

        let newItem = listItemTemplate.cloneNode(true);
        newItem.classList.remove('listTemplate');
        newItem.children[0].innerHTML = "<input type='text' value='' class='textInputItem'>";
        
        newItem.children[0].children[0].addEventListener('keydown', (event) => {
            //press enter to submit
            if (event.code === 'Enter' && newItem.children[0].children[0].value.trim() !== '') {

                //add new item to the arrays inside the correct project
                let currentProject = allProjects.find(project => project.name === projectNameDiv.textContent.toLowerCase());
                let allItemNames = [];
                for (let i=0; i<currentProject.getList().length; i++) {
                    allItemNames.push(currentProject.getList()[i].name);
                }
                if (allItemNames.includes(newItem.children[0].children[0].value.trim().toLowerCase())) {
                    alert("Two tasks can't be the same. Please try again!");
                    return;
                }

                
                let dueDate = newItem.children[1].children[0].children[0].value;

                currentProject.addItem(todoItem(newItem.children[0].children[0].value, 'none', dueDate));
                
                //replace input box with name
                newItem.children[0].innerHTML = newItem.children[0].children[0].value;

                displayTodoItems();
                storage().setAllProjects(allProjects);
            }
        })

        todoListDiv.insertBefore(newItem, newTodoButton);
        
        const deleteTodoButtons = document.querySelectorAll('.deleteTodoItem');
        deleteTodoButtons.forEach(button => button.addEventListener('click', (e) => {
            deleteTodoItem(e);
        }))
    }

    const deleteTodoItem = (e) => {
        let currentProjectName = document.querySelector('#projectName').textContent;
        let currentProject = allProjects.find(project => project.name === currentProjectName);

        if (e.target.parentNode.parentNode.children[0].innerHTML.slice(0,6) !== '<input') {
            currentProject.deleteItem(todoItem(e.target.parentNode.parentNode.children[0].textContent));
            displayTodoItems();
            storage().setAllProjects(allProjects);
        } else if (e.target.parentNode.parentNode.children[0].innerHTML.slice(0,6) === '<input') {
            displayTodoItems();
        }
    }

    const toggleItemStatus = (e) => {
        if (e.target.classList[0] === 'textInputItem') {
            return;
        }

        let currentProjectName = document.querySelector('#projectName').textContent;
        let currentItemName = e.target.textContent;
        let currentProject = allProjects.find(project => project.name === currentProjectName);
        let currentItem = currentProject.getList().find(item => item.name === currentItemName);

        if (currentItem.getStatus() === 'none') {
            e.target.style.textDecoration = 'line-through 3px';
            e.target.parentNode.style.backgroundColor = '#bbc0c4';
            currentItem.toggleStatus();
        } else if (currentItem.getStatus() === 'done') {
            e.target.style.textDecoration = '';
            e.target.parentNode.style.backgroundColor = '#DFE7EC';
            currentItem.toggleStatus();
        }

        storage().setAllProjects(allProjects);
    }

    const updateDate = (e) => {
        let newDate = e.target.value;
        let currentProjectName = document.querySelector('#projectName').textContent;
        let currentProject = allProjects.find(project => project.name === currentProjectName);
        let currentItemName = e.target.parentNode.parentNode.parentNode.children[0].textContent;
        let currentItem = currentProject.getList().find(item => item.name === currentItemName);

        currentItem.setDate(newDate);
        storage().setAllProjects(allProjects);
    }

    const buttonEventListeners = () => {

        let newProjectButton = document.querySelector('#addProject');
        newProjectButton.addEventListener('click', () => {addNewProject()});

        let newTodoButton = document.querySelector('#addTodo');
        newTodoButton.addEventListener('click', () => {addNewTodo()});

        updateProjectList();

    }

    return {buttonEventListeners}
}


export default userInterface;