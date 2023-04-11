function MyRecipesComponent ({label, image, totalTime, ingredients}) {
    return (
        <div className="cont">
            <h2>{label}</h2>
            <img src={image} alt="food"/>
            <h6>Время приготовления: {totalTime} минут</h6>
            <ul>
            {ingredients.map((ingredient, i) => (
                <li key={i} className="ingredient">
                    <img src="https://img.icons8.com/material-two-tone/256/checkmark--v2.png" className="icons" alt="check"/>
                    {ingredient}
                </li>
            ))}
            </ul>
           <hr/>     
        </div>
    )
}

export default MyRecipesComponent;