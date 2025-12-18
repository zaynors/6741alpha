import { Home, Compass, Bell, Mail, Bookmark, User } from "lucide-react";

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

export default function Sidebar() {
  return (
    <div
      style={{
        width: "275px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        maxWidth: "100%",
        paddingBottom: "8px",
        paddingTop: "8px",
        position: "sticky",
        top: "0",
        height: "100%",
      }}
    >
      <div
        style={{
          paddingBottom: "16px",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "16px",
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
            style={{
              width: "75%",
              marginTop: "16px",
              padding: "12px 20px",
              borderRadius: "20px",
              backgroundColor: "rgba(0, 119, 255, 1)",
              color: "rgb(255, 255, 255)",
              cursor: "pointer",
              textDecoration: "none",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "16px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgb(0, 100, 220)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 119, 255, 1)";
            }}
          >
            Post
          </a>
        </nav>
      </div>
    </div>
  );
}
