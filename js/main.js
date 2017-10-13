$(document).ready(function () {

    //Dev department list
    $("#dev_dep_btn").click(function () {
        $("#dev_table").toggle();

    });
    //Mark depart list
    $("#mark_dep_btn").click(function () {
        $("#marketing_table").toggle();

    });
    //Project depart list
    $("#proj_dep_btn").click(function () {
        $("#project_table").toggle();

    });
    //HR depart list
    $("#hr_dep_btn").click(function () {
        $("#hr_table").toggle();

    });
    // Delete
    $('.table-sm').on('click', '.btn-danger', function () {
        $(this).closest('tr').remove();
        console.log("aaa")
    });
    //Adding
    var input_form = "<tr><td>" + $(".c1").val() + "</td> <td>" + $('.c2').val() + "</td> <td>" + $('.c3').val() + "</td> <td>" + $('.c4').val() + "</td> </tr>";
    $(".table-sm").on('click', '.btn-primary', function () {
        console.log("dddaa");
        var input_add = $(this).closest('table').find('input');
        if(!input_add.eq(0).val()||!input_add.eq(1).val()||!input_add.eq(2).val() || !input_add.eq(3).val()){
            alert("Please fill all fields!");
            return;
        }else{
            $(this).closest('table').append("<tr><td>" + input_add.eq(0).val() + "</td> <td>" + input_add.eq(1).val() + "</td> <td>" + input_add.eq(2).val() + "</td> <td>" + input_add.eq(3).val() + "</td> <td> <button class = 'btn btn-success' >Edit</button></td> <td> <button class = 'btn btn-danger' >Delete</button></td></tr>");
            input_add.val(null);
        }

    });
    //Helping variables for edit
    var inp_1, inp_2, inp_3, inp_4;

    //Edit
    $('.table-sm').on('click', '.btn-success', function () {
        $(this).closest('tr').each(function () {
            inp_1 = $(this).find('td').eq(0).text();
            inp_2 = $(this).find('td').eq(1).text();
            inp_3 = $(this).find('td').eq(2).text();
            inp_4 = $(this).find('td').eq(3).text();
        })

        $(this).closest('tr').replaceWith('<tr>' + '<td>' + '<input type = "text" value = "" id = "e1">' + '</td>' + '<td>' + '<input type = "text" value="Enter Last name"  id = "e2">' + '</td>' + '<td>' + '<input type = "text" value="Enter Position" id = "e3">' + '</td>' + '<td>' + '<input type = "text" value="Enter Age" id = "e4">' + '</td>' + '<td>' + '<button  class = "btn btn-info" >' + "Save" + '</button>' + '</td>' + '</tr>');

        $('#e1').val(inp_1);
        $('#e2').val(inp_2);
        $('#e3').val(inp_3);
        $('#e4').val(inp_4);
        $('.btn-success').attr('disabled', true);
    });

    //Save
    $('.table-sm').on('click', '.btn-info', function () {
        $(this).closest('tr').replaceWith("<tr><td>" + $("#e1").val() + "</td> <td>" + $('#e2').val() + "</td> <td>" + $('#e3').val() + "</td> <td>" + $('#e4').val() + "</td> <td> <button class = 'btn btn-success' >Edit</button></td> <td> <button class = 'btn btn-danger' >Delete</button></td></tr>");
        $('.btn-success').removeAttr('disabled');
    });

    //Create tables
    var btn_edit = '<td>' + '<button class = "btn btn-success" type="button" >' + "Edit" + '</button>' + '</td>';
    var btn_del = '<td>' + '<button class = "btn btn-danger" >' + "Delete" + '</button>' + '</td>';
    var add_inputs = '<tr>' + '<td>' + '<input type = "text" placeholder="Enter first name" class = "add_inp">' + '</td>' + '<td>' + '<input type = "text" placeholder="Enter last name" class = "add_inp">' + '</td>' + '<td>' + '<input type = "text" placeholder="Enter position" class = "add_inp">' + '</td>' + '<td>' + '<input type = "number" placeholder="Only digits" class = "add_inp">' + '</td>' + '<td>' + '<button  class = "btn btn-primary" >' + "Add new person" + '</button>' + '</td>' + '</tr>';
    //Dev department create table
    $.getJSON("Data storage/developmentDepart.json", function (data) {
        var devDepart = '';
        $.each(data, function (key, value) {
            devDepart += '<tr id =' + key + '>';
            devDepart += '<td>' + value.name + '</td>';
            devDepart += '<td>' + value.lastName + '</td>';
            devDepart += '<td>' + value.position + '</td>';
            devDepart += '<td>' + value.phone + '</td>';
            devDepart += btn_edit;
            devDepart += btn_del;
        });
        $('#dev_table').append(devDepart).prepend(add_inputs).append('</tr>');
    });
    //Marketing department create table
    $.getJSON("Data storage/marketingDepart.json", function (data) {
        var markDepart = '';
        $.each(data, function (key, value) {
            markDepart += '<tr id =' + key + '>';
            markDepart += '<td>' + value.name + '</td>';
            markDepart += '<td>' + value.lastName + '</td>';
            markDepart += '<td>' + value.position + '</td>';
            markDepart += '<td>' + value.phone + '</td>';
            markDepart += btn_edit;
            markDepart += btn_del;
        });
        $('#marketing_table').append(markDepart).prepend(add_inputs).append('</tr>');
    });
    //Project department create table
    $.getJSON("Data storage/projDepart.json", function (data) {
        var projDepart = '';
        $.each(data, function (key, value) {
            projDepart += '<tr id =' + key + '>';
            projDepart += '<td>' + value.name + '</td>';
            projDepart += '<td>' + value.lastName + '</td>';
            projDepart += '<td>' + value.position + '</td>';
            projDepart += '<td>' + value.phone + '</td>';
            projDepart += btn_edit;
            projDepart += btn_del;
        });
        $('#project_table').append(projDepart).prepend(add_inputs).append('</tr>');
    });
    //HR Department create table
    $.getJSON("Data storage/hrDepart.json", function (data) {
        var hrDepart = '';
        $.each(data, function (key, value) {
            hrDepart += '<tr id =' + key + '>';
            hrDepart += '<td>' + value.name + '</td>';
            hrDepart += '<td>' + value.lastName + '</td>';
            hrDepart += '<td>' + value.position + '</td>';
            hrDepart += '<td>' + value.phone + '</td>';
            hrDepart += btn_edit;
            hrDepart += btn_del;
        });
        $('#hr_table').append(hrDepart).prepend(add_inputs).append('</tr>');
    });

})