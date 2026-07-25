import useFetch from './useFetch';

function UsersList() {
  // Use custom hook
  const result = useFetch('https://jsonplaceholder.typicode.com/users?_limit=5');
  
  const users = result.data;
  const loading = result.loading;
  const error = result.error;

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>⚡ useEffect + Custom Hooks</h1>
      <h2>📋 Fetching Users from API</h2>

      {loading && <p style={{ fontSize: '1.2rem', color: '#007bff' }}>⏳ Loading users...</p>}

      {error && (
        <p style={{ fontSize: '1.2rem', color: '#dc3545' }}>
          ❌ Error: {error}
        </p>
      )}

      {users && users.length > 0 && (
        <div>
          <p style={{ color: '#28a745', fontSize: '1.1rem' }}>
            ✅ Loaded {users.length} users!
          </p>
          <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
            {users.map(user => (
              <div
                key={user.id}
                style={{
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>
                  {user.name}
                </h3>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        border: '1px solid #ffc107'
      }}>
        <h3>📚 Concepts Used:</h3>
        <p><strong>✅ useState Hook:</strong> Manage loading, error, data state</p>
        <p><strong>✅ useEffect Hook:</strong> Run side effects (fetch data)</p>
        <p><strong>✅ Dependency Array:</strong> Control when effect runs</p>
        <p><strong>✅ Cleanup Function:</strong> Prevent memory leaks</p>
        <p><strong>✅ Custom Hook (useFetch):</strong> Reusable fetch logic</p>
      </div>
    </div>
  );
}

export default UsersList;