
function threeDigitRandomNumber(min, max) {
    return Math.floor(Math.random() * (1000 - 100));
}

export default function RandomStats() {
    return (
        <>
            <p>
                {threeDigitRandomNumber()},{threeDigitRandomNumber()}
            </p>
        </>
    )
}
