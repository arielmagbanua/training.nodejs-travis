// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyD7npIh5V04loM_t7pemXGZOTCGkWQb7dQ",
    authDomain: "machine-problems.firebaseapp.com",
    databaseURL: "https://machine-problems.firebaseio.com",
    projectId: "machine-problems",
    storageBucket: "machine-problems.appspot.com",
    messagingSenderId: "598061010448",
    appId: "1:598061010448:web:691ac551daed66bc978495"
});

const db = firebase.firestore();

const generateQuoteCard = (quote) => {
    const imageUrl = quote.image_url ? quote.image_url : 'https://www.incimages.com/uploaded_files/image/970x450/getty_883231284_200013331818843182490_335833.jpg';

    const quoteHtml = `
        <div class="quote w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/5 mb-4 px-2">
            <div class="max-w-sm overflow-hidden shadow-lg">
                <img class="w-full"
                    src="${imageUrl}"
                    alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <p class="text-gray-700 text-base">
                       ${quote.quote}
                    </p>
                    <div class="font-bold text-xl mb-2">${quote.author}</div>
                </div>
            </div>
        </div>
    `.trim();

    let template = document.createElement('template');
    template.innerHTML = quoteHtml;
    return template.content.firstChild;
}

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let quotesContainer = document.querySelector('.quotes-container');
        
        db.collection('quotes').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`);
                const quote = doc.data();
                console.log(quote);
                quotesContainer.appendChild(generateQuoteCard(quote));
            });
        });
    }, false);
})();