/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/buttons.module.css":
/*!***************************************!*\
  !*** ./src/styles/buttons.module.css ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"add":"src-styles-buttons-module__add--1RGLN","hide":"src-styles-buttons-module__hide--2ZNuR"});

/***/ }),

/***/ "./src/styles/input_project.module.css":
/*!*********************************************!*\
  !*** ./src/styles/input_project.module.css ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"inputProject":"src-styles-input_project-module__inputProject--1M_VC"});

/***/ }),

/***/ "./src/styles/input_todo.module.css":
/*!******************************************!*\
  !*** ./src/styles/input_todo.module.css ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"inputTodo":"src-styles-input_todo-module__inputTodo--2ljbb"});

/***/ }),

/***/ "./src/styles/todo_container.module.css":
/*!**********************************************!*\
  !*** ./src/styles/todo_container.module.css ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"todoContainer":"src-styles-todo_container-module__todoContainer--30VKB"});

/***/ }),

/***/ "./src/styles/todo_element.module.css":
/*!********************************************!*\
  !*** ./src/styles/todo_element.module.css ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"todoContainer":"src-styles-todo_element-module__todoContainer--1wDP9"});

/***/ }),

/***/ "./src/components/buttons.js":
/*!***********************************!*\
  !*** ./src/components/buttons.js ***!
  \***********************************/
/*! namespace exports */
/*! export HideProjectFormBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export HideTaskFormBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ShowProjectFormBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ShowTaskFormBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowProjectFormBtn": () => /* binding */ ShowProjectFormBtn,
/* harmony export */   "ShowTaskFormBtn": () => /* binding */ ShowTaskFormBtn,
/* harmony export */   "HideTaskFormBtn": () => /* binding */ HideTaskFormBtn,
/* harmony export */   "HideProjectFormBtn": () => /* binding */ HideProjectFormBtn
/* harmony export */ });
/* harmony import */ var _styles_buttons_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/buttons.module.css */ "./src/styles/buttons.module.css");
;

const ShowTaskFormBtn = () => `
  <button id="add-new-task" class="${_styles_buttons_module_css__WEBPACK_IMPORTED_MODULE_0__.default.add}">Add new Task</button>
`;

const ShowProjectFormBtn = () => `
  <button id="add-new-project" class="${_styles_buttons_module_css__WEBPACK_IMPORTED_MODULE_0__.default.add}">Add new Project</button>
`;

const HideProjectFormBtn = () => `
  <button id="hide-new-project" class="${_styles_buttons_module_css__WEBPACK_IMPORTED_MODULE_0__.default.hide}">X</button>
`;

const HideTaskFormBtn = () => `
  <button id="hide-new-task" class="${_styles_buttons_module_css__WEBPACK_IMPORTED_MODULE_0__.default.hide}">X</button>
`;




/***/ }),

/***/ "./src/components/project-form.js":
/*!****************************************!*\
  !*** ./src/components/project-form.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./src/components/buttons.js");
/* harmony import */ var _styles_input_project_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/input_project.module.css */ "./src/styles/input_project.module.css");
;


const projectForm = () => `
<div id="project-form-container"  class="${_styles_input_project_module_css__WEBPACK_IMPORTED_MODULE_1__.default.inputProject}">
  <h2>Add Project</h2>
  ${(0,_buttons__WEBPACK_IMPORTED_MODULE_0__.HideProjectFormBtn)()}
  <form id="input-project">
    <div>
      <label for="name">Title</label>
      <input type="text" id="name" name="name">
    </div>

    <input type="submit" value="Submit">
  </form>
</div>
`;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);


/***/ }),

/***/ "./src/components/task-container.js":
/*!******************************************!*\
  !*** ./src/components/task-container.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _styles_todo_container_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/todo_container.module.css */ "./src/styles/todo_container.module.css");
;

const taskContainer = () => `
  <div id="todo-container" class="${_styles_todo_container_module_css__WEBPACK_IMPORTED_MODULE_0__.default.todoContainer}"></div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskContainer);


/***/ }),

/***/ "./src/components/task-element.js":
/*!****************************************!*\
  !*** ./src/components/task-element.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _styles_todo_element_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/todo_element.module.css */ "./src/styles/todo_element.module.css");
;

const todoElement = todo => {
  const {
    title,
    description,
    priority,
    project,
  } = todo;

  return `
    <div class="${_styles_todo_element_module_css__WEBPACK_IMPORTED_MODULE_0__.default.todoContainer}">
      <div class="test">${title}</div>
      <div>${description}</div>
      <div>${priority}</div>
      <div>${project}</div>
    </div>
    `;
};


const projectToTag = project => {
  const title = project[1].name;
  const content = project[1].tasks;
  const isEmpty = content.length === 0;
  const genTags = (title, content) => title + content.map(todoElement).join('');

  if (isEmpty) {
    return `
     <div>
       Project ${title} has no todos
     </div>
     `;
  }
  return genTags(title, content);
};

const drawTodos = projects => {
  const projectEntries = Object.entries(projects);
  const projectTags = projectEntries.map(projectToTag).join('');
  const container = document.getElementById('todo-container');
  container.innerHTML = projectTags;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawTodos);


/***/ }),

/***/ "./src/components/task-form.js":
/*!*************************************!*\
  !*** ./src/components/task-form.js ***!
  \*************************************/
/*! namespace exports */
/*! export taskForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateProjectOptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskForm": () => /* binding */ taskForm,
/* harmony export */   "updateProjectOptions": () => /* binding */ updateProjectOptions
/* harmony export */ });
/* harmony import */ var _styles_input_todo_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/input_todo.module.css */ "./src/styles/input_todo.module.css");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/components/buttons.js");
;


const projectOption = projectName => `
<option value="${projectName}">${projectName}</option>
`;

const projectOptions = (accumulator,
  projectName) => accumulator + projectOption(projectName);

const updateProjectOptions = projectNames => {
  const projectSelect = document.getElementById('project-select');
  projectSelect.innerHTML = projectNames.reduce(projectOptions, '');
};

const taskForm = () => `
<div id="task-form-container" class="${_styles_input_todo_module_css__WEBPACK_IMPORTED_MODULE_0__.default.inputTodo}">
  <h2>Add Todo</h2>
  ${(0,_buttons__WEBPACK_IMPORTED_MODULE_1__.HideTaskFormBtn)()}
  <form id="input-task">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" name="title">
    </div>

    <div>
      <label for="description">Description</label>
      <input type="text" id="description" name="description">
    </div>

    <div>
      <label for="priority">Priority</label>
      <input type="number" id="number" name="priority">
    </div>

    <div>
      <label for="project">Project</label>
      <select name="project" id="project-select">
      </select>
    </div>

    <input type="submit" value="Submit">
  </div>
