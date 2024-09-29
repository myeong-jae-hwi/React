// 부모 컴포넌트
function Parent() {
  const handleData = (data) => {
    console.log("자식으로부터 받은 데이터:", data);
  };

  return <Child sendData={handleData} />;
}
export default Parent; // Parent를 기본 내보내기로 설정

// 자식 컴포넌트
function Child(props) {
  return (
    <button onClick={() => props.sendData("안녕, 부모님!")}>보내기</button>
  );
}
