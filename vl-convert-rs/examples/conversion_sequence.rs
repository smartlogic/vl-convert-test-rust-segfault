use vl_convert_rs::converter::VlOpts;
use vl_convert_rs::{VlConverter, VlVersion};

#[tokio::main]
async fn main() {
    let vl_spec: serde_json::Value = serde_json::from_str(
        r#"
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "mark": "circle",
  "encoding": {
    "x": {
      "bin": {"maxbins": 10},
      "field": "IMDB Rating"
    },
    "y": {
      "bin": {"maxbins": 10},
      "field": "Rotten Tomatoes Rating"
    },
    "size": {"aggregate": "count"}
  }
}   "#,
    )
    .unwrap();


    println!("{}", convert(vl_spec.clone()).await);
    println!("{}", convert(vl_spec.clone()).await)
}

async fn convert(vl_spec: serde_json::Value) -> String {
  let mut converter = VlConverter::new();

  converter
      .vegalite_to_svg(
          vl_spec,
          VlOpts {
              vl_version: VlVersion::v5_8,
              ..Default::default()
          },
      )
      .await
      .expect("Failed to perform Vega-Lite to Vega conversion")
}