(()=>{"use strict";const t=(t,e)=>t+(t=>`\n<option value="${t}">${t}</option>\n`)(e),e=t=>{const{title:e,description:n,priority:o,project:i}=t;return`\n    <div class="src-styles-todo_element-module__todoContainer--1wDP9">\n      <div class="test">${e}</div>\n      <div>${n}</div>\n      <div>${o}</div>\n      <div>${i}</div>\n    </div>\n    `},n=t=>{const n=t[0],o=t[1];return 0===o.length?`Project ${n} has no tagas`:((t,n)=>t+n.map(e).join(""))(n,o)},o=t=>{const e=Object.entries(t).map(n).join("");document.getElementById("todo-container").innerHTML=e},i={},d=({btnId:t,targetId:e})=>{const n=document.getElementById(t);return n.addEventListener("click",(()=>function(t){const e=document.getElementById(t);e.style.display="none"===e.style.display||""===e.style.display?"block":"none"}(e))),n.outerHTML},r=()=>{document.getElementById("input-todo").addEventListener("submit",(t=>(t=>{t.preventDefault();const e=new FormData(t.target),n=Object.fromEntries(e),d=(t=>{const{title:e,description:n,priority:o,project:i}=t;return{title:e,description:n,priority:o,project:i}})(n);i[n.project].push(d),o(i)})(t))),document.getElementById("input-project").addEventListener("submit",(e=>(e=>{e.preventDefault();const n=new FormData(e.target),d=Object.fromEntries(n);var r;i[d.name]!==[]&&(i[d.name]=[]),r=Object.keys(i),document.getElementById("project-select").innerHTML=r.reduce(t,""),o(i)})(e))),d({btnId:"add-new-todo",targetId:"input-todo"}),d({btnId:"add-new-project",targetId:"input-project"})};window.addEventListener("DOMContentLoaded",(()=>{document.getElementById("content").innerHTML=`\n  \n<h2>Add Todo</h2>\n<form id="input-todo" class="src-styles-input_todo-module__inputTodo--2ljbb">\n  <div>\n    <label for="title">Title</label>\n    <input type="text" id="title" name="title">\n  </div>\n\n  <div>\n    <label for="description">Description</label>\n    <input type="text" id="description" name="description">\n  </div>\n\n  <div>\n    <label for="priority">Priority</label>\n    <input type="number" id="number" name="priority">\n  </div>\n\n  <div>\n    <label for="project">Project</label>\n    <select name="project" id="project-select">\n    </select>\n  </div>\n\n  <input type="submit" value="Submit">\n</form>\n  \n<h2>Add Project</h2>\n<form id="input-project" class="src-styles-input_project-module__inputProject--1M_VC">\n  <div>\n    <label for="name">Title</label>\n    <input type="text" id="name" name="name">\n  </div>\n\n  <input type="submit" value="Submit">\n</form>\n  \n  <button id="add-new-todo" class="btn">Add new Todo</button>\n\n  \n  <button id="add-new-project" class="btn">Add new Project</button>\n\n  \n  <div id="todo-container" class="src-styles-todo_container-module__todoContainer--30VKB"></div>\n\n`,r()}))})();