import { SolrouterAgent } from "@solrouter/sdk";

const agent = new SolrouterAgent({
  model: "encrypted-llama-3",
  privacyLevel: "maximum" 
});

async function runSecureAgent() {
  const userRequest = "Solana дээр 0.5 SOL-ийг аюулгүй шилжүүлэх гүйлгээ бэлд.";
  const response = await agent.processEncryptedRequest(userRequest);
  console.log("Шифрлэгдсэн хариу хүлээн авлаа:", response.secureId);
}

runSecureAgent();
