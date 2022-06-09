export const Journal = ({ manufacturer, size, datePurchased }) => {
    return <section className="journal">
    <div className="journal__size">{size}</div>
    <div className="journal__manufacturer">{manufacturer}</div>
    <div className="journal__date">{new Date(datePurchased).toLocaleDateString()}</div>
</section>
}