import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: "construction" | "paving";
  beforeImage: string;
  afterImage: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Building Renovation",
    category: "construction",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    description: "Complete renovation of a commercial office building in Pretoria CBD"
  },
  {
    id: 2,
    title: "Residential Driveway Paving",
    category: "paving",
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    description: "Premium interlocking paver installation for residential property"
  },
  {
    id: 3,
    title: "Industrial Warehouse Construction",
    category: "construction",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
    description: "New industrial warehouse facility with modern specifications"
  },
  {
    id: 4,
    title: "Parking Lot Paving",
    category: "paving",
    beforeImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=600&fit=crop",
    description: "Complete parking lot resurfacing with proper drainage system"
  },
  {
    id: 5,
    title: "Residential Home Build",
    category: "construction",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    description: "Custom residential home construction from foundation to finish"
  },
  {
    id: 6,
    title: "Garden Pathway Paving",
    category: "paving",
    beforeImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "Decorative stone pathway installation in residential garden"
  }
];

const BeforeAfterSlider = ({ project }: { project: Project }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg group">
      {/* After Image (Background) */}
      <img
        src={project.afterImage}
        alt={`${project.title} - After`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={project.beforeImage}
          alt={`${project.title} - Before`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-primary -mr-1" />
          <ChevronRight className="w-4 h-4 text-primary -ml-1" />
        </div>
      </div>
      
      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded text-sm font-medium z-10">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-green-600/90 text-white px-3 py-1 rounded text-sm font-medium z-10">
        After
      </div>
    </div>
  );
};

const Gallery = () => {
  const [filter, setFilter] = useState<"all" | "construction" | "paving">("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Project Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our completed construction and paving projects. Drag the slider to see the transformation.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="min-w-[100px]"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "construction" ? "default" : "outline"}
              onClick={() => setFilter("construction")}
              className="min-w-[100px]"
            >
              Construction
            </Button>
            <Button
              variant={filter === "paving" ? "default" : "outline"}
              onClick={() => setFilter("paving")}
              className="min-w-[100px]"
            >
              Paving
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <BeforeAfterSlider project={project} />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      project.category === "construction"
                        ? "bg-primary/10 text-primary"
                        : "bg-green-600/10 text-green-600"
                    }`}
                  >
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
