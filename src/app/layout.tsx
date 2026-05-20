import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeepFlowRun — Operação fluida. Diagnóstico profundo.",
  description:
    "Consultoria de IA aplicada. Entramos na sua operação, mapeamos onde o dinheiro está escapando e implementamos IA onde o número realmente muda.",
  metadataBase: new URL("https://deepflowrun.com.br"),
  openGraph: {
    title: "DeepFlowRun — Operação fluida. Diagnóstico profundo.",
    description:
      "Consultoria de IA aplicada para empresas B2B. Diagnóstico + implementação stack-agnostic.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
