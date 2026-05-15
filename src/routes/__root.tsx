import { createRootRouteWithContext, HeadContent, Outlet, Scripts, useRouter, Link } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import appCss from "../styles.css?url";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">This page doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-[color:var(--blush)] px-4 py-2 text-sm font-medium text-white">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-md bg-[color:var(--blush)] px-4 py-2 text-sm font-medium text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "She Shield AI — Smarter safety for women" },
      { name: "description", content: "She Shield AI helps women stay safe with intelligent threat detection, real-time alerts, and a trusted guardian network." },
      { property: "og:title", content: "She Shield AI — Smarter safety for women" },
      { name: "twitter:title", content: "She Shield AI — Smarter safety for women" },
      { property: "og:description", content: "She Shield AI helps women stay safe with intelligent threat detection, real-time alerts, and a trusted guardian network." },
      { name: "twitter:description", content: "She Shield AI helps women stay safe with intelligent threat detection, real-time alerts, and a trusted guardian network." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/50dc186a-8f7f-4aaa-884d-d9e5b7bb0ea6" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/50dc186a-8f7f-4aaa-884d-d9e5b7bb0ea6" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fustat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
        {/* Global background glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
          <div
            className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full opacity-70"
            style={{ background: "radial-gradient(closest-side, #FFC1D1, transparent 70%)", filter: "blur(120px)" }}
          />
          <div
            className="absolute left-40 -top-20 h-[500px] w-[500px] rounded-full opacity-80"
            style={{ background: "radial-gradient(closest-side, #FF9BB8, transparent 70%)", filter: "blur(100px)" }}
          />
        </div>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
