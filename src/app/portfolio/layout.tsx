import "~/styles/globals.css";

import { Toaster } from "~/components/ui/toaster";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Portfolio | Leonardo P. Côrtes",
  description: "Portfólio de Leonardo Pereira Côrtes",
  icons: [{ rel: "icon", url: "/L2.png" }],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <TRPCReactProvider>
        <div
          className="font-poppins mx-auto text-texto_principal"
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
  );
}
