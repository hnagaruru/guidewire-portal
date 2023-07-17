package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/billing/NewPaymentInstrumentForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPaymentInstrumentForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/billing/NewPaymentInstrumentForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPaymentInstrumentForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (jobNumber :  String, accountNumber :  String, paymentMethod :  String, token :  String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at NewPaymentInstrumentForward.pcf: line 34, column 34
    function action_2 () : void {
      PolicySearch.go(error)
    }
    
    // 'action' attribute on ForwardCondition at NewPaymentInstrumentForward.pcf: line 36, column 91
    function action_5 () : void {
      JobForward.go(jobToFind, jobToFind.LatestPeriod, "BillingInfo")
    }
    
    // 'action' attribute on ForwardCondition at NewPaymentInstrumentForward.pcf: line 34, column 34
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicySearch.createDestination(error)
    }
    
    // 'action' attribute on ForwardCondition at NewPaymentInstrumentForward.pcf: line 36, column 91
    function action_dest_6 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(jobToFind, jobToFind.LatestPeriod, "BillingInfo")
    }
    
    // 'condition' attribute on ForwardCondition at NewPaymentInstrumentForward.pcf: line 34, column 34
    function condition_4 () : java.lang.Boolean {
      return error != null
    }
    
    // 'initialValue' attribute on Variable at NewPaymentInstrumentForward.pcf: line 21, column 19
    function initialValue_0 () : Job {
      return Job.finder.findJobByJobNumber(jobNumber)
    }
    
    // 'initialValue' attribute on Variable at NewPaymentInstrumentForward.pcf: line 28, column 22
    function initialValue_1 () : String {
      return gw.web.billing.PaymentInstrumentUIHelper.checkForError(jobNumber, jobToFind)
    }
    
    // 'onBeforeForward' attribute on Forward (id=NewPaymentInstrumentForward) at NewPaymentInstrumentForward.pcf: line 9, column 30
    function onBeforeForward_8 () : void {
      if(paymentMethod != null) jobToFind.LatestPeriod.createPaymentInstrument(typekey.AccountPaymentMethod.get(paymentMethod), accountNumber, token)
    }
    
    // 'parent' attribute on Forward (id=NewPaymentInstrumentForward) at NewPaymentInstrumentForward.pcf: line 9, column 30
    static function parent_7 (accountNumber :  String, jobNumber :  String, paymentMethod :  String, token :  String) : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewPaymentInstrumentForward {
      return super.CurrentLocation as pcf.NewPaymentInstrumentForward
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get error () : String {
      return getVariableValue("error", 0) as String
    }
    
    property set error ($arg :  String) {
      setVariableValue("error", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    property get jobToFind () : Job {
      return getVariableValue("jobToFind", 0) as Job
    }
    
    property set jobToFind ($arg :  Job) {
      setVariableValue("jobToFind", 0, $arg)
    }
    
    property get paymentMethod () : String {
      return getVariableValue("paymentMethod", 0) as String
    }
    
    property set paymentMethod ($arg :  String) {
      setVariableValue("paymentMethod", 0, $arg)
    }
    
    property get token () : String {
      return getVariableValue("token", 0) as String
    }
    
    property set token ($arg :  String) {
      setVariableValue("token", 0, $arg)
    }
    
    
  }
  
  
}