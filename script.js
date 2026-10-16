const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");
const loginMessage = document.getElementById("loginMessage");

const pageTitles = {
  overview: "Overview",
  diet: "My Diet Plan",
  records: "Medical Records",
  recipes: "Recipes",
  consultations: "Consultations",
};

// Demo login: fields are checked, but credentials are NOT authenticated.
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();

  if (!email) {
    loginMessage.textContent = "Please enter your email address.";
    return;
  }

  const firstName = email.split("@")[0].split(/[._-]/)[0];
  const displayName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

  document.getElementById("patientName").textContent = displayName;
  document.getElementById("welcomeName").textContent = displayName;

  loginPage.classList.add("hidden");
  dashboardPage.classList.remove("hidden");

  showSection("overview");
});

function showSection(sectionName) {
  document.querySelectorAll(".page-section").forEach(function (section) {
    section.classList.add("hidden");
  });

  document.getElementById(sectionName).classList.remove("hidden");

  document
    .querySelectorAll(".nav-link[data-section]")
    .forEach(function (button) {
      button.classList.toggle("active", button.dataset.section === sectionName);
    });

  document.getElementById("pageTitle").textContent =
    pageTitles[sectionName] || "Overview";
}

document.querySelectorAll(".nav-link[data-section]").forEach(function (button) {
  button.addEventListener("click", function () {
    showSection(button.dataset.section);
  });
});

document.getElementById("logoutButton").addEventListener("click", function () {
  dashboardPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
  loginForm.reset();
  loginMessage.textContent = "";
});

document
  .getElementById("recordFile")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const message = document.getElementById("fileMessage");

    if (file) {
      message.textContent =
        file.name +
        " selected. Demo only: this file has not been uploaded or saved.";
    } else {
      message.textContent = "";
    }
  });
