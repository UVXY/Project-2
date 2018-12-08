var bodyInput = $("#body");
var titleInput = $("#title");
var cmsForm = $("#cms");
var clientsSelect = $("#clients");
// Adding an event listener for when the form is submitted
$(cmsForm).on("submit", handleFormSubmit);
// Gets the part of the url that comes after the "?" (which we have if we're updating a activities)
var url = window.location.search;
var activitiesId;
var clientsId;
// Sets a flag for whether or not we're updating a activities to be false initially
var updating = false;

// If we have this section in our url, we pull out the activities id from the url
// In '?activities_id=1', activitiesId is 1
if (url.indexOf("?activities_id=") !== -1) {
    activitiesId = url.split("=")[1];
    getActivitiesData(activitiesId, "activities");
}
// Otherwise if we have an clients_id in our url, preset the clients select box to be our clients
else if (url.indexOf("?clients_id=") !== -1) {
    clientsId = url.split("=")[1];
}

// Getting the clientss, and their activitiess
getClients();

// A function for handling what happens when the form to create a new activities is submitted
function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the activities if we are missing a body, title, or clients
    if (!titleInput.val().trim() || !bodyInput.val().trim() || !clientsSelect.val()) {
        return;
    }
    // Constructing a newActivities object to hand to the database
    var newActivities = {
        title: titleInput
            .val()
            .trim(),
        body: bodyInput
            .val()
            .trim(),
        ClientsId: clientsSelect.val()
    };

    // If we're updating a activities run updateActivities to update a activities
    // Otherwise run submitActivities to create a whole new activities
    if (updating) {
        newActivities.id = activitiesId;
        updateActivities(newActivities);
    } else {
        submitActivities(newActivities);
    }
}

// Submits a new activities and brings user to blog page upon completion
function submitActivities(activities) {
    $.activities("/api/activities", activities, function () {
        window.location.href = "/blog";
    });
}

// Gets activities data for the current activities if we're editing, or if we're adding to an clients's existing activitiess
function getActivitiesData(id, type) {
    var queryUrl;
    switch (type) {
        case "activities":
            queryUrl = "/api/activities/" + id;
            break;
        case "clients":
            queryUrl = "/api/clients/" + id;
            break;
        default:
            return;
    }
    $.get(queryUrl, function (data) {
        if (data) {
            console.log(data.ClientsId || data.id);
            // If this activities exists, prefill our cms forms with its data
            titleInput.val(data.title);
            bodyInput.val(data.body);
            ClientsId = data.ClientsId || data.id;
            // If we have a activities with this id, set a flag for us to know to update the activities
            // when we hit submit
            updating = true;
        }
    });
}

// A function to get clients and then render our list of clients
function getClients() {
    $.get("/api/clients", renderClientsList);
}
// Function to either render a list of clients, or if there are none, direct the user to the page
// to create an Clients first
function renderClientsList(data) {
    if (!data.length) {
        window.location.href = "/clients";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createClientsRow(data[i]));
    }
    clientsSelect.empty();
    console.log(rowsToAdd);
    console.log(clientsSelect);
    clientsSelect.append(rowsToAdd);
    clientsSelect.val(clientsId);
}

// Creates the clients options in the dropdown
function createClientsRow(clients) {
    var listOption = $("<option>");
    listOption.attr("value", clients.id);
    listOption.text(clients.name);
    return listOption;
}

// Update a given activities, bring user to the blog page when done
function updateActivities(activities) {
    $.ajax({
            method: "PUT",
            url: "/api/activities",
            data: activities
        })
        .then(function () {
            window.location.href = "/blog";
        });
}