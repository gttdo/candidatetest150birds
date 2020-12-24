import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import invoiceData from '../../DATA/invoiceData';
import axios from 'axios';

const Container = styled.div`
    background-color: #F2F4F7;
    width: 52.01vw;
    height: 280px;
    border-radius: 25px;
    padding: 12px 27px;
    margin-top: 24px;
    overflow: hidden;
    &.hidden{
        display: none;
    }
`;

const Headline = styled.h2`
    font-weight: 700;
    font-size: 1.666vw;
    line-height: 36px;
    margin: 0;

    @media screen and (max-width: 415px){
        font-size: 3.2vw;
    }
`;

const Table = styled.table`
    width: 100%;
`;

const TableHeading = styled.th`
    font-weight: 700;
    font-size: 0.972vw;
    line-height: 21px;
    color: #828282;
    text-align: left;
    height: 60px;
    width: 20%;

    @media screen and (max-width: 415px){
        font-size: 1.9vw;
        width: 100%;
    }
`;

const TableData = styled.td`
    font-family: 'Questrial', sans-serif;
    font-weight: 400;
    font-size: 1.25vw;
    line-height: 18.54px;
    color: #000000;
    height: 25px;

    @media screen and (max-width: 415px){
        font-size: 2.5vw;
    }
`;

const Invoice = ({ toggle }) => {
    const [data, setData] = useState(invoiceData)

    // NOTE: Pass API here to dynamically populate the table data.
    useEffect(() => {
        async function retrieveData() {
            const retrievedApiData = await axios('https//:www.google.com');
            setData(retrievedApiData);
        }
        retrieveData();
    });

    const subTotalArray = data.map(item => {
        return item.subtotal
    });

    const invoiceTotal = (subTotalArray) => {
        var total = 0;
        for (var i in subTotalArray) {
            total += subTotalArray[i];
        }
        return total;
    };

    const tableData = data.map((item, index) => (
        <tr key={item.id}>
            <TableData>{item.companyName}</TableData>
            <TableData>{item.hour} hours</TableData>
            <TableData>{`$${item.rate}/hour`}</TableData>
            <TableData>{`$${item.subtotal.toFixed(2)}`}</TableData>
            <TableData>{data.length - 1 === index ? `$${invoiceTotal(subTotalArray)}` : ''}</TableData>
        </tr>
    ));

    return (
        <Container className={toggle ? 'hidden' : ''}>
            <Headline>Invoice</Headline>
            <Table>
                <thead>
                    <tr>
                        <TableHeading style={{ width: '30%' }}>Company</TableHeading>
                        <TableHeading>Hour</TableHeading>
                        <TableHeading>Rate</TableHeading>
                        <TableHeading>Subtotal</TableHeading>
                        <TableHeading style={{ color: '#000000' }}>TOTAL</TableHeading>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </Table>
        </Container>
    )
}

export default Invoice
