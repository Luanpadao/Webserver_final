var sw = false;
var sw_1 = false;
$(document).ready(function()
{
    // ẩn của sổ control,member
    $("#control").hide();
    $("#member").hide();
    $("#intructor").hide();
    $("#back-to-top").hide();
    $("#mode_m").show();
    $("#mode_a").hide();
    $("#mode_sa").hide();
    mode.placeholder = "MANUAL";
    $(".bt_import").css("background-color", "blue");
    IOField("speedx", "speedx");
    IOField("speedy", "speedy");
    IOField("speedz", "speedz");
    $("#mt_i").hide();
    $("#mt_o").hide();
    ///////////////////////////----------------------------------BUTTON INTRODUCE----------------------///////////////////////////////
    $("#bt_introduce").click(function(){
        $("#introduce").show();
        $("#control").hide();
        $("#tongquan").show();
        $("#mohinh").show();
        $("#member").hide();
        $("#intructor").hide();
        $("#banner").show();
        $("#content").css("background-color", "#fff");
        bt_introduce.classList.add('active');
        bt_control.classList.remove('active');
        bt_member.classList.remove('active');
        bt_intructor.classList.remove('active');
    });

    $("#bt_tongquan").click(function(){
        $("#introduce").show();
        $("#control").hide();
        $("#member").hide();
        $("#intructor").hide();
        $("#banner").show();
        $("#content").css("background-color", "#fff");
        bt_introduce.classList.add('active');
        bt_control.classList.remove('active');
        bt_member.classList.remove('active');
        bt_intructor.classList.remove('active');
    });

    $("#bt_mohinh").click(function(){
        $("#introduce").show();
        $("#control").hide();
        $("#member").hide();
        $("#intructor").hide();
        $("#banner").show();
        $("#content").css("background-color", "#fff");
        bt_introduce.classList.add('active');
        bt_control.classList.remove('active');
        bt_member.classList.remove('active');
        bt_intructor.classList.remove('active');
    });

    ///////////////////////////----------------------------------BUTTON CONTROL----------------------///////////////////////////////
    $("#bt_control").click(function(){
        $("#introduce").hide();
        $("#control").show();
        $("#member").hide();
        $("#intructor").hide();
        $("#content").css("background-color", "#bfffff");
        bt_control.classList.add('active');
        bt_introduce.classList.remove('active');
        bt_member.classList.remove('active');
        bt_intructor.classList.remove('active');
    });

    ///////////////////////////----------------------------------BUTTON MEMBER----------------------///////////////////////////////
    $("#bt_member").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    //sự kiện click member1
    $("#bt_member1").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    $("#bt_member2").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    $("#bt_member3").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    $("#bt_member4").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").show();
        $("#intructor").hide();
        $("#content").css("background-color", "#fff");
        bt_member.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_intructor.classList.remove('active');
    });
    ///////////////////////////----------------------------------BUTTON INTRUCTOR----------------------///////////////////////////////
    $("#bt_intructor").click(function(){
        $("#introduce").hide();
        $("#control").hide();
        $("#member").hide();
        $("#intructor").show();
        $("#content").css("background-color", "#fff");
        bt_intructor.classList.add('active');
        bt_control.classList.remove('active');
        bt_introduce.classList.remove('active');
        bt_member.classList.remove('active');
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>145){
            $("#back-to-top").show();
        }
        else{
            $("#back-to-top").hide();
        }
    });
    $(".dropdown-item").click(function(){
        navbarResponsive.classList.remove('show');
    });
    $("#back-to-top").click(function(){
        $("body,html").animate({scrollTop:0},500);
        return false;
    });
///////////////////////////----------------------------------SW SEMI-AUTO/AUTO----------------------///////////////////////////////
    // $("#switch_mode").change(function(){
    //     sw = !sw;
    //     if (sw == true){
    //         $("#mode_a").show();
    //         $("#mode_sa").hide();
    //         mode.placeholder = "AUTO";
    //         setTag("sw_auto_manual",true);
    //     }
    //     else{
    //         $("#mode_a").hide();
    //         $("#mode_sa").show();
    //         mode.placeholder = "SEMI-AUTO";
    //         setTag("sw_auto_manual",false);
    //     }
    // })
    $("input[name='mode']").click(function(){
        var sw = $(this).val();
        if (sw == 1){
            $("#mode_m").show();
            $("#mode_a").hide();
            $("#mode_sa").hide();
            mode.placeholder = "MANUAL";
            setTag("sw_auto_manual",true);
        }
        else if(sw==2){
            $("#mode_m").hide();
            $("#mode_sa").show();
            $("#mode_a").hide();
            mode.placeholder = "SEMI-AUTO";
            setTag("sw_auto_manual",false);
        }
        else if(sw==3){
            $("#mode_m").hide();
            $("#mode_sa").hide();
            $("#mode_a").show();
            mode.placeholder = "AUTO";
            setTag("sw_auto_manual",false);
        }
    })
