let ClickHere=document.getElementById('ClickHere');
function handleClick(event, call){
    console.log('button clicked');
    setTimeout(call,1000);
}

ClickHere.addEventListener('click',function(Event)
{
    handleClick(event,countDown);
});

//setTimeout(countDown,1000);
function countDown()
{
    //console.log("Happy Independence Day");

    setTimeout(countDown1,1000);
    console.log(10);
    function countDown1()
    {
        setTimeout(countDown2,1000);
        console.log(9);
        function countDown2()
        {
            setTimeout(countDown3,1000);
            console.log(8);
            function countDown3()
            {
                setTimeout(countDown4,1000);
                console.log(7);
                function countDown4()
                {
                    setTimeout(countDown5,1000);
                    console.log(6);
                    function countDown5()
                    {
                        setTimeout(countDown6,1000);
                        console.log(5);
                    function countDown6()
                {
                    setTimeout(countDown7,1000);
                    console.log(4);
                    function countDown7()
                    {
                        setTimeout(countDown8,1000);
                        console.log(3);
                        function countDown8()
                        {
                            setTimeout(countDown9,1000);
                            console.log(2);
                            function countDown9()
                            {
                                setTimeout(countDown10,1000);
                                console.log(1);
                                function countDown10()
                                {
                                    console.log("Happy Independence Day !!!");
                                }
                            }
                        }
                    }
                }                    }
                }
            }
        }
    }
    
}