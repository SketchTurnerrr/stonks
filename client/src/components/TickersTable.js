import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { formatDistance } from 'date-fns';

export function TickersTable({ quotes }) {
  const data = quotes.tickers[0];

  return (
    <>
      <TableContainer>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>company</Th>
              <Th>change</Th>
              <Th>dividend</Th>
              <Th>exchange</Th>
              <Th>percentage change</Th>
              <Th>price</Th>
              <Th>last trade time</Th>
              <Th>yield</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((ticker) => (
                <Tr>
                  <Td>{ticker.ticker}</Td>
                  <Td>{ticker.change}</Td>
                  <Td>{ticker.dividend}</Td>
                  <Td>{ticker.exchange}</Td>
                  <Td>{parseFloat(ticker.change_percent * 100).toFixed(1) + '%'}</Td>
                  <Td>{ticker.price}</Td>
                  <Td>
                    {formatDistance(
                      new Date(ticker.last_trade_time),
                      new Date(),
                      { addSuffix: true }
                    )}
                  </Td>
                  <Td>{ticker.yield}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
