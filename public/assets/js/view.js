$(document).ready(function() {
    // Getting a reference to the input field where user adds a new burger
    var newItemInput = $("input#newBurger");
    // Our new burgers will go inside the Container
    var Container = $(".well");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("submit", "#eatit", insertBurger);

    // Our initial todos array
    var burgers;

    // Getting todos from database when page loads
    getBurgers();

    // This function resets the burgers displayed with new burgers from the database
    function initializeRows() {
        Container.empty();
        var rowsToAdd = [];
        for (var i = 0; i < burgers.length; i++) {
            rowsToAdd.push(createNewRow(burgers[i]));
        }
        Container.prepend(rowsToAdd);
    }

    // This function grabs burgers from the database and updates the view
    function getBurgers() {
        $.get("/api/burgers", function(data) {
            console.log("Burgers", data);
            burgers = data;
            initializeRows();
        });
    }

    // This function constructs a burger-item row
    function createNewBurger(burgers) {
        var newInputRow = $("<li>");
        newInputRow.addClass("list-group-burger burger-item");
        var newBurgerSpan = $("<span>");
        newBurgerSpan.text(burgers.burger_name);
        newInputRow.append(newBurgerSpan);
        var newBurgerInput = $("<p>");
        newBurgerInput.attr("type", "text");
        newBurgerInput.addClass("edit");
        newInputRow.append(newBurgerInput);
        var devourBtn = $("<button>");
        devourBtn.addClass("btn btn-default");
        newInputRow.append(devourBtn);
        return newInputRow;
    }

    // This function inserts a new todo into our database and then updates the view
    function insertBurger(event) {
        event.preventDefault();
        // if (!newItemInput.val().trim()) {   return; }
        var burgerObj = {
            text: newBurgerInput
                .val()
                .trim(),
            complete: false
        };

        // Posting the new todo, calling getTodos when done
        $.post("/api/burgers", todo, function() {
            getBurgers();
        });
        newBurgerInput.val("");
    }

});