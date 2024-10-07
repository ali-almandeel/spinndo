document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const titleLink = accordion.querySelector('.title');

        titleLink.addEventListener('click', function() {
            const content = accordion.querySelector('.content-accordion');

            // If already expanded, close it
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                // Close all other accordions before opening the clicked one
                accordions.forEach(acc => {
                    acc.querySelector('.content-accordion').style.display = 'none';
                });

                // Expand the clicked accordion
                content.style.display = 'block';
            }
        });
    });
});
