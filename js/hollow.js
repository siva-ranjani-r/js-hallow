var limit=parseInt(prompt("enter limit :"))
for(i=0;i<limit;i++)
{
	for(j=0;j<limit;j++)
	{
		if(i==0||i==limit-1||j==0||j==limit-1)
		{
			document.write("*");
		}
		else
		{
			document.write(" ");
		}
	}
	document.write("<br>");
}