///////////////////////////----------------------------------SW IMPORT/EXPORT----------------------///////////////////////////////
    $(".bt_import").click(function()
    {
        $(".bt_import").css("background-color", "blue");
        $(".bt_export").css("background-color", "#6c757d");
        setTag("sw_im_ex",false);
    })
    $(".bt_export").click(function()
    {
        $(".bt_import").css("background-color", "#6c757d");
        $(".bt_export").css("background-color", "blue");
        setTag("sw_im_ex",true);
    })
///////////////////////////----------------------------------NÚT START----------------------///////////////////////////////
    $(".bt_start").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_start",true);
    })
    $(".bt_start").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_start",false);
    })
    $(".bt_start").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_start",false);
    })
///////////////////////////----------------------------------NÚT STOP----------------------///////////////////////////////
    $(".bt_stop").mousedown(function()
    {
        $(this).css("background-color", "red");
        setTag("bt_stop",true);
    })
    $(".bt_stop").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_stop",false);
    })
    $(".bt_stop").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_stop",false);
    })
///////////////////////////----------------------------------NÚT E-STOP----------------------///////////////////////////////
    $(".bt_e-stop").mousedown(function()
    {
        $(this).css("background-color", "red");
        setTag("bt_e-stop",true);
    })
    $(".bt_e-stop").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_e-stop",false);
    })
    $(".bt_e-stop").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_e-stop",false);
    })
///////////////////////////----------------------------------NÚT RESET----------------------///////////////////////////////
    $(".bt_reset").mousedown(function()
    {
        $(this).css("background-color", "yellow");
        setTag("bt_reset",true);
    })
    $(".bt_reset").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_reset",false);
    })
    $(".bt_reset").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_reset",false);
    })
///////////////////////////----------------------------------NÚT RUN----------------------///////////////////////////////
    $(".bt_run").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_run",true);
    })
    $(".bt_run").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_run",false);
    })
    $(".bt_run").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_run",false);
    })
///////////////////////////---------------------------------- NÚT X+ ----------------------///////////////////////////////
    $(".buttonx").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_x+", true);
    });
    $(".buttonx").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_x+", false);
    });
    $(".buttonx").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_x+", false);
    });
///////////////////////////---------------------------------- NÚT X- ----------------------///////////////////////////////
    $(".bt_x-").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_x-", true);
    });
    $(".bt_x-").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_x-", false);
    });
    $(".bt_x-").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_x-", false);
    });
///////////////////////////---------------------------------- NÚT Y+ ----------------------///////////////////////////////
    $(".buttony").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_y+",true);
    })
    $(".buttony").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_y+",false);
    })
    $(".buttony").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_y+",false);
    })
///////////////////////////---------------------------------- NÚT Y- ----------------------///////////////////////////////
    $(".bt_y-").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_y-",true);
    })
    $(".bt_y-").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_y-",false);
    })
    $(".bt_y-").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_y-",false);
    })
///////////////////////////---------------------------------- NÚT Z+ ----------------------///////////////////////////////
    $(".buttonz").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_z+",true);
    })
    $(".buttonz").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_z+",false);
    })
    $(".buttonz").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_z+",false);
    })
///////////////////////////---------------------------------- NÚT Z- ----------------------///////////////////////////////
    $(".bt_z-").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_z-",true);
    })
    $(".bt_z-").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_z-",false);
    })
    $(".bt_z-").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_z-",false);
    })
///////////////////////////---------------------------------- NÚT SET HOME ----------------------///////////////////////////////
    $(".bt_sh").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_sh",true);
    })
    $(".bt_sh").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_sh",false);
    })
    $(".bt_sh").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_sh",false);
    })
///////////////////////////---------------------------------- NÚT HOME ----------------------///////////////////////////////
    $(".bt_home").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_home",true);
    })
    $(".bt_home").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_home",false);
    })
    $(".bt_home").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_home",false);
    })
