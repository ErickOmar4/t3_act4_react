function Caja({ titulo, children }) {
  return (
    <section style={{ border: '2px solid steelblue', padding: '12px', margin: '8px' }}>
      <h3>{titulo}</h3>
      {children}
    </section>
  )
}

export default Caja