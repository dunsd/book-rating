using Microsoft.EntityFrameworkCore;
using API.Models;
using API;
using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try {
    var context = services.GetRequiredService<BookContext>();
    context.Database.Migrate();
    await Seed.SeedData(context);
}
catch (Exception err) {
    var logger = services.GetRequiredService<ILogger>();
    logger.LogError(err, "Error during migration.");
}

app.Run();
