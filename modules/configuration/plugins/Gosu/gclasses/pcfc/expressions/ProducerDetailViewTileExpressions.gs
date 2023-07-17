package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/ProducerDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerDetailViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/ProducerDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerDetailViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=ProducerOfRecord_Input) at ProducerDetailViewTile.pcf: line 15, column 226
    function value_0 () : java.lang.String {
      return DisplayKey.get('Web.Dashboard.Tile.Producer.ProducerOfRecord.Value', policyPeriod.ProducerCodeOfRecord.Organization, policyPeriod.ProducerCodeOfRecord.Code, policyPeriod.ProducerCodeOfRecord.Description?:'')
    }
    
    // 'value' attribute on TextInput (id=ProducerOfService_Input) at ProducerDetailViewTile.pcf: line 19, column 236
    function value_2 () : java.lang.String {
      return DisplayKey.get('Web.Dashboard.Tile.Producer.ProducerOfService.Value', policyPeriod.ProducerOfRecord, policyPeriod.EffectiveDatedFields.ProducerCode.Code, policyPeriod.EffectiveDatedFields.ProducerCode.Description?:'')
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}