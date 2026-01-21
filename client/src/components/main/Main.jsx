import "./Main.css";
import Card from "@/components/card/Card.jsx";

export default function Main() {
  const recipes = [
    {
      id: 1,
      title: "Classic Margherita Pizza",
      description:
        "A simple yet delicious pizza with fresh mozzarella, basil, and San Marzano tomatoes on a crispy thin crust.",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?auto=format&fit=crop&w=800",
      tags: ["Italian", "Vegetarian", "Lunch"],
    },
    {
      id: 2,
      title: "Spicy Shrimp Tacos",
      description:
        "Zesty grilled shrimp topped with avocado crema, pickled onions, and fresh cilantro served in warm corn tortillas.",
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800",
      tags: ["Mexican", "Seafood", "Fast"],
    },
    {
      id: 3,
      title: "Matcha Green Tea Latte",
      description:
        "A smooth and creamy ceremonial grade matcha whisked with oat milk and a hint of honey for sweetness.",
      image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800",
      tags: ["Drink", "Healthy", "Morning"],
    },
  ];

  return (
    <div className="main-content">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
          tags={recipe.tags}
          onClick={() => console.log(`Clicked ${recipe.title}`)}
        />
      ))}
    </div>
  );
}
