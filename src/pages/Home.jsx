import React from "react";
import Header from "../components/Header";
import { Container, Stack } from "../styles/UI.styles";
import { HomeContainer, IconButton, StyledCard } from "../styles/Home.styles";
import { useRecipe } from "../context/Recipe";
import { Link } from "react-router-dom";

const Home = () => {
  const { recipes } = useRecipe();

  return (
    <HomeContainer>
      <Container>
        <Header />
        <Stack gap="1rem" justify="center">
          {recipes.map((r, index) => (
            <StyledCard key={index} bg="#efefef" shadow title={r.recipe.label}>
      
                <h5 className="text-primary"> {r.recipe.label}</h5>
                <Link to="details" state={{r}}>
                  <img src={r.recipe.image} alt={r.recipe.label}/>
                </Link>
      
            </StyledCard>
          ))}
        </Stack>
      </Container>
    </HomeContainer>
  );
};

export default Home;
