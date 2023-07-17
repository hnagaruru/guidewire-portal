package gw.webservice.pc.pc900.policy
uses gw.xml.ws.annotation.WsiExportable

@Export
@WsiExportable("http://guidewire.com/pc/ws/gw/webservice/pc/pc900/policy/QuoteResponse")
@Deprecated(:value="900 inter-app integration packages will be removed in PC11.", :version="PC 10.0.0")
final class QuoteResponse {
  public var JobNumber : String
  public var Errors : String[]
  
  construct(){
  }

  construct(_jobNumber : String, _errors : String[]) {
    this()
    JobNumber = _jobNumber
    Errors = _errors
  }

}
