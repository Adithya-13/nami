import React from 'react';

const ProofConceptComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white ">
      <div className="w-1/2 m-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold mb-4">Proof of concept</h1>
            <button
              className="px-6 py-3 bg-transparent text-white rounded-3xl   shadow-sm shadow-white transition"
              onClick={() => window.location.reload()}
            >
              Back
            </button>
          </div>
          <h2 className="text-2xl text-blue-400 mb-2">
            Nami, The Whisper of Waves
          </h2>
          <p className="text-gray-400">Last update: 12/01/2024</p>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Core Concept</h3>
          <p className="text-gray-300 leading-relaxed">
            NAMI is an interactive AI experience that blends mythology,
            technology, and user-driven narratives. Inspired by the endless
            depths of the ocean, NAMI evolves dynamically, creating personalized
            journeys that provoke thought, encourage exploration, and unravel
            the hidden potential within each interaction.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Technical Implementation
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-medium mb-3">
                Machine Learning (ML) for Dynamic Interaction
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Personalization: NAMI uses ML to adapt responses based on user
                  inputs
                </li>
                <li>
                  Sentiment Analysis: Recognizes emotional nuances in
                  conversations
                </li>
                <li>Generative Text: Employs advanced language models</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-medium mb-3">
                Blockchain Integration
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Transparency: Interactions stored on a decentralized ledger
                </li>
                <li>
                  User-Centric Evolution: Each interaction contributes to
                  collective intelligence
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Interactive Narrative Example
          </h3>
          <div className="bg-gray-900 p-6 rounded-lg space-y-4">
            <div>
              <p className="font-medium">User:</p>
              <p className="ml-4">`Who are you?`</p>
            </div>
            <div>
              <p className="font-medium text-blue-400">NAMI Reply:</p>
              <p className="ml-4 italic">
                `I am NAMI, the voice of the tides, the whisper of waves. But
                enough about me—what are you seeking beneath the surface?`
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Call to Action</h3>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Start interacting with NAMI
            </button>
          </div>
        </section>

        <footer className="text-center text-gray-400 italic">
          NAMI is more than a guide. She is the ocean itself—ever-moving,
          ever-changing, and endless in possibility.
        </footer>
      </div>
    </div>
  );
};

export default ProofConceptComponent;
