"use client";

export default function CreatePage() {
const handleNavigate = () => {
  const baseurl = window.location.origin;
  const folder = window.location.pathname.split("/")[1]; // detects "appointment-functionality"
  window.location.href = `${baseurl}/${folder}/create_page?id=30`;
};

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        fontFamily: "Inter, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "50px 60px",
          textAlign: "center",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "20px",
            color: "#333",
            fontWeight: "700",
          }}
        >
          Create New Page
        </h1>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "30px",
            color: "#555",
          }}
        >
          Click the button below to generate your custom page file.
        </p>

        <button
          onClick={handleNavigate}
          style={{
            padding: "15px 30px",
            fontSize: "16px",
            borderRadius: "30px",
            border: "none",
            background:
              "linear-gradient(90deg, #ff8a00 0%, #e52e71 100%)",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          Generate Page
        </button>
      </div>
    </div>
  );
}
