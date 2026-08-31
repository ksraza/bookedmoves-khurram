import founderAsset from "@/assets/founder.png.asset.json";
import logoWhiteAsset from "@/assets/logo-white.png.asset.json";
import logoUrl from "@/assets/logo-transparent.png";
import { assetUrl } from "@/lib/asset";

export const LOGO_URL: string = logoUrl;
export const LOGO_WHITE_URL: string = assetUrl(logoWhiteAsset);
export const FOUNDER_URL: string = assetUrl(founderAsset);
