import "~/styles/globals.css";

import { Toaster } from "~/components/ui/toaster";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Leonardo P. Côrtes",
  description: "Portfólio de Leonardo Pereira Côrtes",
  icons: [{ rel: "icon", url: "/L2.jpg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <TRPCReactProvider>
          <div
            className="font-lexend mx-auto text-texto_principal"
            style={
              {
                // width: "min(1400px,100%)",
              }
            }
          >
            {children}
          </div>
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
