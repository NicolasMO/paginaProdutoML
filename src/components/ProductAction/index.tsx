import React from 'react'
import { Container, 
        Condition, 
        Row, 
        HeartIcon, 
        DispatchTag, 
        PriceCard, 
        PriceRow, 
        InstallmentsInfo, 
        StockStatus, 
        MethodCard, 
        CheckIcon, 
        Actions, 
        Button, 
        Benefits, 
        ShieldIcon } from './styles'


const ProductAction: React.FC = () => {
    return (
        <Container>
            <Condition>Novo | 9 Vendidos</Condition>

            <Row>
                <h1>Camiseta Azul</h1>
                <HeartIcon />
            </Row>

            <DispatchTag>Enviando normalmente</DispatchTag>

            <PriceCard>
                <PriceRow>
                    <span className="symbol">R$</span>
                    <span className="fraction">34</span>
                    <span className="cents">99</span>
                </PriceRow>

                <InstallmentsInfo>em 3x de R$ 11,6
                        7</InstallmentsInfo>
            </PriceCard>

            <StockStatus>Estoque disponível</StockStatus>

            <MethodCard>
                <CheckIcon />

                <div>
                    <span className="title">Frete Grátis</span>
                    <span className="details">Benefício Lorem Ipsum</span>
                    <a href="#" className="more">
                        Ver mais opções
                    </a>
                </div>
            </MethodCard>

            <Actions>
                <Button solid>Comprar agora</Button>
                <Button>Adicionar ao carrinho</Button>
            </Actions>

            <Benefits>
                <li>
                    <ShieldIcon />
                    <p>Compra garantida. Receba o produto que está esperando ou devolvemos seu dinheiro.</p>
                    </li>
            </Benefits>
        </Container>
    )
}

export default ProductAction;