import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import transactionsData from '../../DATA/transactionsData';
import axios from 'axios';

const Container = styled.div`
background-color: #F2F4F7;
width: 74.375vw;
height: 242px;
border-radius: 25px;
padding: 12px 0px;
&.active{
    height: 810px;
}

@media screen and (max-width: 415px){
    width: 62.375vw;
}
`;

const Headline = styled.h1`
font-weight: 600;
font-size: 2.5vw;
line-height: 54px;
padding-left: 35px;
margin: 0;

@media screen and (max-width: 415px){
    font-size: 5vw;
}
`;

const Table = styled.table`
width: 100%;
`;

const Button = styled.button`
border: 1px solid #C4C4C4;
height: 24px;
width: 24px;
border-radius: 2px;
margin: 65px 15px 0px 11px;
`;

const TableHeading = styled.th`
font-weight: 600;
font-size: 1.25vw;
line-height: 27px;
color: #828282;
text-align: left;
height: 60px;
vertical-align: top;

@media screen and (max-width: 415px){
    font-size: 2.5vw;
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

const Wrapper = styled.div`
display: flex;
`;

const Panel = styled.tr`
visibility: hidden;
overflow: hidden;
&.active{
    visibility: visible;
}


`;

const Transactions = ({ toggle, toggleHandler }) => {
    const [data, setData] = useState(transactionsData);

    // NOTE: Pass API here to dynamically populate the table data.
    useEffect(() => {
        async function retrieveData() {
            const retrievedApiData = await axios('https//:www.google.com');
            setData(retrievedApiData);
        }
        retrieveData();
    });

    const filterData = data.filter((item, index) => {
        if (index > 1) {
            return item
        }
        return console.log('filtered');
    });

    const tableData = filterData.map((item, index) => (
        <Panel className={toggle ? 'active' : ''} key={index}>
            <TableData>{item.transactionDate}</TableData>
            <TableData>{item.transactionType}</TableData>
            <TableData>{`$${item.transactionAmount.toFixed(2)}`}</TableData>
            <TableData>{`$${item.transactionBalance.toFixed(2)}`}</TableData>
        </Panel>
    ));

    return (
        <Container className={toggle ? 'active' : ''}>
            <Headline>Transactions</Headline>
            <hr style={{ color: '#828282' }} />
            <Wrapper>
                <Button onClick={toggleHandler}><i className="fas fa-minus"></i></Button>
                <Table>
                    <thead>
                        <tr>
                            <TableHeading style={{ width: '15.8%' }}>Date</TableHeading>
                            <TableHeading style={{ width: '46.9%' }}>Type</TableHeading>
                            <TableHeading style={{ width: '19.6%' }}>Amount</TableHeading>
                            <TableHeading style={{ width: '13.0%' }}>Balance</TableHeading>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TableData>{data[0].transactionDate}</TableData>
                            <TableData>{data[0].transactionType}</TableData>
                            <TableData>{`$${data[0].transactionAmount.toFixed(2)}`}</TableData>
                            <TableData>{`$${data[0].transactionBalance.toFixed(2)}`}</TableData>
                        </tr>
                        {tableData}
                    </tbody>
                </Table>
            </Wrapper>
        </Container>
    )
}

export default Transactions;
