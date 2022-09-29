import cakes from './assets/cakes.jpeg';

const Title = () => {
    return (
        <div>
            <h1>Joao's Bakery</h1>
            <img src={cakes}></img>
        </div>
    );
}

export default Title;