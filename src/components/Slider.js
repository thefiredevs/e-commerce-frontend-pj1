import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { hero } from '../DummyData'
import {mobile} from '../Responsive'

const Container = styled.div`
    margin: auto;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-bottom: 100px;
    /* ${mobile({
        display: "none",
    })}  */
    
`
const ImageWrapper = styled.div`
    width: 100%;    
    max-height: 65vh;
    max-height: 65dvh;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
    object-position: center;
`

const Info = styled.div`
    width: 1100px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    @media only screen and (max-width: 900px) {
        align-items: flex-start
    }
`
const Title = styled.h1`
    font-size: 40px;
    color: #006bc8;
    margin-bottom: 10px;
    font-family: 'Alfa Slab One'
    @media only screen and (max-width: 900px) {
        font-size: 20px;
    }
`
const Description = styled.span`
    font-family: 'Hanken Grotesk', sans-serif;
    margin-bottom: 15px;
`
const Button = styled.button`
    margin-bottom: 5px;
    font-family: 'Hanken Grotesk', sans-serif;
    border-radius: 2vmax;
    background-color: #006bc8;
    color: white;
    padding: 10px;
    

`

function Slider() {
    const navigate = useNavigate();
    const index = Math.floor(Math.random() * 2) + 1
    const heroInfo = hero[index]
    console.log(hero)



  return (
    <Container>
        <ImageWrapper>
            <Image src='https://static.zattini.com.br/bnn/l_zattini/2023-10-11/3884_1922x500_full1_generica_231011.png'/>
        </ImageWrapper>
        <Info>
            <Title>{heroInfo.title}</Title>
            <Description>{heroInfo.description}</Description>
            <Button onClick={() =>navigate("products/all")}>{heroInfo.cta}</Button>
        </Info>
    </Container>
  )
}

export default Slider