const form = document.querySelector("form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const ul = document.querySelector("ul");
const li = document.querySelector('li');
const task = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const [title, description] = event.target;
    console.log(title.value, description.value);
    // const newTask = {
    //     title :title.value,
    //     description: description.value
    // }
    // task.push(newTask);
    // console.log(task)

    ul.innerHTML += `
    <li
    class="d-flex justify-content-between shadow-sm list-group-item mb-3">
    <span class="item">
    ${title.value}   
      ${description.value}
    </span>
    <span class="asset">
        <span class="delete">❌</span>
        &nbsp; &nbsp;
        <span class="update">✏️</span>
    </span>
</li>
    `
});
