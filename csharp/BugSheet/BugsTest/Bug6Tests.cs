using Bugs;

namespace BugsTest;

public class Bug6Tests
{
    [Fact]
    public void Test1()
    {
        var result = Bug6.Main();
        Assert.Equal(55, result);
    }
}