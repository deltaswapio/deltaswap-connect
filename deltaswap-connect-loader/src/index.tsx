import { useEffect } from "react";
import { DeltaswapConnectConfig } from "./types";

const PACKAGE_NAME = "@deltaswapio/deltaswap-connect";
const DEFAULT_VERSION =
  process.env.REACT_APP_CONNECT_CURRENT_VERSION || "latest";

function DeltaswapBridge({
  config,
  versionOrTag = DEFAULT_VERSION,
}: {
  config?: DeltaswapConnectConfig;
  versionOrTag?: string;
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.unpkg.com/${PACKAGE_NAME}@${versionOrTag}/dist/main.js`;
    script.async = true;

    const link = document.createElement("link");
    link.href = `https://www.unpkg.com/${PACKAGE_NAME}@${versionOrTag}/dist/main.css`;

    document.body.appendChild(script);
    document.body.appendChild(link);
    return () => {
      script.remove();
      link.remove();
    };
  }, [versionOrTag]);

  return (
    <div
      id="deltaswap-connect"
      //@ts-ignore
      config={config ? JSON.stringify(config) : null}
    ></div>
  );
}

export * from "./theme";
export * from "./types";
export default DeltaswapBridge;
