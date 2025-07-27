document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('main section');
    const savingsForm = document.getElementById('savings-form');
    const savingsResult = document.getElementById('savings-result');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });

    savingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const consumption = document.getElementById('consumption').value;
        const location = document.getElementById('location').value;

        // For demonstration, we'll use a simple calculation.
        // A real application would use a more complex formula and APIs for solar radiation data.
        const savings = consumption * 0.15; // Assuming 15% savings

        savingsResult.innerHTML = `<p>Tại ${location}, bạn có thể tiết kiệm khoảng ${savings.toFixed(2)} kWh mỗi tháng.</p>`;
    });

    const trackerForm = document.getElementById('tracker-form');
    const trackerResult = document.getElementById('tracker-result');

    trackerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const systemId = document.getElementById('system-id').value;

        // For demonstration, we'll simulate tracking data.
        // A real application would fetch data from an API.
        const efficiency = Math.random() * 100;
        const powerGenerated = Math.random() * 50;

        trackerResult.innerHTML = `
            <p>Hiệu suất hệ thống ${systemId}: ${efficiency.toFixed(2)}%</p>
            <p>Điện năng tạo ra: ${powerGenerated.toFixed(2)} kWh</p>
        `;
    });
});
