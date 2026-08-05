const faqs = [
    {
        question: "Do you offer vegetarian and vegan options?",
        answer: "Yes! We have a dedicated section on our menu for vegetarian and vegan dishes, carefully prepared using fresh, locally sourced ingredients to ensure the same great taste."
    },
    {
        question: "Can I book the restaurant for a private event?",
        answer: "Absolutely. We offer private dining and full restaurant buyout options for birthdays, corporate events, and celebrations. Please contact us at least two weeks in advance to arrange the details."
    },
    {
        question: "Do you offer delivery services in Bhola?",
        answer: "Currently, we offer delivery within a 5km radius of our Kalibari Road location. You can place your order directly through our website or by calling our hotline."
    },
    {
        question: "What are your opening hours?",
        answer: "We are open every day from 11:00 AM to 11:00 PM. On weekends, we highly recommend making a reservation in advance as our garden seating tends to fill up quickly."
    }
]

const Accordion = () => {
    return (
        <div className="flex flex-col gap-4 w-full sm:w-4/5 lg:w-2/3 mx-auto mt-10">
            {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    className="collapse collapse-plus bg-white border border-[#2d3e2f]/10 rounded-2xl shadow-sm hover:shadow-md hover:border-[#d4a574]/50 transition-all duration-300"
                >
                    {/* Using radio inputs so only one opens at a time */}
                    <input type="radio" name="moho-faq" defaultChecked={index === 0} /> 
                    
                    <div className="collapse-title text-base sm:text-lg font-semibold text-[#2d3e2f] py-5">
                        {faq.question}
                    </div>
                    
                    <div className="collapse-content text-base-content/70 font-light leading-relaxed text-sm sm:text-base"> 
                        <div className="border-t border-[#2d3e2f]/5 pt-4 pb-2">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion