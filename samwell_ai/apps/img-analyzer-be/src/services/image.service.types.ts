export interface ImageResponse {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  breadcrumbs: string[];
  urls: string[];
  links: string[];
  likes: number;
  liked_by_user: boolean;
  asset_type: string;
}
