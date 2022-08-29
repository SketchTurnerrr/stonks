import { Box, Center, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { getQuotes } from '../features/tickers/tickersReducer';
import { TickersTable } from './TickersTable';

export function Main() {
  const dispatch = useDispatch();
  const socket = io.connect('http://localhost:4000');
  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', (response) => {
      return dispatch(getQuotes(response));
    });
  }, []);

  const quotes = useSelector((state) => state.tickers);

  return (
    <Flex alignItems='center' justifyContent='center' minH='100vh'>
      <TickersTable quotes={quotes} />
    </Flex>
  );
}
