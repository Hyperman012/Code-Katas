namespace WebApi.DI.MC.WebApi;


public interface IUserService
{
    void NotifyUser(string username, string message);
}
public class UserService : IUserService
{
    private readonly INotificationService _notifier;
    private readonly ILogger<UserService> _logger;

    public UserService(INotificationService notifier, ILogger<UserService> logger)
    {
        _notifier = notifier;
        _logger = logger;
    }

    public void NotifyUser(string username, string message)
    {
        _logger.LogInformation($"Notifying user {username}");
        _notifier.Send(username, message);
    }
}