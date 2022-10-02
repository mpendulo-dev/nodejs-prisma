import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// await prisma.user.create({
	// 	data: {
	// 		email: 'mayga@test.com',
	// 		name: 'Rhino',
	// 		age: 17,
	// 		userPreference: {
	// 			create: {
	// 				emailUpdates: true,
	// 			},
	// 		},
	// 	},
	// });
	// const users = await prisma.user.createMany({
	// 	data: [
	// 		{
	// 			email: 'mpe@test.com',
	// 			name: 'Answer',
	// 			age: 14,
	// 		},
	// 		{
	// 			email: 'alto@test.com',
	// 			name: 'Goma',
	// 			age: 16,
	// 		},
	// 	],
	// });

	// console.log(users);

	const user = await prisma.user.findUnique({
		where: {
			email: 'alto@test.com',
		},
	});
	console.log(user);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
