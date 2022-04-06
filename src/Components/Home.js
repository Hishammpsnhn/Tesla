import React from 'react'
import Section from './Section'
import styled from 'styled-components'


function Home() {
  return (
    <Container>
      <Section
        title ="Model S"
        description = "Order Online for Touchless Delivery"
        backgroundimg = "model-s.jpg"
        leftbtntext= " Custom Order"
        rightbtntext = "Existing Inventory"
      />
      <Section
        title ="Model Y"
        description = "Order Online for Touchless Delivery"
        backgroundimg = "model-y.jpg"
        leftbtntext= " Custom Order"
        rightbtntext = "Existing Inventory"
      />
     <Section
        title ="Model 3"
        description = "Order Online for Touchless Delivery"
        backgroundimg = "model-3.jpg"
        leftbtntext= " Custom Order"
        rightbtntext = "Existing Inventory"
     />
     <Section
        title ="Model x"
        description = "Order Online for Touchless Delivery"
        backgroundimg = "model-X.jpg"
        leftbtntext= " Custom Order"
        rightbtntext = "Existing Inventory"
     />
     <Section
        title ="Lowest Cost Solar Panel in America"
        description = "Money-back guarantee"
        backgroundimg = "solar-panel.jpg"
        leftbtntext= "Order now"
        rightbtntext = "Learn more"
     />
     <Section
        title ="Solar for New Roofs"
        description = "Solar Roof Cost Less Than a New Roof"
        backgroundimg = "solar-roof.jpg"
        leftbtntext= "Order now"
        rightbtntext = "Learn more"
     />
     <Section
        title ="Accessories"
        description = ""
        backgroundimg = "accessories.jpg"
        leftbtntext= "Shop now"
     />

    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`