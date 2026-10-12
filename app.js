// Interactive Portfolio Logic - Onkar Hande

const cleanData = [
  { id: 101, name: "Rahul Sharma", city: "Mumbai", product: "Wireless Mouse", qty: 2, price: "₹450", date: "2024-01-15", total: "₹900" },
  { id: 102, name: "Pooja Patil", city: "Pune", product: "Keyboard", qty: 1, price: "₹800", date: "2024-01-16", total: "₹800" },
  { id: 103, name: "Amit Verma", city: "Delhi", product: "USB Cable", qty: 3, price: "₹150", date: "2024-01-17", total: "₹450" },
  { id: 104, name: "Sneha Kulkarni", city: "Pune", product: "Laptop Stand", qty: 1, price: "₹1,200", date: "2024-01-18", total: "₹1,200" },
  { id: 105, name: "Amit Verma", city: "Delhi", product: "USB Cable", qty: 2, price: "₹150", date: "2024-01-19", total: "₹300" },
  { id: 106, name: "Vikram Singh", city: "Nagpur", product: "Gaming Headset", qty: 1, price: "₹1,500", date: "2024-01-20", total: "₹1,500" },
  { id: 107, name: "Neha Joshi", city: "Mumbai", product: "Wireless Mouse", qty: 1, price: "₹450", date: "2024-01-21", total: "₹450" },
  { id: 108, name: "Rohan Mane", city: "Pune", product: "Keyboard", qty: 2, price: "₹800", date: "2024-01-22", total: "₹1,600" },
  { id: 109, name: "Priya Deshmukh", city: "Mumbai", product: "Laptop Stand", qty: 2, price: "₹1,200", date: "2024-01-23", total: "₹2,400" },
  { id: 110, name: "Aniket Shinde", city: "Nagpur", product: "Wireless Mouse", qty: 3, price: "₹450", date: "2024-01-24", total: "₹1,350" }
];

const rawData = [
  { id: 101, name: "  rahul sharma  ", city: "mumbai", product: "Wireless Mouse", qty: 2, price: "$450", date: "2024-01-15", total: "—" },
  { id: 102, name: "Pooja Patil", city: "PUNE", product: "Keyboard", qty: 1, price: "$800", date: "16/01/2024", total: "—" },
  { id: 103, name: "Amit Verma", city: "delhi", product: "USB Cable", qty: 3, price: "$150", date: "Jan 17 2024", total: "—" },
  { id: 101, name: "rahul sharma", city: "mumbai", product: "Wireless Mouse", qty: 2, price: "$450", date: "2024-01-15", total: "— (DUPLICATE)" },
  { id: 104, name: "sneha kulkarni", city: "Pune", product: "Laptop Stand", qty: 1, price: "$1200", date: "2024-01-18", total: "—" },
  { id: 105, name: "  AMIT VERMA  ", city: "Delhi", product: "USB Cable", qty: 2, price: "$150", date: "2024-01-19", total: "—" },
  { id: 106, name: "vikram singh", city: "nagpur", product: "Gaming Headset", qty: 1, price: "$1500", date: "20/01/2024", total: "—" },
  { id: 102, name: "Pooja Patil", city: "PUNE", product: "Keyboard", qty: 1, price: "$800", date: "16/01/2024", total: "— (DUPLICATE)" }
];

