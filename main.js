menu_list_array = [ "Veg Margherita Pizza",                  
                    "Chicken tandoori pizza",
                    "Veg supreme pizza",
                    "Paneer tikka pizza",
                    "Deluxe veggie pizza",
                    "Veg Extra vaganza pizza"]; //Add more Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value
    menu_list_array.push()(item);
}
