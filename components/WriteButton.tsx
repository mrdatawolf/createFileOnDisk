// components/WriteButton.tsx
const WriteButton = () => {
    const handleClick = async () => {
      await fetch('/api/writeToFile', { method: 'POST' });
    };
  
    return <button onClick={handleClick}>Write to File</button>;
  };
  
  export default WriteButton;
  