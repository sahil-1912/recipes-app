// src/components/RecipeForm.tsx
"use client";

const HomePage = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Simple Recipes Made For Real, Actual, Everyday Life
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Smores-Bars-6-Featured.jpg"
            alt="Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-bold">Desserts</h2>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Summer-Cobb-Salad-in-Bowl.jpg"
            alt="Salad"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-bold">Salads</h2>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/pickled-strawberries-5-scaled.jpg"
            alt="Snack"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-bold">Snacks</h2>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Easy-Shrimp-Tacos.jpg"
            alt="Most Popular"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-bold">Most Popular</h2>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
        <div className="flex overflow-x-scroll space-x-4">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <img
              src="/path/to/image5.jpg"
              alt="Quick and Easy"
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="text-center mt-2">Quick and Easy</p>
          </div>
          <div className="bg-white rounded-full p-4 shadow-lg">
            <img
              src="/path/to/image6.jpg"
              alt="Dinner"
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="text-center mt-2">Dinner</p>
          </div>
          {/* Add more categories as needed */}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
