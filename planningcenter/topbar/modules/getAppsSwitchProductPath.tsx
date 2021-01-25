export default function getAppsSwitchProductPath(productName: string): string {
  let basePath = `/apps/${productName.toLowerCase()}`;
  let referer = window?.location.toString();

  if (!referer) return basePath;

  let params = new URLSearchParams();
  params.append("referer", referer);

  return `${basePath}?${params.toString()}`;
}
