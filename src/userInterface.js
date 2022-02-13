import projectFactory from './project';

const userInterface = () => {
    let allProjectNames = [];
    let allProjects = [];

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

    const nameNewProject = () => {
        let projectTemplate = document.querySelector('.projectTemplate');
        let newProject = projectTemplate.cloneNode(true);
        newProject.classList.remove('projectTemplate');
        let newProjectButton = document.querySelector('#addProject');
        let projectList = document.querySelector('#allProjects');

        //once + button is pressed, replace name with input box
        newProject.children[0].innerHTML = "<input type='text' value='' class='textInput'>";
        
        newProject.children[0].children[0].addEventListener('keydown', (e) => {
            //press enter to submit name
            if (e.code === 'Enter' && newProject.children[0].children[0].value.trim() !== '') {
                
                //add new project to the 2 arrays
                allProjectNames.push(newProject.children[0].children[0].value);
                allProjects.push(projectFactory(newProject.children[0].children[0].value));

                //replace input box with name
                newProject.children[0].innerHTML = newProject.children[0].children[0].value;
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
        let todoListDiv = document.querySelector('#todoList');
        let projectNameDiv = document.querySelector('#projectName');
        let listItemTemplate = document.querySelector('.listTemplate');
        
        if (e.target.classList[0] === 'textInput') {
            return;
        } else if (e.target.parentNode.classList[0] === 'project') {
            projectNameDiv.textContent = e.target.textContent;
        } else if (e.target.children[0].innerHTML.slice(0,6) !== '<input') {
            projectNameDiv.textContent = e.target.children[0].textContent;    
        }
    }

    const deleteProject = (e) => {
        if (e.target.previousElementSibling.innerHTML.slice(0,6) !== '<input') {
            allProjectNames = allProjectNames.filter(project => project !== e.target.previousElementSibling.innerHTML);
            allProjects = allProjects.filter(project => project.name !== e.target.previousElementSibling.innerHTML);
            updateProjectList();
        } else {
            updateProjectList();
        }
    }

    const loadAllPage = () => {
        let todoListDiv = document.querySelector('#todoList');
        let projectNameDiv = document.querySelector('#projectName');
        let listItemTemplate = document.querySelector('.listTemplate');

        projectNameDiv.textContent = "All";
    }

    const loadTodayPage = () => {
        let todoListDiv = document.querySelector('#todoList');
        let projectNameDiv = document.querySelector('#projectName');
        let listItemTemplate = document.querySelector('.listTemplate');

        projectNameDiv.textContent = "Today";
    }

    const buttonEventListeners = () => {
        let newProjectButton = document.querySelector('#addProject');
        newProjectButton.addEventListener('click', () => {nameNewProject()});

        let allButton = document.querySelector('#all');
        allButton.addEventListener('click', () => {loadAllPage()});

        let todayButton = document.querySelector('#today');
        todayButton.addEventListener('click', () => {loadTodayPage()});

    }

    return {buttonEventListeners}
}


export default userInterface;