document.getElementById("Submit").addEventListener("click", function () {

    const name = document.getElementById("customerName").value;
    const cell = document.getElementById("cellNo").value;

    if (name === "" || cell === "") {
        alert("Please enter Name and Cell Number");
        return;
    }

    // Get all select elements
    const selects = document.querySelectorAll("select");
    let items = [];

    selects.forEach(select => {
        if (select.value !== "SELECT" && select.value !== "" && select.value !== "SWEETS" && select.value !== "CAKES" && select.value !== "ICE CREAMS") {
            items.push(select.value);
        }
    });

    if (items.length === 0) {
        alert("Please select at least one item");
        return;
    }

    // Create receipt table
    let receiptHTML = `
        <h2>Receipt</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Cell No:</strong> ${cell}</p>

        <table border="1" cellpadding="10">
            <tr>
                <th>S.No</th>
                <th>Item Name</th>
            </tr>
    `;

    items.forEach((item, index) => {
        receiptHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item}</td>
            </tr>
        `;
    });

    receiptHTML += `</table>`;

    document.getElementById("receipt").innerHTML = receiptHTML;
});
