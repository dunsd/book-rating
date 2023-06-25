using API.Models;
using API.Services;

namespace API.Extensions
{
    public static class IdentityServiceExtension
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config) {
            services.AddIdentityCore<LocalUser>(opt => {
                opt.Password.RequireNonAlphanumeric = false;
            })
            .AddEntityFrameworkStores<BookContext>();

            services.AddAuthentication();
            services.AddScoped<TokenService>();

            return services;   
        }
    }
}