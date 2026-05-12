export default function CustomerInfo({ form, setForm }) {
  return (
    <div style={{ marginTop: "15px" }}>
      <h3>Customer Information</h3>

      <input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
    </div>
  );
}