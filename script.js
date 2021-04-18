$(document).ready(function() {

    //list of quotes taken from  nemo
    var quotes = ["Leaders must be close enough to relate to others, but far enough ahead to motivate them. —John C. Maxwell", "A person who never made a mistake never tried anything new. —Albert Einstein", "Being responsible sometimes means pissing people off. —Colin Powell", "Change your thoughts and you change your world. —Norman Vincent Peale", "Nothing is really work unless you would rather be doing something else.” –J.M. Barrie", "I will allow life’s changes to make me better, not bitter. ~Unknown", "I will not let anyone walk through my mind with their dirty feet. ~Gandhi", "You must be the change you wish to see in this world. ~Gandhi", "Grit is that ‘extra something’ that separates the most successful people from the rest. It’s the passion, perseverance, and stamina that we must channel in order to stick with our dreams until they become a reality.”", "The miracle is not that we do this work, but that we are happy to do it.” – Mother Teresa", "“The big secret in life is that there is no secret. Whatever your goal, you can get there if you’re willing to work.” – Oprah Winfrey", "“At any given moment you have the power to say: this is not how the story is going to end.” – Unknown", "Nothing is impossible, the word itself says “I’m possible”! — Audrey Hepburn", "Whether you think you can or you think you can’t, you’re right. — Henry Ford", "None of us is as smart as all of us. — Ken Blanchard", "Too many of us are not living our dreams because we are living our fears. — Les Brown"

    ];
    /* get a random quote from above list */
    function getQuote() {
        return Math.floor(Math.random() * quotes.length);
    }

    function placeQuote() {
        $('#quote').text(quotes[getQuote()]);
        $("#twitter_share").click(function() {
            var url = document.getElementById('quote').innerHTML;
            window.open(url, 'twitter');

        });
    }
    window.onload = placeQuote(); /* call doStuff on window load */
    $('#quoteGen').click(placeQuote); /* call doStuff on #quoteGen click */
});