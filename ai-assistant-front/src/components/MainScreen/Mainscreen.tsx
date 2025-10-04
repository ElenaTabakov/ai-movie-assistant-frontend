const Mainscreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          AI Movie Assistant
        </h1>
        <p className="text-gray-600 text-center">
          What are you in the mood to watch?
        </p>
      </div>
    </div>
  );
};

export default Mainscreen;
