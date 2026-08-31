export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-[#0C0C0F]">
      <div
        className="animate-spin"
        style={{
          width: 48,
          height: 48,
          border: "4px solid var(--line)",
          borderTopColor: "var(--pink)",
          borderRadius: "50%",
        }}
      />
      <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 14, fontWeight: 500, letterSpacing: "0.05em" }}>
        Carregando...
      </p>
    </div>
  );
}
