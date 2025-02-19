document.addEventListener("DOMContentLoaded", () => {
    const cards = {
        "card-1": {
            title: "Expand Your Horizons",
            description: "Learn how to showcase your unique skills and stand out in the competitive job market.",
            image: "img/slider1.jpg"
        },
        "card-2": {
            title: "Creative Portfolios Made Easy",
            description: "We provide tools to make your portfolio shine and attract the right recruiters effortlessly.",
            image: "img/slider2.jpg"
        },
        "card-3": {
            title: "Achieve Your Goals",
            description: "Take the next step in your career journey with Jobly's seamless job-matching platform.",
            image: "img/slider3.jpg"
        }
    };

    function createCardTemplate({ title, description, image }) {
        return `
            <div class="card">
                <h3 class="card-title">${title}</h3>
                <p class="card-description">${description}</p>
                <img src="${image}" alt="${title}" class="card-image">
            </div>
        `;
    }

    function displayCard(cardData) {
        const cardDisplay = document.querySelector('.card-display');
        if (!cardDisplay) {
            console.error('Card display container not found.');
            return;
        }
        cardDisplay.innerHTML = createCardTemplate(cardData);
    }

    function handleFeatureClicks() {
        const features = document.querySelectorAll('.feature');

        if (features.length > 0) {
            features[0].classList.add('active');
            displayCard(cards['card-1']);
        }

        features.forEach((feature, index) => {
            feature.addEventListener('click', () => {
                features.forEach(f => f.classList.remove('active'));
                feature.classList.add('active');

                const cardKey = `card-${index + 1}`;
                if (cards[cardKey]) {
                    displayCard(cards[cardKey]);
                } else {
                    console.error(`Card with key ${cardKey} not found.`);
                }
            });
        });
    }
    handleFeatureClicks();
});
