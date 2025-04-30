import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const author_1 = await prisma.author.upsert({
    where: { id: "1" },
    update: {},
    create: {
        id: "1",
        name: "Harper Lee"
    }
})
const author_2 = await prisma.author.upsert({
    where: { id: "2" },
    update: {},
    create: {
        id: "2",
        name: "George Orwell"
    }
})  
    const book_1 = await prisma.book.upsert({
        where: { id: "1" },
        update: {},
        create: {
            id: "1",
            title: "To Kill a Mockingbird",
            authorId: "1",
            year: 1960,
            genre: "Fiction",
            summary: "A powerful story of racial injustice and moral growth in the American South, told through the eyes of a young girl named Scout Finch.",
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    })
    const book_2 = await prisma.book.upsert({
        where: { id: "2" },
        update: {},
        create: {
            id: "2",
            title: "1984",
            authorId: "2",
            year: 1960,
            genre: "Dystopian Fiction",
            summary: "A chilling portrayal of a totalitarian regime where the government controls every aspect of people's lives, including their thoughts.",
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    })

    console.log(book_1, book_2, author_1, author_2)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
