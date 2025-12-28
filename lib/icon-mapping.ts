export function getTechIconPath(techName: string): string | null {
  const normalizedName = techName.toLowerCase().replace(/\s+/g, "");

  if (normalizedName.includes("python")) return "/icons/python.svg";
  if (normalizedName === "c" || normalizedName === "clang")
    return "/icons/c.svg";
  if (normalizedName.includes("c++") || normalizedName.includes("cpp"))
    return "/icons/cpp.svg";
  if (normalizedName.includes("java") && !normalizedName.includes("javascript"))
    return "/icons/java.svg";
  if (normalizedName.includes("html")) return "/icons/html5.svg";
  if (normalizedName.includes("css")) return "/icons/css3.svg";
  if (normalizedName.includes("bootstrap")) return "/icons/bootstrap.svg";
  if (normalizedName.includes("mysql")) return "/icons/mysql.svg";
  if (normalizedName.includes("firebase")) return "/icons/firebase.svg";
  if (
    normalizedName.includes("dsa") ||
    normalizedName.includes("datastructures")
  )
    return "/icons/dsa.svg";
  if (
    normalizedName.includes("oop") ||
    normalizedName.includes("objectoriented")
  )
    return "/icons/oop.svg";
  if (normalizedName.includes("github")) return "/icons/github.svg";
  if (
    normalizedName.includes("vscode") ||
    normalizedName.includes("visualstudio")
  )
    return "/icons/vscode.svg";
  if (
    normalizedName.includes("colab") ||
    normalizedName.includes("googlecolab")
  )
    return "/icons/googlecolab.svg";
  if (normalizedName.includes("aws") || normalizedName.includes("amazon"))
    return "/icons/aws.svg";

  if (normalizedName.includes("nodejs") || normalizedName.includes("node"))
    return "/icons/nodejs.svg";
  if (normalizedName.includes("javascript") || normalizedName.includes("js"))
    return "/icons/javascript.svg";
  if (normalizedName.includes("typescript") || normalizedName.includes("ts"))
    return "/icons/typescript.svg";
  if (normalizedName.includes("tailwind")) return "/icons/tailwind.svg";
  if (normalizedName.includes("scss") || normalizedName.includes("sass"))
    return "/icons/scss.svg";
  if (normalizedName.includes("framer")) return "/icons/framer.svg";
  if (normalizedName.includes("react")) return "/icons/react.svg";
  if (normalizedName.includes("redux")) return "/icons/redux.svg";
  if (normalizedName.includes("next")) return "/icons/nextjs.svg";

  if (normalizedName.includes("express")) return "/icons/express.svg";
  if (normalizedName.includes("mongo")) return "/icons/mongodb.svg";
  if (normalizedName.includes("supabase")) return "/icons/supabase.svg";
  if (normalizedName.includes("sanity")) return "/icons/sanity.svg";
  if (normalizedName.includes("docker")) return "/icons/docker.svg";
  if (normalizedName.includes("vercel")) return "/icons/vercel.svg";
  if (normalizedName.includes("git") && !normalizedName.includes("github"))
    return "/icons/git.svg";
  if (normalizedName.includes("postman")) return "/icons/postman.svg";
  if (normalizedName.includes("cloudflare")) return "/icons/cloudflare.svg";

  return null;
}
