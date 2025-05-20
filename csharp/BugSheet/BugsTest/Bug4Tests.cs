using Bugs;

namespace BugsTest;

public class Bug4Tests
{
    [Fact]
    public void Test1()
    {
        var result = Bug4.Main();
        Assert.Equal( "Total cost: $20", result);
    }
}