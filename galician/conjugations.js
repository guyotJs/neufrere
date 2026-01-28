let pre, pro, pres;
function setConjugation(number){
  pre = cons[number].pre;
  pro = cons[number].pro;
  pres = cons[number].pres;
}
let cons = [
  // Present tense
  {
    pre:"Esquive aquí...", 
    pro:[
      ["I","Eu"],
      ["You","Ti"],
      ["He / She","El / Ela"],
      ["We","Nós"],
      ["You pl.","Vós"],
      ["They / fem.","Eles / Elas"],
    ],
    pres:[
      [["to speak", "Falar"],["falo","falas","fala","falamos","falades","falan"]],   
      [["to eat", "Comer"],["como","comes","come","comemos","comedes","comen"]],   
      [["to live", "Vivir"],["vivo","vives","vive","vivimos","vivides","viven"]],
      [["to be","Estar"],["estou","estás","está","estamos","estades","están"]]
    ]
  }
];