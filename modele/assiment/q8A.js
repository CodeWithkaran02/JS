function spoon(phrase) {
    phrase = phrase.split(" ");
    let word1Initial = phrase[0][0];
    let word2Initial = phrase[1][0];

    return (
        word2Initial + phrase[0].slice(1) + " " + word1Initial + phrase[1].slice(1)
    );
}