import React from "react";
import { Button, HeaderContainer } from "../styles/Header.styles";
import { Form, Formik, Field } from "formik";
import { Card, Stack } from "../styles/UI.styles";
import {MdSearch} from 'react-icons/md'
import { useRecipe } from "../context/Recipe";

const Header = () => {

  const {mealTypes, getData, recipes} = useRecipe()
 
  const initialValues  = {query:"", meal:mealTypes[0].toLocaleLowerCase() }

  const submitHandler = (values)=>{
    const {query, meal} = values;
    getData(query, meal);
    console.log(recipes);
  }
  return (
    <HeaderContainer>
      <h2 className="text-secondary"> Recipe App</h2>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form>
          <Card bg="#efefef" style={{ padding: "1rem" }} shadow={true}>
            <Stack gap="1rem" className="form-fields">
              <Field
                type="search"
                placeholder="E.g. Pizza"
                autoComplete="off"
                name="query"
                style={{ flex: 1 }}
              />
              <Field as="select" name="meal">
                {mealTypes.map((meal, index) => (
                  <option key={index} value={meal.toLowerCase()}>
                    {meal}
                  </option>
                ))}
              </Field>

              <Button>
                <Stack gap="0.5rem" align="center" justify="center">
                    <MdSearch className="searchIcon"/>
                    <span>Search</span>
                </Stack>
              </Button>
            </Stack>
          </Card>
        </Form>
      </Formik>
    </HeaderContainer>
  );
};

export default Header;
