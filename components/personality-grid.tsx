import Image from "next/image";
import { Card } from "@/components/custom-ui/Card";

// Import images
import laptopImg from "@/assets/images/personality/carmen-laptop.jpeg";
import pianoImg from "@/assets/images/personality/carmen-piano.jpg";
import hikingImg from "@/assets/images/personality/carmen-hiking.jpg";
import soccerpyImg from "@/assets/images/personality/carmen-soccer-py.png";

export default function PersonalityGrid() {

    return (
        <section className="px-6 max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Coding */}
                <Card className="relative aspect-square md:aspect-[4/5] group overflow-hidden border-none shadow-md">
                    <Image
                        src={laptopImg}
                        alt="Coding on laptop"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="text-white font-semibold text-lg">Coding</span>
                    </div>
                </Card>

                {/* Card 2: Hobbies */}
                <Card className="relative aspect-square md:aspect-[4/5] group overflow-hidden border-none shadow-md">
                    <Image
                        src={pianoImg}
                        alt="Playing piano"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="text-white font-semibold text-lg">Hobbies</span>
                    </div>
                </Card>

                {/* Card 3: Travel */}
                <Card className="relative aspect-square md:aspect-[4/5] group overflow-hidden border-none shadow-md">
                    <Image
                        src={hikingImg}
                        alt="Hiking in nature"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                    />
                    <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="text-white font-semibold text-lg">Travel & Nature</span>
                    </div>
                </Card>
            </div>
        </section>
    )
}