import TelegramSupport from "@/components/TelegramSupport";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <TelegramSupport username="jovia_support" />
      </body>
    </html>
  );
}