</form>`;





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_task_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/task-form */ "./src/components/task-form.js");
/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/buttons */ "./src/components/buttons.js");
/* harmony import */ var _components_project_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/project-form */ "./src/components/project-form.js");
/* harmony import */ var _components_task_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/task-container */ "./src/components/task-container.js");
/* harmony import */ var _utils_event_listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/event-listeners */ "./src/utils/event-listeners.js");
;





const home = () => `
  ${(0,_components_task_form__WEBPACK_IMPORTED_MODULE_0__.taskForm)()}
  ${(0,_components_project_form__WEBPACK_IMPORTED_MODULE_2__.default)()}
  ${(0,_components_buttons__WEBPACK_IMPORTED_MODULE_1__.ShowProjectFormBtn)()}
  ${(0,_components_buttons__WEBPACK_IMPORTED_MODULE_1__.ShowTaskFormBtn)()}
  ${(0,_components_task_container__WEBPACK_IMPORTED_MODULE_3__.default)()}
`;

const drawHome = () => {
  const content = document.getElementById('content');
  content.innerHTML = home();
};

window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  (0,_utils_event_listeners__WEBPACK_IMPORTED_MODULE_4__.default)();
});


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const project = name => {
  const tasks = [];
  const appendTask = task => tasks.push(task);
  return { name, tasks, appendTask };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const task = object => {
  const {
    title,
    description,
    priority,
    project,
  } = object;

  return {
    title, description, priority, project,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);


/***/ }),

/***/ "./src/utils/event-listeners.js":
/*!**************************************!*\
  !*** ./src/utils/event-listeners.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _components_task_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/task-element */ "./src/components/task-element.js");
/* harmony import */ var _components_task_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/task-form */ "./src/components/task-form.js");
;




const projects = {};
const showEl = targetID => {
  const el = document.getElementById(targetID);
  el.style.display = 'block';
};

const hideEl = targetID => {
  const el = document.getElementById(targetID);
  el.style.display = 'none';
};

const handleTaskForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const taskInfo = Object.fromEntries(formData);
  const newTodo = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(taskInfo);
  projects[taskInfo.project].appendTask(newTodo);
  hideEl('task-form-container');
  showEl('add-new-task');
  (0,_components_task_element__WEBPACK_IMPORTED_MODULE_2__.default)(projects);
  e.target.reset();
};

const handleProjectForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  if (!projects[object.name]) {
    projects[object.name] = (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(object.name);
  }
  (0,_components_task_form__WEBPACK_IMPORTED_MODULE_3__.updateProjectOptions)(Object.keys(projects));
  hideEl('project-form-container');
  showEl('add-new-project');
  (0,_components_task_element__WEBPACK_IMPORTED_MODULE_2__.default)(projects);
  e.target.reset();
};

const toggleVisibilityButton = ({
  showBtnId,
  hideBtnId,
  targetId,
}) => {
  const showBtn = document.getElementById(showBtnId);
  showBtn.addEventListener('click', () => {
    showEl(targetId);
    showEl(hideBtnId);
    hideEl(showBtnId);
  });

  const hideBtn = document.getElementById(hideBtnId);
  hideBtn.addEventListener('click', () => {
    hideEl(targetId);
    hideEl(hideBtnId);
    showEl(showBtnId);
  });
};

const addTodoFormEventListener = () => {
  const form = document.getElementById('input-task');
  form.addEventListener('submit', e => handleTaskForm(e));
};

const addProjectFormEventListener = () => {
  const form = document.getElementById('input-project');
  form.addEventListener('submit', e => handleProjectForm(e));
};

const addAllEventListeners = () => {
  (0,_components_task_form__WEBPACK_IMPORTED_MODULE_3__.updateProjectOptions)(Object.keys(projects));
  (0,_components_task_element__WEBPACK_IMPORTED_MODULE_2__.default)(projects);

  addTodoFormEventListener();
  addProjectFormEventListener();

  toggleVisibilityButton({
    showBtnId: 'add-new-task',
    hideBtnId: 'hide-new-task',
    targetId: 'task-form-container',
  });

  toggleVisibilityButton({
    showBtnId: 'add-new-project',
    hideBtnId: 'hide-new-project',
    targetId: 'project-form-container',
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addAllEventListeners);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;