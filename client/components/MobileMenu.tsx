import { Home, Hash, Bell, Mail, Bookmark, User, FileText, Shield } from "lucide-react";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const leftMenuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Bookmark, label: "Bookmarks", href: "/bookmarks" },
    { icon: User, label: "Profile", href: "/profile" },
  ];

  const rightMenuItems = [
    { icon: Hash, label: "Explore", href: "/explore" },
    { icon: Mail, label: "Messages", href: "/messages" },
    { icon: FileText, label: "Terms of Service", href: "/terms" },
    { icon: Shield, label: "Privacy", href: "/privacy" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
      />

      {/* Menu Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff",
          zIndex: 1000,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Close menu"
        >
          <X size={24} color="#000" />
        </button>

        {/* Menu Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px 30px",
            marginTop: "60px",
            maxWidth: "400px",
            margin: "60px auto 0",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {leftMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "16px",
                    fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
                    fontWeight: "100",
                    lineHeight: "24px",
                  }}
                >
                  <Icon size={21} strokeWidth={1.5} />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a
              href="/admin"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                color: "#000",
                fontSize: "16px",
                fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
                fontWeight: "100",
                lineHeight: "24px",
              }}
            >
              <span>Admin Panel*</span>
            </a>
          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {rightMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "16px",
                    fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
                    fontWeight: "100",
                    lineHeight: "24px",
                  }}
                >
                  <Icon size={21} strokeWidth={1.5} />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a
              href="/contact"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                color: "#000",
                fontSize: "16px",
                fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
                fontWeight: "100",
                lineHeight: "24px",
              }}
            >
              <span>Contact us</span>
            </a>
          </div>
        </div>

        {/* Post Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <a
            href="/post"
            onClick={onClose}
            style={{
              display: "flex",
              width: "182px",
              height: "48px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "#1D9BF0",
              textDecoration: "none",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
            }}
          >
            Post
          </a>
        </div>
      </div>
    </>
  );
}
