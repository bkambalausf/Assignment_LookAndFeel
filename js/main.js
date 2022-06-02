
function updateFish() {
    var sb = document.getElementById('fish');
    switch (sb.selectedIndex) {
        case 0:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Very hardy, easy to keep";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Amphiprioninae";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 20 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Omnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/ocellaris-clownfish.jpg";
            break;
        case 1:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Very hardy, comes in lots of colors";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Chrysiptera";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Omnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/yellowtail-damselfish.jpg";
            break;
        case 2:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, hardy, colorful, like to school";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Chromis Viridis";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Omnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/green-chromis.jpg";
            break;
        case 3:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Peaceful, hardy, inexpensive";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Ecsenius bicolor";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Herbivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/bicolor-blenny-1.jpg";
            break;
        case 4:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, hardy, comes in many colors";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Gobiodon";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 10 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet:  Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament:  Peaceful";
            document.getElementById('fishImage').src = "./img/yellow-clown-goby-1.jpg";
            break;
        case 5:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, hardy, colorful";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Cryptocentrus cinctus";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/yellow-watchman-goby-1.jpg";
            break;
        case 6:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, doesn't need a big tank";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Nemateleotris Magnifica";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 20 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/firefish-goby-1.jpg";
            break;
        case 7:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, doesn't need a big tank";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Cirrhitidae";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Aggressive";
            document.getElementById('fishImage').src = "./img/hawkfish-1.jpg";
            break;
        case 8:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, cleans sand";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Valenciennea puellaris";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/diamond-goby-2.jpg";
            break;
        case 9:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, colorful";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Pseudocheilinus hexataenia";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 55 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/six-line-wrasse-2.jpg";
            break;
        case 10:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, hardy";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Gramma loreto";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/royal-gramma-1.jpg";
            break;
        case 11:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, colorful";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Centropyge bispinosa";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 70 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Omnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/coral-beauty-angelfish-2.jpg";
            break;
        case 12:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, comes in different colors";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Pseudochromidae";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/bicolor-dottyback-2.jpg";
            break;
        case 13:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Small, hardy, colorful";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Serranus tortugarum";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/chalk-bass-1.jpg";
            break;
    }
}
