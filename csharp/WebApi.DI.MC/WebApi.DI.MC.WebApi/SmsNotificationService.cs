namespace WebApi.DI.MC.WebApi;

public class SmsNotificationService : INotificationService
{
    public void Send(string recipient, string message)
    {
        Console.WriteLine($"📱 SMS to {recipient}: {message}");
    }
}