
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

function updateCoral() {
    var sb = document.getElementById('coral');
    switch (sb.selectedIndex) {
        case 0:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/4\" - 2\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/zoa.jpg";
            break;
        case 1:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/4\" - 3\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Low to Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating fish/coral food";
            document.getElementById('coralImage').src = "./img/mushroom.jpg";
            break;
        case 2:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 10\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Phytoplankton";
            document.getElementById('coralImage').src = "./img/toadstool.jpg";
            break;
        case 3:
            document.getElementById('sizeInfo').innerHTML = "Size: 2\" - 7\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating fish/coral food, Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/kenyatree.jpg";
            break;
        case 4:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 4\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Low to Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/xenia.jpg";
            break;
        case 5:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 1\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/gsp.jpg";
            break;
        case 6:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 3\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating coral food";
            document.getElementById('coralImage').src = "./img/frogspawn.jpg";
            break;
        case 7:
            document.getElementById('sizeInfo').innerHTML = "Size: 2\" - 8\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Low to Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating fish/coral food";
            document.getElementById('coralImage').src = "./img/bubble.jpg";
            break;
        case 8:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 3\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/candycane.jpg";
            break;
        case 9:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 3\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating coral food";
            document.getElementById('coralImage').src = "./img/blasto.jpg";
            break;
        case 10:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 7\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton";
            document.getElementById('coralImage').src = "./img/brain.jpg";
            break;
        case 11:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 2\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton";
            document.getElementById('coralImage').src = "./img/ricordia.jpg";
            break;
        case 12:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 2\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating fish/coral food";
            document.getElementById('coralImage').src = "./img/duncans.jpg";
            break;
        case 13:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 8\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Middle to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating coral food, Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/birdnest.jpg";
            break;
		case 14:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 12\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Middle to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating coral food";
            document.getElementById('coralImage').src = "./img/montipora.jpg";
            break;
    }
}
