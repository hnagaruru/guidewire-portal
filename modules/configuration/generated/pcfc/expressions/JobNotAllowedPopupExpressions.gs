package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/JobNotAllowedPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobNotAllowedPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/job/JobNotAllowedPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobNotAllowedPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (jobType :  String, product :  gw.api.productmodel.Product) : int {
      return 0
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReturnLink_Input) at JobNotAllowedPopup.pcf: line 27, column 80
    function action_1 () : void {
      PolicyForward.go()
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReturnLink_Input) at JobNotAllowedPopup.pcf: line 27, column 80
    function action_dest_2 () : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    // 'label' attribute on Verbatim at JobNotAllowedPopup.pcf: line 20, column 25
    function label_0 () : java.lang.String {
      return DisplayKey.get("Web.Job.NotAllowed.Message", jobType, product.Name)
    }
    
    override property get CurrentLocation () : pcf.JobNotAllowedPopup {
      return super.CurrentLocation as pcf.JobNotAllowedPopup
    }
    
    property get jobType () : String {
      return getVariableValue("jobType", 0) as String
    }
    
    property set jobType ($arg :  String) {
      setVariableValue("jobType", 0, $arg)
    }
    
    property get product () : gw.api.productmodel.Product {
      return getVariableValue("product", 0) as gw.api.productmodel.Product
    }
    
    property set product ($arg :  gw.api.productmodel.Product) {
      setVariableValue("product", 0, $arg)
    }
    
    
  }
  
  
}