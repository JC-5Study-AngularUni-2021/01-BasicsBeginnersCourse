export const NOTES: any = [

    {
        id: 1,
        title: "Angular CLI",
        description: "",
        url: 'https://github.com/angular/angular-cli',
        urlTitle: "Angular CLI",
        subNotes: []
    },{
        id: 2,
        title: "Anugular Uni GITHub",
        description: "",
        url: "https://github.com/angular-university/angular-course",
        urlTitle: "Anugular Uni GITHub",
        subNotes: []
    },{
        id: 3,
        title: "Generate a Component",
        description: "",
        url: "https://angular.io/cli/generate",
        urlTitle: "Generate a Component",
        subNotes: ["ng g c --skipTests=true componentName"]
    },{
        id: 3.1,
        title: "Generate a service",
        description: "Unsure need to improve these notes",
        url: "https://angular.io/tutorial/toh-pt4",
        urlTitle: "Generate a service",
        subNotes: ["ng g s --skipTests=true serviceName"]
    },{
        id: 4,
        title: "Create a new router",
        description: "",
        url: "https://angular.io/guide/router",
        urlTitle: "Create a new router",
        subNotes: ["ng g m app-routing --flat --module=app --spec=false",
    "Then just follow the instructions in the link above very clear.",
"In the Router Module '{ path: 'first-component', component: FirstComponent }'",
"In the HTML '<a routerLink='/first-component' routerLinkActive='active'>First Component</a>'"]
    },{
        id: 5,
        title: "Text interpolation",
        description: "",
        url: "https://angular.io/guide/interpolation",
        urlTitle: "Text interpolation",
        subNotes: ["'&#123; &#123; &#125; &#125;' this is where you put a result/text from the ts file into the 'view' (HTML template)"]
    },{
        id: 6,
        title: "Template Reference",
        description: "This is where you give a DOM element a label like using an ID but instead put #ReferenceName",
        url: "https://angular.io/guide/interpolation",
        urlTitle: "template reference",
        subNotes: []
    },{
        id: 7,
        title: "Template Statements",
        description: "",
        url: "https://angular.io/guide/template-statements",
        urlTitle: "Template statements",
        subNotes: []
    },{
        id: 8,
        title: "Property Binding",
        description: "",
        url: "https://angular.io/guide/property-binding",
        urlTitle: "Property binding",
        subNotes: []
    },{
        id: 9,
        title: "Decoractor",
        description: "",
        url: "https://ultimatecourses.com/blog/angular-decorators",
        urlTitle: "Decoractor",
        subNotes: []
    },{
        id: 10,
        title: "Model-Interface",
        description: "",
        url: "#",
        urlTitle: "Model-Interface",
        subNotes: ["Model - These should be in used in conjunction with JSON to declare the structure."]
    },{
        id: 11,
        title: "@Output - Custom Events and Event Emitters",
        description: "The issue here is if you use (click) all over your app it will get trigger by 'bubbling up' rather than the actual click of the particular button.  So custom events help provide that one to one relationship",
        url: "https://angular.io/api/core/EventEmitter",
        urlTitle: "Custom Events and Event Emitters",
        subNotes: []
    },{
        id: 12,
        title: "ngFor",
        description: "A structural directive that renders a template for each item in a collection. The directive is placed on an element, which becomes the parent of the cloned templates.",
        url: "https://angular.io/api/common/NgForOf",
        urlTitle: "ngFor",
        subNotes: []
    },{
        id: 13,
        title: "ngIF",
        description: "This will effect the entire component",
        url: "https://angular.io/api/common/NgIf",
        urlTitle: "ngIF",
        subNotes: []
    },{
        id: 14,
        title: "ng-template",
        description: "Not really sure what these do different to normal dom elements",
        url: "https://angular.io/guide/structural-directives",
        urlTitle: "ng-template",
        subNotes: []
    }
    ,{
        id: 15,
        title: "NgClass",
        description: "this is to be used went you want the class to be applied when certain criteria it met.",
        url: "https://angular.io/api/common/NgClass",
        urlTitle: "NgClass",
        subNotes: ["This is all normally put into a method in the component class to determine if the class should be applied.","You can apply the style in 3 ways:","Plain string i.e. 'newClass'","Array of strings i.e. ['newclass', 'secondNewClass']","object set to true or false i.e. {'clssOne': true, 'classTwo' : false}."]
    },{
        id: 16,
        title: "ngStyle",
        description: "would be used for the same reason as ngClass",
        url: "https://angular.io/api/common/NgStyle",
        urlTitle: "ngStyle",
        subNotes: []
    },{
        id: 17,
        title: "NgSwitch",
        description: "Very similar to ngIf but it can have a default return if not meeting other criteria",
        url: "https://angular.io/api/common/NgSwitch",
        urlTitle: "NgSwitch",
        subNotes: []
    },{
        id: 18,
        title: "Pipes",
        description: "Pipes are used to format data presented, can also be used for debugging.",
        url: "https://angular.io/guide/pipes",
        urlTitle: "Angular Pipes",
        subNotes: ["Some Examples:","{{ dateExample | date: 'd/MMM/YYYY'}}","{{ titleExample | titlecase}}","{{ priceExample | number}}","Debugging: look into the 'JSON' & 'keyvalue' pipes"]
    }
    ,{
        id: 19,
        title: "",
        description: "",
        url: "",
        urlTitle: "",
        subNotes: []
    }
    ,{
        id: 20,
        title: "",
        description: "",
        url: "",
        urlTitle: "",
        subNotes: []
    }
];