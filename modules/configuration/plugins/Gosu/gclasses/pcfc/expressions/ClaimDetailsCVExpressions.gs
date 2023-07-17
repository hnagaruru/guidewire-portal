package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/ClaimDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimDetailsCVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/ClaimDetailsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimDetailsCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=viewInCC) at ClaimDetailsCV.pcf: line 32, column 85
    function action_2 () : void {
      giveClaimPermissionsAndGoToViewClaim()
    }
    
    // 'def' attribute on PanelRef at ClaimDetailsCV.pcf: line 24, column 41
    function def_onEnter_4 (def :  pcf.ClaimDetailsDV) : void {
      def.onEnter(claimDetail, showPolicyNumberAndType)
    }
    
    // 'def' attribute on PanelRef at ClaimDetailsCV.pcf: line 24, column 41
    function def_refreshVariables_5 (def :  pcf.ClaimDetailsDV) : void {
      def.refreshVariables(claimDetail, showPolicyNumberAndType)
    }
    
    // 'initialValue' attribute on Variable at ClaimDetailsCV.pcf: line 17, column 27
    function initialValue_0 () : ClaimDetail {
      return selectedClaim == null ? null : gw.api.web.claim.ClaimUtil.getClaimDetail(selectedClaim)
    }
    
    // 'visible' attribute on ToolbarButton (id=viewInCC) at ClaimDetailsCV.pcf: line 32, column 85
    function visible_1 () : java.lang.Boolean {
      return claimDetail == null ? false : claimDetail.ClaimLinkAvailable
    }
    
    // 'visible' attribute on PanelRef at ClaimDetailsCV.pcf: line 24, column 41
    function visible_3 () : java.lang.Boolean {
      return selectedClaim != null
    }
    
    property get claimDetail () : ClaimDetail {
      return getVariableValue("claimDetail", 0) as ClaimDetail
    }
    
    property set claimDetail ($arg :  ClaimDetail) {
      setVariableValue("claimDetail", 0, $arg)
    }
    
    property get selectedClaim () : Claim {
      return getRequireValue("selectedClaim", 0) as Claim
    }
    
    property set selectedClaim ($arg :  Claim) {
      setRequireValue("selectedClaim", 0, $arg)
    }
    
    property get showPolicyNumberAndType () : boolean {
      return getRequireValue("showPolicyNumberAndType", 0) as java.lang.Boolean
    }
    
    property set showPolicyNumberAndType ($arg :  boolean) {
      setRequireValue("showPolicyNumberAndType", 0, $arg)
    }
    
    function giveClaimPermissionsAndGoToViewClaim() {
      gw.api.web.claim.ClaimUtil.giveClaimPermissions(claimDetail)
      ViewClaim.push(gw.api.system.PCConfigParameters.ClaimSystemURL.Value, claimDetail.Claim.ClaimNumber)
    }
    
    
  }
  
  
}