function renderTable(data, isClean) {
  const container = document.getElementById('dataset-table-wrapper');
  if (!container) return;

  let html = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>City</th>
          <th>Product</th>
          <th>Qty</th>
          <th>Unit Price</th>
          <th>Order Date</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
  `;

  data.forEach(row => {
    html += `
      <tr>
        <td><strong>#${row.id}</strong></td>
        <td>${row.name}</td>
        <td>${row.city}</td>
        <td>${row.product}</td>
        <td>${row.qty}</td>
        <td>${row.price}</td>
        <td>${row.date}</td>
        <td><strong style="color: ${isClean ? '#059669' : '#DC2626'}">${row.total}</strong></td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

function toggleDatasetView(type) {
  const title = document.getElementById('dataset-title');
  const badge = document.getElementById('dataset-badge');

  if (type === 'clean') {
    title.innerText = "Showing: Cleaned & Formatted Data (Audit-Ready)";
    badge.innerText = "Clean";
    badge.style.background = "#ECFDF5";
    badge.style.color = "#047857";
    renderTable(cleanData, true);
  } else {
    title.innerText = "Showing: Unfiltered Raw Client CSV Export (Notice Duplicates & Irregular Cases)";
    badge.innerText = "Raw / Messy";
    badge.style.background = "#FEF2F2";
    badge.style.color = "#B91C1C";
    renderTable(rawData, false);
  }
}

// Interactive n8n Simulator
function simulateLeadAutomation(e) {
  e.preventDefault();

  const nameInput = document.getElementById('lead-name').value;
  const phoneInput = document.getElementById('lead-phone').value;
  const service = document.getElementById('lead-service').value;
  const budget = parseInt(document.getElementById('lead-budget').value, 10) || 0;

  // 1. Clean Name
  const cleanName = nameInput.trim().replace(/\b\w/g, c => c.toUpperCase());

  // 2. Format Phone
  const digits = phoneInput.replace(/[^0-9]/g, '');
  const cleanPhone = digits.length === 10 ? '91' + digits : digits;

  // 3. Priority Scoring
  let priority = "Standard Lead 📌";
  if (budget >= 30000) {
    priority = "HIGH PRIORITY 🔥 (VIP)";
  } else if (budget >= 15000) {
    priority = "Medium Priority ⚡";
  }

  const leadId = "LD-" + Math.floor(100000 + Math.random() * 900000);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(cleanName)}`;

  const mockTelegramMsg = 
`🚨 NEW QUALIFIED LEAD DISPATCHED!
────────────────────────────
🆔 Lead ID:     ${leadId}
👤 Name:        ${cleanName}
💼 Service:     ${service}
💰 Budget:      ₹${budget.toLocaleString('en-IN')}
🏷️ Priority:    ${priority}

📞 Contact Info:
• Phone: +${cleanPhone}
• Status: Logged to Google Sheets ('Leads' tab)

💬 Quick Action:
➔ Direct WhatsApp: ${whatsappUrl}
────────────────────────────
🚀 Latency: 120ms | Trigger: Webhook (n8n)`;

  const resultBox = document.getElementById('simulator-result-box');
  const telegramText = document.getElementById('mock-telegram-text');

  telegramText.innerText = mockTelegramMsg;
  resultBox.style.display = 'block';
}

async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('submit-btn');
  const status = document.getElementById('contact-status-msg');
  const accessKeyInput = document.getElementById('web3forms-key');

  const name = document.getElementById('client-name').value;
  const email = document.getElementById('client-email').value;
  const service = document.getElementById('client-service').value;
  const message = document.getElementById('client-message').value;

  btn.disabled = true;
  const originalText = btn.innerHTML;
  btn.innerText = "Sending Message...";

  // Check if Web3Forms access key is configured
  const accessKey = accessKeyInput ? accessKeyInput.value.trim() : '';

  if (accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE') {
    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        status.style.display = 'block';
        status.style.color = '#059669';
        status.innerHTML = "✅ <strong>Thank you!</strong> Your inquiry has been sent directly to Onkar's inbox.";
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      status.style.display = 'block';
      status.style.color = '#DC2626';
      status.innerHTML = "⚠️ Opening email client to send directly to Onkar...";
      window.location.href = `mailto:onkarhande96@gmail.com?subject=Project Inquiry - ${encodeURIComponent(service)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AService: ${encodeURIComponent(service)}%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    }
  } else {
    // Zero-configuration fallback: opens client's email app prefilled
    status.style.display = 'block';
    status.style.color = '#2563EB';
    status.innerHTML = "🚀 Opening email to send directly to <strong>onkarhande96@gmail.com</strong>...";
    window.location.href = `mailto:onkarhande96@gmail.com?subject=Project Inquiry - ${encodeURIComponent(service)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AService: ${encodeURIComponent(service)}%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
  }

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }, 1000);
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderTable(cleanData, true);
});
