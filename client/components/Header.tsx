import { Sun, LogOut } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const isMobile = useIsMobile();
  const { signOut } = useAuth();

  return (
    <div
      style={{
        paddingBottom: "8px",
        paddingTop: "8px",
        paddingLeft: "16px",
        paddingRight: "16px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "space-between" : "flex-start",
      }}
    >
      {!isMobile && (
        <a
          href="/"
          style={{
            display: "inline",
            fontSize: "20px",
            lineHeight: "30px",
            marginRight: "16px",
            paddingBottom: "5px",
            paddingTop: "5px",
            textDecoration: "none",
            color: "rgb(15, 20, 25)",
          }}
        >
          <span
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
            }}
          >
            Logo
          </span>
          <img
            alt="Site logo"
            loading="lazy"
            src="https://67.vvveb.com/media/logo.png"
            style={{
              maxHeight: "80px",
              verticalAlign: "middle",
              display: "inline",
            }}
          />
        </a>
      )}

      <button
        type="button"
        aria-label="Toggle navigation"
        style={{
          display: isMobile ? "flex" : "none",
          float: "right",
          padding: "4px 12px",
          fontSize: "20px",
          lineHeight: "20px",
          border: "0.909091px solid rgba(15, 20, 25, 0.15)",
          borderRadius: "6px",
          backgroundColor: "transparent",
          cursor: "pointer",
          color: "rgba(15, 20, 25, 0.65)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{ display: "inline-block", width: "30px", height: "30px" }}
        >
          ☰
        </span>
      </button>

      <button
        title="Switch sidebar color theme"
        style={{
          float: "right",
          padding: "8px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "rgb(108, 117, 125)",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginRight: "8px",
        }}
      >
        <Sun size={20} />
      </button>

      <button
        onClick={signOut}
        title="Sign out"
        style={{
          float: "right",
          padding: "8px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "rgb(108, 117, 125)",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <LogOut size={20} />
      </button>
    </div>
  );
}
