
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const textarea = document.querySelector("textarea");
  const ul = document.querySelector("ul");
  const task = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = input.value;
    const description = textarea.value;

    if (title.trim() === "" || description.trim() === "") {
      alert("Please enter both title and description.");
      return;
    }

    const newTask = {
      title,
      description,
    };

    task.push(newTask);
    updateTaskList();
    input.value = "";
    textarea.value = "";
  });

  function updateTaskList() {
    ul.innerHTML = "";
    task.forEach((item, index) => {
      ul.innerHTML += `
      <li class="d-flex justify-content-between shadow-sm list-group-item mb-3">
        <span class="item">
          ${item.title}
          ${item.description}
        </span>
        <span class="asset">
          <span class="delete" onclick="deleteTask(${index})">❌</span>
          &nbsp; &nbsp;
          <span class="update" onclick="editTask(${index})">✏️</span>
        </span>
      </li>
      `;
    });
  }

  function deleteTask(index) {
    task.splice(index, 1);
    updateTaskList();
  }

  function editTask(index) {
    const item = task[index];
    const updatedTitle = prompt("Enter updated title:", item.title);
    const updatedDescription = prompt(
      "Enter updated description:",
      item.description
    );

    if (updatedTitle !== null && updatedDescription !== null) {
      task[index] = {
        title: updatedTitle,
        description: updatedDescription,
      };
      updateTaskList();
    }
  }

