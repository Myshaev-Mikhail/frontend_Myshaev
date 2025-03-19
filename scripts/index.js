document.addEventListener("DOMContentLoaded", () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then(response => response.json())
        .then(posts => {
            const cards = posts.map((post, index) => ({
                [`card-${index + 1}`]: {
                    title: post.title,
                    description: post.body,
                    image: "img/134006.png"
                }
            }))
                .reduce((acc, card) => ({ ...acc, ...card }), {});

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
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
