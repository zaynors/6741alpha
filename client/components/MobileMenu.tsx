import { Home, Compass, Bell, Mail, Bookmark, User } from "lucide-react";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { icon: Home, label: "Home", href: "/", id: "home" },
  { icon: Compass, label: "Explore", href: "/explore", id: "explore" },
  {
    icon: Bell,
    label: "Notifications",
    href: "/notifications",
    id: "notifications",
  },
  { icon: Mail, label: "Messages", href: "/messages", id: "messages" },
  { icon: Bookmark, label: "Bookmarks", href: "/bookmarks", id: "bookmarks" },
  { icon: User, label: "Profile", href: "/profile", id: "profile" },
];

const subMenuItems = [
  { icon: Home, label: "Home", href: "/", id: "submenu-home" },
  { icon: Home, label: "Shop", href: "/shop", id: "submenu-shop" },
  { icon: Home, label: "Mega menu", href: "/about", id: "submenu-about" },
  { icon: Home, label: "Services", href: "/services", id: "submenu-services" },
  { icon: Home, label: "Blog", href: "/blog", id: "submenu-blog" },
  { icon: Home, label: "Contact us", href: "/contact", id: "submenu-contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
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
            transition: "opacity 0.3s ease-in-out",
            opacity: isOpen ? 1 : 0,
          }}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "275px",
          maxWidth: "80vw",
          backgroundColor: "#fff",
          zIndex: 1000,
          overflowY: "auto",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          boxShadow: isOpen ? "2px 0 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        {/* Header with Logo and Close Button */}
        <div
          style={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline",
              fontSize: "20px",
              lineHeight: "30px",
              textDecoration: "none",
              color: "rgb(15, 20, 25)",
            }}
          >
            <img
              alt="Site logo"
              loading="lazy"
              src="https://67.vvveb.com/media/logo.png"
              style={{
                maxHeight: "60px",
                verticalAlign: "middle",
                display: "inline",
              }}
            />
          </a>
          <button
            onClick={onClose}
            style={{
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
        </div>

        {/* Navigation */}
        <div
          style={{
            padding: "16px",
            width: "100%",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              position: "relative",
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  style={{
                    width: "100%",
                    marginBottom: "8px",
                    padding: "12px 15px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                    color: "rgb(15, 20, 25)",
                    fontWeight: item.id === "home" ? "700" : "normal",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div style={{ width: "100%", marginTop: "8px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {subMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      style={{
                        width: "100%",
                        marginBottom: "8px",
                        padding: "12px 15px",
                        borderRadius: "25px",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        textDecoration: "none",
                        color: "rgb(15, 20, 25)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(0, 0, 0, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="/post"
              onClick={onClose}
              style={{
                width: "75%",
                marginTop: "16px",
                padding: "12px 20px",
                borderRadius: "20px",
                backgroundColor: "rgb(77, 77, 209)",
                color: "rgb(255, 255, 255)",
                cursor: "pointer",
                textDecoration: "none",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "16px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(60, 60, 180)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(77, 77, 209)";
              }}
            >
              Post
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
