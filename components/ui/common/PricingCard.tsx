import "@styles/PricingCard.css"

interface PricingCardProps {
    title: string
    price: number
    description: string
}

const PricingCard = ({ title, price, description }: PricingCardProps) => {
    return <div className="pricing-card-container">
        <h3>{title}</h3>
        <p className="pricing-card-price">{price}</p><p>/ month</p>
        <p className="pricing-card-description">{description}</p>
    </div>
};


export default PricingCard;