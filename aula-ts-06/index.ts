interface Platform {
    id: number;
    name: string;
}

interface Game {
    id: number;
    platform: Platform;
    title: string;
    publisher: string;
    launch?: string | Date; // A propriedade launch pode ser uma string ou um objeto Date opcional.
}

const game: Game = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // Pode ser um Date. É opcional (para jogos ainda não lançados).
};

const games: Game[] = [game];

function play(game: Game) {
  
    console.log(game);
}
