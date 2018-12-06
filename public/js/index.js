// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
// =====================================================================
// From example author to create a new client_id
// =====================================================================
var bodyInput = $("#body");
var titleInput = $("#title");
var cmsForm = $("#cms");
var authorSelect = $("#author");
// Adding an event listener for when the form is submitted
$(cmsForm).on("submit", handleFormSubmit);
// Gets the part of the url that comes after the "?" (which we have if we're updating a post)
var url = window.location.search;
var postId;
var authorId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;
// The API object contains methods for each kind of request we'll make
// If we have this section in our url, we pull out the post id from the url
// In '?post_id=1', postId is 1
if (url.indexOf("?post_id=") !== -1) {
  postId = url.split("=")[1];
  getPostData(postId, "post");
}
// Otherwise if we have an author_id in our url, preset the author select box to be our Author
else if (url.indexOf("?author_id=") !== -1) {
  authorId = url.split("=")[1];
}

// Getting the authors, and their posts
getAuthors();

// A function for handling what happens when the form to create a new post is submitted
// The only one needed is handleFormSubmit ============================================
function handleFormSubmit(event) {
  event.preventDefault();
  // Wont submit the post if we are missing a body, title, or author
  if (
    !titleInput.val().trim() ||
    !bodyInput.val().trim() ||
    !authorSelect.val()
  ) {
    return;
  }
  // Constructing a newPost object to hand to the database
  var newPost = {
    title: titleInput.val().trim(),
    body: bodyInput.val().trim(),
    AuthorId: authorSelect.val()
  };

  // If we're updating a post run updatePost to update a post
  // Otherwise run submitPost to create a whole new post
  if (updating) {
    newPost.id = postId;
    updatePost(newPost);
  } else {
    submitPost(newPost);
  }
}

// Submits a new post and brings user to blog page upon completion
function submitPost(post) {
  $.post("/api/posts", post, function() {
    window.location.href = "/blog";
  });
}

// Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
function getPostData(id, type) {
  var queryUrl;
  switch (type) {
  case "post":
    queryUrl = "/api/posts/" + id;
    break;
  case "author":
    queryUrl = "/api/authors/" + id;
    break;
  default:
    return;
  }
  $.get(queryUrl, function(data) {
    if (data) {
      console.log(data.AuthorId || data.id);
      // If this post exists, prefill our cms forms with its data
      titleInput.val(data.title);
      bodyInput.val(data.body);
      authorId = data.AuthorId || data.id;
      // If we have a post with this id, set a flag for us to know to update the post
      // when we hit submit
      updating = true;
    }
  });
}

// A function to get Authors and then render our list of Authors
function getAuthors() {
  $.get("/api/authors", renderAuthorList);
}
// Function to either render a list of authors, or if there are none, direct the user to the page
// to create an author first
function renderAuthorList(data) {
  if (!data.length) {
    window.location.href = "/authors";
  }
  $(".hidden").removeClass("hidden");
  var rowsToAdd = [];
  for (var i = 0; i < data.length; i++) {
    rowsToAdd.push(createAuthorRow(data[i]));
  }
  authorSelect.empty();
  console.log(rowsToAdd);
  console.log(authorSelect);
  authorSelect.append(rowsToAdd);
  authorSelect.val(authorId);
}

// Creates the author options in the dropdown
function createAuthorRow(author) {
  var listOption = $("<option>");
  listOption.attr("value", author.id);
  listOption.text(author.name);
  return listOption;
}

// Update a given post, bring user to the blog page when done
function updatePost(post) {
  $.ajax({
    method: "PUT",
    url: "/api/posts",
    data: post
  }).then(function() {
    window.location.href = "/blog";
  });
}
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
