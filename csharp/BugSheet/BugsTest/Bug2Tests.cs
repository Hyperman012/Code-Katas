using Bugs;

namespace BugsTest;

public class Bug2Tests
{
    [Fact]
    public void Test1()
    {
        var result = Bug2.Main();
        Assert.Equal("Perfect score!", result); 
    }
}