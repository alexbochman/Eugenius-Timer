taskList = [];
taskCompleted = [];

//total number of subFields created, including deleted ones
subFieldNum = 0;

// window.onload = function init(){
//     if(localStorage["taskListSize"] != null && localStorage["taskListSize"] > 0){
//         console.log(localStorage["taskListSize"]);
//         recreateList();
//     }
// }


function addSubField(id){
    var test = document.getElementById(id);
    var newEl = document.createElement("div");
    newEl.setAttribute("class", "col-xs-12");
    
    newEl.innerHTML =   "<div class='col-xs-6'>" +
                            "<label for='subName" + subFieldNum + "'>Sub Task Name</label>" +
                            "<input type='text' id='subName" + subFieldNum + "'>" + 
                        "</div>" +

                        "<div class='col-xs-6'>" +
                            "<label for='subDesc" + subFieldNum + "'>Sub Task Description</label>" +
                            "<input type='text' id='subDesc"+ subFieldNum + "'>" +
                        "</div>" +

                        "<button onclick='removeSubField(this)' class='col-xs-12' style='margin-bottom: 10px'>remove</button>";
                        
    
    newEl.style.border = "1px solid #ccc";
    newEl.style.borderRadius = "4px";
    //newEl.style.marginBottom
    test.append(newEl);
    subFieldNum++;
}

function removeSubField(elementToRemove){
    var parent = elementToRemove.parentElement;
    parent.remove();
}

//this would be what is run on clicking submit, I have no idea how submit is created though.
//for right now, all I can do is include work with the implementation that we have.
function completeTaskCreation(submit){
    console.log(submit);
    // var name = document.getElementById("taskName");
    // var desc = document.getElementById("taskDescription");
    // var subTasks = [];
    // var subOpts = document.getElementById("subOptList").children;
    // for(var i = 0; i < subOpts.length; i++){
    //     subTasks.push(subOpts[i].children[0].value);
    // }
    // var object = {name:name.value, desc:desc.value, subs:subTasks};
    // taskList.push(object);
    
    // localStorage.setItem("taskList", JSON.stringify(taskList));
    // localStorage.setItem("taskListSize", taskList.length);
    // var tasks = document.getElementById("newTasks");
    // var newEl = document.createElement("div");
    
    // var subTaskView = "";
    // for(var i = 0; i < subOpts.length; i++){
    //     subTaskView += "<br>" + subOpts[i].children[0].value;
    // }
    
    // if(subOpts.length > 0){
    //     newEl.innerHTML = "<p>name: " + name.value + "<br>description: " + desc.value + "<br>Subtasks:" + subTaskView;
    //     newEl.innerHTML += "<br><button onclick='deleteTask(this)'>Delete Task</button><br>";
    // } else {
    //     newEl.innerHTML = "<p>name: " + name.value + "<br>description: " + desc.value;
    //     newEl.innerHTML += "<br><button onclick='deleteTask(this)'>Delete Task</button><br>";
    // }
    
    
    
    // tasks.append(newEl);
    
    // name.value = "";
    // desc.value = "";
    // document.getElementById("subOptList").innerHTML = "";
}

function recreateList(){
    var tasks = document.getElementById("newTasks");
    taskList = JSON.parse(localStorage["taskList"]);
    for(var i = 0; i < taskList.length; i++){
        newEl = document.createElement("div");
        
        var subTaskView = "<br>Subtasks:";
        for(var j = 0; j < taskList[i].subs.length; j++){
            subTaskView += "<br>" + taskList[i].subs[j];
        }
        if(taskList[i].subs.length > 0){
            newEl.innerHTML = "name: " + taskList[i].name + "<br>description: " + taskList[i].desc + subTaskView;
            newEl.innerHTML += "<br><button onclick='deleteTask(this)'>Delete Task</button><br>";
        } else {
            newEl.innerHTML = "name: " + taskList[i].name + "<br>description: " + taskList[i].desc;
            newEl.innerHTML += "<br><button onclick='deleteTask(this)'>Delete Task</button><br>";
        }
        
        tasks.append(newEl);
    }
}

function deleteTask(taskToDelete){
    var list = document.getElementById("newTasks");
    var parent = taskToDelete.parentElement;
    var newList = [];
    var notFound = true;
    var i;
    for(i = 0; i < taskList.length; i++){
        if(list.children[i] === parent){
            notFound = false;
            parent.remove();
        } else {
            newList.push(taskList[i]);
        }
    }
    if(notFound){
        console.log("the task selected wasn't found");
    }
    localStorage.setItem("taskList", JSON.stringify(newList));
    localStorage.setItem("taskListSize", newList.length);
}

