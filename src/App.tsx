import * as S from "./style/app";

function App() {
  return (
    <div>
      <S.Main></S.Main>
      <S.Contents></S.Contents>
      <S.FixedImg imgUrl="img/img1.jpeg"></S.FixedImg>
      <S.Contents></S.Contents>
      <S.FixedImg imgUrl="img/img2.jpeg"></S.FixedImg>
      <S.Contents></S.Contents>
    </div>
  );
}

export default App;
