
import "./globals.css";

export const metadata = {
  title: "Kanishka S. Kottary | Personal Portfolio",
  description:
    "Personal portfolio of Kanishka S. Kottary, Computer Science Engineering student at Sahyadri College of Engineering and Management.",
  keywords: [
    "Kanishka Kottary",
    "Personal Portfolio",
    "Computer Science Engineering",
    "Student Developer",
    "Next.js",
    "React",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
