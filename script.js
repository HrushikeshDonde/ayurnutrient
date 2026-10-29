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
  analysis: "Analysis",
  report: "Report",
};

// Demo login only. This does not authenticate or authorize users.
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const role = document.getElementById("userRole").value;

  if (!email) {
    loginMessage.textContent = "Please enter your email address.";
    return;
  }

  const firstName = email.split("@")[0].split(/[._-]/)[0];
  const displayName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

  loginMessage.textContent = "";

  if (role === "dietitian") {
    loginPage.classList.add("hidden");
    dashboardPage.classList.add("hidden");
    document.getElementById("dietitianDashboard").classList.remove("hidden");

    document.getElementById("dietitianName").textContent = displayName;
    document.getElementById("dietitianWelcome").textContent = displayName;
    showDietitianSection("dtOverview");
    renderDietitianData();
  } else {
    document.getElementById("dietitianDashboard").classList.add("hidden");
    loginPage.classList.add("hidden");
    dashboardPage.classList.remove("hidden");

    document.getElementById("patientName").textContent = displayName;
    document.getElementById("welcomeName").textContent = displayName;
    showSection("overview");
  }
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

/* AyurNutrient: 7-day diet plan generator */

const dietForm = document.getElementById("dietForm");

if (dietForm) {
  const weeklyMeals = [
    {
      day: "Monday",
      breakfast: [
        "Vegetable poha",
        "Vegetable poha",
        "Boiled eggs with toast",
        "Vegetable omelette with toast",
      ],
      lunch: [
        "Dal, roti and mixed vegetables",
        "Chickpea curry, rice and vegetables",
        "Dal, roti and mixed vegetables",
        "Chicken curry, rice and vegetables",
      ],
      snacks: [
        "Apple and a handful of nuts",
        "Apple and roasted chickpeas",
        "Fruit and yogurt",
        "Fruit and yogurt",
      ],
      dinner: [
        "Vegetable khichdi with curd",
        "Vegetable khichdi with plant-based yogurt",
        "Vegetable khichdi with curd",
        "Grilled chicken with vegetables and roti",
      ],
    },
    {
      day: "Tuesday",
      breakfast: [
        "Idli with sambar",
        "Idli with sambar",
        "Idli with sambar and boiled egg",
        "Egg bhurji with whole-wheat toast",
      ],
      lunch: [
        "Rajma, rice and salad",
        "Rajma, rice and salad",
        "Rajma, rice and salad",
        "Fish curry, rice and vegetables",
      ],
      snacks: [
        "Buttermilk and fruit",
        "Unsweetened plant-based drink and fruit",
        "Buttermilk and fruit",
        "Fruit and a handful of nuts",
      ],
      dinner: [
        "Paneer bhurji with roti",
        "Tofu bhurji with roti",
        "Paneer bhurji with roti",
        "Chicken and vegetable stir-fry with rice",
      ],
    },
    {
      day: "Wednesday",
      breakfast: [
        "Vegetable upma",
        "Vegetable upma",
        "Vegetable upma with boiled egg",
        "Egg omelette with whole-wheat toast",
      ],
      lunch: [
        "Chole, roti and cucumber salad",
        "Chole, roti and cucumber salad",
        "Chole, roti and cucumber salad",
        "Chicken curry with roti and salad",
      ],
      snacks: [
        "Roasted chana and orange",
        "Roasted chana and orange",
        "Yogurt and fruit",
        "Yogurt and fruit",
      ],
      dinner: [
        "Moong dal khichdi and vegetables",
        "Moong dal khichdi and vegetables",
        "Moong dal khichdi and vegetables",
        "Grilled fish with rice and vegetables",
      ],
    },
    {
      day: "Thursday",
      breakfast: [
        "Besan chilla with curd",
        "Besan chilla with plant-based yogurt",
        "Besan chilla with curd",
        "Boiled eggs and vegetable toast",
      ],
      lunch: [
        "Vegetable pulao with raita",
        "Vegetable pulao with plant-based yogurt",
        "Vegetable pulao with raita",
        "Chicken pulao with salad",
      ],
      snacks: [
        "Banana and nuts",
        "Banana and nuts",
        "Fruit and yogurt",
        "Fruit and yogurt",
      ],
      dinner: [
        "Palak paneer with roti",
        "Palak tofu with roti",
        "Palak paneer with roti",
        "Egg curry with rice and vegetables",
      ],
    },
    {
      day: "Friday",
      breakfast: [
        "Dosa with sambar",
        "Dosa with sambar",
        "Dosa with sambar and boiled egg",
        "Egg bhurji with roti",
      ],
      lunch: [
        "Dal, rice, bhindi and salad",
        "Dal, rice, bhindi and salad",
        "Dal, rice, bhindi and salad",
        "Fish with rice, bhindi and salad",
      ],
      snacks: [
        "Sprouts chaat",
        "Sprouts chaat",
        "Sprouts chaat and yogurt",
        "Sprouts chaat and yogurt",
      ],
      dinner: [
        "Vegetable and paneer wrap",
        "Vegetable and tofu wrap",
        "Vegetable and paneer wrap",
        "Chicken and vegetable wrap",
      ],
    },
    {
      day: "Saturday",
      breakfast: [
        "Oats with milk and fruit",
        "Oats with plant-based milk and fruit",
        "Oats with milk and fruit",
        "Oats with milk and fruit",
      ],
      lunch: [
        "Vegetable biryani with raita",
        "Vegetable biryani with plant-based yogurt",
        "Vegetable biryani with raita",
        "Chicken biryani with salad",
      ],
      snacks: [
        "Seasonal fruit and nuts",
        "Seasonal fruit and nuts",
        "Yogurt with fruit",
        "Yogurt with fruit",
      ],
      dinner: [
        "Mixed dal, roti and vegetables",
        "Mixed dal, roti and vegetables",
        "Mixed dal, roti and vegetables",
        "Egg curry, roti and vegetables",
      ],
    },
    {
      day: "Sunday",
      breakfast: [
        "Aloo paratha with curd",
        "Aloo paratha with plant-based yogurt",
        "Aloo paratha with curd",
        "Vegetable omelette with toast",
      ],
      lunch: [
        "Vegetable pulao, dal and salad",
        "Vegetable pulao, dal and salad",
        "Vegetable pulao, dal and salad",
        "Chicken curry, rice and salad",
      ],
      snacks: [
        "Roasted makhana and fruit",
        "Roasted makhana and fruit",
        "Roasted makhana and fruit",
        "Roasted makhana and fruit",
      ],
      dinner: [
        "Vegetable soup with roti and paneer",
        "Vegetable soup with roti and tofu",
        "Vegetable soup with roti and paneer",
        "Grilled chicken with soup and roti",
      ],
    },
  ];

  dietForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const age = Number(document.getElementById("patientAge").value);
    const preference = document.getElementById("dietPreference").value;
    const goal = document.getElementById("healthGoal").value;
    const bodyType = document.getElementById("bodyType").value;

    if (!Number.isInteger(age) || age < 18 || age > 100) {
      alert("Please enter an age between 18 and 100 for this demo.");
      return;
    }

    // Each meal has: vegetarian, vegan, eggetarian, non-vegetarian options.
    const optionIndex = {
      vegetarian: 0,
      vegan: 1,
      eggetarian: 2,
      nonvegetarian: 3,
    }[preference];

    const goalLabels = {
      balanced: "Balanced eating",
      weight: "Weight management",
      energy: "Everyday energy",
    };

    const preferenceLabels = {
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      eggetarian: "Eggetarian",
      nonvegetarian: "Non-vegetarian",
    };

    const bodyTypeLabels = {
      "not-selected": "Not selected",
      vata: "Vata",
      pitta: "Pitta",
      kapha: "Kapha",
    };

    const planGrid = document.getElementById("dietPlanGrid");
    planGrid.replaceChildren();

    weeklyMeals.forEach(function (day) {
      const card = document.createElement("article");
      card.className = "meal-day-card";

      const title = document.createElement("h4");
      title.textContent = day.day;
      card.appendChild(title);

      [
        ["Breakfast", day.breakfast[optionIndex]],
        ["Lunch", day.lunch[optionIndex]],
        ["Snacks", day.snacks[optionIndex]],
        ["Dinner", day.dinner[optionIndex]],
      ].forEach(function (meal) {
        const item = document.createElement("div");
        item.className = "meal-item";

        const label = document.createElement("strong");
        label.textContent = meal[0];

        const description = document.createElement("span");
        description.textContent = meal[1];

        item.append(label, description);
        card.appendChild(item);
      });

      planGrid.appendChild(card);
    });

    document.getElementById("dietResultTitle").textContent =
      "Your 7-Day Sample Meal Plan";

    document.getElementById("dietResultDetails").textContent =
      "Age: " +
      age +
      " · Preference: " +
      preferenceLabels[preference] +
      " · Goal: " +
      goalLabels[goal] +
      " · Body type: " +
      bodyTypeLabels[bodyType];

    document.getElementById("dietResults").hidden = false;
    document.getElementById("dietResults").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  document
    .getElementById("printDietPlan")
    ?.addEventListener("click", function () {
      window.print();
    });

  // Save and restore generated diet plans in this browser.

  const saveDietButton = document.getElementById("saveDietPlan");
  const historyList = document.getElementById("dietHistoryList");
  const historyStorageKey = "ayurnutrient_saved_diet_plans_v1";

  function getSavedDietPlans() {
    try {
      const stored = JSON.parse(
        localStorage.getItem(historyStorageKey) || "[]",
      );

      return Array.isArray(stored) ? stored : [];
    } catch (error) {
      return [];
    }
  }

  function renderDietHistory() {
    const plans = getSavedDietPlans();
    historyList.replaceChildren();

    if (plans.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "history-description";
      emptyMessage.textContent =
        "No saved plans yet. Generate a plan and click Save Diet Plan.";
      historyList.appendChild(emptyMessage);
      return;
    }

    plans.forEach(function (plan) {
      const card = document.createElement("article");
      card.className = "history-card";

      const information = document.createElement("div");

      const title = document.createElement("h4");
      title.textContent = plan.title;

      const details = document.createElement("p");
      details.textContent = plan.details;

      const date = document.createElement("p");
      date.textContent = "Saved: " + plan.savedAt;

      information.append(title, details, date);

      const openButton = document.createElement("button");
      openButton.type = "button";
      openButton.textContent = "View plan";

      openButton.addEventListener("click", function () {
        document.getElementById("dietResultTitle").textContent = plan.title;
        document.getElementById("dietResultDetails").textContent = plan.details;

        // Restore the generated meal cards saved by this prototype.
        document.getElementById("dietPlanGrid").innerHTML = plan.mealsHtml;
        document.getElementById("dietResults").hidden = false;

        document.getElementById("dietResults").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      card.append(information, openButton);
      historyList.appendChild(card);
    });
  }

  saveDietButton.addEventListener("click", function () {
    const results = document.getElementById("dietResults");

    if (results.hidden) {
      alert("Please generate a diet plan before saving it.");
      return;
    }

    const plans = getSavedDietPlans();

    const newPlan = {
      id: Date.now(),
      title: document.getElementById("dietResultTitle").textContent,
      details: document.getElementById("dietResultDetails").textContent,
      mealsHtml: document.getElementById("dietPlanGrid").innerHTML,
      savedAt: new Date().toLocaleString(),
    };

    // Keep the newest saved plan first.
    plans.unshift(newPlan);

    try {
      localStorage.setItem(historyStorageKey, JSON.stringify(plans));
      renderDietHistory();
      alert("Diet plan saved successfully!");
    } catch (error) {
      alert(
        "Unable to save the plan. Your browser storage may be full or disabled.",
      );
    }
  });

  // Show saved plans when the page is opened or refreshed.
  renderDietHistory();
}

/* AyurNutrient: Analysis and Patient Report */

const savedPlansKey = "ayurnutrient_saved_diet_plans_v1";

function readSavedPlans() {
  try {
    const plans = JSON.parse(localStorage.getItem(savedPlansKey) || "[]");
    return Array.isArray(plans) ? plans : [];
  } catch (error) {
    return [];
  }
}

function getSelectedLabel(id, labels) {
  const element = document.getElementById(id);

  if (!element || !element.value) {
    return "Not entered";
  }

  return labels[element.value] || "Not entered";
}

function updateAnalysisAndReport() {
  const preferenceLabels = {
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    eggetarian: "Eggetarian",
    nonvegetarian: "Non-vegetarian",
  };

  const goalLabels = {
    balanced: "Balanced eating",
    weight: "Weight management",
    energy: "Everyday energy",
  };

  const bodyTypeLabels = {
    "not-selected": "Not selected",
    vata: "Vata",
    pitta: "Pitta",
    kapha: "Kapha",
  };

  const preference = getSelectedLabel("dietPreference", preferenceLabels);

  const goal = getSelectedLabel("healthGoal", goalLabels);

  const bodyType = getSelectedLabel("bodyType", bodyTypeLabels);

  const patientName =
    document.getElementById("patientName")?.textContent || "Patient";

  // Update the Analysis page.
  const analysisPreference = document.getElementById("analysisPreference");

  const analysisGoal = document.getElementById("analysisGoal");

  const analysisBodyType = document.getElementById("analysisBodyType");

  if (analysisPreference) {
    analysisPreference.textContent = preference;
  }

  if (analysisGoal) {
    analysisGoal.textContent = goal;
  }

  if (analysisBodyType) {
    analysisBodyType.textContent = bodyType;
  }

  // Update the Report page.
  const reportPatientName = document.getElementById("reportPatientName");

  const reportPreference = document.getElementById("reportPreference");

  const reportGoal = document.getElementById("reportGoal");

  const reportBodyType = document.getElementById("reportBodyType");

  const reportDate = document.getElementById("reportDate");

  if (reportPatientName) {
    reportPatientName.textContent = patientName;
  }

  if (reportPreference) {
    reportPreference.textContent = preference;
  }

  if (reportGoal) {
    reportGoal.textContent = goal;
  }

  if (reportBodyType) {
    reportBodyType.textContent = bodyType;
  }

  if (reportDate) {
    reportDate.textContent = new Date().toLocaleDateString();
  }

  // Display saved plans on both pages.
  const plans = readSavedPlans();

  const analysisHistory = document.getElementById("analysisHistory");

  const reportHistory = document.getElementById("reportDietHistory");

  renderPlanSummary(analysisHistory, plans);
  renderPlanSummary(reportHistory, plans);
}

function renderPlanSummary(container, plans) {
  if (!container) return;

  container.replaceChildren();

  if (plans.length === 0) {
    container.textContent =
      "No saved diet plans available yet. Generate and save a plan first.";
    return;
  }

  plans.forEach(function (plan, index) {
    const card = document.createElement("article");
    card.className = "history-card";

    const title = document.createElement("h4");
    title.textContent = plan.title || "Saved diet plan";

    const details = document.createElement("p");
    details.textContent = plan.details || "No plan details available.";

    const savedDate = document.createElement("p");
    savedDate.textContent = "Saved: " + (plan.savedAt || "Unknown date");

    card.append(title, details, savedDate);
    container.appendChild(card);
  });
}

// Refresh the summary whenever the user opens Analysis or Report.
const originalShowSection = showSection;

showSection = function (sectionName) {
  originalShowSection(sectionName);

  if (sectionName === "analysis" || sectionName === "report") {
    updateAnalysisAndReport();
  }
};

// Generate / refresh the report.
document
  .getElementById("generateReport")
  ?.addEventListener("click", function () {
    updateAnalysisAndReport();

    alert("Patient report updated. You can now print or save it as PDF.");
  });

// Print the report using the browser's print dialog.
document.getElementById("printReport")?.addEventListener("click", function () {
  updateAnalysisAndReport();
  window.print();
});

// Populate the pages when the script loads.
updateAnalysisAndReport();

/* AyurNutrient: Dietitian dashboard demo */

const demoPatients = {
  p1: {
    name: "Aarav Sharma",
    age: 28,
    preference: "Vegetarian",
    goal: "Balanced eating",
    bodyType: "Not entered",
    history: "Sample previous diet plan",
  },
  p2: {
    name: "Ananya Patil",
    age: 34,
    preference: "Vegan",
    goal: "Everyday energy",
    bodyType: "Not entered",
    history: "Sample dietary history",
  },
  p3: {
    name: "Rohan Deshmukh",
    age: 41,
    preference: "Eggetarian",
    goal: "Weight management",
    bodyType: "Not entered",
    history: "Sample nutrition intake form",
  },
};

const dtPlanKey = "ayurnutrient_demo_dietitian_plans_v1";
const dtConsultKey = "ayurnutrient_demo_consultations_v1";

function readDtList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function saveDtList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

function showDietitianSection(sectionId) {
  document.querySelectorAll(".dietitian-section").forEach(function (section) {
    section.classList.add("hidden");
  });

  const target = document.getElementById(sectionId);
  if (!target) return;

  target.classList.remove("hidden");

  document.querySelectorAll(".dietitian-nav").forEach(function (button) {
    button.classList.toggle(
      "active",
      button.dataset.dietitianSection === sectionId,
    );
  });

  const titles = {
    dtOverview: "Overview",
    dtPatients: "Patients",
    dtPlans: "Diet Plans",
    dtConsultations: "Consultations",
    dtRecords: "Medical Records",
    dtReports: "Reports",
  };

  document.getElementById("dietitianPageTitle").textContent =
    titles[sectionId] || "Dietitian Dashboard";

  renderDietitianData();
}

document.querySelectorAll(".dietitian-nav").forEach(function (button) {
  button.addEventListener("click", function () {
    showDietitianSection(button.dataset.dietitianSection);
  });
});

document.querySelectorAll("[data-open-dt]").forEach(function (button) {
  button.addEventListener("click", function () {
    showDietitianSection(button.dataset.openDt);
  });
});

function renderPatientProfile() {
  const select = document.getElementById("dtPatientSelect");
  const patient = demoPatients[select.value];
  const profile = document.getElementById("dtPatientProfile");

  profile.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = patient.name;

  const details = document.createElement("p");
  details.textContent =
    "Age: " +
    patient.age +
    " | Preference: " +
    patient.preference +
    " | Goal: " +
    patient.goal;

  const bodyType = document.createElement("p");
  bodyType.textContent = "Ayurvedic body type: " + patient.bodyType;

  const history = document.createElement("p");
  history.textContent = "Available history: " + patient.history;

  profile.append(heading, details, bodyType, history);
}

document
  .getElementById("dtPatientSelect")
  .addEventListener("change", renderPatientProfile);

function renderHistory(containerId, items, emptyMessage) {
  const container = document.getElementById(containerId);
  container.replaceChildren();

  if (!items.length) {
    container.textContent = emptyMessage;
    return;
  }

  items
    .slice()
    .reverse()
    .forEach(function (item) {
      const card = document.createElement("article");
      card.className = "history-card";

      const heading = document.createElement("h4");
      heading.textContent = item.patientName;

      const notes = document.createElement("p");
      notes.textContent = item.notes;

      const date = document.createElement("p");
      date.textContent = "Saved: " + item.date;

      card.append(heading, notes, date);
      container.appendChild(card);
    });
}

document.getElementById("dtSavePlan").addEventListener("click", function () {
  const patientId = document.getElementById("dtPlanPatient").value;
  const notes = document.getElementById("dtPlanNotes").value.trim();

  if (!notes) {
    alert("Please enter plan review notes first.");
    return;
  }

  const plans = readDtList(dtPlanKey);
  plans.push({
    patientId,
    patientName: demoPatients[patientId].name,
    notes,
    date: new Date().toLocaleString(),
  });

  saveDtList(dtPlanKey, plans);
  document.getElementById("dtPlanNotes").value = "";
  renderDietitianData();
  alert("Demo plan review saved in this browser.");
});

document
  .getElementById("dtSaveConsultation")
  .addEventListener("click", function () {
    const patientId = document.getElementById("dtConsultPatient").value;
    const notes = document.getElementById("dtConsultNotes").value.trim();

    if (!notes) {
      alert("Please enter consultation notes first.");
      return;
    }

    const consultations = readDtList(dtConsultKey);
    consultations.push({
      patientId,
      patientName: demoPatients[patientId].name,
      notes,
      date: new Date().toLocaleString(),
    });

    saveDtList(dtConsultKey, consultations);
    document.getElementById("dtConsultNotes").value = "";
    renderDietitianData();
    alert("Demo consultation saved in this browser.");
  });

function renderDietitianData() {
  const patientSelect = document.getElementById("dtPatientSelect");
  if (!patientSelect) return;

  renderPatientProfile();

  const plans = readDtList(dtPlanKey);
  const consultations = readDtList(dtConsultKey);

  renderHistory("dtPlanHistory", plans, "No plan reviews saved yet.");

  renderHistory(
    "dtConsultationHistory",
    consultations,
    "No consultations saved yet.",
  );

  document.getElementById("patientCount").textContent =
    Object.keys(demoPatients).length;

  document.getElementById("consultationCount").textContent =
    consultations.length;

  document.getElementById("recordCount").textContent =
    Object.keys(demoPatients).length;
}

document
  .getElementById("dtGenerateReport")
  .addEventListener("click", function () {
    const patientId = document.getElementById("dtReportPatient").value;
    const patient = demoPatients[patientId];
    const plans = readDtList(dtPlanKey).filter(
      (item) => item.patientId === patientId,
    );
    const consultations = readDtList(dtConsultKey).filter(
      (item) => item.patientId === patientId,
    );
    const preview = document.getElementById("dtReportPreview");

    preview.replaceChildren();

    function addReportLine(label, value) {
      const paragraph = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = label + ": ";
      paragraph.append(strong, document.createTextNode(value));
      preview.appendChild(paragraph);
    }

    const heading = document.createElement("h3");
    heading.textContent = "AyurNutrient — Demo Patient Report";
    preview.appendChild(heading);

    addReportLine("Patient", patient.name);
    addReportLine("Age", String(patient.age));
    addReportLine("Dietary preference", patient.preference);
    addReportLine("Health goal", patient.goal);
    addReportLine("Available sample history", patient.history);
    addReportLine("Saved plan reviews", String(plans.length));
    addReportLine("Saved consultations", String(consultations.length));
    addReportLine("Report date", new Date().toLocaleDateString());

    const note = document.createElement("p");
    note.textContent =
      "Sample report only. No real medical records or clinical analysis are included.";
    preview.appendChild(note);
  });

document.getElementById("dtPrintReport").addEventListener("click", function () {
  window.print();
});

document
  .getElementById("dietitianLogoutButton")
  .addEventListener("click", function () {
    document.getElementById("dietitianDashboard").classList.add("hidden");
    dashboardPage.classList.add("hidden");
    loginPage.classList.remove("hidden");
    loginForm.reset();
    loginMessage.textContent = "";
  });

renderDietitianData();
