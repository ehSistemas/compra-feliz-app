using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompraFelizApp.Models
{
    public class DescricaoProduto
    {
        [JsonProperty(PropertyName = "idProduto")]
        public int IdProduto { get; set; }
        [JsonProperty(PropertyName = "descricao")]
        public string Descricao { get; set; }
        [JsonProperty(PropertyName = "fotos")]
        public string[] Fotos { get; set; }
    }
}
