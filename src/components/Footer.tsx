'use client'
import Link from "next/link";
const Footer =()=>{
    return (
        <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div>
              <h2 className="text-lg font-bold mb-4">PINCH OF YUM</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Recipe Index</a></li>
                <li><a href="#" className="hover:underline">Blogging Resources</a></li>
                <li><a href="#" className="hover:underline">Income Reports</a></li>
                <li><a href="#" className="hover:underline">Sponsored Content</a></li>
                <li><a href="#" className="hover:underline">Media Mentions</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">FOOD & RECIPES</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Sugar Free January</a></li>
                <li><a href="#" className="hover:underline">Freezer Meals 101</a></li>
                <li><a href="#" className="hover:underline">Quick and Easy Recipes</a></li>
                <li><a href="#" className="hover:underline">Instant Pot Recipes</a></li>
                <li><a href="#" className="hover:underline">Pasta Recipes</a></li>
                <li><a href="#" className="hover:underline">Vegan Recipes</a></li>
                <li><a href="#" className="hover:underline">Soup Recipes</a></li>
                <li><a href="#" className="hover:underline">Taco Recipes</a></li>
                <li><a href="#" className="hover:underline">Meal Prep Recipes</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">SIGNUP FOR EMAIL UPDATES</h2>
              <p className="mb-4">Get a Free eCookbook with our top 25 recipes.</p>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="First Name" className="w-full px-3 py-2 text-gray-800 rounded"/>
                </div>
                <div>
                  <input type="email" placeholder="Email" className="w-full px-3 py-2 text-gray-800 rounded"/>
                </div>
                <button type="submit" className="bg-yellow-500 text-gray-800 px-4 py-2 rounded">GO</button>
              </form>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left">
              <p>© 2024 Pinch of Yum. All Rights Reserved. A Raptive Partner Site.</p>
              <ul className="mt-4 md:mt-0 flex space-x-4 justify-center">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
              </ul>
            </div>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#" className="hover:underline">Food Blogger Pro Logo</a>
                <a href="#" className="hover:underline">Clariti Logo</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    )
}
export default Footer;