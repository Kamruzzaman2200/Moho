import Review from "./Review"

const reviews = [
    {
        id: 1,
        name: "Nusrat Jahan",
        role: "Food Blogger",
        comment: "Absolutely phenomenal! The atmosphere in the garden seating is magical, and the Grilled Salmon was cooked to perfection. A must-visit.",
        rating: 5,
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
        id: 2,
        name: "Tariqul Islam",
        role: "Local Guide",
        comment: "MOHO never disappoints. The new menu is fantastic, and the staff makes you feel right at home. The Tiramisu is the best I've ever had.",
        rating: 5,
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
        id: 3,
        name: "Sadia Rahman",
        role: "Traveler",
        comment: "Found this hidden gem while visiting Bhola. The pasta carbonara was incredibly authentic. Beautiful interior and great music selection too!",
        rating: 4,
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    },
    {
        id: 4,
        name: "Anisur Hasan",
        role: "Regular Customer",
        comment: "My favorite spot for weekend dinners with the family. The portions are generous and the ingredients always taste farm-fresh. Highly recommended.",
        rating: 5,
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    }
]

const UserReview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
            {reviews.map(review => (
                <Review key={review.id} review={review} />
            ))}
        </div>
    )
}

export default UserReview