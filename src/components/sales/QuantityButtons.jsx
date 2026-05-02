function QuantityButton({ addQuantity, removeQuantity, quantity }) {
  return (
    <section className="flex flex-row items-center gap-5">
      <div className="cursor-pointer text-xl font-bold" onClick={addQuantity}>
        +
      </div>
      <p className="text-lg">{quantity}</p>
      <div
        className="cursor-pointer text-xl font-bold"
        onClick={removeQuantity}
      >
        -
      </div>
    </section>
  );
}

export default QuantityButton;
