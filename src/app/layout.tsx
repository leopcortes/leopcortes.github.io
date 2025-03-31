import "~/styles/globals.css";

import { Roboto } from "next/font/google";

import { Toaster } from "~/components/ui/toaster";
import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Leonardo P. Côrtes",
  description: "Portfólio de Leonardo Pereira Côrtes",
  icons: [{ rel: "icon", url: "/iconleopcortes.jpg" }],
};

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn(font.className, "antialiased")}>
      <body>
        <TRPCReactProvider>
          <div
            className="mx-auto"
            style={{
              width: "min(1400px,100%)",
            }}
          >
            {children}
          </div>
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
