// pricing.js

const basePrice = 1000;
const pricePerCharacter = 50;

/**
 * Calculates the price of a domain based on its length.
 * @param {string} domain - The domain name to evaluate.
 * @returns {number} The calculated price.
 */
function calculateDomainPrice(domain) {
    const domainLength = domain.replace(/[^a-zA-Z]/g, "").length;
    return Math.max(basePrice - (domainLength * pricePerCharacter), 0);
}
