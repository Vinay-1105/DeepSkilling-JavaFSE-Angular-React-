import { useState } from 'react';

function Counter() {
  // HOOK #1: useState - State management without class components
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Event handlers
  const handleIncrement = () => setCount(count + step);
  const handleDecrement = () => setCount(count - step);
  const handleReset = () => setCount(0);
  const handleStepChange = (e) => setStep(Number(e.target.value));

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>⚡ React Hooks - Counter App</h1>
      
      {/* Display current count */}
      <div style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#007bff',
        margin: '30px 0',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
      }}>
        {count}
      </div>

      {/* Step input */}
      <div style={{ margin: '20px 0' }}>
        <label>
          Step Size:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            style={{ marginLeft: '10px', padding: '8px', fontSize: '1rem' }}
          />
        </label>
      </div>

      {/* Buttons */}
      <div style={{ margin: '20px 0' }}>
        <button
          onClick={handleIncrement}
          style={{
            padding: '12px 24px',
            margin: '5px',
            fontSize: '1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ➕ Increment by {step}
        </button>

        <button
          onClick={handleDecrement}
          style={{
            padding: '12px 24px',
            margin: '5px',
            fontSize: '1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ➖ Decrement by {step}
        </button>

        <button
          onClick={handleReset}
          style={{
            padding: '12px 24px',
            margin: '5px',
            fontSize: '1rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          🔄 Reset
        </button>
      </div>

      {/* Info */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e7f3ff',
        borderRadius: '4px',
        border: '1px solid #007bff'
      }}>
        <h3>📚 useState Hook Explained:</h3>
        <p>
          <strong>const [count, setCount] = useState(0);</strong>
        </p>
        <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          <li><strong>count:</strong> Current state value</li>
          <li><strong>setCount:</strong> Function to update state</li>
          <li><strong>useState(0):</strong> Initial state = 0</li>
          <li><strong>Re-renders:</strong> Component re-renders when state changes</li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;