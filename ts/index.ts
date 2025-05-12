interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface CardData {
    title: string;
    description: string;
    image: string;
}

type CardsRecord = Record<string, CardData>;

document.addEventListener("DOMContentLoaded", (): void => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then((response: Response): Promise<Post[]> => response.json())
        .then((posts: Post[]): void => {
            const cards: CardsRecord = posts
                .map((post: Post, index: number): { [key: string]: CardData } => ({
                    [`card-${index + 1}`]: {
                        title: post.title,
                        description: post.body,
                        image: "img/134006.png"
                    }
                }))
                .reduce((acc: CardsRecord, card: { [key: string]: CardData }): CardsRecord => ({ ...acc, ...card }), {});

            function createCardTemplate({ title, description, image }: CardData): string {
                return `
                    <div class="card">
                        <h3 class="card-title">${title}</h3>
                        <p class="card-description">${description}</p>
                        <img src="${image}" alt="${title}" class="card-image">
                    </div>
                `;
            }

            function displayCard(cardData: CardData): void {
                const cardDisplay: HTMLElement | null = document.querySelector('.card-display');
                if (!cardDisplay) {
                    console.error('Card display container not found.');
                    return;
                }
                cardDisplay.innerHTML = createCardTemplate(cardData);
            }

            function handleFeatureClicks(): void {
                const features: NodeListOf<HTMLElement> = document.querySelectorAll('.feature');

                if (features.length === 0) {
                    console.error('No features found.');
                    return;
                }

                features.forEach((f: HTMLElement): void => f.classList.remove('active'));
                features[0].classList.add('active');
                displayCard(cards['card-1']);

                features.forEach((feature: HTMLElement, index: number): void => {
                    feature.addEventListener('click', (): void => {
                        features.forEach((f: HTMLElement): void => f.classList.remove('active'));
                        feature.classList.add('active');

                        const cardKey: string = `card-${index + 1}`;
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
        .catch((error: unknown): void => {
            console.error('Error fetching data:', error);
        });
});