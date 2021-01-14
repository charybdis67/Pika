import React, { Component } from "react";
import "../layout/PokemonCard.css";
let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

const padToTree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class PokemonCard extends Component {
  render() {
    const { id, name, img, type, exp } = this.props;
    let imgSrc = `${imgUrl}${padToTree(id)}.png`;
    return (
      <div className="PokemonCard">
        <h3>{name}</h3>
        <div className="PokemonCard-img-container">
          <img className="PokemonCard-img" src={imgSrc} alt="img" />
        </div>

        <p className="PokemonCard-data">Type: {type}</p>
        <p className="PokemonCard-data">EXP: {exp}</p>
      </div>
    );
  }
}

export default PokemonCard;
