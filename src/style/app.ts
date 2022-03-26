import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 600px;
  background-color: beige;
`;

export const Contents = styled.div`
  width: 100%;
  height: 400px;
  background-color: orange;
`;

interface imgUrlProps {
  imgUrl: string;
}

export const FixedImg = styled.div`
  width: 100%;
  height: 500px;

  /* 배경이미지는 최소 1920*960으로 제작해야 문제가 안생김 */
  background-image: url(${({ imgUrl }: imgUrlProps) => imgUrl});
  background-repeat: no-repeat; /* 배경이미지X */
  background-size: cover; /* 요소를 비율에 맞게 커버 */
  background-position: center; /* 이미지를 요소의 정가운데로 처리 */
  background-attachment: fixed; /* 스크롤바 움직일때 이미지가 따라다님 */
`;
