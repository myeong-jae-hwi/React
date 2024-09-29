function Parents() {
  const childData = (data) => {
    console.log("자식으로부터 받은 데이터:", data);
  };
  return <Child onData={childData} />;
}
