import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { PROPERTYLISTINGSAMPLE, reviewsFor } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { PropertyProps, ReviewProps } from "@/interfaces";

interface PropertyPageProps {
  property: PropertyProps;
  reviews: ReviewProps[];
}

// Pre-render a page for every listing at build time
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: PROPERTYLISTINGSAMPLE.map((property) => ({ params: { id: String(property.id) } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PropertyPageProps> = async ({ params }) => {
  const property = PROPERTYLISTINGSAMPLE.find((item) => String(item.id) === params?.id);
  if (!property) return { notFound: true };
  return { props: { property, reviews: reviewsFor(property.id) } };
};

export default function PropertyPage({ property, reviews }: PropertyPageProps) {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <Link href="/" className="text-sm text-gray-600 hover:underline">← All properties</Link>
      <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PropertyDetail property={property} />
          <ReviewSection reviews={reviews} />
        </div>
        <div className="lg:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
}
