import "@/app/globals.css";
import Navbar from "@/components/ui/desktop/Navbar";
import Hamburguer from "@/components/ui/mobile/Hamburguer";

export const metadata = {
  title: "Blumenfeld Project",
  description: "Project management tool",
};

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {


  return (
    <html lang="en">
      <head>
        <title>Blumenfeld Project</title>
      </head>
      <body >
        <header>
          <Hamburguer />
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}


export default PublicLayout;