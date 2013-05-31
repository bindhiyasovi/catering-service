$(window).load(function() {
    //Default Action
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content
     
    //On Click Event
    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });
});

function tabSwitch(new_tab, new_content) {  
      
    document.getElementById('content_1').style.display = 'none';  
    document.getElementById('content_2').style.display = 'none';  
    document.getElementById('content_3').style.display = 'none';
    document.getElementById('content_4').style.display = 'none';   
    document.getElementById(new_content).style.display = 'block';     
      
    document.getElementById('tab_1').className = '';  
    document.getElementById('tab_2').className = '';  
    document.getElementById('tab_3').className = '';          
    document.getElementById('tab_4').className = '';
    document.getElementById(new_tab).className = 'active';        
  
}  

function menuSwitch(new_menu, new_content) {  

	document.getElementById('list_1').style.display = 'none';  
    document.getElementById('list_2').style.display = 'none';  
    document.getElementById('list_3').style.display = 'none';
    document.getElementById('list_4').style.display = 'none';   
    document.getElementById('list_5').style.display = 'none';   
    document.getElementById('list_6').style.display = 'none';   
    document.getElementById(new_content).style.display = 'block'; 
    document.getElementById('menu_list').style.display = 'block';  
    
    document.getElementById('menu_1').style.display = 'none';  
    document.getElementById('menu_2').style.display = 'none';  
    document.getElementById('menu_3').style.display = 'none';
    document.getElementById('menu_4').style.display = 'none';   
    document.getElementById('menu_5').style.display = 'none';   
    document.getElementById('menu_6').style.display = 'none';   
}  
