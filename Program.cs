using DeshawnsDogWalking.Models.DTOs;
using DeshawnsDogWalking.Models;

List<Dogs> dogs = new List<Dogs> {
    new Dogs {
        Id = 1,
        Name = "Mr. Puppers",
        CityId = 1,
        WalkerId = 1,
    },
    new Dogs {
        Id = 2,
        Name = "Bella",
        CityId = 2,
        WalkerId = 2,
    },
    new Dogs {
        Id = 3,
        Name = "Charlie",
        CityId = 3,
        WalkerId = 3,
    },
    new Dogs {
        Id = 4,
        Name = "Daisy",
        CityId = 1,
        WalkerId = 1,
    }
};

List<Cities> cities = new List<Cities> {
    new Cities {
        Id = 1,
        Name = "Chicago"
    },
    new Cities {
        Id = 2,
        Name = "New York"
    },
    new Cities {
        Id = 3,
        Name = "Los Angeles"
    },
    new Cities {
        Id = 4,
        Name = "Seattle"
    }
};

List<Walkers> walkers = new List<Walkers> {
    new Walkers {
        Id = 1,
        Name = "Joe Wilson",
        CityId = 1
    },
    new Walkers {
        Id = 2,
        Name = "Amy Brooks",
        CityId = 2
    },
    new Walkers {
        Id = 3,
        Name = "Kevin Tran",
        CityId = 3
    },
    new Walkers {
        Id = 4,
        Name = "Lana Grey",
        CityId = 4
    }
};

List<CityWalkers> cityWalkers = new List<CityWalkers> {
    new CityWalkers {
        Id = 1,
        CityId = 1,
        WalkerId = 1
    },
    new CityWalkers {
        Id = 2,
        CityId = 2,
        WalkerId = 2
    },
    new CityWalkers {
        Id = 3,
        CityId = 3,
        WalkerId = 3
    },
    new CityWalkers {
        Id = 4,
        CityId = 4,
        WalkerId = 4
    }
};


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/dogs", () => 
{
return dogs.Select(d => new DogsDTO {
    Id = d.Id,
    Name = d.Name,
    CityId = d.CityId,
    WalkerId = d.WalkerId
});
});

app.MapGet("/api/dogs/{id}", (int id) =>
{
    var dog = dogs.FirstOrDefault(d => d.Id == id);

    if (dog == null)
    {
        return Results.NotFound();
    }

    var city = cities.FirstOrDefault(c => c.Id == dog.CityId);
    var walker = walkers.FirstOrDefault(w => w.Id == dog.WalkerId);

    if (city == null)
    {
        return Results.NotFound();
    }

    var dogDto = new DogsDTO
    {
        Id = dog.Id,
        Name = dog.Name,
        CityId = dog.CityId,
        WalkerId = dog.WalkerId,
        Walkers = walker == null ? null : new WalkersDTO
        {
            Id = walker.Id,
            Name = walker.Name,
            CityId = walker.CityId,
        },
        Cities = new CitiesDTO
        {
            Id = city.Id,
            Name = city.Name
        }
    };

    return Results.Ok(dogDto);
});

app.MapPost("/api/dogs", (Dogs dog) =>
{
    Cities city = cities.FirstOrDefault(c => c.Id == dog.CityId);
    dog.Id = dogs.Max(dog => dog.Id ) + 1;
    dogs.Add(dog);
    return Results.Created($"/api/dogs/{dog.Id}", new DogsDTO{
        Id = dog.Id,
        Name = dog.Name,
        CityId = dog.CityId,
        Cities = new CitiesDTO
        {
            Id = city.Id,
            Name = city.Name
        },
        WalkerId = null,
        Walkers = null
    });
});

app.MapGet("/api/cities", ()=>
{
  return cities.Select(c => new CitiesDTO
  {
    Id = c.Id,
    Name = c.Name

  });  
});

app.MapGet("/api/walkers", ()=> 
{
    return walkers.Select(w => new WalkersDTO
    {
        Id = w.Id,
        Name = w.Name,
    });
});

app.Run();
