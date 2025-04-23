

public class Dogs {
    public int Id { get; set; }
    public string Name { get; set; }
    public int CityId { get; set; }
    public int ? WalkerId { get; set; }
    public Cities Cities { get; set; }
    public Walkers Walkers{ get; set; }
}