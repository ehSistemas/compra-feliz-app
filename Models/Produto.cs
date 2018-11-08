using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompraFelizApp.Models
{
    public class Produto
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "nome")]
        public string Nome { get; set; }
        [JsonProperty(PropertyName = "fabricante")]
        public string Fabricante { get; set; }
        [JsonProperty(PropertyName = "foto")]
        public string Foto { get; set; }
        [JsonProperty(PropertyName = "valor")]
        public decimal Valor { get; set; }
    }
}
