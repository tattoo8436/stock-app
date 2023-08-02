import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Stock App",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="stock-app">
      <Header />

      <div className="stock-app__content">{children}</div>

      <Footer />
    </div>
  );
}
