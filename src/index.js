const json = {
  answers: {
    aboutVisit: {
      questions: {
        "1": {
          comment: "",
          value: "gg",
          isNaChecked: false
        },
        "2": {
          comment: "",
          value: "gg",
          isNaChecked: false
        },
        "3": {
          comment: "",
          value: "gg",
          isNaChecked: false
        },
        "4": {
          comment: "",
          value: "gd",
          isNaChecked: false
        },
        "5": {
          comment: "",
          value: "Renter",
          isNaChecked: false
        },
        "7": {
          comment: "",
          value: "19/12/20",
          isNaChecked: false
        },
        "8": {
          comment: "",
          value: "Light rain (Drizzle)",
          isNaChecked: false
        },
        "9": {
          comment: "",
          value: "no",
          isNaChecked: false
        },
        "10": {
          comment: "",
          value: "no",
          isNaChecked: false
        }
      }
    },
    generalities: {
      questions: {
        "11": {
          comment: "",
          value: "Appartment",
          isNaChecked: false
        },
        "13": {
          comment: "",
          value: 33,
          isNaChecked: false
        },
        "14": {
          comment: "",
          value: 22,
          isNaChecked: false
        },
        "15": {
          comment: "",
          value: 1,
          isNaChecked: false
        },
        "16": {
          comment: "",
          value: "yes",
          isNaChecked: false
        },
        "17": {
          comment: "",
          value: "yes",
          isNaChecked: false
        },
        "18": {
          comment: "",
          value: 1954,
          isNaChecked: false
        },
        "19": {
          comment: "",
          value: 1444,
          isNaChecked: false
        },
        "20": {
          comment: "",
          value: "Water insulation",
          isNaChecked: false
        },
        "21": {
          comment: "",
          value: "Attic fit-out",
          isNaChecked: false
        },
        "22": {
          comment: "",
          value: "Modification of Partiition walls",
          isNaChecked: false
        },
        "23": {
          comment: "",
          value: "no",
          isNaChecked: false
        },
        "24": {
          comment: "",
          value: ["Gas", "Water"],
          isNaChecked: false
        }
      }
    },
    area: {
      questions: {
        "25": {
          comment: "",
          value: "no",
          isNaChecked: false
        },
        "26": {
          comment: "",
          value: "no",
          isNaChecked: false
        },
        "27": {
          comment: "",
          costUrgencyMaxValue: "",
          costUrgencyMinValue: "",
          isCouldNotChecked: false,
          urgencyIndication: "Very urgent",
          value: "3",
          isNaChecked: false
        },
        "28": {
          comment: "",
          costUrgencyMaxValue: "",
          costUrgencyMinValue: "",
          isCouldNotChecked: false,
          urgencyIndication: "Very urgent",
          value: "3",
          isNaChecked: false
        }
      }
    }
  }
};

const answers = json.answers;
console.log(answers, "answers");

let majorConcernsSection = { sections: [], name: "Major concerns" };
//console.log(answers);
const keys = Object.keys(answers);

for (let section in answers) {
  //console.log("section loop", section);
}

if(answers){
  for (let section in answers) {
    for (let question in answers[section].questions) {
      console.log("question loop", question);
      if (Boolean(answers[section].questions[question].urgencyIndication)) {
        console.log(answers[section].questions[question].urgencyIndication)
        if(!majorConcernsSection.sections.find(el => el.sectionName === section)){
          majorConcernsSection.sections.push({
            questions: [answers[section].questions[question]],
            sectionName: section,
          });
        } else {
          const index  = majorConcernsSection.sections.findIndex(el => el.sectionName === section)
          majorConcernsSection.sections[index].questions.push(answers[section].questions[question]);
        }
        //console.log(Object.keys(section))
        //console.log("section", section);
        /*        if(!majorConcernsSection.sections.find(item => item.sectionName === section)) {
           majorConcernsSection.sections.push({
             questions: [question],
             sectionName: section,
           });
         } else {
           majorConcernsSection.sections[section].questions.push(question)
         } */
      }
    }
  }
}


console.log(majorConcernsSection);
