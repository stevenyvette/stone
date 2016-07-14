var filename="";

function get_filepath1(){
	filename = document.getElementById("filename").files[0];
	show(filename.name);
}

function get_filepath2(){
	filename = document.getElementById("file-name").value;
	show(filename);
}

function set_block_1(){
	document.getElementById("1-1").style.display="block";
	document.getElementById("1-2").style.display="block";
	document.getElementById("1-3").style.display="block";
	document.getElementById("1-4").style.display="block";
}

function set_block_2(){
	document.getElementById("2-1").style.display="block";
}

function set_init(){
	document.getElementById("1-1").style.visibility="visible";
	document.getElementById("1-2").style.visibility="visible";
	document.getElementById("1-3").style.visibility="visible";

	document.getElementById("easypiechart-blue").style.visibility="visible";
	document.getElementById("node-count").innerHTML = count;

	document.getElementById("easypiechart-red").style.visibility="visible";
	document.getElementById("lethality").innerHTML = eff;

	document.getElementById("easypiechart-teal").style.visibility="visible";
	document.getElementById("network-type").innerHTML = "BA";

	document.getElementById("easypiechart-orange").style.visibility="visible";
	document.getElementById("connectivity").innerHTML = "100%";
}

function table_start(){
	$(document).ready(function () {
        $('#dataTables-example').dataTable();
    });
}

function mouse_over_credit(){
	document.getElementById("credit").innerHTML = "楼6000";
}

function mouse_out_credit(){
	document.getElementById("credit").innerHTML = "楼4800";
}

Array.prototype.del = function(varElement)
{
    var numDeleteIndex = -1;
    for (var i=0; i<this.length; i++)
    {
        // 严格比较，即类型与数值必须同时相等。
        if (this[i] == varElement)
        {
            this.splice(i, 1);
            numDeleteIndex = i;
            break;
        }
    }
    return numDeleteIndex;
}

function test(){
	alert("asdfsda!");
}