import React from 'react'

const list = [
    {
        favorite: false,
        id: 1,
        firstName: 'George',
        lastName: 'Orwel',
        title: 1984,
        genre: 'Dystopian fiction',
        page: 328,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/518gNiNACGL._SX331_BO1,204,203,200_.jpg',
    },
    {
        favorite: false,
        id: 2,
        firstName: 'Mark',
        lastName: 'Twain',
        title: 'The Adventures of Huckleberry Finn',
        genre: 'Picaresque novel',
        page: 366,
        cover: 'https://2f96be1b505f7f7a63c3-837c961929b51c21ec10b9658b068d6c.ssl.cf2.rackcdn.com/products/034670.jpg'
    },
    {
        favorite: false,
        id: 3,
        firstName: 'Lewis',
        lastName: 'Carroll',
        title: 'Alice’s Adventures in Wonderland',
        genre: 'Literary nonsense',
        page: 200,
        cover: 'https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781447279990.jpg'
    },
    {
        favorite: false,
        id: 4,
        firstName: 'Michael',
        lastName: 'Chabon',
        title: 'The Amazing Adventures of Kavalier & Clay',
        genre: 'Historical fiction',
        page: 639,
        cover: 'https://m.media-amazon.com/images/I/51UjnBmJNZL.jpg'
    },
    {
        favorite: false,
        id: 5,
        firstName: 'Theodore',
        lastName: 'Dreiser',
        title: 'An American Tragedy',
        genre: 'Crime fiction',
        page: 800,
        cover: 'https://image.winudf.com/v2/image/Y29tLm1lZ2Fib29rcy5iZXN0LmFtZXJpY2FudHJhZ2VkeTMxMDdfc2NyZWVuXzRfMTUzNDgxNzMyNV8wMzg/screen-4.jpg?fakeurl=1&type=.jpg'
    },
    {
        favorite: false,
        id: 6,
        firstName: 'Frank',
        lastName: 'McCourt',
        title: 'Angela’s Ashes',
        genre: 'Autobiography',
        page: 368,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51A2T03B4SL._SX282_BO1,204,203,200_.jpg'
    },
    {
        favorite: false,
        id: 7,
        firstName: 'Leo',
        lastName: 'Tolstoy',
        title: 'Anna Karenina',
        genre: 'Realistic novel',
        page: 864,
        cover: 'https://images.booksense.com/images/250/293/9781978293250.jpg'
    },
    {
        favorite: false,
        id: 8,
        firstName: 'Anne',
        lastName: 'Frank',
        title: 'The Diary of a Young Girl',
        genre: 'Autobiography',
        page: 352,
        cover: 'https://cdn.waterstones.com/bookjackets/large/9780/2419/9780241952443.jpg'
    },
    {
        favorite: false,
        id: 9,
        firstName: 'Donald',
        lastName: 'Kagan',
        title: 'Archidamian War',
        genre: 'History',
        page: 392,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/61scRwQ8QUL._AC_UL600_SR387,600_.jpg'
    },
    {
        favorite: false,
        id: 10,
        firstName: 'Henry',
        lastName: 'James',
        title: 'The Art of Fiction',
        genre: 'Fiction',
        page: 224,
        cover: 'https://m.media-amazon.com/images/I/41x+Hy-asKL.jpg'
    },
    {
        favorite: false,
        id: 11,
        firstName: "Epictetus",
        lastName: "N/A",
        title: "Art of Living: The Classical Manual on Virtue, Happiness, and Effectiveness",
        genre: "Self-help",
        page: 144,
        cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625583369/the-art-of-living-9781625583369_hr.jpg"
    },
    {
        favorite: false,
        id: 12,
        firstName: "Sun",
        lastName: "Tzu",
        title: "The Art of War",
        genre: "Non-fiction",
        page: 288,
        cover: "https://jamesclear.com/wp-content/uploads/2015/11/TheArtofWar-by-SunTzu.jpg"
    },
    {
        favorite: false,
        id: 13,
        firstName: "William",
        lastName: "Faulkner",
        title: "As I Lay Dying",
        genre: "Dark Comedy",
        page: 267,
        cover: "https://m.media-amazon.com/images/I/51XkvLIHxxL.jpg"
    },
    {
        favorite: false,
        id: 14,
        firstName: "Ian",
        lastName: "McEwan",
        title: "Atonement",
        genre: "Novel",
        page: 351,
        cover: "https://images.randomhouse.com/cover/9780676974560"
    },
    {
        favorite: false,
        id: 15,
        firstName: "Lucy",
        lastName: "Grealy",
        title: "Autobiography of a Face",
        genre: "Autobiography",
        page: 256,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81J+xlUugnL.jpg"
    },
    {
        favorite: false,
        id: 16,
        firstName: "Kate",
        lastName: "Chopin",
        title: "The Awakening",
        genre: "Fiction",
        page: 303,
        cover: "https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9780743487672/9780743487672_hr.jpg"
    },
    {
        favorite: false,
        id: 17,
        firstName: "Dick",
        lastName: "King-Smith",
        title: "Babe",
        genre: "Children's",
        page: 128,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81lY0OpaL8L.jpg"
    },
    {
        favorite: false,
        id: 18,
        firstName: "Susan",
        lastName: "Faludi",
        title: "Backlash: The Undeclared War Against American Women",
        genre: "Non-fiction",
        page: 552,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386922920l/200883.jpg"
    },
    {
        favorite: false,
        id: 19,
        firstName: "Dai",
        lastName: "Sijie",
        title: "Balzac and the Little Chinese Seamstress",
        genre: "Historical Fiction",
        page: 190,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91Kkc0ZHa0L.jpg"
    },
    {
        favorite: false,
        id: 20,
        firstName: "Felix",
        lastName: "Salten",
        title: "Bambi: A Life in the Woods",
        genre: "Children's",
        page: 272,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71816gRUnLL.jpg"
    },
    {
        favorite: false,
        id: 21,
        firstName: "Ann",
        lastName: "Patchett",
        title: "Bel Canto",
        genre: "Psychological Fiction",
        page: 318,
        cover: "http://prodimage.images-bn.com/pimages/9780060838720_p0_v2_s1200x630.jpg"
    },
    {
        favorite: false,
        id: 22,
        firstName: "Sylvia",
        lastName: "Plath",
        title: "The Bell Jar",
        genre: "Psychological Fiction",
        page: 244,
        cover: "https://images.thenile.io/r1000/9780060837020.jpg"
    },
    {
        favorite: false,
        id: 23,
        firstName: "Toni",
        lastName: "Morrison",
        title: "Beloved",
        genre: "Historical Fiction",
        page: 324,
        cover: "https://s26162.pcdn.co/wp-content/uploads/2017/09/Belove_BookCover_WeAreTeachers.jpg"
    },
    {
        favorite: false,
        id: 24,
        firstName: "Anonymous",
        lastName: "Anonymous",
        title: "Beowulf",
        genre: "Poetry",
        page: 256,
        cover: "https://g.christianbook.com/g/slideshow/3/320979/main/320979_1_ftc_dp.jpg"
    },
    {
        favorite: false,
        id: 25,
        firstName: "Anonymous",
        lastName: "Anonymous",
        title: "The Bhagavad Gita",
        genre: "Hindu Scripture",
        page: 701,
        cover: "https://images-na.ssl-images-amazon.com/images/I/9167y6YkDZL.jpg"
    },
    {
        favorite: false,
        id: 26,
        firstName: "Peter",
        lastName: "Duffy",
        title: "The Bielski Brothers: The True Story of Three Men Who Defied the Nazis, Built a Village in the Forest, and Saved 1200 Jews",
        genre: "Documentary",
        page: 302,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51Saz99PESL._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 27,
        firstName: "Elizabeth",
        lastName: "Wurtzel",
        title: "Bitch: In Praise of Difficult Women",
        genre: "Non-Fiction",
        page: 448,
        cover: "https://m.media-amazon.com/images/I/51x-XPTS0bL.jpg"
    },
    {
        favorite: false,
        id: 28,
        firstName: "Mary",
        lastName: "McCarthy",
        title: "A Bolt from the Blue and Other Essays",
        genre: "Novel",
        page: 400,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41BMB-JUjmL._SX338_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 29,
        firstName: "Aldous",
        lastName: "Huxley",
        title: "Brave New World",
        genre: "Dystopian fiction",
        page: 311,
        cover: "https://i.pinimg.com/originals/25/e7/c0/25e7c09587e746b53941bbeffbe90d89.jpg"
    },
    {
        favorite: false,
        id: 30,
        firstName: "Monica",
        lastName: "Ali",
        title: "Brick Lane",
        genre: "Novel",
        page: 432,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433730686l/18723.jpg"
    },
    {
        favorite: false,
        id: 31,
        firstName: "Alan Jay",
        lastName: "Lerner",
        title: "Brigadoon",
        genre: "Novel",
        page: 200,
        cover: "https://images-na.ssl-images-amazon.com/images/I/410MirCwX4L.jpg"
    },
    {
        favorite: false,
        id: 32,
        firstName: "Voltaire",
        lastName: "Voltaire",
        title: "Candide",
        genre: "Novel",
        page: 84,
        cover: "https://m.media-amazon.com/images/I/51o5uPXRSgL.jpg"
    },
    {
        favorite: false,
        id: 33,
        firstName: "Geoffrey",
        lastName: "Chaucer",
        title: "The Canterbury Tales",
        genre: "Poetry",
        page: 912,
        cover: "https://images2.penguinrandomhouse.com/cover/9780553902525"
    },
    {
        favorite: false,
        id: 34,
        firstName: "Stephen",
        lastName: "King",
        title: "Carrie",
        genre: "Horror",
        page: 199,
        cover: "https://images-na.ssl-images-amazon.com/images/I/916W3jMu+mL.jpg"
    },
    {
        favorite: false,
        id: 35,
        firstName: "Joseph",
        lastName: "Heller",
        title: "Catch-22",
        genre: "Absurdist fiction",
        page: 453,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51eW-wH1K-L._SX324_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 36,
        firstName: "J.D.",
        lastName: "Salinger",
        title: "The Catcher in the Rye",
        genre: "Novel",
        page: 277,
        cover: "https://i.pinimg.com/originals/59/7f/b4/597fb48556f2d63ae86cb49197d0b477.jpg"
    },
    {
        favorite: false,
        id: 37,
        firstName: "Mark",
        lastName: "Twain",
        title: "The Celebrated Jumping Frog",
        genre: "Fiction",
        page: 32,
        cover: "https://m.media-amazon.com/images/I/41W4wuKH2pL.jpg"
    },
    {
        favorite: false,
        id: 38,
        firstName: "E.B.",
        lastName: "White",
        title: "Charlotte's Web",
        genre: "Children's",
        page: 192,
        cover: "https://images-na.ssl-images-amazon.com/images/I/916JW20V3yL.jpg"
    },
    {
        favorite: false,
        id: 39,
        firstName: "Lillian",
        lastName: "Hellman",
        title: "The Children's Hour",
        genre: "Drama",
        page: 70,
        cover: "https://www.dpspbs.com/pictures/medium/3441.jpg"
    },
    {
        favorite: false,
        id: 40,
        firstName: "Stephen",
        lastName: "King",
        title: "Christine",
        genre: "Novel",
        page: 526,
        cover: "https://d3525k1ryd2155.cloudfront.net/h/309/329/1349329309.0.x.jpg"
    },
    {
        favorite: false,
        id: 41,
        firstName: "Charles",
        lastName: "Dickens",
        title: "A Christmas Carol",
        genre: "Novel",
        page: 162,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91r7kYxAAyL.jpg"
    },
    {
        favorite: false,
        id: 42,
        firstName: "Brothers Grimm",
        lastName: "",
        title: "Cinderella",
        genre: "Children's",
        page: 32,
        cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780735842946/cinderella-9780735842946_hr.jpg"
    },
    {
        favorite: false,
        id: 43,
        firstName: "Anthony",
        lastName: "Burgess",
        title: "A Clockwork Orange",
        genre: "Novel",
        page: 213,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41mN6FBCVGL._SX316_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 44,
        firstName: "P.G.",
        lastName: "Wodehouse",
        title: "The Code of the Woosters",
        genre: "Comic novel",
        page: 272,
        cover: "https://covers.openlibrary.org/b/id/254199-L.jpg"
    },
    {
        favorite: false,
        id: 45,
        firstName: "Eudora",
        lastName: "Welty",
        title: "The Collected Stories",
        genre: "Fiction",
        page: 592,
        cover: "https://images-na.ssl-images-amazon.com/images/I/511WBcHJZeL.jpg"
    },
    {
        favorite: false,
        id: 46,
        firstName: "William",
        lastName: "Shakespeare",
        title: "A Comedy of Errors",
        genre: "Play",
        page: 69,
        cover: "https://m.media-amazon.com/images/I/51xfuF6iB0L.jpg"
    },
    {
        favorite: false,
        id: 47,
        firstName: "Dawn",
        lastName: "Powell",
        title: "Complete Novels",
        genre: "Novel",
        page: 969,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41lW1FYmGFL._SX311_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 48,
        firstName: "Anne",
        lastName: "Sexton",
        title: "The Complete Poems",
        genre: "Poetry",
        page: 656,
        cover: "https://m.media-amazon.com/images/I/51ieMWY9pJL.jpg"
    },
    {
        favorite: false,
        id: 49,
        firstName: "Dorothy",
        lastName: "Parker",
        title: "Complete Stories",
        genre: "Fiction",
        page: 480,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387735027l/322658.jpg"
    },
    {
        favorite: false,
        id: 50,
        firstName: "John",
        lastName: "Kennedy Toole",
        title: "A Confederacy of Dunces",
        genre: "Picaresque novel",
        page: 405,
        cover: "https://pictures.abebooks.com/inventory/30185614561.jpg"
    },
    {
        favorite: false,
        id: 51,
        firstName: "Mark",
        lastName: "Twain",
        title: "A Connecticut Yankee in King Arthur's Court",
        genre: "Novel",
        page: 336,
        cover: "https://g.christianbook.com/g/slideshow/4/41591/main/41591_1_ftc_dp.jpg"
    },
    {
        favorite: false,
        id: 52,
        firstName: "David",
        lastName: "Foster Wallace",
        title: "Consider the Lobster: And Other Essays",
        genre: "Non-fiction",
        page: 343,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41Kqqz6v7BL._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 53,
        firstName: "Carl",
        lastName: "Sagan",
        title: "Contact",
        genre: "Science Fiction",
        page: 432,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602082958l/61666._SY475_.jpg"
    },
    {
        favorite: false,
        id: 54,
        firstName: "Alexandre",
        lastName: "Dumas",
        title: "The Count of Monte Cristo",
        genre: "Novel",
        page: 1276,
        cover: "https://i.pinimg.com/originals/74/5e/6b/745e6bee4404bdec395fff084175cc48.jpg"
    },
    {
        favorite: false,
        id: 55,
        firstName: "Honore",
        lastName: "de Balzac",
        title: "Cousin Bette",
        genre: "Novel",
        page: 496,
        cover: "https://i.ebayimg.com/images/g/djMAAOSwX7hf~ec3/s-l500.jpg"
    },
    {
        favorite: false,
        id: 56,
        firstName: "Fyodor",
        lastName: "Dostoevsky",
        title: "Crime and Punishment",
        genre: "Novel",
        page: 430,
        cover: "http://prodimage.images-bn.com/pimages/9781631495311_p0_v6_s1200x630.jpg"
    },
    {
        favorite: false,
        id: 57,
        firstName: "Michel",
        lastName: "Faber",
        title: "The Crimson Petal and the White",
        genre: "Novel",
        page: 864,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51t4JqIkY6L._SX330_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 58,
        firstName: "Arthur",
        lastName: "Miller",
        title: "The Crucible",
        genre: "Tragedy",
        page: 160,
        cover: "https://donnasgeneralstore.com/wp-content/uploads/TheCrucible.jpg"
    },
    {
        favorite: false,
        id: 59,
        firstName: "Stephen",
        lastName: "King",
        title: "Cujo",
        genre: "Horror",
        page: 309,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71AKaPbpeYL.jpg"
    },
    {
        favorite: false,
        id: 60,
        firstName: "Mark",
        lastName: "Haddon",
        title: "The Curious Incident of the Dog in the Night-Time",
        genre: "Mystery",
        page: 274,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61q11L2zo6L.jpg"
    },
    {
        favorite: false,
        id: 61,
        firstName: "Edmond",
        lastName: "Rostand",
        title: "Cyrano De Bergerac",
        genre: "Play",
        page: 224,
        cover: "https://images-na.ssl-images-amazon.com/images/I/818gq1W75xL.jpg"
    },
    {
        favorite: false,
        id: 62,
        firstName: "Isabel",
        lastName: "Allende",
        title: "Daughter of Fortune",
        genre: "Novel",
        page: 432,
        cover: "https://images-na.ssl-images-amazon.com/images/I/719fQ9sJceS.jpg"
    },
    {
        favorite: false,
        id: 63,
        firstName: "Charles",
        lastName: "Dickens",
        title: "David Copperfield",
        genre: "Novel",
        page: 624,
        cover: "https://m.media-amazon.com/images/I/51TrWpIwMfL.jpg"
    },
    {
        favorite: false,
        id: 64,
        firstName: "Dan",
        lastName: "Brown",
        title: "The Da Vinci Code",
        genre: "Conspiracy Fiction",
        page: 359,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg"
    },
    {
        favorite: false,
        id: 65,
        firstName: "Nikolai",
        lastName: "Gogol",
        title: "The Dead Souls",
        genre: "Picaresque novel",
        page: 432,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71mjbyBGQ0L.jpg"
    },
    {
        favorite: false,
        id: 66,
        firstName: "Arthur",
        lastName: "Miller",
        title: "Death of a Salesman",
        genre: "Tragedy",
        page: 144,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71ZUsis6HjL.jpg"
    },
    {
        favorite: false,
        id: 67,
        firstName: "Judy",
        lastName: "Blume",
        title: "Deenie",
        genre: "Young adult",
        page: 160,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61qM3h4ZpFL.jpg"
    },
    {
        favorite: false,
        id: 68,
        firstName: "Fyodor",
        lastName: "Dostoyevsky",
        title: "Demons",
        genre: "Novel",
        page: 768,
        cover: "https://i.pinimg.com/originals/2e/39/cc/2e39cce395898c3ad056e9bfc2465247.png"
    },
    {
        favorite: false,
        id: 69,
        firstName: "Erik",
        lastName: "Larson",
        title: "The Devil in the White City: Murder, Magic, and Madness at the Fair that Changed America",
        genre: "Biography",
        page: 447,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91nh+RL7nPL.jpg"
    },

    {
        favorite: false,
        id: 70,
        firstName: "Tommy",
        lastName: "Lee",
        title: "The Dirt: Confessions of the World's Most Notorious Rock Band",
        genre: "Biography",
        page: 431,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81rjVu119KL.jpg"
    },
    {
        favorite: false,
        id: 71,
        firstName: "Dante",
        lastName: "Alighieri",
        title: "The Divine Comedy",
        genre: "Poetry",
        page: 712,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91vybHeMSxL.jpg"
    },
    {
        favorite: false,
        id: 72,
        firstName: "Rebecca",
        lastName: "Wells",
        title: "The Divine Secrets of the Ya-Ya Sisterhood",
        genre: "Novel",
        page: 368,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51Hn77QFjkL.jpg"
    },
    {
        favorite: false,
        id: 73,
        firstName: "Miguel",
        lastName: "De Cervantes",
        title: "Don Quixote",
        genre: "Parody",
        page: 863,
        cover: "https://m.media-amazon.com/images/I/51iQq6ZYedL.jpg"
    },
    {
        favorite: false,
        id: 74,
        firstName: "Bram",
        lastName: "Stocker",
        title: "Dracula",
        genre: "Horror",
        page: 418,
        cover: "https://m.media-amazon.com/images/I/51F49MFtd8L.jpg"
    },
    {
        favorite: false,
        id: 75,
        firstName: "Alfred",
        lastName: "Uhrv",
        title: "Driving Miss Daisy",
        genre: "Play",
        page: 72,
        cover: "https://m.media-amazon.com/images/I/41h9jc3k7vL.jpg"
    },
    {
        favorite: false,
        id: 76,
        firstName: "Edgar Allan",
        lastName: "Poe",
        title: "Edgar Allan Poe: Complete Tales & Poems",
        genre: "Poetry",
        page: 1023,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81kJufCw2yL.jpg"
    },
    {
        favorite: false,
        id: 77,
        firstName: "Blanche",
        lastName: "Wiesen Cook",
        title: "Eleanor Roosevelt",
        genre: "Biography",
        page: 686,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81ayAcK+91L.jpg"
    },
    {
        favorite: false,
        id: 78,
        firstName: "Tom",
        lastName: "Wolfe",
        title: "The Electric Kool-Aid Acid Test",
        genre: "Novel",
        page: 432,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51UMpPPd53L._SX330_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 79,
        firstName: "Mark",
        lastName: "Dunn",
        title: "Ella Minnow Pea: A Novel in Letters",
        genre: "Novel",
        page: 208,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81vjpjJ0R7L.jpg"
    },
    {
        favorite: false,
        id: 80,
        firstName: "Kay",
        lastName: "Thompson",
        title: "Eloise at the Plaza",
        genre: "Children's",
        page: 26,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71lUKI+wm4L.jpg"
    },
    {
        favorite: false,
        id: 81,
        firstName: "Roger",
        lastName: "Reger",
        title: "Emily the Strange",
        genre: "Novel",
        page: 432,
        cover: "https://m.media-amazon.com/images/I/51TPSVrIw0L.jpg"
    },

    {
        favorite: false,
        id: 82,
        firstName: "Jane",
        lastName: "Austen",
        title: "Emma",
        genre: "Romantic",
        page: 400,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51m1BWsfUCL._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 83,
        firstName: "Richard",
        lastName: "Russo",
        title: "Empire Falls",
        genre: "Novel",
        page: 496,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71L0e5sfpyL.jpg"
    },
    {
        favorite: false,
        id: 84,
        firstName: "Donald J",
        lastName: "Sobol",
        title: "Encyclopedia Brown: Boy Detective",
        genre: "Mystery",
        page: 96,
        cover: "https://images-na.ssl-images-amazon.com/images/I/810PMLLHUPL.jpg"
    },
    {
        favorite: false,
        id: 85,
        firstName: "Edith",
        lastName: "Wharton",
        title: "Ethan Frome",
        genre: "Novel",
        page: 195,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81iP6KeWlQL.jpg"
    },
    {
        favorite: false,
        id: 86,
        firstName: "Benedict",
        lastName: "De Spinoza",
        title: "Ethics",
        genre: "Early Modern",
        page: 305,
        cover: "https://m.media-amazon.com/images/I/51tIpRAJbfL._SL500_.jpg"
    },
    {
        favorite: false,
        id: 87,
        firstName: "Rick",
        lastName: "Steves",
        title: "Europe through the Back Door: The Travel Skills Handbook",
        genre: "Travel Guide",
        page: 777,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71dBKzhxZjL.jpg"
    },
    {
        favorite: false,
        id: 88,
        firstName: "Isabel",
        lastName: "Allende",
        title: "Eva Luna",
        genre: "Novel",
        page: 241,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51qq6csQfRL._SX320_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 89,
        firstName: "Jonathan",
        lastName: "Safran Foer",
        title: "Everything Is Illuminated",
        genre: "Novel",
        page: 276,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51m+Xj6mAwL.jpg"
    },
    {
        favorite: false,
        id: 90,
        firstName: "Norman",
        lastName: "Mailer",
        title: "The Executioner's Song",
        genre: "Biographical Fiction",
        page: 1136,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51BzPAcxmXL._SX328_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 91,
        firstName: "Gary",
        lastName: "Krist",
        title: "Extravagance",
        genre: "Novel",
        page: 304,
        cover: "https://m.media-amazon.com/images/I/41UeZ3YvSrL.jpg"
    },
    {
        favorite: false,
        id: 92,
        firstName: "Ray",
        lastName: "Bradbury",
        title: "Fahrenheit 451",
        genre: "Dystopian fiction",
        page: 249,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71OFqSRFDgL.jpg"
    },
    {
        favorite: false,
        id: 93,
        firstName: "Michael",
        lastName: "Moore",
        title: "Fahrenheit 9/11",
        genre: "Documentary",
        page: 363,
        cover: "https://images-na.ssl-images-amazon.com/images/I/518oyI4vZVL._SX307_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 94,
        firstName: "Donald",
        lastName: "Kagan",
        title: "The Fall of the Athenian Empire",
        genre: "History",
        page: 455,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61EHnzIPMvL.jpg"
    },
    {
        favorite: false,
        id: 95,
        firstName: "Greg",
        lastName: "Critser",
        title: "Fat Land: How Americans Became the Fattest People in the World",
        genre: "Diet book",
        page: 256,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71i6t+7AO2L.jpg"
    }, {
        favorite: false,
        id: 96,
        firstName: "Hunter S.",
        lastName: "Thompson",
        title: "Fear and Loathing in Las Vegas",
        genre: "Gonzo journalism",
        page: 204,
        cover: "https://images-na.ssl-images-amazon.com/images/I/718WrWeyy6L.jpg"
    },
    {
        favorite: false,
        id: 97,
        firstName: "J.R.R.",
        lastName: "Tolkien",
        title: "The Fellowship of the Ring",
        genre: "Fantasy",
        page: "423",
        cover: "https://images-na.ssl-images-amazon.com/images/I/91jBdaRVqML.jpg"
    },
    {
        favorite: false,
        id: 98,
        firstName: "Joseph",
        lastName: "Stein",
        title: "Fiddler on the Roof",
        genre: "Children's",
        page: 160,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71GaP6oxC7L.jpg"
    },
    {
        favorite: false,
        id: 99,
        firstName: "James",
        lastName: "Joyce",
        title: "Finnegan's Wake",
        genre: "Menippean satire",
        page: 672,
        cover: "https://images.penguinrandomhouse.com/cover/9780141181264"
    },
    {
        favorite: false,
        id: 100,
        firstName: "Mitch",
        lastName: "Albom",
        title: "The Five People You Meet in Heaven",
        genre: "Inspirational fiction",
        page: 194,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41CdFqzQ84L.jpg"
    },
    {
        favorite: false,
        id: 101,
        firstName: "Gregory",
        lastName: "McDonald",
        title: "Fletch",
        genre: "Comedy",
        page: 208,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51emiSTYUaL._SX326_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 102,
        firstName: "Daniel",
        lastName: "Keyes",
        title: "Flowers for Algernon",
        genre: "Novel",
        page: 311,
        cover: "https://images-na.ssl-images-amazon.com/images/I/31fzDDwtE3L._SX301_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 103,
        firstName: "Jonathan",
        lastName: "Lethem",
        title: "The Fortress of Solitude",
        genre: "Novel",
        page: 511,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91n6eeetsuL.jpg"
    },
    {
        favorite: false,
        id: 104,
        firstName: "Ayn",
        lastName: "Rand",
        title: "The Fountainhead",
        genre: "Philosophy",
        page: 752,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91yszMADa7L.jpg"
    },
    {
        favorite: false,
        id: 105,
        firstName: "Mary",
        lastName: "Shelley",
        title: "Frankenstein",
        genre: "Gothic novel",
        page: 280,
        cover: "https://images-na.ssl-images-amazon.com/images/I/416QjTxduzL._SX311_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 106,
        firstName: "J.D.",
        lastName: "Salinger",
        title: "Franny and Zooey",
        genre: "Short stories",
        page: 201,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51Se-s2ZglL.jpg"
    },
    {
        favorite: false,
        id: 107,
        firstName: "Mary",
        lastName: "Rodgers",
        title: "Freaky Friday",
        genre: "Children's",
        page: 144,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51UUsU2cdQL._SX334_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 108,
        firstName: "Kurt",
        lastName: "Vonnegut",
        title: "Galapagos",
        genre: "Novel",
        page: 324,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71B68jttiYL.jpg"
    },
    {
        favorite: false,
        id: 109,
        firstName: "Judith",
        lastName: "Butler",
        title: "Gender Trouble",
        genre: "Fiction",
        page: 272,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41wmzC9GroL._SX319_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 110,
        firstName: "Jacob",
        lastName: "Weisberg",
        title: "George W. Bushism: The Slate Book of the Accidental Wit and Wisdom of our 43rd President",
        genre: "Biography",
        page: 96,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51N8tkSefkS._SX311_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 111,
        firstName: "Fredrick",
        lastName: "Kohner",
        title: "Gidget",
        genre: "Fiction",
        page: 154,
        cover: "https://images-na.ssl-images-amazon.com/images/I/911wD8a7AHL.jpg"
    },
    {
        favorite: false,
        id: 112,
        firstName: "Beverly",
        lastName: "Cleary",
        title: "A Girl from Yamhill",
        genre: "Young adult",
        page: 352,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51TLj55E9mL.jpg"
    },
    {
        favorite: false,
        id: 113,
        firstName: "Susanna",
        lastName: "Kaysen",
        title: "Girl, Interrupted",
        genre: "Autobiography",
        page: 192,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81MGfnTQ9ZL.jpg"
    },
    {
        favorite: false,
        id: 114,
        firstName: "Elaine",
        lastName: "Pagels",
        title: "The Gnostic Gospels",
        genre: "Gospel",
        page: 224,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51cYTMLCyLL._SX318_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 115,
        firstName: "Mario",
        lastName: "Puzo",
        title: "The Godfather",
        genre: "Crime novel",
        page: 448,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81IHPwG1tbL.jpg"
    },
    {
        favorite: false,
        id: 116,
        firstName: "Arundhati",
        lastName: "Roy",
        title: "The God of Small Things",
        genre: "Psycological fiction",
        page: 333,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91EFcae8moL.jpg"
    },
    {
        favorite: false,
        id: 117,
        firstName: "Alvin",
        lastName: "Granowsky",
        title: "Goldilocks and the Three Bears",
        genre: "Children's",
        page: 48,
        cover: "https://images-na.ssl-images-amazon.com/images/I/810POGQWWnL.jpg"
    },
    {
        favorite: false,
        id: 118,
        firstName: "Margaret",
        lastName: "Mitchell",
        title: "Gone with the Wind",
        genre: "Historical fiction",
        page: 719,
        cover: "https://m.media-amazon.com/images/I/51vXH2JGV8L.jpg"
    },
    {
        favorite: false,
        id: 119,
        firstName: "Keith",
        lastName: "Richards",
        title: "Goodnight Spoon",
        genre: "Children's",
        page: "Unknown",
        cover: "https://64.media.tumblr.com/64e236455719444346c90baddb174f38/tumblr_ne88bihzmZ1s4pbxso1_1280.jpg"
    },
    {
        favorite: false,
        id: 120,
        firstName: "Ford",
        lastName: "Maddox Ford",
        title: "The Good Soldier",
        genre: "Domestic fiction",
        page: 192,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71SIzet4opL.jpg"
    },
    {
        favorite: false,
        id: 121,
        firstName: "José",
        lastName: "Saramago",
        title: "The Gospel According to Jesus Christ",
        genre: "Gospel",
        page: 400,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519393758l/28859.jpg"
    },
    {
        favorite: false,
        id: 122,
        firstName: "Charles",
        lastName: "Webb",
        title: "The Graduate",
        genre: "Drama",
        page: 224,
        cover: "https://m.media-amazon.com/images/I/41SZPxxP3AL.SX316.SY480._SL500_.jpg"
    },
    {
        favorite: false,
        id: 123,
        firstName: "John",
        lastName: "Steinbeck",
        title: "The Grapes of Wrath",
        genre: "Fiction",
        page: 535,
        cover: "https://images.penguinrandomhouse.com/cover/9780670016907"
    },
    {
        favorite: false,
        id: 124,
        firstName: "Charles",
        lastName: "Dickens",
        title: "Great Expectations",
        genre: "Novel",
        page: 544,
        cover: "https://m.media-amazon.com/images/I/51pqUWvj6NL.jpg"
    },
    {
        favorite: false,
        id: 125,
        firstName: "F. Scott",
        lastName: "Fitzgerald",
        title: "The Great Gatsby",
        genre: "Tragedy",
        page: 240,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81djg0KWthS.jpg"
    },
    {
        favorite: false,
        id: 126,
        firstName: "Mary",
        lastName: "McCarthy",
        title: "The Group",
        genre: "Novel",
        page: 496,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51MSzxxIFxL._SX342_SY445_QL70_ML2_.jpg"
    },
    {
        favorite: false,
        id: 127,
        firstName: "R.H.",
        lastName: "Blyth",
        title: "Haiku, Volume 2: Spring",
        genre: "Poetry",
        page: 382,
        cover: "https://images-na.ssl-images-amazon.com/images/I/519jjD631OL._SX365_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 128,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Hamlet",
        genre: "Shakespearean",
        page: 64,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41stzQ0MsgL._SX318_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 129,
        firstName: "J.K.",
        lastName: "Rowling",
        title: "Harry Potter and the Goblet of Fire",
        genre: "Children's",
        page: 636,
        cover: "https://m.media-amazon.com/images/I/71ykU-RQ0nL._AC_SL1000_.jpg"
    },
    {
        favorite: false,
        id: 130,
        firstName: "J.K.",
        lastName: "Rowling",
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Children's",
        page: 309,
        cover: "https://images-na.ssl-images-amazon.com/images/I/515iJ1-+IvL.jpg"
    },
    {
        favorite: false,
        id: 131,
        firstName: "Dave",
        lastName: "Eggers",
        title: "A Heartbreaking Work of Staggering Genius",
        genre: "Memoir",
        page: 375,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81jWHraFo+L.jpg"
    },
    {
        favorite: false,
        id: 132,
        firstName: "Joseph",
        lastName: "Conrad",
        title: "Heart of Darkness",
        genre: "Fiction",
        page: 98,
        cover: "https://kbimages1-a.akamaihd.net/e278c62e-943a-473e-846a-3e19bce5b5d8/353/569/90/False/heart-of-darkness-12.jpg"
    },
    {
        favorite: false,
        id: 133,
        firstName: "Hunter S.",
        lastName: "Thompson",
        title: "Hell's Angels: The Strange and Terrible Saga of the Outlaw Motorcycle Gangs",
        genre: "Gonzo journalism",
        page: 278,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81d-DNnl8xL.jpg"
    },
    {
        favorite: false,
        id: 134,
        firstName: "Vincent",
        lastName: "Bugliosi",
        title: "Helter Skelter: The True Story of the Manson Murders",
        genre: "True crime",
        page: 689,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41eZAOsiLZL._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 135,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Henry IV, part I",
        genre: "Shakespearean",
        page: 398,
        cover: "https://images-na.ssl-images-amazon.com/images/I/712X73igwvL.jpg"
    },
    {
        favorite: false,
        id: 136,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Henry IV, part II",
        genre: "Shakespearean",
        page: 320,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51FkIGvFv6L._SX306_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 137,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Henry V",
        genre: "Play",
        page: 294,
        cover: "https://m.media-amazon.com/images/I/51bdrrjTlmL.jpg"
    },
    {
        favorite: false,
        id: 138,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Henry VI",
        genre: "Play",
        page: 123,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91JAKAiiA5L.jpg"
    },
    {
        favorite: false,
        id: 139,
        firstName: "Greg",
        lastName: "Behrendt",
        title: "He's Just Not That Into You",
        genre: "Non-fiction",
        page: 208,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61H9uerdrdL.jpg"
    },
    {
        favorite: false,
        id: 140,
        firstName: "Nick",
        lastName: "Hornby",
        title: "High Fidelity",
        genre: "Novel",
        page: 336,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81Grx7267uL.jpg"
    },
    {
        favorite: false,
        id: 141,
        firstName: "Edward",
        lastName: "Gibbon",
        title: "The History of the Decline and Fall of the Roman Empire",
        genre: "History",
        page: 795,
        cover: "https://images-na.ssl-images-amazon.com/images/I/519labstQ5L._SX318_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 142,
        firstName: "David",
        lastName: "Sedaris",
        title: "Holidays on Ice: Stories",
        genre: "Short stories",
        page: 176,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71t0yJrW7UL.jpg"
    },
    {
        favorite: false,
        id: 143,
        firstName: "Lawrence",
        lastName: "Lipton",
        title: "The Holy Barbarians",
        genre: "Biography",
        page: 330,
        cover: "https://images-na.ssl-images-amazon.com/images/I/514F1xvQYBL._SX355_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 144,
        firstName: "Dr. Seuss",
        lastName: "",
        title: "Horton Hears a Who!",
        genre: "Children's",
        page: 72,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91jgrV6XiiL.jpg"
    },
    {
        favorite: false,
        id: 145,
        firstName: "Andre",
        lastName: "Dubus III",
        title: "House of Sand and Fog",
        genre: "Novel",
        page: 365,
        cover: "https://m.media-amazon.com/images/I/51JB9NCDFRL._SL160_.jpg"
    },
    {
        favorite: false,
        id: 146,
        firstName: "Isabel",
        lastName: "Allende",
        title: "The House of the Spirits",
        genre: "Novel",
        page: 448,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51fxADjREWL.jpg"
    },
    {
        favorite: false,
        id: 147,
        firstName: "Julie",
        lastName: "Orringer",
        title: "How to Breathe Underwater",
        genre: "Fiction",
        page: 226,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71HbJJA7XdL.jpg"
    },
    {
        favorite: false,
        id: 148,
        firstName: "Dr. Seuss",
        lastName: "",
        title: "How the Grinch Stole Christmas",
        genre: "Children's",
        page: 64,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91Q9eneR7BL.jpg"
    },
    {
        favorite: false,
        id: 149,
        firstName: "Allen",
        lastName: "Ginsberg",
        title: "Howl and Other Poems",
        genre: "Poetry",
        page: 57,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71B1NiNdEHL.jpg"
    },
    {
        favorite: false,
        id: 150,
        firstName: "M.J.",
        lastName: "Hyland",
        title: "How the Light Gets In",
        genre: "Fiction",
        page: 432,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348460321l/251052.jpg"
    },
    {
        favorite: false,
        id: 151,
        firstName: "Victor",
        lastName: "Hugo",
        title: "The Hunchback of Notre Dame",
        genre: "Gothic novel",
        page: 940,
        cover: "https://images.penguinrandomhouse.com/cover/9780451531513"
    },
    {
        favorite: false,
        id: 152,
        firstName: "Nora",
        lastName: "Ephron",
        title: "I Feel Bad About My Neck",
        genre: "Autobiography",
        page: 137,
        cover: "https://images-na.ssl-images-amazon.com/images/I/31Y6BLQetUS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        favorite: false,
        id: 153,
        firstName: "Homer",
        lastName: "",
        title: "The Iliad",
        genre: "Poetry",
        page: 704,
        cover: "https://kbimages1-a.akamaihd.net/fe5292f0-1209-46b8-a12a-b1c5df4714c5/1200/1200/False/the-iliad-of-homer-129.jpg"
    },
    {
        favorite: false,
        id: 154,
        firstName: "Pamela",
        lastName: "des Barres",
        title: "I'm With the Band",
        genre: "Memoir",
        page: 352,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51nwhfkqlgL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        favorite: false,
        id: 155,
        firstName: "Truman",
        lastName: "Capote",
        title: "In Cold Blood",
        genre: "True crime",
        page: 343,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61B3wTSzH8L.jpg"
    },
    {
        favorite: false,
        id: 156,
        firstName: "George",
        lastName: "Sand",
        title: "Indiana",
        genre: "Romantic",
        page: 344,
        cover: "https://m.media-amazon.com/images/I/51e+K6wNNEL.jpg"
    },
    {
        favorite: false,
        id: 157,
        firstName: "Dante",
        lastName: "Alighieri",
        title: "The Inferno",
        genre: "Poetry",
        page: 752,
        cover: "https://images-na.ssl-images-amazon.com/images/I/511265rdCRL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        favorite: false,
        id: 158,
        firstName: "Jerome",
        lastName: "Lawrence",
        title: "Inherit the Wind",
        genre: "Play",
        page: 129,
        cover: "https://images-na.ssl-images-amazon.com/images/I/515UL7box5L._SX322_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 159,
        firstName: "William J.",
        lastName: "Kennedy",
        title: "Ironweed",
        genre: "Tragedy",
        page: 227,
        cover: "https://d.gr-assets.com/books/1408926209l/267243.jpg"
    },
    {
        favorite: false,
        id: 160,
        firstName: "Hillary",
        lastName: "Clinton",
        title: "It Takes a Village",
        genre: "Politics",
        page: 656,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51T83eiOMML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        favorite: false,
        id: 161,
        firstName: "Charlotte",
        lastName: "Bronte",
        title: "Jane Eyre",
        genre: "Novel",
        page: 480,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81zFP9e6z8L.jpg"
    },
    {
        favorite: false,
        id: 162,
        firstName: "Amy",
        lastName: "Tan",
        title: "The Joy Luck Club",
        genre: "Novel",
        page: 352,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71FISsF-abL.jpg"
    },
    {
        favorite: false,
        id: 163,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Julius Caesar",
        genre: "Shakespearean",
        page: 202,
        cover: "https://m.media-amazon.com/images/I/41l+kKRNZAL.jpg"
    },
    {
        favorite: false,
        id: 164,
        firstName: "Upton",
        lastName: "Sinclair",
        title: "The Jungle",
        genre: "Political fiction",
        page: 204,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51EJZaHxpHL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        favorite: false,
        id: 165,
        firstName: "Michael",
        lastName: "Crichton",
        title: "Jurassic Park",
        genre: "Science Fiction",
        page: 448,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81rBVCDfrgL.jpg"
    },
    {
        favorite: false,
        id: 166,
        firstName: "Tony",
        lastName: "Vigorito",
        title: "Just a Couple of Days",
        genre: "Dystopian fiction",
        page: 396,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387714001l/760022.jpg"
    },
    {
        favorite: false,
        id: 167,
        firstName: "Robert",
        lastName: "Alexander",
        title: "The Kitchen Boy: A Novel of the Last Tsar",
        genre: "Novel",
        page: 229,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396833031l/95141.jpg"
    },
    {
        favorite: false,
        id: 168,
        firstName: "Anthony",
        lastName: "Bourdain",
        title: "Kitchen Confidential: Adventures in the Culinary Underbelly",
        genre: "Memoir",
        page: 320,
        cover: "https://usishield.com/wp-content/uploads/2019/02/kitchen.jpg"
    },
    {
        favorite: false,
        id: 169,
        firstName: "Khaled",
        lastName: "Hosseini",
        title: "The Kite Runner",
        genre: "Historical fiction",
        page: 371,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51aC4tiXgiL._SX309_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 170,
        firstName: "D.H.",
        lastName: "Lawrence",
        title: "Lady Chatterleys' Lover",
        genre: "Erotic",
        page: 360,
        cover: "https://images-na.ssl-images-amazon.com/images/I/413yD+k+hDL._SX302_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 171,
        firstName: "Gore",
        lastName: "Vidal",
        title: "The Last Empire: Essays 1992-2000",
        genre: "Fiction",
        page: 480,
        cover: "https://images-na.ssl-images-amazon.com/images/I/516nGMGJcHL._SX319_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 172,
        firstName: "William",
        lastName: "Manchester",
        title: "The Last Lion: Winston Spencer Churchill, Volume I: Visions of Glory, 1874-1932",
        genre: "Biography",
        page: 992,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51dfpAIGM0L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        favorite: false,
        id: 173,
        firstName: "William",
        lastName: "Manchester",
        title: "The Last Lion: Winston Spencer Churchill, Volume II: Alone, 1932-1940",
        genre: "Biography",
        page: 816,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41G0Dt5SKrL._SX320_BO1,204,203,200_.jpg"
    },

    {
        favorite: false,
        id: 174,
        firstName: "William",
        lastName: "Manchester",
        title: "The Last Lion: Winston Spencer Churchill, Volume III: Defender of the Realm, 1940-1965",
        genre: "Biography",
        page: 1200,
        cover: "https://images-na.ssl-images-amazon.com/images/I/5189mbZiOKL._SX320_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 175,
        firstName: "Walt",
        lastName: "Whitman",
        title: "Leaves of Grass",
        genre: "Poetry",
        page: 46,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41fmy4COtML._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 176,
        firstName: "Steven",
        lastName: "Pressfield",
        title: "The Legend of Bagger Vance",
        genre: "Fiction",
        page: 272,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51cgd8A2DNL.jpg"
    },
    {
        favorite: false,
        id: 177,
        firstName: "Bret",
        lastName: "Easton Ellis",
        title: "Less Than Zero",
        genre: "Novel",
        page: 208,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91MQx+N9y+L.jpg"
    },
    {
        favorite: false,
        id: 178,
        firstName: "Ann",
        lastName: "Rand",
        title: "Letters of Ayn Rand",
        genre: "Autobiography",
        page: 720,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81Vz857kwxL.jpg"
    },
    {
        favorite: false,
        id: 179,
        firstName: "R.W.B.",
        lastName: "Lewis",
        title: "Letters of Edith Wharton",
        genre: "Autobiography",
        page: 24,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91ovm7yyN8L.jpg"
    },
    {
        favorite: false,
        id: 180,
        firstName: "Rainer",
        lastName: "Maria Rilke",
        title: "Letters to a Young Poet",
        genre: "Memoir",
        page: 123,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51dCQg04gvL._SX333_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 181,
        firstName: "Aeschylus",
        lastName: "",
        title: "The Libation Bearers",
        genre: "Drama",
        page: 194,
        cover: "https://m.media-amazon.com/images/I/51YUQZHDI8L.jpg"
    },
    {
        favorite: false,
        id: 182,
        firstName: "Al",
        lastName: "Franken",
        title: "Lies and the Lying Liars Who Tell Them",
        genre: "Politics",
        page: 448,
        cover: "https://m.media-amazon.com/images/I/51+lKXN6OZL.jpg"
    },
    {
        favorite: false,
        id: 183,
        firstName: "Marie",
        lastName: "Kondo",
        title: "The Life-Changing Magic of Tidying Up",
        genre: "Self-help",
        page: 224,
        cover: "https://covers.audiobooks.com/images/covers/full/9781494578947.jpg"
    },
    {
        favorite: false,
        id: 184,
        firstName: "Yann",
        lastName: "Martel",
        title: "Life of Pi",
        genre: "Psychological Fiction",
        page: 336,
        cover: "https://img1.od-cdn.com/ImageType-100/1294-1/%7B97B260FA-8E07-487C-89FF-032C0163634F%7DImg100.jpg"
    },
    {
        favorite: false,
        id: 185,
        firstName: "Laura",
        lastName: "Esquivel",
        title: "Like Water for Chocolate",
        genre: "Romantic",
        page: 256,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51ypXbTPrUL.jpg"
    },
    {
        favorite: false,
        id: 186,
        firstName: "C.S.",
        lastName: "Lewis",
        title: "The Lion, the Witch and the Wardrobe",
        genre: "Children's",
        page: 208,
        cover: "https://www.pluggedin.com/wp-content/uploads/2020/01/lion-witch-and-wardrobe-cover.jpg"
    },
    {
        favorite: false,
        id: 187,
        firstName: "Dr. Theodore Isaac",
        lastName: "Rubin, M.D.",
        title: "Lisa and David",
        genre: "Fiction",
        page: 94,
        cover: "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/9780312871796.jpg"
    },
    {
        favorite: false,
        id: 188,
        firstName: "Charles",
        lastName: "Dickens",
        title: "Little Dorrit",
        genre: "Novel",
        page: 1024,
        cover: "https://covers.feedbooks.net/book/687.jpg?size=large&t=1549045847"
    },
    {
        favorite: false,
        id: 189,
        firstName: "Laura",
        lastName: "Ingalls Wilder",
        title: "Little House in the Big Woods",
        genre: "Children's",
        page: 256,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91jsOzK+K1L.jpg"
    },
    {
        favorite: false,
        id: 190,
        firstName: "Katharine",
        lastName: "Butler Hathaway",
        title: "The Little Locksmith",
        genre: "Biography",
        page: 237,
        cover: "https://images-na.ssl-images-amazon.com/images/I/419RMV6HE0L._SX310_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 191,
        firstName: "Hans Christian",
        lastName: "Andersen",
        title: "The Little Match Girl",
        genre: "Children's",
        page: 32,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360519957l/595948.jpg"
    },
    {
        favorite: false,
        id: 192,
        firstName: "Louisa May",
        lastName: "Alcott",
        title: "Little Women",
        genre: "Novel",
        page: 759,
        cover: "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_scaled,f_auto,q_auto,dpr_2,c_scale,w_405/v1587403863/pro_pbid_968567.jpg"
    },
    {
        favorite: false,
        id: 193,
        firstName: "Hillary Rodham",
        lastName: "Clinton",
        title: "Living History",
        genre: "Politics",
        page: 567,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41zWbcsr8ML._SX325_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 194,
        firstName: "William",
        lastName: "Golding",
        title: "Lord of the Flies",
        genre: "Young adult",
        page: 224,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81uc0ffe6xL.jpg"
    },
    {
        favorite: false,
        id: 195,
        firstName: "J.R.R.",
        lastName: "Tolkien",
        title: "The Lord of the Rings",
        genre: "Fantasy",
        page: 1178,
        cover: "https://nationalbookswap.com/pbs/xl/27/9027/9780618129027.jpg"
    },
    {
        favorite: false,
        id: 196,
        firstName: "Shirley",
        lastName: "Jackson",
        title: "The Lottery: And Other Stories",
        genre: "Horror",
        page: 306,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416448200l/89723.jpg"
    },
    {
        favorite: false,
        id: 197,
        firstName: "Alice",
        lastName: "Sebold",
        title: "The Lovely Bones",
        genre: "Psychological Fiction",
        page: 328,
        cover: "https://readinggroupchoices.com/wp/wp-content/uploads/2016/08/the-lovely-bones@2x-e1571668647187.jpg"
    },
    {
        favorite: false,
        id: 198,
        firstName: "Erich",
        lastName: "Segal",
        title: "Love Story",
        genre: "Romantic",
        page: 131,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41DxtTcXDsL._SX328_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 199,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Macbeth",
        genre: "Shakespearean",
        page: 122,
        cover: "https://m.media-amazon.com/images/I/41a4pN3JXuL.jpg"
    },
    {
        favorite: false,
        id: 200,
        firstName: "Gustave",
        lastName: "Flaubert",
        title: "Madame Bovary",
        genre: "Realistic novel",
        page: 335,
        cover: "http://languagetrainers.com/reviews/book-reviews/uploads/5679-madame%20bovary%20cover.jpg"
    },
    {
        favorite: false,
        id: 201,
        firstName: "Robertson",
        lastName: "Davies",
        title: "The Manticore",
        genre: "Graphic Novel",
        page: 72,
        cover: "https://d3525k1ryd2155.cloudfront.net/h/401/200/1402200401.0.x.jpg"
    },
    {
        favorite: false,
        id: 202,
        firstName: "William",
        lastName: "Goldman",
        title: "Marathon Man",
        genre: "Thriller novel",
        page: 309,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71iR0-b77pL.jpg"
    },
    {
        favorite: false,
        id: 203,
        firstName: "Mikhail",
        lastName: "Bulgakov",
        title: "The Master and Margarita",
        genre: "Novel",
        page: 392,
        cover: "https://www.indexoncensorship.org/wp-content/uploads/2016/09/The-Master-And-Margarita.jpg"
    },
    {
        favorite: false,
        id: 204,
        firstName: "Judith",
        lastName: "Ortiz Cofer",
        title: "The Meaning of Consuelo",
        genre: "Psychological Fiction",
        page: 208,
        cover: "https://images.penguinrandomhouse.com/cover/9780807083871"
    },
    {
        favorite: false,
        id: 205,
        firstName: "Simone",
        lastName: "de Beauvoir",
        title: "Memoirs of a Dutiful Daughter",
        genre: "Autobiography",
        page: 384,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91Mwl2NTHAL.jpg"
    },
    {
        favorite: false,
        id: 206,
        firstName: "William",
        lastName: "Tecumseh Sherman",
        title: "Memoirs of General William T. Sherman",
        genre: "Memoir",
        page: 415,
        cover: "https://prodimage.images-bn.com/pimages/9781543130102_p0_v1_s550x406.jpg"
    },
    {
        favorite: false,
        id: 207,
        firstName: "John",
        lastName: "Gray, Ph.D.",
        title: "Men Are from Mars, Women Are from Venus",
        genre: "Self-help",
        page: 368,
        cover: "https://www.team1global.com.au/store/wp-content/uploads/2018/09/TM1-B225.jpg"
    }, {
        favorite: false,
        id: 208,
        firstName: "H.L.",
        lastName: "Mencken",
        title: "Mencken's Chrestomathy",
        genre: "Autobiography",
        page: 627,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61YGEYd2W4L._SX313_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 209,
        firstName: "William",
        lastName: "Shakespeare",
        title: "The Merry Wives of Windsor",
        genre: "Shakespearean",
        page: 156,
        cover: "https://images.penguinrandomhouse.com/cover/9780451529961"
    },
    {
        favorite: false,
        id: 210,
        firstName: "David",
        lastName: "Sedaris",
        title: "Me Talk Pretty One Day",
        genre: "Essay collection",
        page: 288,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91mWfTCab-L.jpg"
    },
    {
        favorite: false,
        id: 211,
        firstName: "Franz",
        lastName: "Kafka",
        title: "The Metamorphosis",
        genre: "Absurdist fiction",
        page: 58,
        cover: "https://images-na.ssl-images-amazon.com/images/I/911IPbfO8BL.jpg"
    },
    {
        favorite: false,
        id: 212,
        firstName: "Jeffrey",
        lastName: "Eugenides",
        title: "Middlesex",
        genre: "Family saga",
        page: 544,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71sJpKGagtL.jpg"
    },
    {
        favorite: false,
        id: 213,
        firstName: "William",
        lastName: "Shakespeare",
        title: "A Midsummer Night's Dream",
        genre: "Shakespearean",
        page: 74,
        cover: "https://i.pinimg.com/originals/86/df/71/86df719f3277caef592b5a8c0e8ee309.jpg"
    },
    {
        favorite: false,
        id: 214,
        firstName: "William",
        lastName: "Gibson",
        title: "The Miracle Worker",
        genre: "Drama",
        page: 114,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51EaShGyF4L._SX328_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 215,
        firstName: "Stephen",
        lastName: "King",
        title: "Misery",
        genre: "Horror",
        page: 420,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449956772l/28181799._SY475_.jpg"
    },
    {
        favorite: false,
        id: 216,
        firstName: "Victoria",
        lastName: "Holt",
        title: "Mistress of Mellyn",
        genre: "Gothic novel",
        page: 334,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1257877982l/1099175.jpg"
    },
    {
        favorite: false,
        id: 217,
        firstName: "Herman",
        lastName: "Melville",
        title: "Moby Dick",
        genre: "Adventure fiction",
        page: 378,
        cover: "https://images-na.ssl-images-amazon.com/images/I/913FLAudHML.jpg"
    },
    {
        favorite: false,
        id: 218,
        firstName: "Hobart Chatfield",
        lastName: "Taylor",
        title: "Moliere: A Biography",
        genre: "Biography",
        page: 446,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41XjWM3pmJL._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 219,
        firstName: "Samuel",
        lastName: "Beckett",
        title: "Molloy",
        genre: "Novel",
        page: 256,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71oOwcq8wzL.jpg"
    },
    {
        favorite: false,
        id: 220,
        firstName: "Milton",
        lastName: "Friedman",
        title: "A Monetary History of the United States",
        genre: "History",
        page: 860,
        cover: "https://pup-assets.imgix.net/onix/images/9780691003542.jpg"
    }, {
        favorite: false,
        id: 221,
        firstName: "Celeste",
        lastName: "Albaret",
        title: "Monsieur Proust",
        genre: "Biography",
        page: 4200,
        cover: "https://pictures.abebooks.com/isbn/9782221141441-us.jpg"
    },
    {
        favorite: false,
        id: 222,
        firstName: "Julie",
        lastName: "Mars",
        title: "A Month of Sundays: Searching for The Spirit and My Sister",
        genre: "Biography",
        page: 208,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41SF8GXB76L._SX332_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 223,
        firstName: "Seamus",
        lastName: "Craic",
        title: "Motley Crue",
        genre: "Biography",
        page: 128,
        cover: "https://images-na.ssl-images-amazon.com/images/I/510Q9HM5M5L.jpg"
    },
    {
        favorite: false,
        id: 224,
        firstName: "William",
        lastName: "Congreve",
        title: "The Mourning Bride",
        genre: "Tragedy",
        page: 74,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51GR9N3BanL.jpg"
    },
    {
        favorite: false,
        id: 225,
        firstName: "Ernest",
        lastName: "Hemingway",
        title: "A Moveable Feast",
        genre: "Memoir",
        page: 211,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61KiwSu7+lL.jpg"
    },
    {
        favorite: false,
        id: 226,
        firstName: "Virginia",
        lastName: "Woolf",
        title: "Mrs. Dalloway",
        genre: "Novel",
        page: 224,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51qyu+CxlaL._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 227,
        firstName: "Charles Nordhoff",
        lastName: "and James Norman Hall",
        title: "Mutiny on the Bounty",
        genre: "Historical fiction",
        page: 366,
        cover: "https://i.ebayimg.com/images/g/41QAAOSwJVZgAE2f/s-l500.jpg"
    },
    {
        favorite: false,
        id: 228,
        firstName: "Seymour M.",
        lastName: "Hersh",
        title: "My Lai 4: A Report on the Massacre and Its Aftermath",
        genre: "Memoir",
        page: 210,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71yW-SGVeRL.jpg"
    },
    {
        favorite: false,
        id: 229,
        firstName: "H.L.",
        lastName: "Mencken",
        title: "My Life as Author and Editor",
        genre: "Memoir",
        page: 484,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91crwoRnDOL.jpg"
    },
    {
        favorite: false,
        id: 230,
        firstName: "Tim",
        lastName: "Guest",
        title: "My Life in Orange: Growing Up with the Guru",
        genre: "Memoir",
        page: 301,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91mhnbJ60zL.jpg"
    },
    {
        favorite: false,
        id: 231,
        firstName: "Jodi",
        lastName: "Picoult",
        title: "My Sister's Keeper",
        genre: "Novel",
        page: 432,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61QfgLeRAEL.jpg"
    },
    {
        favorite: false,
        id: 232,
        firstName: "Karl Ove",
        lastName: "Knausgaard",
        title: "My Struggle",
        genre: "Autobiography",
        page: 3600,
        cover: "https://m.media-amazon.com/images/I/51W0ttfaSmL._SL500_.jpg"
    },
    {
        favorite: false,
        id: 233,
        firstName: "Norman",
        lastName: "Mailer",
        title: "The Naked and the Dead",
        genre: "Novel",
        page: 740,
        cover: "https://pictures.abebooks.com/inventory/17004357408.jpg"
    },
    {
        favorite: false,
        id: 234,
        firstName: "William S.",
        lastName: "Burroughs",
        title: "Naked Lunch",
        genre: "Anti-drug novel",
        page: 304,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51s5Je-MYyL._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 235,
        firstName: "Jhumpa",
        lastName: "Lahiri",
        title: "The Namesake",
        genre: "Fiction",
        page: 291,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51Q2RYbNslL.jpg"
    },
    {
        favorite: false,
        id: 236,
        firstName: "Umberto",
        lastName: "Eco",
        title: "The Name of the Rose",
        genre: "Historical fiction",
        page: 592,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71xP8C6bBTL.jpg"
    },
    {
        favorite: false,
        id: 237,
        firstName: "Jan Lars",
        lastName: "Jensen",
        title: "Nervous System: Or, Losing My Mind in Literature",
        genre: "Memoir",
        page: 273,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348765940l/9578496.jpg"
    },
    {
        favorite: false,
        id: 238,
        firstName: "Emily",
        lastName: "Dickinson",
        title: "New Poems of Emily Dickinson",
        genre: "Poetry",
        page: 136,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51LI05U8O-L._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 239,
        firstName: "David",
        lastName: "Macaulay",
        title: "The New Way Things Work",
        genre: "Science Fiction",
        page: 400,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51Zdbg9-laL.jpg"
    },
    {
        favorite: false,
        id: 240,
        firstName: "Barbara",
        lastName: "Ehrenreich",
        title: "Nickel and Dimed: On (Not) Getting by in America",
        genre: "Non-Fiction",
        page: 240,
        cover: "https://images-na.ssl-images-amazon.com/images/I/712YLhunOJL.jpg"
    }, {
        favorite: false,
        id: 241,
        firstName: "Jane",
        lastName: "Austen",
        title: "Northanger Abbey",
        genre: "Romantic",
        page: 260,
        cover: "https://kbimages1-a.akamaihd.net/4e4e6558-ef00-4c92-b7bb-bf0a3fb53e3c/1200/1200/False/northanger-abbey-41.jpg"
    }, {
        favorite: false,
        id: 242,
        firstName: "Charles",
        lastName: "Dickens",
        title: "Nicholas Nickleby",
        genre: "Classics",
        page: 817,
        cover: "https://images.penguinrandomhouse.com/cover/9780679423072"
    },
    {
        favorite: false,
        id: 243,
        firstName: "William E.",
        lastName: "Cain",
        title: "The Norton Anthology of Theory and Criticism",
        genre: "Non-Fiction",
        page: 2662,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51HCyHgcL4L._SX322_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 244,
        firstName: "Charles",
        lastName: "Bukowski",
        title: "Notes of a Dirty Old Man",
        genre: "Fiction",
        page: 204,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51c4Mt5DnjL._SX342_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 245,
        firstName: "Dawn",
        lastName: "Powell",
        title: "Novels, 1930-1942: Dance Night/Come Back to Sorrento, Turn, Magic Wheel/Angels on Toast/A Time to be Born",
        genre: "Fiction",
        page: 1068,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387733455l/19816003.jpg"
    },
    {
        favorite: false,
        id: 246,
        firstName: "Sophicles",
        lastName: "",
        title: "Oedipus Rex",
        genre: "Classics",
        page: 75,
        cover: "https://m.media-amazon.com/images/M/MV5BY2UwOTAzOWEtZTk1My00YTU0LWJhMWEtNzkwMTc0NGUxNTM1XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_.jpg"
    },
    {
        favorite: false,
        id: 247,
        firstName: "John",
        lastName: "Steinbeck",
        title: "Of Mice and Men",
        genre: "Classics",
        page: 103,
        cover: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg"
    },
    {
        favorite: false,
        id: 248,
        firstName: "Tobias",
        lastName: "Wolff",
        title: "Old School",
        genre: "Fiction",
        page: 354,
        cover: "https://pictures.abebooks.com/inventory/30238732668.jpg"
    },
    {
        favorite: false,
        id: 249,
        firstName: "Charles",
        lastName: "Dickens",
        title: "Oliver Twist",
        genre: "Classics",
        page: 608,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91nOyDA5i9L.jpg"
    },
    {
        favorite: false,
        id: 250,
        firstName: "Aleksandr",
        lastName: "Solzhenitsyn",
        title: "One Day in the Life of Ivan Denisovich",
        genre: "Fiction",
        page: 182,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51Rb4jnb1yL._SX308_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 251,
        firstName: "Ken",
        lastName: "Kesey",
        title: "One Flew Over the Cuckoo's Nest",
        genre: "Classics",
        page: 325,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
    },
    {
        favorite: false,
        id: 252,
        firstName: "Gabriel",
        lastName: "Garcia Marquez",
        title: "One Hundred Years of Solitude",
        genre: "Fiction",
        page: 417,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91mftQtgAkL.jpg"
    },
    {
        favorite: false,
        id: 253,
        firstName: "Jack",
        lastName: "Kerouac",
        title: "On the Road",
        genre: "Classics",
        page: 307,
        cover: "https://i.pinimg.com/originals/10/cd/7c/10cd7cdb91d200ceb90e42133c404882.jpg"
    },
    {
        favorite: false,
        id: 254,
        firstName: "Amy",
        lastName: "Tan",
        title: "The Opposite of Fate: Memories of a Writing Life",
        genre: "Non-Fiction",
        page: 398,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41hv0jQ42kL._SX329_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 255,
        firstName: "Paul",
        lastName: "Auster",
        title: "Oracle Night",
        genre: "Fiction",
        page: 245,
        cover: "https://m.media-amazon.com/images/I/51hOyBUMgPL.jpg"
    },
    {
        favorite: false,
        id: 256,
        firstName: "Margaret",
        lastName: "Atwood",
        title: "Oryx and Crake",
        genre: "Fiction",
        page: 389,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1296247911l/5088200.jpg"
    },
    {
        favorite: false,
        id: 257,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Othello",
        genre: "Shakespearean",
        page: 314,
        cover: "https://m.media-amazon.com/images/I/51AStJesndL.jpg"
    },
    {
        favorite: false,
        id: 258,
        firstName: "Charles",
        lastName: "Dickens",
        title: "Our Mutual Friend",
        genre: "Classics",
        page: 801,
        cover: "https://kbimages1-a.akamaihd.net/b45f78ed-5d09-4c52-9f06-f64a8b5f1e32/353/569/90/False/our-mutual-friend-175.jpg"
    },
    {
        favorite: false,
        id: 259,
        firstName: "Donald",
        lastName: "Kagan",
        title: "The Outbreak of the Peloponnesian War",
        genre: "History",
        page: 420,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41YR7qFKvVL._SX331_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 260,
        firstName: "Isak",
        lastName: "Dineson",
        title: "Out of Africa",
        genre: "Non-Fiction",
        page: 401,
        cover: "https://images.penguinrandomhouse.com/cover/9780679724759"
    },
    {
        favorite: false,
        id: 261,
        firstName: "S.E.",
        lastName: "Hinton",
        title: "The Outsiders",
        genre: "Classics",
        page: 192,
        cover: "https://m.media-amazon.com/images/I/51jORwiBQAL.jpg"
    }, {
        favorite: false,
        id: 262,
        firstName: "E.M.",
        lastName: "Forster",
        title: "A Passage to India",
        genre: "Classics",
        page: 376,
        cover: "https://img1.od-cdn.com/ImageType-400/3580-1/334/823/C9/%7B334823C9-E078-4A5C-9FCB-0C8376FAADDD%7DImg400.jpg"
    },
    {
        favorite: false,
        id: 263,
        firstName: "Donald",
        lastName: "Kagan",
        title: "The Peace of Nicias and the Sicilian Expedition",
        genre: "History",
        page: 400,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61v3nfpdDWL.jpg"
    }, {
        favorite: false,
        id: 264,
        firstName: "Stephen",
        lastName: "Chbosky",
        title: "The Perks of Being a Wallflower",
        genre: "Young adult",
        page: 213,
        cover: "https://images-na.ssl-images-amazon.com/images/I/417+Cq07wML._SX355_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 265,
        firstName: "Grace",
        lastName: "Metalious",
        title: "Peyton Place",
        genre: "Fiction",
        page: 384,
        cover: "https://images-na.ssl-images-amazon.com/images/I/515bJ5j4FxL.jpg"
    },
    {
        favorite: false,
        id: 266,
        firstName: "Oscar",
        lastName: "Wilde",
        title: "The Picture of Dorian",
        genre: "Classics",
        page: 272,
        cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476788128/the-picture-of-dorian-gray-9781476788128_hr.jpg"
    },
    {
        favorite: false,
        id: 267,
        firstName: "Arianna",
        lastName: "Huffington",
        title: "Pigs at the Trough",
        genre: "Politics",
        page: 304,
        cover: "https://images-na.ssl-images-amazon.com/images/I/8123yQEIQfL.jpg"
    },
    {
        favorite: false,
        id: 268,
        firstName: "Carlo",
        lastName: "Collodi",
        title: "Pinocchio",
        genre: "Children's",
        page: 262,
        cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780735843288/pinocchio-9780735843288_hr.jpg"
    },
    {
        favorite: false,
        id: 269,
        firstName: "Legs McNeil ",
        lastName: "and Gillian McCain",
        title: "Please Kill Me: The Uncensored Oral History of Punk",
        genre: "Music",
        page: 452,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61MFYNjUSNL.jpg"
    },
    {
        favorite: false,
        id: 270,
        firstName: "Nick",
        lastName: "Hornby",
        title: "The Polysyllabic Spree",
        genre: "Non-Fiction",
        page: 143,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348860701l/564002.jpg"
    }, {
        favorite: false,
        id: 271,
        firstName: "Dorothy",
        lastName: "Parker",
        title: "The Portable Dorothy Parker",
        genre: "Poetry",
        page: 610,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51WRV-4G2AL._SX342_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 272,
        firstName: "Fredrich",
        lastName: "Nietzsche",
        title: "The Portable Nietzsche",
        genre: "Philosophy",
        page: 692,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71Hph3hh-ML.jpg"
    },
    {
        favorite: false,
        id: 273,
        firstName: "Ron",
        lastName: "Suskind",
        title: "The Price of Loyalty: George W. Bush, the White House, and the Education of Paul O'Neill",
        genre: "Politics",
        page: 432,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41TvvRTB78S._SX324_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 274,
        firstName: "Jane",
        lastName: "Austen",
        title: "Pride and Prejudice",
        genre: "Romantic",
        page: 352,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91eKRbuhgaL.jpg"
    },
    {
        favorite: false,
        id: 275,
        firstName: "Anonymous",
        lastName: "",
        title: "Primary Colors",
        genre: "Politics",
        page: 384,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81hdkBR1yeL.jpg"
    },
    {
        favorite: false,
        id: 276,
        firstName: "Valerie",
        lastName: "Martin",
        title: "Property",
        genre: "Historical fiction",
        page: 210,
        cover: "https://d1ldy8a769gy68.cloudfront.net/300/038/550/408/038550408X.jpg"
    },
    {
        favorite: false,
        id: 277,
        firstName: "Tom",
        lastName: "Wolfe",
        title: "The Pump House Gang",
        genre: "Non-Fiction",
        page: 304,
        cover: "https://www.antikvariat.net/files/store_ryo/ryo102226_0.jpg"
    },
    {
        favorite: false,
        id: 278,
        firstName: "Nancy",
        lastName: "Mitford",
        title: "The Pursuit of Love & Love in a Cold Climate: Two Novels",
        genre: "Fiction",
        page: 468,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81KPrfOb-FL.jpg"
    },
    {
        favorite: false,
        id: 279,
        firstName: "T.J.",
        lastName: "Binyon",
        title: "Pushkin: A Biography",
        genre: "Biography",
        page: 784,
        cover: "https://images-na.ssl-images-amazon.com/images/I/A1IlKDR3vaL.jpg"
    },
    {
        favorite: false,
        id: 280,
        firstName: "George Bernard",
        lastName: "Shaw",
        title: "Pygmalion",
        genre: "Classics",
        page: 82,
        cover: "https://m.media-amazon.com/images/I/51n1DstcJFL.jpg"
    },
    {
        favorite: false,
        id: 281,
        firstName: "James",
        lastName: "McKean",
        title: "Quattrocento",
        genre: "Historical fiction",
        page: 307,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71QKKKYcV-L.jpg"
    },
    {
        favorite: false,
        id: 282,
        firstName: "Rachel",
        lastName: "Howzell Hall",
        title: "A Quiet Storm",
        genre: "Fiction",
        page: 256,
        cover: "https://timelife.com/system/cover_images/images/000/000/277/full/350_Vol3_SweetLove_Cover.jpg?1345495420"
    },
    {
        favorite: false,
        id: 283,
        firstName: "Brothers Grimm",
        lastName: "",
        title: "Rapunzel",
        genre: "Children's",
        page: 32,
        cover: "https://images-na.ssl-images-amazon.com/images/I/A16h8HWhDUL.jpg"
    },
    {
        favorite: false,
        id: 284,
        firstName: "Edgar Allan",
        lastName: "Poe",
        title: "The Raven",
        genre: "Classics",
        page: 64,
        cover: "http://prodimage.images-bn.com/pimages/9781476759685_p0_v5_s1200x630.jpg"
    },
    {
        favorite: false,
        id: 285,
        firstName: "Daphne",
        lastName: "du Maurier",
        title: "Rebecca",
        genre: "Classics",
        page: 449,
        cover: "https://images.theconversation.com/files/364192/original/file-20201019-19-15ey6l2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
    },
    {
        favorite: false,
        id: 286,
        firstName: "W.",
        lastName: "Somerset Maugham",
        title: "The Razor's Edge",
        genre: "Fiction",
        page: 314,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1171743413l/117834.jpg"
    },
    {
        favorite: false,
        id: 287,
        firstName: "Azar",
        lastName: "Nafisi",
        title: "Reading Lolita in Tehran: A Memoir in Books",
        genre: "Non-Fiction",
        page: 356,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51vrv0hceML._SX342_SY445_QL70_ML2_.jpg"
    },
    {
        favorite: false,
        id: 288,
        firstName: "Kate",
        lastName: "Douglas Wiggin",
        title: "Rebecca of Sunnybrook Farm",
        genre: "Children's",
        page: 184,
        cover: "https://m.media-amazon.com/images/I/51t0BaaWdjL.jpg"
    },
    {
        favorite: false,
        id: 289,
        firstName: "Stephen",
        lastName: "Crane",
        title: "The Red Badge of Courage",
        genre: "Classics",
        page: 149,
        cover: "https://covers.feedbooks.net/book/4527.jpg?size=large&t=1549045887"
    },
    {
        favorite: false,
        id: 290,
        firstName: "Anita",
        lastName: "Diamant",
        title: "The Red Tent",
        genre: "Historical fiction",
        page: 324,
        cover: "https://images-na.ssl-images-amazon.com/images/I/5146GkyMe2S._SX327_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,

        id: 291,
        firstName: "Virginia",
        lastName: "Holman",
        title: "Rescuing Patty Hearst: Memories from a Decade Gone Mad",
        genre: "Non-Fiction",
        page: 244,
        cover: "https://pictures.abebooks.com/isbn/9780743222853-us.jpg"
    },
    {
        favorite: false,
        id: 292,
        firstName: "J.R.R.",
        lastName: "Tolkien",
        title: "The Return of the King",
        genre: "Fantasy",
        page: 385,
        cover: "https://kbimages1-a.akamaihd.net/7edc9f4f-d5ba-4398-a3f0-3fe063b0666f/353/569/90/False/the-return-of-the-king-the-lord-of-the-rings-book-3-1.jpg"
    },
    {
        favorite: false,
        id: 293,
        firstName: "Gloria",
        lastName: "Steinem",
        title: "Revolution from Within: A Book of Self-Esteem",
        genre: "Feminism",
        page: 432,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51WM+auruqL._SX327_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,

        id: 294,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Richard III",
        genre: "Shakespearean",
        page: 414,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81ozsSH1wDL.jpg"
    },
    {
        favorite: false,

        id: 295,
        firstName: "Sue",
        lastName: "Grafton",
        title: "R is for Ricochet",
        genre: "Mystery",
        page: 363,
        cover: "https://images.booksense.com/images/219/241/9780425241219.jpg"
    },
    {
        favorite: false,

        id: 296,
        firstName: "Stephen",
        lastName: "King",
        title: "Rita Hayworth and Shawshank Redemption",
        genre: "Horror",
        page: 181,
        cover: "https://www.hachette.co.uk/wp-content/uploads/2020/08/hbg-title-9781529363487-15.jpg?fit=440%2C675"
    },
    {
        favorite: false,

        id: 297,
        firstName: "Henry",
        lastName: "Robert",
        title: "Robert's Rules of Order",
        genre: "Non-Fiction",
        page: 800,
        cover: "https://www.publicaffairsbooks.com/wp-content/uploads/2020/09/9781541797703.jpg?fit=436%2C675"
    },
    {
        favorite: false,

        id: 298,
        firstName: "Edith",
        lastName: "Wharton",
        title: "Roman Fever",
        genre: "Short stories",
        page: 304,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1315441174l/2529463.jpg"
    },
    {
        favorite: false,

        id: 299,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Romeo and Juliet",
        genre: "Shakespearean",
        page: 281,
        cover: "https://kbimages1-a.akamaihd.net/cd5d681a-a30f-4576-be4c-dac1c221c85a/353/569/90/False/romeo-and-juliet-170.jpg"
    },
    {
        favorite: false,

        id: 300,
        firstName: "Virginia",
        lastName: "Woolf",
        title: "A Room of One's Own",
        genre: "Classics",
        page: 112,
        cover: "https://broadviewpress.com/wp-content/uploads/2016/06/9781551114286.jpg"
    },
    {
        favorite: false,

        id: 301,
        firstName: "E.M.",
        lastName: "Forster",
        title: "A Room with a View",
        genre: "Classics",
        page: 119,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91qxd9-pqyL.jpg"
    },
    {
        favorite: false,

        id: 302,
        firstName: "Ira",
        lastName: "Levin",
        title: "Rosemary's Baby",
        genre: "Horror",
        page: 308,
        cover: "https://i.pinimg.com/originals/2e/0a/f7/2e0af71bd2ef95597827e89395ea0ca6.jpg"
    },
    {
        favorite: false,

        id: 303,
        firstName: "Ursula",
        lastName: "Hegi",
        title: "Sacred Time",
        genre: "Fiction",
        page: 240,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61JwIE6Mt3S.jpg"
    },
    {
        favorite: false,
        id: 304,
        firstName: "William",
        lastName: "Faulkner",
        title: "Sanctuary",
        genre: "Fiction",
        page: 317,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91Gm5o5FUQL.jpg"
    },
    {
        favorite: false,
        id: 305,
        firstName: "Salman",
        lastName: "Rushdie",
        title: "The Satanic Verses",
        genre: "Fiction",
        page: 561,
        cover: "http://www.freethinkerscorner.com/uploads/1/0/6/1/106189835/s824075240130343247_p268_i1_w313.jpeg"
    },
    {
        favorite: false,
        id: 306,
        firstName: "Nancy",
        lastName: "Milford",
        title: "Savage Beauty: The Life of Edna St Vincent Millay",
        genre: "Biography",
        page: 608,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41NTDeFeezL._SX293_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 307,
        firstName: "Henry",
        lastName: "James",
        title: "Daisy Miller",
        genre: "Classics",
        page: 164,
        cover: "https://s3.amazonaws.com/images.hamlethub.com/hh20mediafolder/1045/201507/Daisy.png"
    },
    {
        favorite: false,
        id: 308,
        firstName: "Frank L.",
        lastName: "Baum",
        title: "The Scarecrow of Oz",
        genre: "Fantasy",
        page: 208,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71GCR1EQ47L._SX313_BO1,204,203,200_.gif"
    },
    {
        favorite: false,
        id: 309,
        firstName: "Nathaniel",
        lastName: "Hawthorne",
        title: "The Scarlet Letter",
        genre: "Classics",
        page: 279,
        cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435159655.jpg"
    },
    {
        favorite: false,
        id: 310,
        firstName: "Laura",
        lastName: "Hillenbrand",
        title: "Seabiscuit: An American Legend",
        genre: "Non-Fiction",
        page: 457,
        cover: "https://www.qbbooks.com/pictures/medium/43036.jpg"
    },
    {
        favorite: false,
        id: 311,
        firstName: "Simone",
        lastName: "de Beauvoir",
        title: "The Second Sex",
        genre: "Feminism",
        page: 746,
        cover: "https://pictures.abebooks.com/isbn/9780307265562-us.jpg"
    },
    {
        favorite: false,
        id: 312,
        firstName: "Sue",
        lastName: "Monk Kidd",
        title: "The Secret Life of Bees",
        genre: "Fiction",
        page: 302,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51xDldx8enL._SX372_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 313,
        firstName: "Judith",
        lastName: "Thurman",
        title: "Secrets of the Flesh: A Life of Colette",
        genre: "Biography",
        page: 592,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81mAdDoKiiL.jpg"
    },
    {
        favorite: false,
        id: 314,
        firstName: "Dawn",
        lastName: "Powell",
        title: "Selected Letters of Dawn Powell: 1913-1965",
        genre: "Non-Fiction",
        page: 400,
        cover: "https://images-na.ssl-images-amazon.com/images/I/513N0MSSGXL._SX310_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 315,
        firstName: "Jane",
        lastName: "Austen",
        title: "Sense and Sensibility",
        genre: "Romantic",
        page: 409,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91Mpe6aduKL.jpg"
    },
    {
        favorite: false,
        id: 316,
        firstName: "John",
        lastName: "Knowles",
        title: "A Separate Peace",
        genre: "Classics",
        page: 208,
        cover: "https://www.pluggedin.com/wp-content/uploads/2020/01/separate-peace-cover-image-669x1024.jpeg"
    },
    {
        favorite: false,
        id: 317,
        firstName: "Henry",
        lastName: "Miller",
        title: "Sexus",
        genre: "Fiction",
        page: 506,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1179094752l/873897._SY475_.jpg"
    },
    {
        favorite: false,
        id: 318,
        firstName: "Carlos",
        lastName: "Ruiz Zafon",
        title: "The Shadow of the Wind",
        genre: "Fiction",
        page: 487,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347296353l/9529.jpg"
    },
    {
        favorite: false,
        id: 319,
        firstName: "Jack",
        lastName: "Shaefer",
        title: "Shane",
        genre: "Westerns",
        page: 135,
        cover: "https://pictures.abebooks.com/inventory/30410181039.jpg"
    },
    {
        favorite: false,
        id: 320,
        firstName: "Stephen",
        lastName: "King",
        title: "The Shining",
        genre: "Horror",
        page: 659,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51jSPyJ8v2L._SX302_BO1,204,203,200_.jpg"
    },

    {
        favorite: false,
        id: 321,
        firstName: "Hermann",
        lastName: "Hesse",
        title: "Siddhartha",
        genre: "Classics",
        page: 152,
        cover: "https://kbimages1-a.akamaihd.net/ef590318-6966-4125-aa2f-adcd74241d07/1200/1200/False/siddhartha-65.jpg"
    },
    {
        favorite: false,
        id: 322,
        firstName: "Sue",
        lastName: "Grafton",
        title: "S Is for Silence",
        genre: "Mystery",
        page: 352,
        cover: "https://m.media-amazon.com/images/I/41Xok7vTuEL.jpg"
    },
    {
        favorite: false,
        id: 323,
        firstName: "Kurt",
        lastName: "Vonnegut",
        title: "Slaughterhouse-Five",
        genre: "Classics",
        page: 275,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61O1tkFh+iL.jpg"
    }, {
        favorite: false,
        id: 324,
        firstName: "Ernest",
        lastName: "Hemingway",
        title: "Snows of Kilimanjaro",
        genre: "Fiction",
        page: 144,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71Hd8yOv1DL.jpg"
    },
    {
        favorite: false,
        id: 325,
        firstName: "Andrea",
        lastName: "Levy",
        title: "Small Island",
        genre: "Historical fiction",
        page: 441,
        cover: "https://img1.od-cdn.com/ImageType-100/1855-1/%7BAA30C51E-7883-454B-8646-2B4F47CD685A%7DImg100.jpg"
    },
    {
        favorite: false,
        id: 326,
        firstName: "Brothers Grimm",
        lastName: "",
        title: "Snow White and Rose Red",
        genre: "Children's",
        page: 9,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51Y0MY687FL.jpg"
    },
    {
        favorite: false,
        id: 327,
        firstName: "Barrington",
        lastName: "Moore",
        title: "Social Origins of Dictatorship and Democracy: Lord and Peasant in the Making of the Modern World",
        genre: "History",
        page: 592,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51po9JtHuoL.jpg"
    },
    {
        favorite: false,
        id: 328,
        firstName: "Ray",
        lastName: "Bradbury",
        title: "Something Wicked This Way Comes",
        genre: "Horror",
        page: 293,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81sI0j81ttL.jpg"
    },
    {
        favorite: false,
        id: 329,
        firstName: "Nick",
        lastName: "Hornby",
        title: "Songbook",
        genre: "Music",
        page: 207,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81e+-ZDl6-L.jpg"
    },
    {
        favorite: false,
        id: 330,
        firstName: "George R.R.",
        lastName: "Martin",
        title: "A Song of Ice and Fire",
        genre: "Fantasy",
        page: 835,
        cover: "https://i.pinimg.com/originals/76/18/3a/76183a8844f82da3355e587f06ddba6b.jpg"
    },
    {
        favorite: false,
        id: 331,
        firstName: "Norman",
        lastName: "Lebrecht",
        title: "The Song of Names",
        genre: "Fiction",
        page: 311,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91BAc5cqtNL.jpg"
    },
    {
        favorite: false,
        id: 332,
        firstName: "Julia",
        lastName: "de Burgos",
        title: "Song of the Simple Truth: The Complete Poems of Julia de Burgos",
        genre: "Poetry",
        page: 524,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61uMG5arPYL.jpg"
    },
    {
        favorite: false,
        id: 333,
        firstName: "Lisa",
        lastName: "Tucker",
        title: "The Song Reader",
        genre: "Fiction",
        page: 368,
        cover: "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781847397379_9781847397379_hr.jpg"
    },
    {
        favorite: false,
        id: 334,
        firstName: "William",
        lastName: "Shakespeare",
        title: "The Sonnets",
        genre: "Poetry",
        page: 768,
        cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781604336153/shakespeares-sonnets-9781604336153_hr.jpg"
    },
    {
        favorite: false,
        id: 335,
        firstName: "Elizabeth",
        lastName: "Barrett Browning",
        title: "Sonnets from the Portuguese",
        genre: "Poetry",
        page: 64,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81N1r6tyHCL.jpg"
    },
    {
        favorite: false,
        id: 336,
        firstName: "William",
        lastName: "Styron",
        title: "Sophie's Choice",
        genre: "Fiction",
        page: 562,
        cover: "https://globalbookclub.s3.amazonaws.com/resources/391653/sophies_choice/cover.jpg"
    },
    {
        favorite: false,
        id: 337,
        firstName: "William",
        lastName: "Faulkner",
        title: "The Sound and the Fury",
        genre: "Classics",
        page: 366,
        cover: "https://i.dr.com.tr/cache/500x400-0/originals/0000000341040-1.jpg"
    },
    {
        favorite: false,
        id: 338,
        firstName: "Vladimir",
        lastName: "Nabokov",
        title: "Speak, Memory",
        genre: "Memoir",
        page: 255,
        cover: "https://i.pinimg.com/originals/49/13/52/491352847319f0f666b6558b63b21591.jpg"
    },
    {
        favorite: false,
        id: 339,
        firstName: "Ira",
        lastName: "Levin",
        title: "The Stepford Wives",
        genre: "Horror",
        page: 144,
        cover: "https://leavesandpages.files.wordpress.com/2018/01/stepford-wives-ira-levin.jpg"
    },
    {
        favorite: false,
        id: 340,
        firstName: "Mary",
        lastName: "Roach",
        title: "Stiff: The Curious Lives of Human Cadavers",
        genre: "Non-Fiction",
        page: 303,
        cover: "https://m.media-amazon.com/images/I/515ceEO3wYL.jpg"
    },
    {
        favorite: false,
        id: 341,
        firstName: "Helen",
        lastName: "Keller",
        title: "The Story of My Life",
        genre: "Memoir",
        page: 240,
        cover: "https://images.penguinrandomhouse.com/cover/9781101078150"
    },
    {
        favorite: false,
        id: 342,
        firstName: "Robert Louis",
        lastName: "Stevenson",
        title: "The Strange Case of Dr Jekyll & Mr. Hyde",
        genre: "Classics",
        page: 224,
        cover: "https://www.gutenberg.org/files/43/43-h/images/cover.jpg"
    },
    {
        favorite: false,
        id: 343,
        firstName: "Tennessee",
        lastName: "Williams",
        title: "A Streetcar Named Desiree",
        genre: "Play",
        page: 107,
        cover: "https://cdn2.penguin.com.au/covers/original/9780141190273.jpg"
    },
    {
        favorite: false,
        id: 344,
        firstName: "E.B.",
        lastName: "White",
        title: "Stuart Little",
        genre: "Children's",
        page: 131,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91a1ogh+5JL.jpg"
    },
    {
        favorite: false,
        id: 345,
        firstName: "T.",
        lastName: "Jefferson Parker",
        title: "Summer of Fear",
        genre: "Mystery",
        page: 368,
        cover: "https://m.media-amazon.com/images/I/51EErun13HL.jpg"
    },
    {
        favorite: false,
        id: 346,
        firstName: "Ernest",
        lastName: "Hemingway",
        title: "The Sun Also Rises",
        genre: "Classics",
        page: 189,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51cj37KTLRL._SX322_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 347,
        firstName: "Marcel",
        lastName: "Proust",
        title: "Swann's Way",
        genre: "Classics",
        page: 444,
        cover: "https://images.penguinrandomhouse.com/cover/9780143124696"
    },
    {
        favorite: false,
        id: 348,
        firstName: "Anne",
        lastName: "Collet",
        title: "Swimming with Giants: My Encounters with Whales, Dolphins and Seals",
        genre: "Non-Fiction",
        page: 228,
        cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5713/9781571312617.jpg"
    },
    {
        favorite: false,
        id: 349,
        firstName: "Flora Rheta",
        lastName: "Schreiber",
        title: "Sybil",
        genre: "Non-Fiction",
        page: 481,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71pVaixvJmL.jpg"
    },
    {
        favorite: false,
        id: 350,
        firstName: "Charles",
        lastName: "Dickens",
        title: "A Tale of Two Cities",
        genre: "Classics",
        page: 489,
        cover: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/3108479.jpg"
    },
    {
        favorite: false,
        id: 351,
        firstName: "Edgar Allan",
        lastName: "Poe",
        title: "The Tell-Tale Heart",
        genre: "Classics",
        page: 448,
        cover: "https://m.media-amazon.com/images/I/51eJpa9Gj2L.jpg"
    },
    {
        favorite: false,
        id: 352,
        firstName: "F. Scott",
        lastName: "Fitzgerald",
        title: "Tender Is the Night",
        genre: "Fiction",
        page: 2,
        cover: "https://i.pinimg.com/originals/da/c2/1e/dac21e3208cfde60a24afa8f2c000a9f.jpg"
    },
    {
        favorite: false,
        id: 353,
        firstName: "Larry",
        lastName: "McMurtry",
        title: "Terms of Endearment",
        genre: "Classics",
        page: 315,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91gj4mROK8L.jpg"
    },
    {
        favorite: false,
        id: 354,
        firstName: "Sholem",
        lastName: "Aleichem",
        title: "Tevya The Dairyman and the Railroad Stories",
        genre: "Fiction",
        page: 309,
        cover: "https://images-na.ssl-images-amazon.com/images/I/A1zj2UqyPKL.jpg"
    },
    {
        favorite: false,
        id: 355,
        firstName: "Horace",
        lastName: "McCoy",
        title: "They Shoot Horses, Don't They?",
        genre: "Fiction",
        page: 122,
        cover: "https://images-na.ssl-images-amazon.com/images/I/714iIGk6fNL.jpg"
    },
    {
        favorite: false,
        id: 356,
        firstName: "Dashiell",
        lastName: "Hammett",
        title: "The Thin Man",
        genre: "Mystery",
        page: 201,
        cover: "https://d.gr-assets.com/books/1321111302l/80616.jpg"
    }, {
        favorite: false,
        id: 357,
        firstName: "Jack",
        lastName: "Finney",
        title: "Time and Again",
        genre: "Time travel",
        page: 399,
        cover: "https://m.media-amazon.com/images/I/51j9db4d1VL.jpg"
    }, {
        favorite: false,
        id: 358,
        firstName: "Audrey",
        lastName: "Niffenegger",
        title: "The Time Traveler's Wife",
        genre: "Time travel",
        page: 500,
        cover: "https://images-na.ssl-images-amazon.com/images/I/817iFfLhJ+L.jpg"
    },
    {
        favorite: false,
        id: 359,
        firstName: "Ernest",
        lastName: "Hemingway",
        title: "To Have and Have Not",
        genre: "Fiction",
        page: 176,
        cover: "http://www.gdprice.com/j/14878.JPG"
    },
    {
        favorite: false,
        id: 360,
        firstName: "Harper",
        lastName: "Lee",
        title: "To Kill a Mockingbird",
        genre: "Classics",
        page: 324,
        cover: "https://cdn2.penguin.com.au/covers/original/9781784752637.jpg"
    },
    {
        favorite: false,
        id: 361,
        firstName: "William",
        lastName: "Shakespeare",
        title: "The Tragedy of Richard III",
        genre: "Shakespearean",
        page: 424,
        cover: "https://kbimages1-a.akamaihd.net/f8cdcf33-6d91-4aa1-8469-c6aebbd21e2d/1200/1200/False/king-richard-iii-1.jpg"
    },
    {
        favorite: false,
        id: 362,
        firstName: "Irvine",
        lastName: "Welsh",
        title: "Trainspotting",
        genre: "Fiction",
        page: 431,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353033083l/135836.jpg"
    },
    {
        favorite: false,
        id: 363,
        firstName: "Betty",
        lastName: "Smith",
        title: "A Tree Grows in Brooklyn",
        genre: "Classics",
        page: 496,
        cover: "https://tinhouse.com/wp-content/uploads/2019/07/TH80-Evans-Art-347x500.jpg"
    },
    {
        favorite: false,
        id: 364,
        firstName: "Franz",
        lastName: "Kafka",
        title: "The Trial",
        genre: "Absurdist fiction",
        page: 255,
        cover: "https://m.media-amazon.com/images/I/51viLH0i8SL.jpg"
    },
    {
        favorite: false,
        id: 365,
        firstName: "Elisabeth",
        lastName: "Robinson",
        title: "The True and Outstanding Adventures of the Hunt Sisters",
        genre: "Fiction",
        page: 326,
        cover: "https://m.media-amazon.com/images/I/41kdVIAHN2L.jpg"
    },
    {
        favorite: false,
        id: 366,
        firstName: "Ann",
        lastName: "Patchett",
        title: "Truth & Beauty: A Friendship",
        genre: "Memoir",
        page: 257,
        cover: "https://pictures.abebooks.com/isbn/9780786269716-us.jpg"
    },
    {
        favorite: false,
        id: 367,
        firstName: "Mitch",
        lastName: "Albom",
        title: "Tuesdays with Morrie",
        genre: "Inspirational fiction",
        page: 210,
        cover: "https://kbimages1-a.akamaihd.net/b81ff4cf-415b-4d08-82a0-4a97baa85c27/1200/1200/False/tuesdays-with-morrie-1.jpg"
    },
    {
        favorite: false,
        id: 368,
        firstName: "James",
        lastName: "Joyce",
        title: "Ulysses",
        genre: "Classics",
        page: 783,
        cover: "https://kbimages1-a.akamaihd.net/7f16ca71-2e88-474d-b0d5-00192d4ec815/1200/1200/False/ulysses-by-james-joyce-2.jpg"
    }, {
        favorite: false,
        id: 369,
        firstName: "Sylvia",
        lastName: "Plath",
        title: "The Unabridged Journals of Sylvia Plath",
        genre: "Non-Fiction",
        page: 732,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91Qidx2KcBL.jpg"
    },
    {
        favorite: false,
        id: 370,
        firstName: "Milan",
        lastName: "Kundera",
        title: "The Unbearable Lightness of Being",
        genre: "Fiction",
        page: 320,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41wW6tCBu4L._SX339_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 371,
        firstName: "Harriet",
        lastName: "Beecher Stowe",
        title: "Uncle Tom's Cabin",
        genre: "Classics",
        page: 438,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51HMvWsUSPL.jpg"
    },
    {
        favorite: false,
        id: 372,
        firstName: "Jacqueline",
        lastName: "Susann",
        title: "Valley of the Dolls",
        genre: "Fiction",
        page: 448,
        cover: "https://images-na.ssl-images-amazon.com/images/I/411cT5PmmCL._SX329_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 373,
        firstName: "Carol",
        lastName: "Shields",
        title: "Unless",
        genre: "Fiction",
        page: 320,
        cover: "https://images-na.ssl-images-amazon.com/images/I/519pzCixDiL.jpg"
    },
    {
        favorite: false,
        id: 374,
        firstName: "Philip",
        lastName: "Meyers",
        title: "The Vanishing Newspaper",
        genre: "Non-Fiction",
        page: 264,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51WD1MMJEVL._SX342_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 375,
        firstName: "William",
        lastName: "Makepeace Thackeray",
        title: "Vanity Fair",
        genre: "Classics",
        page: 867,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61LPft-POlL.jpg"
    },
    {
        favorite: false,
        id: 376,
        firstName: "Jeffrey",
        lastName: "Eugenides",
        title: "The Virgin Suicides",
        genre: "Fiction",
        page: 250,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61IzZLAsGuL.jpg"
    },
    {
        favorite: false,
        id: 377,
        firstName: "Jack",
        lastName: "Kerouac",
        title: "Visions of Cody",
        genre: "Fiction",
        page: 464,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1171864309l/123969.jpg"
    },
    {
        favorite: false,
        id: 378,
        firstName: "Samuel",
        lastName: "Beckett",
        title: "Waiting for Godot",
        genre: "Play",
        page: 109,
        cover: "https://m.media-amazon.com/images/M/MV5BYjNkYWU0ODctNjM3OC00ODEwLWI3ZjEtZDBlOGFhMWViOGJmXkEyXkFqcGdeQXVyNjI2OTgxNzY@._V1_.jpg"
    },
    {
        favorite: false,
        id: 379,
        firstName: "Henry David",
        lastName: "Thoreau",
        title: "Walden",
        genre: "Classics",
        page: 320,
        cover: "https://images.penguinrandomhouse.com/cover/9780143129264"
    },
    {
        favorite: false,
        id: 380,
        firstName: "Leo",
        lastName: "Tolstoy",
        title: "War and Peace",
        genre: "Classics",
        page: 1392,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71lPZpwz0HL.jpg"
    },
    {
        favorite: false,
        id: 381,
        firstName: "Daniel",
        lastName: "Sinker",
        title: "We Owe You Nothing: Punk Planet: The Collected Interviews",
        genre: "Music",
        page: 346,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41fWPocLlKL._SX330_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 382,
        firstName: "Richard Nelson",
        lastName: "Bolles",
        title: "What Color is Your Parachute?",
        genre: "Non-Fiction",
        page: 382,
        cover: "https://m.media-amazon.com/images/I/41+Crw4LCDL.jpg"
    },
    {
        favorite: false,
        id: 383,
        firstName: "Henry",
        lastName: "Farrell",
        title: "What Happened to Baby Jane?",
        genre: "Horror",
        page: 245,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1497999070l/1430377._SY475_.jpg"
    },
    {
        favorite: false,
        id: 384,
        firstName: "Julie",
        lastName: "Otsuka",
        title: "When the Emperor Was Divine",
        genre: "Historical Fiction",
        page: 144,
        cover: "https://www.urbandalelibrary.org/app/uploads/2021/04/When-the-Emperor-Was-Divine-Cover-2.jpg"
    },
    {
        favorite: false,
        id: 385,
        firstName: "Spencer",
        lastName: "Johnson",
        title: "Who Moved My Cheese?",
        genre: "Inspirational fiction",
        page: 96,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71JpUaCKdrL.jpg"
    },
    {
        favorite: false,
        id: 386,
        firstName: "Edward",
        lastName: "Albee",
        title: "Who's Afraid of Virginia Woolf?",
        genre: "Play",
        page: 272,
        cover: "https://images-na.ssl-images-amazon.com/images/I/417FmvO%2Br3L.jpg"
    },
    {
        favorite: false,
        id: 387,
        firstName: "Gregory",
        lastName: "Maguire",
        title: "Wicked: The Life and Times of the Wicked Witch of the West",
        genre: "Fantasy",
        page: 406,
        cover: "https://images-na.ssl-images-amazon.com/images/I/41B6mGHn12L.jpg"
    },
    {
        favorite: false,
        id: 388,
        firstName: "Cheryl",
        lastName: "Strayed",
        title: "Wild",
        genre: "Non-Fiction",
        page: 315,
        cover: "https://images-na.ssl-images-amazon.com/images/I/61K2brgIMrL.jpg"
    }, {
        favorite: false,
        id: 389,
        firstName: "John",
        lastName: "Updike",
        title: "The Witches of Eastwick",
        genre: "Fiction",
        page: 307,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81xMnwn1UxL.jpg"
    }, {
        favorite: false,
        id: 390,
        firstName: "Frank L.",
        lastName: "Baum",
        title: "The Wonderful Wizard of Oz",
        genre: "Classics",
        page: 154,
        cover: "https://almabooks.com/wp-content/uploads/2016/10/9781847495778.jpg"
    },
    {
        favorite: false,
        id: 391,
        firstName: "Emily",
        lastName: "Bronte",
        title: "Wuthering Heights",
        genre: "Romantic",
        page: 464,
        cover: "https://images-na.ssl-images-amazon.com/images/I/516+qUI91tL._SX303_BO1,204,203,200_.jpg"
    },
    {
        favorite: false,
        id: 392,
        firstName: "Marjorie",
        lastName: "Kinnan Rawlings",
        title: "The Yearling",
        genre: "Young adult",
        page: 513,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81C2iK7DH8L.jpg"
    },
    {
        favorite: false,
        id: 393,
        firstName: "Joan",
        lastName: "Didion",
        title: "The Year of Magical Thinking",
        genre: "Memoir",
        page: 227,
        cover: "https://images-na.ssl-images-amazon.com/images/I/81ssDs7CVQL.jpg"
    },
]


export default list;