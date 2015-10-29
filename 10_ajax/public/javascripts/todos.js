
var TaskController = function() {
  function setAjaxHandler() {
    $( document ).ajaxStart(function() {
      $("#main").addClass("loading");
    }).ajaxStop(function() {
      $("#main").removeClass("loading");
    });
  }

  var Constructor = function () {
    setAjaxHandler();
    this.taskTemplate = _.template($("#task-template").html());
    this.load();
    $("#post-task").click(function() {
      this.postTask();
    }.bind(this));
  };

  Constructor.prototype.load = function() {
    var self = this;
    $.getJSON("/tasks", function(data) {
      self.tasks = data;
      self.render();
    });
  };

  Constructor.prototype.render = function() {
    var self = this;
    $("#main").toggleClass("no-task", (this.tasks.length <= 0));
    var html = _.map(this.tasks, function(task) {
      return self.taskTemplate(task);
    });
    $("ul.tasks").html(html.join("\n"));
  };

  Constructor.prototype.postTask = function() {
    var self = this;
    $.post("/tasks", $("#form-task").serialize(), function(data) {
      console.log(data);
      self.tasks.push(data);
      self.render();
    });
  };


  return Constructor;
} ();
