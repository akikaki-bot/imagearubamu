import { readdirSync } from "fs";
import Image from "next/image";

export async function getImagesPath() {
	"use server";
	const dir = readdirSync("public/images")
	const images = dir.map((file) => `/images/${file}`);

	return images
}



export default async function Home() {
	const images = await getImagesPath();

	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 w-full">
			{
				images.map((image) => (<>
					<Image 
						alt={image} 
						src={image} 
						width={400} 
						height={400} 
						quality={75}
					/>
				</>))
			}
		</div>
	);
}

