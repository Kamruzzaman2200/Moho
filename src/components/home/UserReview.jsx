import Review from "./Review"
const UserReview = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
        </div>
    )
}

export default UserReview