"use client"
import { useState } from "react"
import "./page.css"
import PricingCard from "@/components/ui/common/PricingCard"


interface selectionProps {
    title: string,
    price: number,
    description: string
}

const prices = [
    { title: "Free Plan", price: 0.0, description: "Plan for Volunteers or non groups managers" },
    { title: "Basic Plan", price: 14.99, description: "Basic Plan for newers members,startup or organizations" },
    { title: "Pro Plan", price: 29.99, description: "For growing organizations needing advanced features" }
]

const PricingPage = () => {

    const [selection, setSelection] = useState<selectionProps>({
        title: "",
        price: 0,
        description: ""
    })

    const handleClick = () => {
        // check if is login, then returnes and redirects to paypal or stripe
    }

    return (
        <section className="pricing-section">
            <h2>Ready to get started!</h2>
            <p>Choose your plan</p>
            <div className="pricing-option-container">
                {/* Pricing containers */}
                {prices.map((plan: any) => {
                    return <PricingCard
                        key={plan.title}
                        title={plan.title}
                        price={plan.price}
                        description={plan.description} />
                })}

            </div>
        </section>
    )
}

export default PricingPage;