import styled from 'styled-components';
import wave01 from '../../assets/img/wave01.jpg';
import wave02 from '../../assets/img/wave02.jpg';
import wave03 from '../../assets/img/wave03.jpg';

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${wave01});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(2) {
    background: url(${wave02});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(3) {
    background: url(${wave03});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Spacer = styled.div`
  background: #77e68c;
  height: 15vh;
`;
