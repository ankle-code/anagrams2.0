const anagrams5Btn = document.getElementById('anagrams5Btn');
const anagrams5Container = document.getElementById('anagrams5Container');

const groupOfAllAnagrams = {};
const alphabetize = (word) => word.toLowerCase().split("").sort().join("").trim();

const getSetOfFiveAnagrams = () => {
    palavras.forEach(val => {
        let getAnagram = alphabetize(val);
        if(groupOfAllAnagrams[`${getAnagram}`] === undefined){
            groupOfAllAnagrams[`${getAnagram}`] = [];
        }
        groupOfAllAnagrams[`${getAnagram}`].push(val);
    })
};

getSetOfFiveAnagrams();

anagrams5Btn.addEventListener('click',() =>{
    let inicio = performance.now();
    for(let anagramProp in groupOfAllAnagrams){
        const position = groupOfAllAnagrams[`${anagramProp}`];
        if(position.length >= 5){
            anagrams5Container.innerHTML += `<p>${position}</p>`;
        };
    };
    console.log('Time', (performance.now() - inicio)/ 1000)
});