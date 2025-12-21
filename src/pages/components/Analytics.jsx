import { useRouter } from "next/router";
import { useEffect } from "react";

const Analytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default Analytics;
