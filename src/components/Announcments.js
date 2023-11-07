import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { publicRequest } from '../axiosReqMethods';

const Container = styled.div`
  min-height: 40px;
  background-color: #006bc8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  animation: marquee 10s linear infinite;
`;

function Announcments() {
  const [announcment, setAnnouncment] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await publicRequest.get('/api/announcment');
        setAnnouncment(response.data);
      } catch (error) {
        console.error('Erro ao buscar anúncio:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {announcment && (
        <Container>
          {announcment.title}
        </Container>
      )}
    </>
  );
}

export default Announcments;
