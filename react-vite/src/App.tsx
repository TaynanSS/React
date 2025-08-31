const App = () => {
  let n1: number = 10;
  let n2: number = 3;

  function soma(n1: number, n2: number): number {
    return n1 + n2;
  }

  return (
    <div>Soma: {n1 + n2}</div>
  );
  
}

export default App;