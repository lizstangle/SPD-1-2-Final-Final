
Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey
    .StylesManager
    .applyTheme("bootstrapmaterial");

var json = {
    pages: [
        {
            questions: [
                {
                    type: "matrix",
                    name: "Quality",
                    title: "Please answer YES or NO to the following questions",
                    columns: [
                        {
                            value: 1,
                            text: "YES"
                        }, {
                            value: 2,
                            text: "NO"
                        }
                    ],
                    rows: [
                        {
                            value: "safe",
                            text: "Are you safe?"
                        }, {
                            value: "stable home",
                            text: "Do you need a stable home?"
                        }, {
                            value: "Medical Care",
                            text: "Do you need medical care?"
                        }, {
                            value: "Job Help",
                            text: "Do you need support finding a job?"
                        }, {
                            value: "Education Guidance",
                            text: "Do you want education guidance?"
                        }, {
                            value: "Do you use drugs",
                            text: "Do you use drugs?"
                        }, {
                            value: "Recovery Support",
                            text: "Do you need recovery support?"
                        }, {
                            value: "Counceling Need",
                            text: "Do you need counseling"
                        }, {
                            value: "Mental Health Issues",
                            text: "Do you struggle with mental health issues?"
                        }, {
                            value: "Any Addictions",
                            text: "Do you struggle with addiction?"
                        }
                    ]
                }
            ]
        }, {
            
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});