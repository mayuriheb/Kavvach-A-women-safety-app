// Chatbotlogic.js

export function getBotReply(userMessage) {
  const msg = userMessage.toLowerCase();

  // ---------- DANGER / PANIC HELP ----------
  if (
    msg.includes("danger") ||
    msg.includes("help me") ||
    msg.includes("emergency") ||
    msg.includes("unsafe") ||
    msg.includes("scared") ||
    msg.includes("threat") ||
    msg.includes("panic") ||
    msg.includes("i am in danger")
  ) {
    return (
      "🚨 **If you're in immediate danger, please contact emergency services now.**\n\n" +
      "Here are emergency numbers:\n" +
      "• **Police** — 100\n" +
      "• **Women Safety (1091)** — 24/7 support\n" +
      "• **Ambulance** — 102\n\n" +
      "Stay calm. I'm here with you — please tell me your location so I can help further."
    );
  }

  // ---------- HELPLINE INFORMATION ----------
  if (msg.includes("helpline") || msg.includes("help line") || msg.includes("numbers")) {
    return (
      "Here are important helpline numbers:\n" +
      "• **Women’s Safety** — 1091\n" +
      "• **Senior Citizens** — 14567\n" +
      "• **Child Helpline** — 1098\n" +
      "• **Police Emergency** — 100"
    );
  }

  if (msg.includes("women") && msg.includes("safety")) {
    return "Women’s Safety Helpline: **1091** — available 24/7.";
  }

  // ---------- SAFE LOCATIONS ----------
  if (msg.includes("safe locations") || msg.includes("near me") || msg.includes("safe place")) {
    return (
      "Here are some safe locations near you:\n" +
      "• Community Help Center — JP Nagar\n" +
      "• City Police Station — MG Road\n" +
      "• Public Shelter — Cubbon Park Metro Area\n" +
      "• Child Safety Center — Koramangala\n"
    );
  }

  // ---------- GREETING ----------
  if (msg.includes("hi") || msg.includes("hello")) {
    return "Hello! How can I support you today?";
  }

  // ---------- DEFAULT FALLBACK ----------
  return (
    "I'm here to help with **danger support, helpline numbers, and safe locations.**\n" +
    "Try asking things like:\n" +
    "• 'I am in danger'\n" +
    "• 'Show me helpline numbers'\n" +
    "• 'Safe locations near me'"
  );
}

