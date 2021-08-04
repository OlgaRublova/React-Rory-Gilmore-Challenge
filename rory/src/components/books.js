const list = [
    {
        id: 1,
        firstName: 'George',
        lastName: 'Orwel',
        title: 1984,
        genre: 'Dystopian fiction',
        page: 328,
        cover: '/images/1-100/img-1.jpg'
    },
    {
        id: 2,
        firstName: 'Mark',
        lastName: 'Twain',
        title: 'The Adventures of Huckleberry Finn',
        genre: 'Picaresque novel',
        page: 366,
        cover: 'images/1-100/img-2.jpeg'
    },
    {
        id: 3,
        firstName: 'Lewis',
        lastName: 'Carroll',
        title: 'Alice’s Adventures in Wonderland',
        genre: 'Literary nonsense',
        page: 200,
        cover: 'images/1-100/img-3.jpg'
    },
    {
        id: 4,
        firstName: 'Michael',
        lastName: 'Chabon',
        title: 'The Amazing Adventures of Kavalier & Clay',
        genre: 'Historical fiction',
        page: 639,
        cover: 'images/1-100/img-4.jpg'
    },
    {
        id: 5,
        firstName: 'Theodore',
        lastName: 'Dreiser',
        title: 'An American Tragedy',
        genre: 'Crime fiction',
        page: 800,
        cover: 'images/1-100/img-5.jpg'
    },
    {
        id: 6,
        firstName: 'Frank',
        lastName: 'McCourt',
        title: 'Angela’s Ashes',
        genre: 'Autobiography',
        page: 368,
        cover: 'images/1-100/img-6.jpg'
    },
    {
        id: 7,
        firstName: 'Leo',
        lastName: 'Tolstoy',
        title: 'Anna Karenina',
        genre: 'Realistic novel',
        page: 864,
        cover: './images/1-100/img-7.jpg'
    },
    {
        id: 8,
        firstName: 'Anne',
        lastName: 'Frank',
        title: 'The Diary of a Young Girl',
        genre: 'Autobiography',
        page: 352,
        cover: 'images/1-100/img-8.jpg'
    },
    {
        id: 9,
        firstName: 'Donald',
        lastName: 'Kagan',
        title: 'Archidamian War',
        genre: 'History',
        page: 392,
        cover: 'images/1-100/img-9.jpeg'
    },
    {
        id: 10,
        firstName: 'Henry',
        lastName: 'James',
        title: 'The Art of Fiction',
        genre: 'Fiction',
        page: 224,
        cover: 'images/1-100/img-10.jpeg'
    },
    {
        id: 11,
        firstName: "Epictetus",
        lastName: "N/A",
        title: "Art of Living: The Classical Manual on Virtue, Happiness, and Effectiveness",
        genre: "Self-help",
        page: 144,
        cover: "images/1-100/img-11.jpg"
    },
    {
        id: 12,
        firstName: "Sun",
        lastName: "Tzu",
        title: "The Art of War",
        genre: "Non-fiction",
        page: 288,
        cover: "images/1-100/img-12.jpeg"
    },
    {
        id: 13,
        firstName: "William",
        lastName: "Faulkner",
        title: "As I Lay Dying",
        genre: "Dark Comedy",
        page: 267,
        cover: "images/1-100/img-13.jpeg"
    },
    {
        id: 14,
        firstName: "Ian",
        lastName: "McEwan",
        title: "Atonement",
        genre: "Novel",
        page: 351,
        cover: "images/1-100/img-14.jpeg"
    },
    {
        id: 15,
        firstName: "Lucy",
        lastName: "Grealy",
        title: "Autobiography of a Face",
        genre: "Autobiography",
        page: 256,
        cover: "images/1-100/img-15.jpg"
    },
    {
        id: 16,
        firstName: "Kate",
        lastName: "Chopin",
        title: "The Awakening",
        genre: "Fiction",
        page: 303,
        cover: "images/1-100/img-16.jpg"
    },
    {
        id: 17,
        firstName: "Dick",
        lastName: "King-Smith",
        title: "Babe",
        genre: "Children's",
        page: 128,
        cover: "images/1-100/img-17.jpg"
    },
    {
        id: 18,
        firstName: "Susan",
        lastName: "Faludi",
        title: "Backlash: The Undeclared War Against American Women",
        genre: "Non-fiction",
        page: 552,
        cover: "images/1-100/img-18.jpg"
    },
    {
        id: 19,
        firstName: "Dai",
        lastName: "Sijie",
        title: "Balzac and the Little Chinese Seamstress",
        genre: "Historical Fiction",
        page: 190,
        cover: "images/1-100/img-19.jpg"
    },
    {
        id: 20,
        firstName: "Felix",
        lastName: "Salten",
        title: "Bambi: A Life in the Woods",
        genre: "Children's",
        page: 272,
        cover: "images/1-100/img-20.jpg"
    },
    {
        id: 21,
        firstName: "Ann",
        lastName: "Patchett",
        title: "Bel Canto",
        genre: "Psychological Fiction",
        page: 318,
        cover: "images/1-100/img-21.jpg"
    },
    {
        id: 22,
        firstName: "Sylvia",
        lastName: "Plath",
        title: "The Bell Jar",
        genre: "Psychological Fiction",
        page: 244,
        cover: "images/1-100/img-22.jpg"
    },
    {
        id: 23,
        firstName: "Toni",
        lastName: "Morrison",
        title: "Beloved",
        genre: "Historical Fiction",
        page: 324,
        cover: "images/1-100/img-23.jpg"
    },
    {
        id: 24,
        firstName: "Anonymous",
        lastName: "Anonymous",
        title: "Beowulf",
        genre: "Poetry",
        page: 256,
        cover: "images/1-100/img-24.jpg"
    },
    {
        id: 25,
        firstName: "Anonymous",
        lastName: "Anonymous",
        title: "The Bhagavad Gita",
        genre: "Hindu Scripture",
        page: 701,
        cover: "images/1-100/img-25.jpeg"
    },
    {
        id: 26,
        firstName: "Peter",
        lastName: "Duffy",
        title: "The Bielski Brothers: The True Story of Three Men Who Defied the Nazis, Built a Village in the Forest, and Saved 1200 Jews",
        genre: "Documentary",
        page: 302,
        cover: "images/1-100/img-26.jpeg"
    },
    {
        id: 27,
        firstName: "Elizabeth",
        lastName: "Wurtzel",
        title: "Bitch: In Praise of Difficult Women",
        genre: "Non-Fiction",
        page: 448,
        cover: "images/1-100/img-27.jpg"
    },
    {
        id: 28,
        firstName: "Mary",
        lastName: "McCarthy",
        title: "A Bolt from the Blue and Other Essays",
        genre: "Novel",
        page: 400,
        cover: "images/1-100/img-28.jpg"
    },
    {
        id: 29,
        firstName: "Aldous",
        lastName: "Huxley",
        title: "Brave New World",
        genre: "Dystopian fiction",
        page: 311,
        cover: "images/1-100/img-29.jpg"
    },
    {
        id: 30,
        firstName: "Monica",
        lastName: "Ali",
        title: "Brick Lane",
        genre: "Novel",
        page: 432,
        cover: "images/1-100/img-30.jpg"
    },
    {
        id: 31,
        firstName: "Alan Jay",
        lastName: "Lerner",
        title: "Bridgadoon",
        genre: "Novel",
        page: 200,
        cover: "images/1-100/img-31.jpg"
    },
    {
        id: 32,
        firstName: "Voltaire",
        lastName: "",
        title: "Candide",
        genre: "Novel",
        page: 84,
        cover: "images/1-100/img-32.png"
    },
    {
        id: 33,
        firstName: "Geoffrey",
        lastName: "Chaucer",
        title: "The Canterbury Tales",
        genre: "Poetry",
        page: 912,
        cover: "images/1-100/img-33.jpg"
    },
    {
        id: 34,
        firstName: "Stephen",
        lastName: "King",
        title: "Carrie",
        genre: "Horror",
        page: 199,
        cover: "images/1-100/img-34.jpg"
    },
    {
        id: 35,
        firstName: "Joseph",
        lastName: "Heller",
        title: "Catch-22",
        genre: "Absurdist fiction",
        page: 453,
        cover: "images/1-100/img-35.jpg"
    },
    {
        id: 36,
        firstName: "J.D.",
        lastName: "Salinger",
        title: "The Catcher in the Rye",
        genre: "Novel",
        page: 277,
        cover: "images/1-100/img-36.jpg"
    },
    {
        id: 37,
        firstName: "Mark",
        lastName: "Twain",
        title: "The Celebrated Jumping Frog",
        genre: "Fiction",
        page: 32,
        cover: "images/1-100/img-37.jpg"
    },
    {
        id: 38,
        firstName: "E.B.",
        lastName: "White",
        title: "Charlotte's Web",
        genre: "Children's",
        page: 192,
        cover: "images/1-100/img-38.jpg"
    },
    {
        id: 39,
        firstName: "Lillian",
        lastName: "Hellman",
        title: "The Children's Hour",
        genre: "Drama",
        page: 70,
        cover: "images/1-100/img-39.jpg"
    },
    {
        id: 40,
        firstName: "Stephen",
        lastName: "King",
        title: "Christine",
        genre: "Novel",
        page: 526,
        cover: "images/1-100/img-40.jpg"
    },
    {
        id: 41,
        firstName: "Charles",
        lastName: "Dickens",
        title: "A Christmas Carol",
        genre: "Novel",
        page: 162,
        cover: "images/1-100/img-41.jpg"
    },
    {
        id: 42,
        firstName: "Brothers Grimm",
        lastName: "",
        title: "Cinderella",
        genre: "Children's",
        page: 32,
        cover: "images/1-100/img-42.jpg"
    },
    {
        id: 43,
        firstName: "Anthony",
        lastName: "Burgess",
        title: "A Clockwork Orange",
        genre: "Novel",
        page: 213,
        cover: "images/1-100/img-43.jpg"
    },
    {
        id: 44,
        firstName: "P.G.",
        lastName: "Wodehouse",
        title: "The Code of the Woosters",
        genre: "Comic novel",
        page: 272,
        cover: "images/1-100/img-44.jpg"
    },
    {
        id: 45,
        firstName: "Eudora",
        lastName: "Welty",
        title: "The Collected Stories",
        genre: "Fiction",
        page: 592,
        cover: "images/1-100/img-45.jpg"
    },
    {
        id: 46,
        firstName: "William",
        lastName: "Shakespeare",
        title: "A Comedy of Errors",
        genre: "Comedy play",
        page: 69,
        cover: "images/1-100/img-46.jpg"
    },
    {
        id: 47,
        firstName: "Dawn",
        lastName: "Powell",
        title: "Complete Novels",
        genre: "Novel",
        page: 969,
        cover: "images/1-100/img-47.jpg"
    },
    {
        id: 48,
        firstName: "Anne",
        lastName: "Sexton",
        title: "The Complete Poems",
        genre: "Poetry",
        page: 656,
        cover: "images/1-100/img-48.jpg"
    },
    {
        id: 49,
        firstName: "Dorothy",
        lastName: "Parker",
        title: "Complete Stories",
        genre: "Fiction",
        page: 480,
        cover: "images/1-100/img-49.jpg"
    },
    {
        id: 50,
        firstName: "John",
        lastName: "Kennedy Toole",
        title: "A Confederacy of Dunces",
        genre: "Picaresque novel",
        page: 405,
        cover: "images/1-100/img-50.jpg"
    },
    {
        id: 51,
        firstName: "Mark",
        lastName: "Twain",
        title: "A Connecticut Yankee in King Arthur's Court",
        genre: "Novel",
        page: 336,
        cover: "images/1-100/img-51.jpg"
    },
    {
        id: 52,
        firstName: "David",
        lastName: "Foster Wallace",
        title: "Consider the Lobster: And Other Essays",
        genre: "Non-fiction",
        page: 343,
        cover: "images/1-100/img-52.jpg"
    },
    {
        id: 53,
        firstName: "Carl",
        lastName: "Sagan",
        title: "Contact",
        genre: "Science Fiction",
        page: 432,
        cover: "images/1-100/img-53.jpg"
    },
    {
        id: 54,
        firstName: "Alexandre",
        lastName: "Dumas",
        title: "The Count of Monte Cristo",
        genre: "Novel",
        page: 1276,
        cover: "images/1-100/img-54.jpg"
    },
    {
        id: 55,
        firstName: "Honore",
        lastName: "de Balzac",
        title: "Cousin Bette",
        genre: "Novel",
        page: 496,
        cover: "images/1-100/img-55.jpg"
    },
    {
        id: 56,
        firstName: "Fyodor",
        lastName: "Dostoevsky",
        title: "Crime and Punishment",
        genre: "Novel",
        page: 430,
        cover: "images/1-100/img-56.jpg"
    },
    {
        id: 57,
        firstName: "Michel",
        lastName: "Faber",
        title: "The Crimson Petal and the White",
        genre: "Novel",
        page: 864,
        cover: "images/1-100/img-57.jpg"
    },
    {
        id: 58,
        firstName: "Arthur",
        lastName: "Miller",
        title: "The Crucible",
        genre: "Tragedy",
        page: 160,
        cover: "images/1-100/img-58.gif"
    },
    {
        id: 59,
        firstName: "Stephen",
        lastName: "King",
        title: "Cujo",
        genre: "Horror",
        page: 309,
        cover: "images/1-100/img-59.jpg"
    },
    {
        id: 60,
        firstName: "Mark",
        lastName: "Haddon",
        title: "The Curious Incident of the Dog in the Night-Time",
        genre: "Mystery",
        page: 274,
        cover: "images/1-100/img-60.jpeg"
    },
    {
        id: 61,
        firstName: "Edmond",
        lastName: "Rostand",
        title: "Cyrano De Bergerac",
        genre: "Play",
        page: 224,
        cover: "images/1-100/img-61.jpg"
    },
    {
        id: 62,
        firstName: "Isabel",
        lastName: "Allende",
        title: "Daughter of Fortune",
        genre: "Novel",
        page: 432,
        cover: "images/1-100/img-62.jpg"
    },
    {
        id: 63,
        firstName: "Charles",
        lastName: "Dickens",
        title: "David Copperfield",
        genre: "Novel",
        page: 624,
        cover: "images/1-100/img-63.jpeg"
    },
    {
        id: 64,
        firstName: "Dan",
        lastName: "Brown",
        title: "The Da Vinci Code",
        genre: "Conspiracy Fiction",
        page: 359,
        cover: "images/1-100/img-64.jpg"
    },
    {
        id: 65,
        firstName: "Nikolai",
        lastName: "Gogol",
        title: "The Dead Souls",
        genre: "Picaresque novel",
        page: 432,
        cover: "images/1-100/img-65.jpg"
    },
    {
        id: 66,
        firstName: "Arthur",
        lastName: "Miller",
        title: "Death of a Salesman",
        genre: "Tragedy",
        page: 144,
        cover: "images/1-100/img-66.jpg"
    },
    {
        id: 67,
        firstName: "Judy",
        lastName: "Blume",
        title: "Deenie",
        genre: "Young adult",
        page: 160,
        cover: "images/1-100/img-67.jpg"
    },
    {
        id: 68,
        firstName: "Fyodor",
        lastName: "Dostoyevsky",
        title: "Demons",
        genre: "Novel",
        page: 768,
        cover: "images/1-100/img-68.jpg"
    },
    {
        id: 69,
        firstName: "Erik",
        lastName: "Larson",
        title: "The Devil in the White City: Murder, Magic, and Madness at the Fair that Changed America",
        genre: "Biography",
        page: 447,
        cover: "images/1-100/img-69.jpg"
    },

    {
        id: 70,
        firstName: "Tommy",
        lastName: "Lee",
        title: "The Dirt: Confessions of the World's Most Notorious Rock Band",
        genre: "Biography",
        page: 431,
        cover: "images/1-100/img-70.jpg"
    },
    {
        id: 71,
        firstName: "Dante",
        lastName: "Alighieri",
        title: "The Divine Comedy",
        genre: "Poetry",
        page: 712,
        cover: "images/1-100/img-71.jpg"
    },
    {
        id: 72,
        firstName: "Rebecca",
        lastName: "Wells",
        title: "The Divine Secrets of the Ya-Ya Sisterhood",
        genre: "Novel",
        page: 368,
        cover: "images/1-100/img-72.jpg"
    },
    {
        id: 73,
        firstName: "Miguel",
        lastName: "De Cervantes",
        title: "Don Quixote",
        genre: "Parody",
        page: 863,
        cover: "images/1-100/img-73.jpg"
    },
    {
        id: 74,
        firstName: "Bram",
        lastName: "Stocker",
        title: "Dracula",
        genre: "Horror",
        page: 418,
        cover: "images/1-100/img-74.jpg"
    },
    {
        id: 75,
        firstName: "Alfred",
        lastName: "Uhrv",
        title: "Driving Miss Daisy",
        genre: "Play",
        page: 72,
        cover: "images/1-100/img-75.jpg"
    },
    {
        id: 76,
        firstName: "Edgar Allan",
        lastName: "Poe",
        title: "Edgar Allan Poe: Complete Tales & Poems",
        genre: "Poetry",
        page: 1023,
        cover: "images/1-100/img-76.jpg"
    },
    {
        id: 77,
        firstName: "Blanche",
        lastName: "Wiesen Cook",
        title: "Eleanor Roosevelt",
        genre: "Biography",
        page: 686,
        cover: "images/1-100/img-77.jpeg"
    },
    {
        id: 78,
        firstName: "Tom",
        lastName: "Wolfe",
        title: "The Electric Kool-Aid Acid Test",
        genre: "Novel",
        page: 432,
        cover: "images/1-100/img-78.jpg"
    },
    {
        id: 79,
        firstName: "Mark",
        lastName: "Dunn",
        title: "Ella Minnow Pea: A Novel in Letters",
        genre: "Novel",
        page: 208,
        cover: "images/1-100/img-79.jpg"
    },
    {
        id: 80,
        firstName: "Kay",
        lastName: "Thompson",
        title: "Eloise at the Plaza",
        genre: "Children's",
        page: 26,
        cover: "images/1-100/img-80.jpg"
    },
    {
        id: 81,
        firstName: "Roger",
        lastName: "Reger",
        title: "Emily the Strange",
        genre: "Novel",
        page: 432,
        cover: "images/1-100/img-81.jpg"
    },

    {
        id: 82,
        firstName: "Jane",
        lastName: "Austen",
        title: "Emma",
        genre: "Novel",
        page: 400,
        cover: "images/1-100/img-82.jpeg"
    },
    {
        id: 83,
        firstName: "Richard",
        lastName: "Russo",
        title: "Empire Falls",
        genre: "Novel",
        page: 496,
        cover: "images/1-100/img-83.jpg"
    },
    {
        id: 84,
        firstName: "Donald J",
        lastName: "Sobol",
        title: "Encyclopedia Brown: Boy Detective",
        genre: "Mystery",
        page: 96,
        cover: "images/1-100/img-84.jpg"
    },
    {
        id: 85,
        firstName: "Edith",
        lastName: "Wharton",
        title: "Ethan Frome",
        genre: "Novel",
        page: 195,
        cover: "images/1-100/img-85.jpg"
    },
    {
        id: 86,
        firstName: "Benedict",
        lastName: "De Spinoza",
        title: "Ethics",
        genre: "Early Modern",
        page: 305,
        cover: "images/1-100/img-86.jpg"
    },
    {
        id: 87,
        firstName: "Rick",
        lastName: "Steves",
        title: "Europe through the Back Door: The Travel Skills Handbook",
        genre: "Travel Guide",
        page: 777,
        cover: "images/1-100/img-87.jpg"
    },
    {
        id: 88,
        firstName: "Isabel",
        lastName: "Allende",
        title: "Eva Luna",
        genre: "Novel",
        page: 241,
        cover: "images/1-100/img-88.jpg"
    },
    {
        id: 89,
        firstName: "Jonathan",
        lastName: "Safran Foer",
        title: "Everything Is Illuminated",
        genre: "Novel",
        page: 276,
        cover: "images/1-100/img-89.jpg"
    },
    {
        id: 90,
        firstName: "Norman",
        lastName: "Mailer",
        title: "The Executioner's Song",
        genre: "Biographical Fiction",
        page: 1136,
        cover: "images/1-100/img-90.jpg"
    },
    {
        id: 91,
        firstName: "Gary",
        lastName: "Krist",
        title: "Extravagance",
        genre: "Novel",
        page: 304,
        cover: "images/1-100/img-91.jpg"
    },
    {
        id: 92,
        firstName: "Ray",
        lastName: "Bradbury",
        title: "Fahrenheit 451",
        genre: "Dystopian fiction",
        page: 249,
        cover: "images/1-100/img-92.jpg"
    },
    {
        id: 93,
        firstName: "Michael",
        lastName: "Moore",
        title: "Fahrenheit 9/11",
        genre: "Documentary",
        page: 363,
        cover: "images/1-100/img-93.jpeg"
    },
    {
        id: 94,
        firstName: "Donald",
        lastName: "Kagan",
        title: "The Fall of the Athenian Empire",
        genre: "History",
        page: 455,
        cover: "images/1-100/img-94.jpg"
    },
    {
        id: 95,
        firstName: "Greg",
        lastName: "Critser",
        title: "Fat Land: How Americans Became the Fattest People in the World",
        genre: "Diet book",
        page: 256,
        cover: "images/1-100/img-95.jpg"
    }, {
        id: 96,
        firstName: "Hunter S.",
        lastName: "Thompson",
        title: "Fear and Loathing in Las Vegas",
        genre: "Gonzo journalism",
        page: 204,
        cover: "images/1-100/img-96.jpg"
    },
    {
        id: 97,
        firstName: "J.R.R.",
        lastName: "Tolkien",
        title: "The Fellowship of the Ring",
        genre: "Fantasy",
        page: "423",
        cover: "images/1-100/img-97.jpg"
    },
    {
        id: 98,
        firstName: "Joseph",
        lastName: "Stein",
        title: "Fiddler on the Roof",
        genre: "Children's",
        page: 160,
        cover: "images/1-100/img-98.jpg"
    },
    {
        id: 99,
        firstName: "James",
        lastName: "Joyce",
        title: "Finnegan's Wake",
        genre: "Menippean satire",
        page: 672,
        cover: "images/1-100/img-99.jpg"
    },
    {
        id: 100,
        firstName: "Mitch",
        lastName: "Albom",
        title: "The Five People You Meet in Heaven",
        genre: "Inspirational fiction",
        page: 194,
        cover: "images/1-100/img-100.jpg"
    },
    {
        id: 101,
        firstName: "Gregory",
        lastName: "McDonald",
        title: "Fletch",
        genre: "Comedy",
        page: 208,
        cover: "images/100-200/101.jpg"
    },
    {
        id: 102,
        firstName: "Daniel",
        lastName: "Keyes",
        title: "Flowers for Algernon",
        genre: "Novel",
        page: 311,
        cover: "images/100-200/102.jpg"
    },
    {
        id: 103,
        firstName: "Jonathan",
        lastName: "Lethem",
        title: "The Fortress of Solitude",
        genre: "Novel",
        page: 511,
        cover: "images/100-200/103.jpg"
    },
    {
        id: 104,
        firstName: "Ayn",
        lastName: "Rand",
        title: "The Fountainhead",
        genre: "Philosophical fiction",
        page: 752,
        cover: "images/100-200/104.jpg"
    },
    {
        id: 105,
        firstName: "Mary",
        lastName: "Shelley",
        title: "Frankenstein",
        genre: "Gothic novel",
        page: 280,
        cover: "images/100-200/105.jpg"
    },
    {
        id: 106,
        firstName: "J.D.",
        lastName: "Salinger",
        title: "Franny and Zooey",
        genre: "Short stories",
        page: 201,
        cover: "images/100-200/106.jpg"
    },
    {
        id: 107,
        firstName: "Mary",
        lastName: "Rodgers",
        title: "Freaky Friday",
        genre: "Children's",
        page: 144,
        cover: "images/100-200/107.jpg"
    },
    {
        id: 108,
        firstName: "Kurt",
        lastName: "Vonnegut",
        title: "Galapagos",
        genre: "Novel",
        page: 324,
        cover: "images/100-200/108.jpg"
    },
    {
        id: 109,
        firstName: "Judith",
        lastName: "Butler",
        title: "Gender Trouble",
        genre: "Fiction",
        page: 272,
        cover: "images/100-200/109.jpg"
    },
    {
        id: 110,
        firstName: "Jacob",
        lastName: "Weisberg",
        title: "George W. Bushism: The Slate Book of the Accidental Wit and Wisdom of our 43rd President",
        genre: "Biography",
        page: 96,
        cover: "images/100-200/110.jpg"
    },
    {
        id: 111,
        firstName: "Fredrick",
        lastName: "Kohner",
        title: "Gidget",
        genre: "Fiction",
        page: 154,
        cover: "images/100-200/111.jpg"
    },
    {
        id: 112,
        firstName: "Beverly",
        lastName: "Cleary",
        title: "A Girl from Yamhill",
        genre: "Young adult",
        page: 352,
        cover: "images/100-200/112.jpg"
    },
    {
        id: 113,
        firstName: "Susanna",
        lastName: "Kaysen",
        title: "Girl, Interrupted",
        genre: "Autobiography",
        page: 192,
        cover: "images/100-200/113.jpg"
    },
    {
        id: 114,
        firstName: "Elaine",
        lastName: "Pagels",
        title: "The Gnostic Gospels",
        genre: "Gospel",
        page: 224,
        cover: "images/100-200/114.jpg"
    },
    {
        id: 115,
        firstName: "Mario",
        lastName: "Puzo",
        title: "The Godfather",
        genre: "Crime novel",
        page: 448,
        cover: "images/100-200/115.jpg"
    },
    {
        id: 116,
        firstName: "Arundhati",
        lastName: "Roy",
        title: "The God of Small Things",
        genre: "Psycological fiction",
        page: 333,
        cover: "images/100-200/116.jpg"
    },
    {
        id: 117,
        firstName: "Alvin",
        lastName: "Granowsky",
        title: "Goldilocks and the Three Bears",
        genre: "Children's",
        page: 48,
        cover: "images/100-200/117.jpg"
    },
    {
        id: 118,
        firstName: "Margaret",
        lastName: "Mitchell",
        title: "Gone with the Wind",
        genre: "Historical fiction",
        page: 719,
        cover: "images/100-200/118.jpg"
    },
    {
        id: 119,
        firstName: "Keith",
        lastName: "Richards",
        title: "Goodnight Spoon",
        genre: "Children's",
        page: "Unknown",
        cover: "images/100-200/119.png"
    },
    {
        id: 120,
        firstName: "Ford",
        lastName: "Maddox Ford",
        title: "The Good Soldier",
        genre: "Domestic fiction",
        page: 192,
        cover: "images/100-200/120.jpg"
    },
    {
        id: 121,
        firstName: "José",
        lastName: "Saramago",
        title: "The Gospel According to Jesus Christ",
        genre: "Gospel",
        page: 400,
        cover: "images/100-200/121.jpg"
    },
    {
        id: 122,
        firstName: "Charles",
        lastName: "Webb",
        title: "The Graduate",
        genre: "Drama",
        page: 224,
        cover: "images/100-200/122.jpg"
    },
    {
        id: 123,
        firstName: "John",
        lastName: "Steinbeck",
        title: "The Grapes of Wrath",
        genre: "Fiction",
        page: 535,
        cover: "images/100-200/123.jpg"
    },
    {
        id: 124,
        firstName: "Charles",
        lastName: "Dickens",
        title: "Great Expectations",
        genre: "Novel",
        page: 544,
        cover: "images/100-200/124.jpg"
    },
    {
        id: 125,
        firstName: "F. Scott",
        lastName: "Fitzgerald",
        title: "The Great Gatsby",
        genre: "Tragedy",
        page: 240,
        cover: "images/100-200/125.jpg"
    },
    {
        id: 126,
        firstName: "Mary",
        lastName: "McCarthy",
        title: "The Group",
        genre: "Novel",
        page: 496,
        cover: "images/100-200/126.jpg"
    },
    {
        id: 127,
        firstName: "R.H.",
        lastName: "Blyth",
        title: "Haiku, Volume 2: Spring",
        genre: "Poetry",
        page: 382,
        cover: "images/100-200/127.jpeg"
    },
    {
        id: 128,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Hamlet",
        genre: "Shakespearean",
        page: 64,
        cover: "images/100-200/128.jpg"
    },
    {
        id: 129,
        firstName: "J.K.",
        lastName: "Rowling",
        title: "Harry Potter and the Goblet of Fire",
        genre: "Children's",
        page: 636,
        cover: "images/100-200/129.jpg"
    },
    {
        id: 130,
        firstName: "J.K.",
        lastName: "Rowling",
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Children's",
        page: 309,
        cover: "images/100-200/130.jpg"
    },
    {
        id: 131,
        firstName: "Dave",
        lastName: "Eggers",
        title: "A Heartbreaking Work of Staggering Genius",
        genre: "Memoir",
        page: 375,
        cover: "images/100-200/131.jpg"
    },
    {
        id: 132,
        firstName: "Joseph",
        lastName: "Conrad",
        title: "Heart of Darkness",
        genre: "Fiction",
        page: 98,
        cover: "images/100-200/132.jpg"
    },
    {
        id: 133,
        firstName: "Hunter S.",
        lastName: "Thompson",
        title: "Hell's Angels: The Strange and Terrible Saga of the Outlaw Motorcycle Gangs",
        genre: "Gonzo journalism",
        page: 278,
        cover: "images/100-200/133.jpg"
    },
    {
        id: 134,
        firstName: "Vincent",
        lastName: "Bugliosi",
        title: "Helter Skelter: The True Story of the Manson Murders",
        genre: "True crime",
        page: 689,
        cover: "images/100-200/134.jpg"
    },
    {
        id: 135,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Henry IV, part I",
        genre: "Shakespearean",
        page: 398,
        cover: "images/100-200/135.jpg"
    },
    {
        id: 136,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Henry IV, part II",
        genre: "Shakespearean",
        page: 320,
        cover: "images/100-200/136.jpg"
    },
    {
        id: 137,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Henry V",
        genre: "History play",
        page: 294,
        cover: "images/100-200/137.jpg"
    },
    {
        id: 138,
        firstName: "William",
        lastName: "Shakespeare",
        title: "Henry VI",
        genre: "History play",
        page: 123,
        cover: "images/100-200/138.jpg"
    },
    {
        id: 139,
        firstName: "Greg",
        lastName: "Behrendt",
        title: "He's Just Not That Into You",
        genre: "Non-fiction",
        page: 208,
        cover: "images/100-200/139.jpg"
    },
    {
        id: 140,
        firstName: "Nick",
        lastName: "Hornby",
        title: "High Fidelity",
        genre: "Novel",
        page: 336,
        cover: "images/100-200/140.jpeg"
    },
    {
        id: 141,
        firstName: "Edward",
        lastName: "Gibbon",
        title: "The History of the Decline and Fall of the Roman Empire",
        genre: "History",
        page: 795,
        cover: "images/100-200/141.jpeg"
    },
    {
        id: 142,
        firstName: "David",
        lastName: "Sedaris",
        title: "Holidays on Ice: Stories",
        genre: "Short stories",
        page: 176,
        cover: "images/100-200/142.jpg"
    },
    {
        id: 143,
        firstName: "Lawrence",
        lastName: "Lipton",
        title: "The Holy Barbarians",
        genre: "Biography",
        page: 330,
        cover: "images/100-200/143.jpg"
    },
    {
        id: 144,
        firstName: "Dr. Seuss",
        lastName: "",
        title: "Horton Hears a Who!",
        genre: "Children's",
        page: 72,
        cover: "images/100-200/144.jpg"
    },
    {
        id: 145,
        firstName: "Andre",
        lastName: "Dubus III",
        title: "House of Sand and Fog",
        genre: "Novel",
        page: 365,
        cover: "https://m.media-amazon.com/images/I/51JB9NCDFRL._SL160_.jpg"
    },
    {
        id: 146,
        firstName: "Isabel",
        lastName: "Allende",
        title: "The House of the Spirits",
        genre: "Novel",
        page: 448,
        cover: "https://images-na.ssl-images-amazon.com/images/I/51fxADjREWL.jpg"
    },
    {
        id: 147,
        firstName: "Julie",
        lastName: "Orringer",
        title: "How to Breathe Underwater",
        genre: "Fiction",
        page: 226,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71HbJJA7XdL.jpg"
    },
    {
        id: 148,
        firstName: "Dr. Seuss",
        lastName: "",
        title: "How the Grinch Stole Christmas",
        genre: "Children's",
        page: 64,
        cover: "https://images-na.ssl-images-amazon.com/images/I/91Q9eneR7BL.jpg"
    },
    {
        id: 149,
        firstName: "Allen",
        lastName: "Ginsberg",
        title: "Howl and Other Poems",
        genre: "Poetry",
        page: 57,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71B1NiNdEHL.jpg"
    },
    {
        id: 150,
        firstName: "M.J.",
        lastName: "Hyland",
        title: "How the Light Gets In",
        genre: "Fiction",
        page: 432,
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348460321l/251052.jpg"
    },
    // {
    //     id: 151,
    //     firstName: "Victor",
    //     lastName: "Hugo",
    //     title: "The Hunchback of Notre Dame",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 152,
    //     firstName: "Nora",
    //     lastName: "Ephron",
    //     title: "I Feel Bad About My Neck",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 153,
    //     firstName: "Homer",
    //     lastName: "",
    //     title: "The Iliad",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 154,
    //     firstName: "Pamela",
    //     lastName: "des Barres",
    //     title: "I'm With the Band",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 155,
    //     firstName: "Truman",
    //     lastName: "Capote",
    //     title: "In Cold Blood",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 156,
    //     firstName: "George",
    //     lastName: "Sand",
    //     title: "Indiana",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 157,
    //     firstName: "Dante",
    //     lastName: "Alighieri",
    //     title: "The Inferno",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 158,
    //     firstName: "Jerome",
    //     lastName: "Lawrence",
    //     title: "Inherit the Wind",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 159,
    //     firstName: "William J.",
    //     lastName: "Kennedy",
    //     title: "Ironweed",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 160,
    //     firstName: "Hillary",
    //     lastName: "Clinton",
    //     title: "It Takes a Village",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 161,
    //     firstName: "Charlotte",
    //     lastName: "Bronte",
    //     title: "Jane Eyre",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 162,
    //     firstName: "Amy",
    //     lastName: "Tan",
    //     title: "The Joy Luck Club",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 163,
    //     firstName: "William",
    //     lastName: "Shakespeare",
    //     title: "Julius Caesar",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 164,
    //     firstName: "Upton",
    //     lastName: "Sinclair",
    //     title: "The Jungle",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 165,
    //     firstName: "Michael",
    //     lastName: "Crichton",
    //     title: "Jurassic Park",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 166,
    //     firstName: "Tony",
    //     lastName: "Vigorito",
    //     title: "Just a Couple of Days",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 167,
    //     firstName: "Robert",
    //     lastName: "Alexander",
    //     title: "The Kitchen Boy: A Novel of the Last Tsar",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 168,
    //     firstName: "Anthony",
    //     lastName: "Bourdain",
    //     title: "Kitchen Confidential: Adventures in the Culinary Underbelly",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 169,
    //     firstName: "Khaled",
    //     lastName: "Hosseini",
    //     title: "The Kite Runner",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 170,
    //     firstName: "D.H.",
    //     lastName: "Lawrence",
    //     title: "Lady Chatterleys' Lover",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 171,
    //     firstName: "Gore",
    //     lastName: "Vidal",
    //     title: "The Last Empire: Essays 1992-2000",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 172,
    //     firstName: "William",
    //     lastName: "Manchester",
    //     title: "The Last Lion: Winston Spencer Churchill, Volume I: Visions of Glory, 1874-1932",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 173,
    //     firstName: "William",
    //     lastName: "Manchester",
    //     title: "The Last Lion: Winston Spencer Churchill, Volume II: Alone, 1932-1940",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    //
    // {
    //     id: 174,
    //     firstName: "William",
    //     lastName: "Manchester",
    //     title: "The Last Lion: Winston Spencer Churchill, Volume III: Defender of the Realm, 1940-1965",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 175,
    //     firstName: "Walt",
    //     lastName: "Whitman",
    //     title: "Leaves of Grass",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },
    // {
    //     id: 176,
    //     firstName: "Steven",
    //     lastName: "Pressfield",
    //     title: "The Legend of Bagger Vance",
    //     genre: "",
    //     page: 2,
    //     cover: ""
    // },


]
export default list;