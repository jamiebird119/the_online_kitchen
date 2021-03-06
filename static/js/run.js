// Collapsible nav bar initialiser
$(document).ready(function () {
    $(".sidenav").sidenav();
});

// Select Initialiser
$(document).ready(function () {
    $("select").formSelect();
});

// Function to add ingredient line to add recipe/edit recipe form 
function add_ingredients() {
    var el = $(".additional_ingredients");
    el.append(`
    <div class="row added">
    <div class="input-field col s4 m5 ingredients">
				<input
          id="ingredient"
          name="ingredient"
          type="text"
          class="validate added_ingredient"
        />
    </div>
    <div class="input-field col s4 m5 ingredients">    
        <input
          id="ingredient_quantity"
          type="text"
          class="validate added_quantity"
          name="ingredient_quantity"
        />
    </div>
    <div class="col s1">
	<a class="btn-floating btn-small waves-effect waves-light red"
				onclick="remove_ingredients($(this))">
                <i class="material-icons">remove</i>
                </a></div></div>
                `);
}

// Function to remove selected ingredient line from add recipe/edit recipe form
function remove_ingredients(el) {
    var element = el.parent("div").parent(".added");
    element.remove();
}

// Hover effect on recipe
$("a h5").mouseenter(function () {
    $(this).addClass("underline");
});
$("a h5").mouseleave(function () {
    $(this).removeClass("underline");
});

// Activated modal to ensure user wants to delete recipe. Gives modal button url value of RECIPE_ID of which recipe is to be deleted each time depending on recipe clicked. 
function delete_query(el){
    var recipe = el.id;
    var name = el.name;
    var url = document.getElementById("delete_yes").getAttribute("href").replace("fake_id", recipe);
    modal = document.getElementById("myModal");
    content = document.getElementById("query");
    content.innerHTML += `<span id="added">${name}</span>`;
    button = document.getElementById("delete_yes").setAttribute("href", url);
    modal.style.display = "block";
}

// close modal if user doesnt want to delete
function close_modal(){
    modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.getElementById("added").remove();
}

// opens information modal on addrecipe page
function open_modal(){
    modal = document.getElementById("myModal");
    modal.style.display = "block";

}

// close info modal
function close_info(){
    modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Ajax function for deleting recipe
function delete_recipe(el){
    var element = el;
    url_for = element.getAttribute("href");
    $.ajax({
        url : url_for,
        type : "POST",
        success:function(result){
            window.location.href = result;
        }
    });
}
