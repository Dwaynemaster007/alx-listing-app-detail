import { ReviewProps } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews ({reviews.length})</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mt-4">
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-semibold text-white" aria-hidden>
              {review.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500">{"★".repeat(review.rating)} <span className="text-gray-500">{review.rating} stars</span></p>
            </div>
          </div>
          <p className="mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
