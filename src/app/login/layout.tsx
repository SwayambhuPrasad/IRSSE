import Providers from "@/toClientSide/Providers";

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Providers>{children}</Providers>
    </section>
  );
}
