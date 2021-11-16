function check(){
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/F4-1u9xNt/model.json",modelready)
}
function modelready(){
    classifier.classify(getresult)
}
function getresult(){
    console.log ("getresult")
}