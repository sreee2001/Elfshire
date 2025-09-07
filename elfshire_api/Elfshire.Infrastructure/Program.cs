using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Mvc;
using Spring.Context.Support;
using System.Linq;

namespace Elfshire.Infrastructure;
public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        // Add services to the container.

        // Initialize Spring.NET context
        ContextRegistry.RegisterContext(new XmlApplicationContext("objects.xml"));

        // Retrieve beans as needed
        // var myService = (IMyService)ctx.GetObject("myService");

        // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
        builder.Services.AddOpenApi();

        // Add controllers
        builder.Services.AddControllers();

        // Add Swagger services
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        // Use routing and map controllers
        app.UseRouting();
        app.MapControllers();

        app.UseHttpsRedirection();

        app.Run();

    }
}