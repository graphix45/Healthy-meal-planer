function calculateCalories() {
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);
  
  // Calculate calories based on user's height and weight (a simple formula)
  var calories = Math.round(10 * weight + 6.25 * height - 5 * 25 + 5);

  // Sample meal suggestions with calories
  var breakfastCalories = Math.round(calories * 0.25);
  var lunchCalories = Math.round(calories * 0.35);
  var dinnerCalories = Math.round(calories * 0.40);

  // Display meal suggestions
  document.getElementById("breakfast").innerHTML = "<strong>Breakfast:</strong> Oatmeal with fruits (" + breakfastCalories + " calories)";
  document.getElementById("lunch").innerHTML = "<strong>Lunch:</strong> Grilled chicken salad (" + lunchCalories + " calories)";
  document.getElementById("dinner").innerHTML = "<strong>Dinner:</strong> Baked salmon with steamed vegetables (" + dinnerCalories + " calories)";

  // Show the meal suggestions section
  document.getElementById("meal-suggestions").style.display = "block";
}
