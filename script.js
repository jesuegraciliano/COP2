/* style.css */
html, body {
  height: 100%;
  margin: 0;
}

body {
  background-color: #00843D; /* Fundo verde institucional */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI", Tahoma, sans-serif;
}

main {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 360px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

#logo {
  display: block;
  margin: 0 auto 1rem;
  width: 120px;
}

h1 {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

section h2 {
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
  color: #0066cc;
}

label {
  display: block;
  margin-top: 0.5rem;
}

input[type="number"] {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #005bb5;
}

#resultado {
  margin-top: 0.75rem;
  text-align: center;
  font-weight: bold;
  color: #00843D; /* Texto verde sobre fundo branco */
}
