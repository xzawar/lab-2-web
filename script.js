const form = document.getElementById("contact-form"); 

const nameInput = document.getElementById("name"); 

const topicSelect = document.getElementById("topic"); 
form.addEventListener("submit", function (e) { 

  e.preventDefault(); 

  localStorage.setItem("visitorName", nameInput.value); 

  localStorage.setItem("visitorTopic", topicSelect.value); 

  alert("Thanks, " + nameInput.value + "! Saved locally."); 

});

window.addEventListener("DOMContentLoaded", function () { 

  const savedName = localStorage.getItem("visitorName"); 

  const savedTopic = localStorage.getItem("visitorTopic"); 

  if (savedName) { 

    nameInput.value = savedName; 

  } 

  if (savedTopic) { 

    topicSelect.value = savedTopic; 

  } 

}); 
document.getElementById("clear-btn").addEventListener("click", function () { 

  localStorage.removeItem("visitorName"); 

  localStorage.removeItem("visitorTopic"); 

  form.reset(); 

  alert("Saved data cleared."); 

}); 