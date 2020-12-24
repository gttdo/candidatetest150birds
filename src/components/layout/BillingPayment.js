 import React from 'react';
 import styled from 'styled-components';
 
 const BillingPayment = () => {
    const Container = styled.div`
        background-color: #F2F4F7;
        width: 69vw;
        height: 810px;
        border-radius: 25px;
        padding: 12px 35px;
    `;

    const Headline = styled.h1`
        font-weight: 600;
        font-size: 2.5vw;
        line-height: 54px;
    `;

    const Wrapper = styled.div`
        box-shadow: 0px 7px 12px 4px rgba(65,66, 67, .3);
    `;

    const SectionA = styled.div`
        background-color: #E5E5E5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 34px 24px;
    `;

    const Subheadline = styled.div`
        font-family: 'Questrial', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 24.72px;
    `;

    const Button = styled.button`
        background-color: #5DD9C0;
        color: #ffffff;
        border: none;
        outline: none;
        width: 160px;
        height: 39px;
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
    `;

    const SectionB = styled.div`
        background-color: #ffffff;
        height: 165px;
        margin: 0;
        padding: 20px 14px;
    `;

    const SubCopyHeadline = styled.p`
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
        margin: 0;
    `;

    const SubCopy = styled.p`
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
        color: #333333;
    `;

     return (
         <Container>
             <Headline>Billing &amp; Payment</Headline>
             <Wrapper>
                <SectionA>
                    <Subheadline>Billing Method</Subheadline>
                    <Button>Add Method</Button>
                </SectionA>
                <SectionB >
                    <SubCopyHeadline>You have not set up any billing methods yet.</SubCopyHeadline>
                    <SubCopy>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim doloribus et assumenda eligendi suscipit voluptate earum dignissimos quod. Ex ratione minima exercitationem. Nulla necessitatibus error earum eaque aut. Et, doloribus.</SubCopy>
                </SectionB>
             </Wrapper>
         </Container>
     )
 }
 
 export default BillingPayment
 