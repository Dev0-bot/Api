// api/fact
export default function handler(req, res) {
    const facts = [
      { fact: "Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old!" },
      { fact: "A group of flamingos is called a 'flamboyance.'" },
      { fact: "Bananas are berries, but strawberries aren't." },
    ];
  
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
  
    res.status(200).json(randomFact);
  }
  