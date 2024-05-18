const formContainer = document.getElementById("form-container");

const fieldData = {
  text: { type: "text", label: "Text Field:" },
  checkbox: { type: "checkbox", label: "Checkbox:" },
  radio: { type: "radio", label: "Radio Button:" },
};

function createField(fieldType) {
  const field = fieldData[fieldType];
  const label = document.createElement("label");
  label.textContent = field.label;

  const element = document.createElement("input");
  element.type = field.type;
  element.name = fieldType + "[]"; // Use array name for checkboxes/radio buttons

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function() {
    removeField(this.parentElement);
  });

  const container = document.createElement("div");
  container.classList.add("field-container"); // Add class for easier targeting
  container.appendChild(label);
  container.appendChild(element);
  container.appendChild(removeButton);

  formContainer.appendChild(container);
}

function removeField(fieldContainer) {
  formContainer.removeChild(fieldContainer);
}

const addTextField = document.getElementById("add-text");
addTextField.addEventListener("click", function() {
  createField("text");
});

const addCheckbox = document.getElementById("add-checkbox");
addCheckbox.addEventListener("click", function() {
  createField("checkbox");
});

const addRadio = document.getElementById("add-radio");
addRadio.addEventListener("click", function() {
  createField("radio");
});
