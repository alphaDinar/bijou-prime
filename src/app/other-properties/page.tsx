export default function PdfPage() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src="/properties_for_sale.pdf"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </main>
  );
}
