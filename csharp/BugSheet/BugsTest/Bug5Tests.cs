using Bugs;

namespace BugsTest;

public class Bug5Tests
{
    [Fact]
    public void Test1()
    {
        var result = Bug5.Main();
        Assert.Equal(12, result);
    }
}