using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Xml.Linq;

namespace SerializeBasic
{
    public class JsonData
    {
        public DateTimeOffset id { get; set; }
        public int age { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public DateTime internshipStart { get; set; }
        public DateTime internshipEnd { get; set; }
    }

    public class Program
    {
        public static void Main()
        {
            WebClient client = new();
            client.Headers.Add("Accept", "application/json");
            var jsonData = client.DownloadString("https://fortedigital.github.io/Back-End-Internship-Task/interns.json");


            JsonData? json = JsonSerializer.Deserialize<JsonData>(jsonData);
            Console.WriteLine(json);
            Console.WriteLine($"id: {json[id]}");
            Console.WriteLine($"age: {json.age}");
            Console.WriteLine($"email: {json.email}");

        }
    }
}
// output:
//{"Date":"2019-08-01T00:00:00-07:00","TemperatureCelsius":25,"Summary":"Hot"}
