export const GetElement = function(select)
{
    return document.querySelector(`${select}`);
}

export const GetAllElements = function (select){
    return [...document.querySelectorAll(`${select}`)];
}