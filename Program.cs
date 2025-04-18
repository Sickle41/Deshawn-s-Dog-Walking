using DeshawnsDogWalking.Models.DTOs;

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

app.Run();
