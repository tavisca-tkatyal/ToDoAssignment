var ListArray = new Array();
function manage()
{
	var txt = document.getElementById("myInput");
	var bt = document.getElementById('btSubmit');
	if(txt.value != '')
	{
		bt.disabled = false;
	}
	else
	{
		bt.disabled = true;
	}
}

function addList()
{

	var table = document.getElementById("mytable");
	var value = document.getElementById("myInput").value;
	if(ListArray.includes(value))
	{
		alert("This Item already Exist");
	}
	else if(value != '')
	{
	var body = '<tr id =" rows">' +
            '<td>' + value + '</td>' +
            '<td >' +
            '<a href="javascript:void(0)" onclick="updateText(this)">EDIT </a>' + '&nbsp' +
            '<a href="javascript:void(0)" onclick="return deleteRow(this)"> DELETE </a>' +
            '</td>' +
            '</tr>'
        table.innerHTML += body;
        ListArray.push(value);
    }
        document.getElementById("myInput").value="";
        Search("");
}

function updateText(a)
{
	var previousValue = document.getElementById("mytable").rows[a.parentNode.parentNode.rowIndex].cells[0].innerHTML
    var updateValue = prompt("Please enter item name for updation ", previousValue);
    if(updateValue == null || updateValue == "")
    {
    	updateValue = previousValue;
    }
    document.getElementById("mytable").rows[a.parentNode.parentNode.rowIndex].cells[0].innerHTML = updateValue;
    var str = ListArray.toString();
    str = str.replace(previousValue, updateValue);
    ListArray = str.split(',');
}

function deleteRow(a)
{
	document.getElementById("mytable").deleteRow(a.parentNode.parentNode.rowIndex);
    ListArray.pop(ListArray[a.parentNode.parentNode.rowIndex]);
}

function Search()
{
	var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function searchBox()
{
	document.getElementById("demo").innerHTML ;
}
