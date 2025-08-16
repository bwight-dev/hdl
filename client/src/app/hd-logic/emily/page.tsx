export default function EmilyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">EMILY</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <p className="text-xl mb-6 italic text-amber-400">
              &ldquo;Emily, brave Emily. I love Emily for what she does for me. She does everything. Emily is family.&rdquo;
            </p>
            
            <p className="text-lg mb-6">
              <strong>Emily is &ldquo;family&rdquo;</strong> in Juke&apos;s dreams. You can substitute the word &ldquo;family&rdquo; 
              for Emily whenever she appears in the dreams. Emily&apos;s status (brave, strong, pure, etc.) whenever 
              corresponds with the status of Mom and Dad during the preceding day.
            </p>
            
            <p className="text-lg mb-6">
              Emily represents the complex emotional landscape of Juke&apos;s family relationships. To Juke, all of 
              his family members are &ldquo;Emily&rdquo; — a singular representation of love, support, and connection 
              in his dream world.
            </p>
            
            <p className="text-lg mb-6">
              In reality, Juke&apos;s family has evolved since the events of the book. His parents are now remarried, 
              expanding the circle of love and care around him. Each family member contributes to the composite 
              character of Emily in Juke&apos;s dreams.
            </p>
            
            <p className="text-lg">
              Through Emily, we see how Juke perceives and processes the love of his family — not as separate 
              individuals, but as a unified force of care and protection in his life. She embodies the strength, 
              bravery, and unconditional love that family provides, especially in the face of life&apos;s greatest challenges.
            </p>
          </div>
          
          {/* Placeholder for image */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="h-80 bg-gray-700 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-400">Julian and Emily (circa 2020)</span>
            </div>
            <p className="text-center text-gray-400">
              Julian and Emily (circa 2020)<br />
              <span className="text-sm italic">Other family not pictured</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}