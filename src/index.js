document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    const input = event.target['new-task-description'].value;
    submitTask(input);
    form.reset();
  })
});


const submitTask = (todo) => {
  const ul = document.querySelector("#tasks")
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteTask)
  delBtn.innerText = "X";
  li.textContent =`${todo} `;
  li.appendChild(delBtn)
  ul.appendChild(li);
  
}

const deleteTask = (event) => {
   event.target.parentNode.remove();
}