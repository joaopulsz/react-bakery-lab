const Display = () => {
    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ];

    const cakesDisplay = cakes.map(cake => {
        return <div>
            <h3>{cake.cakeName}</h3>
            <h4>Ingredients:</h4>
            <ul>
                {cake.ingredients.forEach(ingredient => <ul>{ingredient}</ul>)}
            </ul>
            <h4>Rating: {cake.rating}</h4>
        </div>
    });

    return (
        <section>
            <h2>See below some cakes from our beautiful selection:</h2>

            {cakesDisplay}

            <h2>The average rating of all cakes is {cakes.reduce((total, cake) => (total + cake.rating), 0) / cakes.length}</h2>
        </section>
    );
}

export default Display;