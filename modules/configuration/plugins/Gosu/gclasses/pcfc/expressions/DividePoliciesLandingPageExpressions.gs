package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/divide/DividePoliciesLandingPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DividePoliciesLandingPageExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/divide/DividePoliciesLandingPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DividePoliciesLandingPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (originalPeriod :  PolicyPeriod, firstSubmission :  Submission) : int {
      return 1
    }
    
    static function __constructorIndex (originalPeriod :  PolicyPeriod, firstSubmission :  Submission, secondSubmission :  Submission) : int {
      return 0
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReturnToDesktop_Input) at DividePoliciesLandingPage.pcf: line 43, column 89
    function action_12 () : void {
      Desktop.go()
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewJob1_Input) at DividePoliciesLandingPage.pcf: line 34, column 170
    function action_2 () : void {
      JobForward.go(firstSubmission)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewJob2_Input) at DividePoliciesLandingPage.pcf: line 39, column 49
    function action_7 () : void {
      JobForward.go(secondSubmission)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReturnToDesktop_Input) at DividePoliciesLandingPage.pcf: line 43, column 89
    function action_dest_13 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewJob1_Input) at DividePoliciesLandingPage.pcf: line 34, column 170
    function action_dest_3 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(firstSubmission)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewJob2_Input) at DividePoliciesLandingPage.pcf: line 39, column 49
    function action_dest_8 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(secondSubmission)
    }
    
    // 'infoBar' attribute on Page (id=DividePoliciesLandingPage) at DividePoliciesLandingPage.pcf: line 9, column 179
    function infoBar_onEnter_14 (def :  pcf.PolicyFileMenuInfoBar) : void {
      def.onEnter(originalPeriod)
    }
    
    // 'infoBar' attribute on Page (id=DividePoliciesLandingPage) at DividePoliciesLandingPage.pcf: line 9, column 179
    function infoBar_refreshVariables_15 (def :  pcf.PolicyFileMenuInfoBar) : void {
      def.refreshVariables(originalPeriod)
    }
    
    // 'initialValue' attribute on Variable at DividePoliciesLandingPage.pcf: line 23, column 26
    function initialValue_0 () : Submission {
      return null
    }
    
    // 'label' attribute on Verbatim (id=Message) at DividePoliciesLandingPage.pcf: line 28, column 272
    function label_1 () : java.lang.String {
      return secondSubmission != null ? DisplayKey.get("Web.DividePolicy.LandingPage.Message.Split", originalPeriod.PolicyNumberDisplayString) : DisplayKey.get("Web.DividePolicy.LandingPage.Message.Spin", originalPeriod.PolicyNumberDisplayString)
    }
    
    // 'parent' attribute on Page (id=DividePoliciesLandingPage) at DividePoliciesLandingPage.pcf: line 9, column 179
    static function parent_16 (firstSubmission :  Submission, originalPeriod :  PolicyPeriod, secondSubmission :  Submission) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(originalPeriod)
    }
    
    // 'title' attribute on Page (id=DividePoliciesLandingPage) at DividePoliciesLandingPage.pcf: line 9, column 179
    static function title_17 (firstSubmission :  Submission, originalPeriod :  PolicyPeriod, secondSubmission :  Submission) : java.lang.Object {
      return secondSubmission != null ? DisplayKey.get("Web.DividePolicy.LandingPage.Title.Split") : DisplayKey.get("Web.DividePolicy.LandingPage.Title.Spin")
    }
    
    // 'value' attribute on BulletPointTextInput (id=ViewJob1_Input) at DividePoliciesLandingPage.pcf: line 34, column 170
    function value_4 () : java.lang.String {
      return DisplayKey.get("Web.DividePolicy.LandingPage.ViewSubmission", firstSubmission, firstSubmission.LatestPeriod.Policy.Account.AccountNumber)
    }
    
    // 'value' attribute on BulletPointTextInput (id=ViewJob2_Input) at DividePoliciesLandingPage.pcf: line 39, column 49
    function value_9 () : java.lang.String {
      return DisplayKey.get("Web.DividePolicy.LandingPage.ViewSubmission", secondSubmission, secondSubmission.LatestPeriod.Policy.Account.AccountNumber)
    }
    
    // 'visible' attribute on BulletPointTextInput (id=ViewJob2_Input) at DividePoliciesLandingPage.pcf: line 39, column 49
    function visible_6 () : java.lang.Boolean {
      return secondSubmission != null
    }
    
    override property get CurrentLocation () : pcf.DividePoliciesLandingPage {
      return super.CurrentLocation as pcf.DividePoliciesLandingPage
    }
    
    property get firstSubmission () : Submission {
      return getVariableValue("firstSubmission", 0) as Submission
    }
    
    property set firstSubmission ($arg :  Submission) {
      setVariableValue("firstSubmission", 0, $arg)
    }
    
    property get originalPeriod () : PolicyPeriod {
      return getVariableValue("originalPeriod", 0) as PolicyPeriod
    }
    
    property set originalPeriod ($arg :  PolicyPeriod) {
      setVariableValue("originalPeriod", 0, $arg)
    }
    
    property get secondSubmission () : Submission {
      return getVariableValue("secondSubmission", 0) as Submission
    }
    
    property set secondSubmission ($arg :  Submission) {
      setVariableValue("secondSubmission", 0, $arg)
    }
    
    
  }
  
  
}