$(function() {
    $(".devourBtn").on("click", function(event) {
      const id = $(this).data("id");
      const devourVal = $(this).data("devoured");
      console.log(id, devourVal);
  
      var newDevVal = {
        devoured: devourVal
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevVal
      }).then(
        function() {
          console.log("devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurg = {
        burger_name: $("#burger-input").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("new borger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });