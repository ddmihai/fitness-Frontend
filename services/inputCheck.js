exports.safeInput = (input) =>
{
    if (input.length === 0 || input === '' || input === null)
    {   
        console.log(false);
        return false;
    }
}



