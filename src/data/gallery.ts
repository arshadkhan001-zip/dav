/**
 * Gallery data — album covers from the reference Photo Gallery
 * (/Full/Photo/all), downloaded and recompressed locally.
 * Titles are the school's own album titles. No invented albums;
 * the source organises covers in one flat list, mirrored here.
 */

export interface GalleryImage {
  id: string;
  title: string;
  thumb: string;
  full: string;
  width: number;
  height: number;
  alt: string;
}

function item(id: string, title: string, w: number, h: number): GalleryImage {
  return {
    id,
    title,
    thumb: `/images/gallery/${id}-480.jpg`,
    full: `/images/gallery/${id}-1000.jpg`,
    width: w,
    height: h,
    alt: `${title} — DAV Police Public School, Panipat`,
  };
}

export const GALLERY_IMAGES: GalleryImage[] = [
  item("annual-sports-day", "Annual Sports Day 2023-24", 650, 433),
  item("dav-national-sports", "DAV National Sports, State Level 2024-25", 650, 433),
  item("mother-day", "Mother Day Celebration 2025-26", 650, 433),
  item("capacity-building", "Capacity Building Programme 2025-26", 650, 433),
  item("show-and-tell", "Show and Tell Activity 2025-26", 650, 433),
  item("plantation-drive", "Plantation Drive, NSS Volunteers", 650, 433),
  item("shloka-recitation", "Inter House Shloka Recitation Competition", 650, 433),
  item("yoga-day", "International Yoga Day", 150, 100),
  item("hindi-rhyme", "Hindi Rhyme Recitation Competition", 650, 433),
  item("boxing", "Boxing", 150, 99),
  item("atl-tinker-fest", "ATL Tinker Fest 2019", 150, 112),
  item("independence-day", "Independence Day", 150, 112),
];
