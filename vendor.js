document.addEventListener('DOMContentLoaded', function () {
    const popupButtons = document.querySelectorAll('.popup-button');
    const vendors = []; // Array to store vendor data

    // Function to create and append the popup
    function createPopup(vendorData) {
        const popup = document.createElement('div');
        popup.className = 'vendor-popup';
        popup.id = 'vendor-popup';

        popup.innerHTML = `
            <div class="popup-content">
                <span class="popup-close" id="popup-close">&times;</span>
                <h2>${vendorData.name}</h2>
                <img src="${vendorData.image}" alt="${vendorData.name}" class="vendor-image">
                <p>${vendorData.description}</p>
                <a href="${vendorData.whatsapp}" target="_blank" class="whatsapp-button">WhatsApp</a>
            </div>
        `;

        document.body.appendChild(popup);

        // Attach click event listener to the close button
        const popupClose = document.getElementById('popup-close');
        if (popupClose) {
            popupClose.addEventListener('click', () => {
                const popup = document.getElementById('vendor-popup');
                if (popup) {
                    popup.style.display = 'none';
                }
            });
        }
    }

    // Sample vendor data (you can replace this with your JSON data)
    const vendorsData = [
        {
            id: 1,
            name: 'Vendor 1',
            image: './assets/Images/snacks1.jpg',
            description: 'Description of Vendor 1 snacks goes here.',
            whatsapp: 'https://wa.me/1234567890'
        }
        // Add more vendor data objects for other vendors
    ];

    // Fetch vendor data (you can replace this with an actual fetch)
    vendors.push(...vendorsData);

    popupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const vendorId = parseInt(button.closest('.vendor-card').getAttribute('data-vendor-id'));
            const vendorData = vendors.find(vendor => vendor.id === vendorId);
            if (vendorData) {
                createPopup(vendorData);
            }
        });
    });
});
