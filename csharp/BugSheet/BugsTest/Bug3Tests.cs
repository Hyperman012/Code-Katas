using Bugs;

namespace BugsTest;

public class Bug3Tests
{
    [Fact]
    public void Test1()
    {
        var result = Bug3.Main();
        Assert.Equal( "Name length: 4", result); 
    }
}