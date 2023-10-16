document.addEventListener("DOMContentLoaded", function() {
  // Find the form and submit button
  var form = document.getElementById("myForm");
  var submitButton = document.getElementById("submitButton");

  // Attach an event listener to the form's submit event
  form.addEventListener("submit", function(event) {
      // Prevent the default form submission
      event.preventDefault();

      // Your custom code here to process the form data
      // You can access form fields using form.elements, e.g., form.elements["fieldName"].value

      // For example, you can display an alert when the form is submitted
      alert("Form submitted!");

      // You can also use AJAX to submit the form data to a server
      // Example: sendFormDataToServer(formData);

      // Optionally, you can reset the form after submission
      form.reset();
  });
});
