//Task 1 Business Dashboard
const dashboardId = document.getElementById("dashboard");
const dashboardQuery = document.querySelector("#dashboard");

const revenueCard = document.createElement("div")

revenueCard.setAttribute("class","metric-card");
revenueCard.setAttribute("id", "revenueCard")

revenueCard.innerHTML = `<h3>${title}</h3><p>$${initvalue}</p>`

dashboardId.appendChild(revenueCard);

//Task 2: Updating Dashboard Metrics