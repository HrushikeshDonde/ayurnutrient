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
