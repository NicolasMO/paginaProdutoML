import React from 'react'

import tshirtImage from '../../assets/camiseta.jpg'
import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles'

const Layout: React.FC = () => {
    return (
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        <img alt="T-Shirt" src={tshirtImage} />
                    </Gallery>

                    <Info />
                </Column>

                <Column>
                    <ProductAction />
                    <SellerInfo />
                    
                    <WarrantySection />
                    <WarrantySection />
                    <WarrantySection />
                </Column>
            </Panel>
        </Container>
    )
}

const WarrantySection = () => (
    <Section>
        <h4>Garantia</h4>

        <div>
            <span>
                <p className="title">Compra garantida com o Lorem Ipsum</p>
                <p className="description">
                    Receba o produto que está esperando ou devolvemos seu dinheiro.
                </p>
            </span>
            <span>
                <p className="title">Garantia do vendedor</p>
                <p className="description">Sem garantia.</p>
            </span>
        </div>

        <a href="#">Saiba mais sobre garantia</a>
    </Section>
)

const Info = () => (
    <Description>
        <h2>Descrição</h2>

        <p>
            pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo.
            pharetra convallis posuere morbi leo urna molestie at.
            <br />
            <br />

            Itens inclusos: <br />
            - 1x Led <br />
            - 1x Led <br />
            - 1x Led <br />
            - 1x Led <br />
            - 1x Led <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin. Volutpat est velit egestas dui id ornare arcu.
        </p>
    </Description>
)

export default Layout;