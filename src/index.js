import './style.css';

import userInterface from './userInterface';

let UI = userInterface();

document.addEventListener('DOMContentLoaded', UI.buttonEventListeners());