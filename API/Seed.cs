using API.Models;
using Microsoft.AspNetCore.Identity;

namespace API
{
    public class Seed
    {

        public static async Task SeedData(BookContext context, UserManager<LocalUser> userManager) {
            if(!userManager.Users.Any()) {
                var users = new List<LocalUser> {
                    new LocalUser{DisplayName = "Bob", UserName = "bob", Email = "bob@test.com"},
                    new LocalUser{DisplayName = "Ret", UserName = "jim", Email = "jim@test.com"},
                };
                foreach (var user in users) {
                    await userManager.CreateAsync(user, "Password123");
                }
            }
        }

        public static async Task SeedData(BookContext context) {
            if(context.Books.Any()) return;

            var books = new List<Book> {
                new Book
                {
                    Title = "Dune",
                    Author = "Frank Herbert",
                    Pages = 400,
                    Review = "Amazing book",
                },
                new Book
                {
                    Title = "Example Book",
                    Author = "Example Author",
                    Pages = 2013,
                    Review = "Example Review",
                },
                new Book
                {
                    Title = "Gardens of the Moon",
                    Author = "Stephen Malazan",
                    Pages = 900,
                    Review = "Almost the best one so far",
                },
            };
            
            await context.Books.AddRangeAsync(books);
            await context.SaveChangesAsync();        }
    }
}