function placeOrder(callback) {
    // Simulate network/database delay with setTimeout
    setTimeout(() => {
        console.log("Order placed");
        // Check if a callback was provided and execute the next step
        if (callback) {
            callback();
        }
    }, 1000); // 1 second delay
}

function cookFood(callback) {
    // Simulate cooking time delay with setTimeout
    setTimeout(() => {
        console.log("Food cooking");
        // Check if a callback was provided and execute the next step
        if (callback) {
            callback();
        }
    }, 2000); // 2 second delay
}

function deliverFood() {
    // Simulate delivery time delay with setTimeout
    setTimeout(() => {
        console.log("Food delivered");
        // Update the UI message for completion
        document.getElementById('reportMessage').textContent = "Process Complete: Food delivered!";
        document.getElementById('reportMessage').classList.add('text-green-600', 'text-4xl');
    }, 1500); // 1.5 second delay
}


function startOrderProcess() {
    // 1. Reset UI for Order Process
    document.getElementById('reportMessage').textContent = "Starting order process... Check the Console for real-time messages.";
    document.getElementById('reportMessage').classList.remove('text-green-600', 'text-4xl');
    
    // 2. Start the sequence
    placeOrder(() => {
        // This callback runs AFTER placeOrder finishes (1s)
        cookFood(() => {
            // This callback runs AFTER cookFood finishes (2s)
            deliverFood();
        });
    });
}

function downloadFile(filename, callback) {
    console.log(`Downloading ${filename}...`);
    // Update UI immediately
    document.getElementById('reportMessage').textContent = `Downloading ${filename}... (Please wait 2 seconds)`;
    document.getElementById('reportMessage').classList.remove('text-green-600', 'text-4xl');

    setTimeout(() => {
        // This runs after 2 seconds
        if (callback) {
            callback();
        }
    }, 2000); // 2 second delay
}

function startDownloadExample() {
    downloadFile("My_Report.pdf", () => {
        console.log("Download complete!");
        // Update UI upon completion
        document.getElementById('reportMessage').textContent = "Download complete! (My_Report.pdf)";
        document.getElementById('reportMessage').classList.add('text-green-600', 'text-4xl');
    });
}