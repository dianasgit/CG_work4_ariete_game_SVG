const impacto = document.getElementById("impacto");

//coodenadas base 
const cxFace = 0;
const cyFace = 0;
const faceRadius = 25;

// Cabelo de trás 
hair2.setAttribute("cx", cxFace);
hair2.setAttribute("cy", cyFace -7);

// Face
face.setAttribute("cx", cxFace);
face.setAttribute("cy", cyFace);

// Olhos
eyeL.setAttribute("cx", cxFace - 10);
eyeL.setAttribute("cy", cyFace - 5);
eyeR.setAttribute("cx", cxFace + 10);
eyeR.setAttribute("cy", cyFace - 5);

// Boca e nariz
boca.setAttribute("cx", cxFace);
boca.setAttribute("cy", cyFace + 4);
nariz.setAttribute("cx", cxFace);
nariz.setAttribute("cy", cyFace - 1);
bocaRect.setAttribute("x", cxFace - 7);
bocaRect.setAttribute("y", cyFace - 1);

// Orelhas
earL.setAttribute("cx", cxFace - faceRadius);
earL.setAttribute("cy", cyFace + 5);
earR.setAttribute("cx", cxFace + faceRadius);
earR.setAttribute("cy", cyFace + 5);

// Corpo, pernas e pés
body.setAttribute("x", cxFace - 15);
body.setAttribute("y", cyFace + faceRadius);
pernas.setAttribute("x", cxFace - 15);
pernas.setAttribute("y", cyFace + faceRadius + 15);
pes.setAttribute("x", cxFace - 15);
pes.setAttribute("y", cyFace + faceRadius + 30);

// Mãos
maoL.setAttribute("cx", cxFace - 30);
maoL.setAttribute("cy", cyFace + 20);
maoR.setAttribute("cx", cxFace + 20);
maoR.setAttribute("cy", cyFace + 30);

// Cabelo 
hair.setAttribute("d", `
  M ${cxFace - faceRadius - 5} ${cyFace - 5} 
  A ${faceRadius} ${faceRadius} 0 0 1 ${cxFace + faceRadius + 5} ${cyFace - 5}
  L ${cxFace + 10} ${cyFace - 15}
  L ${cxFace - 10} ${cyFace - 15}
  Z
`);

// Porrete e ponto de impacto
porrete.setAttribute("x", cxFace - 30);
porrete.setAttribute("y", cyFace + 10);
impacto.setAttribute("cx", cxFace + 55);
impacto.setAttribute("cy", cyFace + 19);


