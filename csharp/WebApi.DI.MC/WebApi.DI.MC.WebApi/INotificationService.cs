namespace WebApi.DI.MC.WebApi;

public interface INotificationService
{
    void Send(string recipient, string message);
}