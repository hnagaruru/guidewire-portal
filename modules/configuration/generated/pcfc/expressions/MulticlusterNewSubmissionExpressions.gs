package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterNewSubmission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterNewSubmissionExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/exitpoints/MulticlusterNewSubmission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterNewSubmissionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (clusterUrl :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.MulticlusterNewSubmission {
      return super.CurrentLocation as pcf.MulticlusterNewSubmission
    }
    
    property get clusterUrl () : String {
      return getVariableValue("clusterUrl", 0) as String
    }
    
    property set clusterUrl ($arg :  String) {
      setVariableValue("clusterUrl", 0, $arg)
    }
    
    
  }
  
  
}