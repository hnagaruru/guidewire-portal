package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.DisplayableException
@javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CollectCreditCardScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CollectCreditCardScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ReturnToAccountButton) at CollectCreditCardScreen.pcf: line 46, column 37
    function action_10 () : void {
      AccountFile_Summary.go(job.Policy.Account)
    }
    
    // 'action' attribute on Link (id=CollectCreditCardButton) at CollectCreditCardScreen.pcf: line 41, column 37
    function action_8 () : void {
      CollectCreditCardPopup.push(jobNumber, tokenizedCard)
    }
    
    // 'action' attribute on Link (id=ReturnToAccountButton) at CollectCreditCardScreen.pcf: line 46, column 37
    function action_dest_11 () : pcf.api.Destination {
      return pcf.AccountFile_Summary.createDestination(job.Policy.Account)
    }
    
    // 'action' attribute on Link (id=CollectCreditCardButton) at CollectCreditCardScreen.pcf: line 41, column 37
    function action_dest_9 () : pcf.api.Destination {
      return pcf.CollectCreditCardPopup.createDestination(jobNumber, tokenizedCard)
    }
    
    // 'initialValue' attribute on Variable at CollectCreditCardScreen.pcf: line 14, column 19
    function initialValue_0 () : Job {
      return loadJob(jobNumber)
    }
    
    // 'initialValue' attribute on Variable at CollectCreditCardScreen.pcf: line 18, column 73
    function initialValue_1 () : gw.payment.paymentgateway.impl.TokenizedCreditCardDetails {
      return new gw.payment.paymentgateway.impl.TokenizedCreditCardDetails()
    }
    
    // 'value' attribute on TextInput (id=CardName_Input) at CollectCreditCardScreen.pcf: line 29, column 31
    function valueRoot_3 () : java.lang.Object {
      return tokenizedCard
    }
    
    // 'value' attribute on TextInput (id=CardName_Input) at CollectCreditCardScreen.pcf: line 29, column 31
    function value_2 () : String {
      return tokenizedCard.CardName
    }
    
    // 'value' attribute on TextInput (id=CardToken_Input) at CollectCreditCardScreen.pcf: line 35, column 31
    function value_5 () : String {
      return tokenizedCard.Token
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getRequireValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setRequireValue("jobNumber", 0, $arg)
    }
    
    property get tokenizedCard () : gw.payment.paymentgateway.impl.TokenizedCreditCardDetails {
      return getVariableValue("tokenizedCard", 0) as gw.payment.paymentgateway.impl.TokenizedCreditCardDetails
    }
    
    property set tokenizedCard ($arg :  gw.payment.paymentgateway.impl.TokenizedCreditCardDetails) {
      setVariableValue("tokenizedCard", 0, $arg)
    }
    
    
    function loadJob(jobNumnber : String) : Job {
      var aJob = Job.finder.findJobByJobNumber(jobNumber)
      var currentUser: User = User.util.CurrentUser
      if (not currentUser.canView(aJob)) {
        throw new DisplayableException(DisplayKey.get("Java.Error.Permission.View", "job"))
      }
      return aJob
    }
    
        
    
    
  }
  
  
}