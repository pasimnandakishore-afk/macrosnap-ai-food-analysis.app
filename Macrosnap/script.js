// Get HTML elements

const foodImage = document.getElementById("foodImage");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const statusText = document.getElementById("status");
const result = document.getElementById("result");


// When user selects an image

foodImage.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    // Check whether selected file is an image

    if (!file.type.startsWith("image/")) {

        statusText.textContent =
            "Please select a valid image.";

        return;
    }


    // Display image preview

    const reader = new FileReader();

    reader.onload = function (event) {

        preview.src = event.target.result;

        preview.style.display = "block";

        statusText.textContent =
            "Image selected successfully. Click Analyze Food.";

    };

    reader.readAsDataURL(file);

});


// Analyze button

analyzeBtn.addEventListener("click", function () {

    // Check if image is selected

    if (!foodImage.files.length) {

        statusText.textContent =
            "⚠️ Please select a food image first.";

        return;
    }


    // Show analyzing message

    statusText.textContent =
        "🤖 Analyzing your food image...";


    // Demo AI analysis

    setTimeout(function () {

        /*
         * Demo result.
         *
         * Later, a real AI Vision API can be
         * connected here.
         */

        document.getElementById("foodName").textContent =
            "Rice & Chicken";

        document.getElementById("calories").textContent =
            "450 kcal";

        document.getElementById("protein").textContent =
            "28 g";

        document.getElementById("carbs").textContent =
            "50 g";

        document.getElementById("fat").textContent =
            "14 g";


        // Show result

        result.style.display = "block";

        statusText.textContent =
            "✅ Food analysis completed!";


        // Scroll to result

        result.scrollIntoView({
            behavior: "smooth"
        });

    }, 1500);

});
