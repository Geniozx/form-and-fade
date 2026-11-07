
import { business } from "./config/business";

function App() {
  return (
    <main className="container" style={{ paddingBlock: "4rem" }}>
      <p
        style={{
          fontSize: "var(--font-size-xs)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
        }}
      >
        {business.category}
      </p>

      <h1
        style={{
          fontSize: "var(--font-size-3xl)",
          marginTop: "1rem",
        }}
      >
        {business.name}.
      </h1>

      <p
        style={{
          fontSize: "var(--font-size-xl)",
          marginTop: "1rem",
        }}
      >
        {business.tagline}
      </p>

      <p style={{ marginTop: "0.5rem" }}>
        {business.description}
      </p>

      {business.demo && (
        <p
          style={{
            marginTop: "2rem",
            color: "var(--color-text-muted)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Portfolio demonstration — fictional business.
        </p>
      )}
    </main>
  );
}

export default App;
