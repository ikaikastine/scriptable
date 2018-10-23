// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: gray; icon-glyph: magic;
let url = "https://api.darksky.net/forecast/abd7ff977eeea6f82b5b0948b1759beb/44.0505,123.0951"
let req = new Request(url)
let json = await req.loadJSON()