///////////////////////////---------------------------------- NÚT HOME DEFAUT ----------------------///////////////////////////////
    $(".bt_hd").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("bt_hd",true);
    })
    $(".bt_hd").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_hd",false);
    })
    $(".bt_hd").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        setTag("bt_hd",false);
    })
    ///////////////////////////---------------------------------- NÚT SET UP ----------------------///////////////////////////////
    $(".bt_setup").mousedown(function()
    {
        $(this).css("background-color", "green");
        setTag("speed_x",speedx.value/5);
        setTag("speed_y",speedy.value/5);
        setTag("speed_z",speedz.value/5);
        // setTag("bt_setup",true);
    })
    $(".bt_setup").mouseup(function()
    {
        $(this).css("background-color", "#6c757d");
        alert("Thiết lập tốc độ thành công");
        // setTag("bt_setup",false);
    })
    $(".bt_setup").mouseout(function()
    {
        $(this).css("background-color", "#6c757d");
        // setTag("bt_setup",false);
    })
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------    CHƯƠNG TRÌNH CON      ------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hàm chức năng ghi giá trị vào tag
function setTag(tag, val) {
    var tag_Link = '"Web_comm".'+tag;
    var url = "IO.html";
    sdata = tag_Link + '=' + val;
    console.log(sdata);
    $.post(url, sdata, function (result) { });
}

// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
    var url = "IO.html";
    $.getJSON(url, function (result) {
        if(ObjectID == "p1" || ObjectID == "p2" || ObjectID == "p3" )
            document.getElementById(ObjectID).innerHTML = result[tag];
        else if(ObjectID == "speedx" || ObjectID == "speedy" || ObjectID == "speedz")
            document.getElementById(ObjectID).value = result[tag] * 5;
        // else   
        //     document.getElementById(ObjectID).value = result[tag];
    });
}


// Hàm chức năng hiển thị trạng thái symbol
function fn_SymbolStatus(ObjectID, SymName, Tag)
{
    var url = "IO.html";
    if(ObjectID.substr(0,1) == "n")
    {
        $.getJSON(url, function(result){
            if (result[Tag] == false)
            {
                ObjectID.classList.add('d-none');
            }
            else if(result[Tag] == true)
            {
                ObjectID.classList.remove('d-none');
            }
        });
    }
    else
    {
        var imglink_0 = "https://github.com/Luanpadao/WebServer_SCADA_HALA/blob/develop/images/Symbol/"+SymName+"_1.png?raw=true"; // Trạng thái tag = 0
        var imglink_1 = "https://github.com/Luanpadao/WebServer_SCADA_HALA/blob/develop/images/Symbol/"+SymName+"_2.png?raw=true"; // Trạng thái tag = 1
        $.getJSON(url, function(result){
            if (result[Tag] == false)
            {
                if(ObjectID == "dc_i")
                    $("#mt_i").hide();
                else if(ObjectID == "dc_o")
                    $("#mt_o").hide();
                document.getElementById(ObjectID).src = imglink_0;
            }
            else if (result[Tag] == true)
            {
                if(ObjectID == "dc_i")
                    $("#mt_i").show();
                else if(ObjectID == "dc_o")
                    $("#mt_o").show();
                document.getElementById(ObjectID).src = imglink_1;
            }
        });
    }
}

//LẪY DỮ LIỆU THỜI GIAN THỰC
function getTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
}

// HIỂN THỊ DỮ LIỆU LÊN WEB cứ mỗi 1s
setInterval(function(){
    const currentTime = getTime();
    console.log(currentTime);
    fn_SymbolStatus("ss_i1","sstc","ss_i1");
    fn_SymbolStatus("ss_i2","sstc","ss_i2");
    fn_SymbolStatus("ss_o","sstc","ss_o");
    fn_SymbolStatus("dc_i","dc","dc_i");
    fn_SymbolStatus("dc_o","dc","dc_o");
    fn_SymbolStatus("n1"," ","pos_1");
    fn_SymbolStatus("n2"," ","pos_2");
    fn_SymbolStatus("n3"," ","pos_3");
    fn_SymbolStatus("n4"," ","pos_4");
    fn_SymbolStatus("n5"," ","pos_5");
    fn_SymbolStatus("n6"," ","pos_6");
    fn_SymbolStatus("n7"," ","pos_7");
    fn_SymbolStatus("n8"," ","pos_8");
    fn_SymbolStatus("n9"," ","pos_9");
    fn_SymbolStatus("n10"," ","pos_10");
    fn_SymbolStatus("n11"," ","pos_11");
    fn_SymbolStatus("n12"," ","pos_12");
    fn_SymbolStatus("n13"," ","pos_13");
    fn_SymbolStatus("n14"," ","pos_14");
    fn_SymbolStatus("n15"," ","pos_15");
    fn_SymbolStatus("n16"," ","pos_16");
    fn_SymbolStatus("n17"," ","pos_17");
    fn_SymbolStatus("n18"," ","pos_18");
    IOField("p1", "pos_x");
    IOField("p2", "pos_y");
    IOField("p3", "pos_z");
},1000);